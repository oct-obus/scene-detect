#!/usr/bin/env python3
"""
Scene Change Detection + Face Re-Identification

Detects scene changes using histogram correlation with adaptive thresholding,
then detects faces at each scene boundary and clusters them across the video
to track recurring characters.

Usage:
    # CLI mode
    python scene-detect.py video.mp4
    python scene-detect.py video.mp4 --faces --output results.json

    # Web UI mode
    python scene-detect.py video.mp4 --ui
    python scene-detect.py video.mp4 --ui --port 8500

Dependencies:
    pip install opencv-python-headless numpy
    pip install mediapipe scikit-learn     # for --faces
    pip install fastapi uvicorn websockets # for --ui
"""

import argparse
import asyncio
import json
import os
import queue
import sys
import threading
import time
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Callable, Optional

import cv2
import numpy as np


# ── Data classes ──────────────────────────────────────────────────────────────

@dataclass
class FaceDetection:
    bbox: tuple[int, int, int, int]  # x, y, w, h
    confidence: float
    embedding: list[float] = field(default_factory=list, repr=False)
    character_id: int = -1

    def to_dict(self) -> dict:
        return {
            "bbox": list(self.bbox),
            "confidence": self.confidence,
            "character_id": self.character_id,
        }


@dataclass
class SceneChange:
    frame: int
    timecode: str
    timestamp_sec: float
    score: float
    method: str
    faces: list[FaceDetection] = field(default_factory=list)
    removed: bool = False  # user can mark false positives

    def to_dict(self) -> dict:
        d = {
            "frame": self.frame,
            "timecode": self.timecode,
            "timestamp_sec": self.timestamp_sec,
            "score": round(self.score, 4),
            "method": self.method,
            "removed": self.removed,
        }
        if self.faces:
            d["faces"] = [f.to_dict() for f in self.faces]
        return d


# ── Utilities ─────────────────────────────────────────────────────────────────

def format_timecode(seconds: float) -> str:
    h = int(seconds // 3600)
    m = int((seconds % 3600) // 60)
    s = seconds % 60
    return f"{h:02d}:{m:02d}:{s:06.3f}"


def calc_histogram(frame: np.ndarray) -> np.ndarray:
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    hist = cv2.calcHist([hsv], [0, 1], None, [50, 60], [0, 180, 0, 256])
    cv2.normalize(hist, hist, 0, 1, cv2.NORM_MINMAX)
    return hist


# ── Profiler ──────────────────────────────────────────────────────────────────

class Profiler:
    def __init__(self):
        self.enabled = False
        self._data: dict[str, dict[str, float]] = {}
        self._lock = threading.Lock()

    def reset(self) -> None:
        with self._lock:
            self._data.clear()

    def record(self, name: str, elapsed_ms: float) -> None:
        if not self.enabled:
            return
        with self._lock:
            if name not in self._data:
                self._data[name] = {"calls": 0, "total_ms": 0.0}
            self._data[name]["calls"] += 1
            self._data[name]["total_ms"] += elapsed_ms

    def get_entries(self) -> list[dict]:
        with self._lock:
            total = sum(v["total_ms"] for v in self._data.values()) or 1.0
            entries = []
            for name, d in sorted(self._data.items(), key=lambda x: -x[1]["total_ms"]):
                calls = int(d["calls"])
                total_ms = d["total_ms"]
                entries.append({
                    "name": name,
                    "calls": calls,
                    "total_ms": total_ms,
                    "avg_ms": total_ms / max(calls, 1),
                    "pct": total_ms / total * 100,
                })
            return entries

_profiler = Profiler()


# ── Face detection & embedding ────────────────────────────────────────────────

class FaceAnalyzer:
    def __init__(self, min_confidence: float = 0.5):
        import mediapipe as mp

        # New tasks API (mediapipe >= 0.10.31)
        model_path = Path(__file__).parent / "blaze_face_short_range.tflite"
        if not model_path.exists():
            import urllib.request
            url = "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite"
            urllib.request.urlretrieve(url, str(model_path))

        options = mp.tasks.vision.FaceDetectorOptions(
            base_options=mp.tasks.BaseOptions(model_asset_path=str(model_path)),
            running_mode=mp.tasks.vision.RunningMode.IMAGE,
            min_detection_confidence=min_confidence,
        )
        self.detector = mp.tasks.vision.FaceDetector.create_from_options(options)
        self._mp = mp

    def detect(self, frame: np.ndarray) -> list[FaceDetection]:
        h, w = frame.shape[:2]
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        mp_image = self._mp.Image(image_format=self._mp.ImageFormat.SRGB, data=rgb)
        result = self.detector.detect(mp_image)

        faces = []
        for det in result.detections:
            bb = det.bounding_box
            x, y, bw, bh = bb.origin_x, bb.origin_y, bb.width, bb.height
            x = max(0, x)
            y = max(0, y)
            bw = min(bw, w - x)
            bh = min(bh, h - y)
            if bw < 20 or bh < 20:
                continue

            score = det.categories[0].score if det.categories else 0.0
            embedding = self._compute_embedding(frame, x, y, bw, bh)
            faces.append(FaceDetection(
                bbox=(x, y, bw, bh),
                confidence=round(score, 4),
                embedding=embedding,
            ))
        return faces

    def _compute_embedding(self, frame: np.ndarray, x: int, y: int, w: int, h: int) -> list[float]:
        fh, fw = frame.shape[:2]
        face = frame[y:y+h, x:x+w]
        face_resized = cv2.resize(face, (64, 64), interpolation=cv2.INTER_AREA)

        hsv = cv2.cvtColor(face_resized, cv2.COLOR_BGR2HSV)
        h_hist = cv2.calcHist([hsv], [0], None, [16], [0, 180]).flatten()
        s_hist = cv2.calcHist([hsv], [1], None, [8], [0, 256]).flatten()
        v_hist = cv2.calcHist([hsv], [2], None, [8], [0, 256]).flatten()

        gray = cv2.cvtColor(face_resized, cv2.COLOR_BGR2GRAY)
        gx = cv2.Sobel(gray, cv2.CV_32F, 1, 0, ksize=3)
        gy = cv2.Sobel(gray, cv2.CV_32F, 0, 1, ksize=3)
        mag, angle = cv2.cartToPolar(gx, gy, angleInDegrees=True)
        angle_hist = np.histogram(angle, bins=18, range=(0, 360), weights=mag)[0]

        cx, cy = x + w // 2, y + h // 2
        ext = max(w, h)
        ex1, ey1 = max(0, cx - ext), max(0, cy - ext)
        ex2, ey2 = min(fw, cx + ext), min(fh, cy + ext)
        context = frame[ey1:ey2, ex1:ex2]
        if context.size > 0:
            ctx_hsv = cv2.cvtColor(
                cv2.resize(context, (32, 32), interpolation=cv2.INTER_AREA),
                cv2.COLOR_BGR2HSV,
            )
            ctx_hist = cv2.calcHist([ctx_hsv], [0, 1], None, [8, 8], [0, 180, 0, 256]).flatten()
        else:
            ctx_hist = np.zeros(64)

        embedding = np.concatenate([h_hist, s_hist, v_hist, angle_hist, ctx_hist])
        norm = np.linalg.norm(embedding)
        if norm > 0:
            embedding /= norm
        return embedding.tolist()

    def close(self) -> None:
        self.detector.close()


def cluster_faces(scenes: list[SceneChange], distance_threshold: float = 0.6) -> None:
    from sklearn.cluster import AgglomerativeClustering

    all_embeddings = []
    face_indices = []
    for si, sc in enumerate(scenes):
        for fi, face in enumerate(sc.faces):
            if face.embedding:
                all_embeddings.append(face.embedding)
                face_indices.append((si, fi))

    if len(all_embeddings) < 2:
        for sc in scenes:
            for face in sc.faces:
                face.character_id = 0
        return

    X = np.array(all_embeddings)
    clustering = AgglomerativeClustering(
        n_clusters=None,
        distance_threshold=distance_threshold,
        metric="cosine",
        linkage="average",
    )
    labels = clustering.fit_predict(X)
    for idx, (si, fi) in enumerate(face_indices):
        scenes[si].faces[fi].character_id = int(labels[idx])


# ── Scene detection engine ───────────────────────────────────────────────────

class SceneDetector:
    """Runs scene detection with progress callbacks."""

    def __init__(self, video_path: Optional[str]):
        self.video_path = video_path
        self.scenes: list[SceneChange] = []
        self.all_scores: list[float] = []
        self.fps: float = 30.0
        self.total_frames: int = 0
        self.width: int = 0
        self.height: int = 0
        self.cancelled = False
        self._thumb_dir: Optional[str] = None

    def detect(
        self,
        threshold: float = 0.4,
        min_scene_len: int = 15,
        adaptive: bool = True,
        detect_faces: bool = False,
        face_confidence: float = 0.5,
        cluster_distance: float = 0.6,
        progress_callback: Optional[Callable[[int, int, int, str], None]] = None,
        thumb_dir: Optional[str] = None,
        thumb_width: int = 320,
        skip_frames: int = 1,
        downscale_height: int = 0,
        use_threading: bool = True,
    ) -> list[SceneChange]:
        self.cancelled = False
        self.scenes = []
        self.all_scores = []
        self._thumb_dir = thumb_dir

        cap = cv2.VideoCapture(self.video_path)
        if not cap.isOpened():
            raise RuntimeError(f"Cannot open '{self.video_path}'")

        self.fps = cap.get(cv2.CAP_PROP_FPS) or 30.0
        self.total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        self.width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        self.height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

        face_analyzer = None
        if detect_faces:
            try:
                face_analyzer = FaceAnalyzer(min_confidence=face_confidence)
            except ImportError:
                raise RuntimeError(
                    "Face detection requires mediapipe. Install with: pip install mediapipe"
                )

        if thumb_dir:
            os.makedirs(thumb_dir, exist_ok=True)

        skip_frames = max(1, skip_frames)

        # Threaded decode pipeline: overlap frame decoding with processing
        frame_queue = queue.Queue(maxsize=64)
        decode_done = threading.Event()

        def decode_producer():
            while not self.cancelled:
                ret, frame = cap.read()
                if not ret:
                    break
                while not self.cancelled:
                    try:
                        frame_queue.put(frame, timeout=0.5)
                        break
                    except queue.Full:
                        continue
            decode_done.set()

        if use_threading:
            reader = threading.Thread(target=decode_producer, daemon=True)
            reader.start()

        def next_frame():
            if use_threading:
                while True:
                    try:
                        return frame_queue.get(timeout=0.5)
                    except queue.Empty:
                        if decode_done.is_set() and frame_queue.empty():
                            return None
                        if self.cancelled:
                            return None
            else:
                ret, frame = cap.read()
                return frame if ret else None

        def maybe_downscale(frame):
            if downscale_height > 0:
                h, w = frame.shape[:2]
                if h > downscale_height:
                    scale = downscale_height / h
                    new_w = int(w * scale)
                    return cv2.resize(frame, (new_w, downscale_height),
                                      interpolation=cv2.INTER_AREA)
            return frame

        try:
            prev_frame = next_frame()
            if prev_frame is None:
                raise RuntimeError("Cannot read first frame")

            prev_hist = calc_histogram(maybe_downscale(prev_frame))
            last_cut_frame = 0
            frame_idx = 0

            window: list[float] = []
            window_size = int(self.fps * 4)

            while not self.cancelled:
                t0 = time.time()
                frame = next_frame()
                _profiler.record("frame_read", (time.time() - t0) * 1000)
                if frame is None:
                    break
                frame_idx += 1

                # Read every frame for accurate timecodes, but only process every Nth
                if skip_frames > 1 and frame_idx % skip_frames != 0:
                    continue

                t0 = time.time()
                curr_hist = calc_histogram(maybe_downscale(frame))
                _profiler.record("calc_histogram", (time.time() - t0) * 1000)

                t0 = time.time()
                corr = cv2.compareHist(prev_hist, curr_hist, cv2.HISTCMP_CORREL)
                _profiler.record("compareHist", (time.time() - t0) * 1000)

                diff = 1.0 - corr
                score = min(diff, 1.0)

                self.all_scores.append(score)
                window.append(score)
                if len(window) > window_size:
                    window.pop(0)

                if adaptive and len(window) > self.fps:
                    local_mean = np.mean(window)
                    local_std = np.std(window)
                    effective_threshold = max(threshold, local_mean + 3 * local_std)
                else:
                    effective_threshold = threshold

                if score >= effective_threshold and (frame_idx - last_cut_frame) >= min_scene_len:
                    ts = frame_idx / self.fps
                    # Use original (not downscaled) frame for face detection
                    if face_analyzer:
                        if progress_callback:
                            progress_callback(frame_idx, self.total_frames, len(self.scenes), "faces")
                        t0 = time.time()
                        faces = face_analyzer.detect(frame)
                        _profiler.record("face_detect", (time.time() - t0) * 1000)
                    else:
                        faces = []

                    sc = SceneChange(
                        frame=frame_idx,
                        timecode=format_timecode(ts),
                        timestamp_sec=round(ts, 3),
                        score=round(score, 4),
                        method="histogram_correlation",
                        faces=faces,
                    )
                    self.scenes.append(sc)
                    last_cut_frame = frame_idx

                    if thumb_dir:
                        t0 = time.time()
                        self._save_thumbnail(frame, sc, thumb_dir, thumb_width)
                        _profiler.record("save_thumbnail", (time.time() - t0) * 1000)

                prev_hist = curr_hist

                if progress_callback and frame_idx % 10 == 0:
                    progress_callback(frame_idx, self.total_frames, len(self.scenes), "detecting")

            if use_threading:
                reader.join(timeout=2)

            if face_analyzer:
                if self.scenes and not self.cancelled:
                    if progress_callback:
                        progress_callback(self.total_frames, self.total_frames, len(self.scenes), "clustering")
                    try:
                        t0 = time.time()
                        cluster_faces(self.scenes, distance_threshold=cluster_distance)
                        _profiler.record("cluster_faces", (time.time() - t0) * 1000)
                    except ImportError:
                        raise RuntimeError(
                            "Face clustering requires scikit-learn. Install with: pip install scikit-learn"
                        )

            if progress_callback:
                progress_callback(self.total_frames, self.total_frames, len(self.scenes), "detecting")

            return self.scenes
        finally:
            cap.release()
            if face_analyzer:
                face_analyzer.close()

    def cancel(self) -> None:
        self.cancelled = True

    def get_frame(self, frame_num: int) -> Optional[np.ndarray]:
        cap = cv2.VideoCapture(self.video_path)
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_num)
        ret, frame = cap.read()
        cap.release()
        return frame if ret else None

    def _save_thumbnail(self, frame: np.ndarray, sc: SceneChange, out_dir: str, thumb_width: int) -> None:
        fh, fw = frame.shape[:2]
        thumb_h = int(fh * thumb_width / fw)
        thumb = cv2.resize(frame, (thumb_width, thumb_h), interpolation=cv2.INTER_AREA)
        fname = os.path.join(out_dir, f"scene_{sc.frame:06d}.jpg")
        cv2.imwrite(fname, thumb, [cv2.IMWRITE_JPEG_QUALITY, 80])


# ── Web UI Server ────────────────────────────────────────────────────────────


def _guess_video_mime(path: str) -> str:
    ext = os.path.splitext(path)[1].lower()
    mime_map = {
        '.mp4': 'video/mp4', '.m4v': 'video/mp4',
        '.mkv': 'video/x-matroska', '.webm': 'video/webm',
        '.avi': 'video/x-msvideo', '.mov': 'video/quicktime',
        '.wmv': 'video/x-ms-wmv', '.flv': 'video/x-flv',
        '.ts': 'video/mp2t', '.mts': 'video/mp2t',
    }
    return mime_map.get(ext, 'video/mp4')


def run_web_ui(video_path: Optional[str] = None, port: int = 8500, host: str = "0.0.0.0") -> None:
    from contextlib import asynccontextmanager
    from fastapi import FastAPI, WebSocket, WebSocketDisconnect
    from fastapi.staticfiles import StaticFiles
    from fastapi.responses import FileResponse, Response
    import uvicorn

    @asynccontextmanager
    async def lifespan(app: FastAPI):
        if sys.platform == "win32":
            loop = asyncio.get_running_loop()

            def _handler(loop, context):
                exc = context.get("exception")
                if isinstance(exc, (ConnectionResetError, OSError)):
                    return
                loop.default_exception_handler(context)

            loop.set_exception_handler(_handler)
        yield

    app = FastAPI(title="Scene Detect", lifespan=lifespan)
    detector = SceneDetector(video_path) if video_path else None
    state: dict[str, Any] = {"detector": detector, "video_path": video_path}
    static_dir = Path(__file__).parent / "static"
    thumb_dir = Path(__file__).parent / "thumbnails"

    active_ws: list[WebSocket] = []
    analysis_lock = asyncio.Lock()

    app.mount("/static", StaticFiles(directory=str(static_dir)), name="static")

    @app.get("/")
    async def index():
        return FileResponse(str(static_dir / "index.html"))

    @app.post("/api/set-video")
    async def set_video(data: dict):
        path = data.get("path", "").strip()
        if not path:
            return Response(status_code=400, content="No path provided")
        path = os.path.expanduser(path)
        if not os.path.isfile(path):
            return Response(status_code=404, content=f"File not found: {path}")
        state["video_path"] = path
        state["detector"] = SceneDetector(path)
        # Return video info
        cap = cv2.VideoCapture(path)
        info = {
            "path": path,
            "filename": os.path.basename(path),
            "fps": cap.get(cv2.CAP_PROP_FPS) or 30.0,
            "total_frames": int(cap.get(cv2.CAP_PROP_FRAME_COUNT)),
            "width": int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)),
            "height": int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)),
            "duration": int(cap.get(cv2.CAP_PROP_FRAME_COUNT)) / (cap.get(cv2.CAP_PROP_FPS) or 30.0),
        }
        cap.release()
        return info

    @app.get("/api/browse")
    async def browse_directory(path: str = "~"):
        """List video files and directories at the given path."""
        target = os.path.expanduser(path)
        if not os.path.isdir(target):
            return Response(status_code=404, content="Directory not found")
        video_exts = {'.mp4', '.mkv', '.avi', '.mov', '.wmv', '.flv', '.webm', '.m4v', '.ts', '.mts'}
        entries = []
        try:
            for name in sorted(os.listdir(target)):
                if name.startswith('.'):
                    continue
                full = os.path.join(target, name)
                if os.path.isdir(full):
                    entries.append({"name": name, "type": "dir", "path": full})
                elif os.path.isfile(full):
                    ext = os.path.splitext(name)[1].lower()
                    if ext in video_exts:
                        size = os.path.getsize(full)
                        entries.append({"name": name, "type": "file", "path": full, "size": size})
        except PermissionError:
            return Response(status_code=403, content="Permission denied")
        return {"path": target, "parent": os.path.dirname(target), "entries": entries}

    @app.get("/api/video")
    async def serve_video():
        vp = state["video_path"]
        if not vp:
            return Response(status_code=404, content="No video loaded")
        return FileResponse(vp, media_type=_guess_video_mime(vp), filename=os.path.basename(vp))

    @app.get("/api/video-info")
    async def video_info():
        vp = state["video_path"]
        if not vp:
            return {"path": None, "filename": None, "fps": 0, "total_frames": 0,
                    "width": 0, "height": 0, "duration": 0}
        cap = cv2.VideoCapture(vp)
        info = {
            "path": vp,
            "filename": os.path.basename(vp),
            "fps": cap.get(cv2.CAP_PROP_FPS) or 30.0,
            "total_frames": int(cap.get(cv2.CAP_PROP_FRAME_COUNT)),
            "width": int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)),
            "height": int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)),
            "duration": int(cap.get(cv2.CAP_PROP_FRAME_COUNT)) / (cap.get(cv2.CAP_PROP_FPS) or 30.0),
        }
        cap.release()
        return info

    @app.get("/api/thumbnail/{frame}")
    async def get_thumbnail(frame: int):
        path = thumb_dir / f"scene_{frame:06d}.jpg"
        if path.exists():
            return FileResponse(str(path), media_type="image/jpeg")
        det = state["detector"]
        if not det:
            return Response(status_code=404)
        f = det.get_frame(frame)
        if f is None:
            return Response(status_code=404)
        _, buf = cv2.imencode(".jpg", f, [cv2.IMWRITE_JPEG_QUALITY, 80])
        return Response(content=buf.tobytes(), media_type="image/jpeg")

    @app.get("/api/frame/{frame}")
    async def get_frame(frame: int):
        det = state["detector"]
        if not det:
            return Response(status_code=404)
        f = det.get_frame(frame)
        if f is None:
            return Response(status_code=404)
        _, buf = cv2.imencode(".jpg", f, [cv2.IMWRITE_JPEG_QUALITY, 90])
        return Response(content=buf.tobytes(), media_type="image/jpeg")

    @app.get("/api/face-crop/{scene_idx}/{face_idx}")
    async def get_face_crop(scene_idx: int, face_idx: int):
        det = state["detector"]
        if not det or scene_idx >= len(det.scenes):
            return Response(status_code=404)
        sc = det.scenes[scene_idx]
        if face_idx >= len(sc.faces):
            return Response(status_code=404)
        face = sc.faces[face_idx]
        frame = det.get_frame(sc.frame)
        if frame is None:
            return Response(status_code=404)
        x, y, w, h = face.bbox
        fh, fw = frame.shape[:2]
        pad = int(max(w, h) * 0.3)
        x1, y1 = max(0, x - pad), max(0, y - pad)
        x2, y2 = min(fw, x + w + pad), min(fh, y + h + pad)
        crop = frame[y1:y2, x1:x2]
        crop = cv2.resize(crop, (128, 128), interpolation=cv2.INTER_AREA)
        _, buf = cv2.imencode(".jpg", crop, [cv2.IMWRITE_JPEG_QUALITY, 85])
        return Response(content=buf.tobytes(), media_type="image/jpeg")

    @app.get("/api/scenes")
    async def get_scenes():
        det = state["detector"]
        if not det:
            return {"scenes": [], "all_scores": [], "fps": 0, "total_frames": 0}
        return {
            "scenes": [sc.to_dict() for sc in det.scenes if not sc.removed],
            "all_scores": det.all_scores[::max(1, len(det.all_scores) // 2000)],
            "fps": det.fps,
            "total_frames": det.total_frames,
        }

    @app.delete("/api/scenes/{frame}")
    async def remove_scene(frame: int):
        det = state["detector"]
        if not det:
            return Response(status_code=404)
        for sc in det.scenes:
            if sc.frame == frame:
                sc.removed = True
                return {"ok": True}
        return Response(status_code=404)

    @app.post("/api/scenes/{frame}/restore")
    async def restore_scene(frame: int):
        det = state["detector"]
        if not det:
            return Response(status_code=404)
        for sc in det.scenes:
            if sc.frame == frame:
                sc.removed = False
                return {"ok": True}
        return Response(status_code=404)

    @app.post("/api/faces/merge")
    async def merge_characters(data: dict):
        det = state["detector"]
        if not det:
            return Response(status_code=404)
        source_id = data.get("source")
        target_id = data.get("target")
        if source_id is None or target_id is None:
            return Response(status_code=400)
        for sc in det.scenes:
            for face in sc.faces:
                if face.character_id == source_id:
                    face.character_id = target_id
        return {"ok": True}

    @app.post("/api/faces/split")
    async def split_face(data: dict):
        det = state["detector"]
        if not det:
            return Response(status_code=404)
        scene_idx = data.get("scene_idx")
        face_idx = data.get("face_idx")
        if scene_idx is None or face_idx is None:
            return Response(status_code=400)
        if scene_idx < 0 or scene_idx >= len(det.scenes):
            return Response(status_code=404, content="Invalid scene index")
        sc = det.scenes[scene_idx]
        if face_idx < 0 or face_idx >= len(sc.faces):
            return Response(status_code=404, content="Invalid face index")
        max_id = 0
        for s in det.scenes:
            for f in s.faces:
                max_id = max(max_id, f.character_id)
        new_id = max_id + 1
        sc.faces[face_idx].character_id = new_id
        return {"ok": True, "new_character_id": new_id}

    @app.get("/api/profiler")
    async def get_profiler():
        return {"enabled": _profiler.enabled, "entries": _profiler.get_entries()}

    @app.post("/api/profiler")
    async def set_profiler(body: dict):
        enabled = body.get("enabled", False)
        if enabled and not _profiler.enabled:
            _profiler.reset()
        _profiler.enabled = enabled
        return {"enabled": _profiler.enabled}

    @app.websocket("/api/ws")
    async def websocket_endpoint(ws: WebSocket):
        await ws.accept()
        active_ws.append(ws)
        try:
            while True:
                data = await ws.receive_json()
                action = data.get("action")

                if action == "analyze":
                    det = state["detector"]
                    if not det:
                        await ws.send_json({"type": "error", "message": "No video loaded"})
                        continue
                    settings = data.get("settings", {})

                    async def run_analysis():
                        ws_open = True

                        async def safe_send(data: dict) -> None:
                            nonlocal ws_open
                            if not ws_open:
                                return
                            try:
                                await ws.send_json(data)
                            except Exception:
                                ws_open = False

                        try:
                            loop = asyncio.get_running_loop()
                            last_update = [0.0]

                            def progress_cb(current, total, scene_count, phase="detecting"):
                                if not ws_open:
                                    return
                                now = time.time()
                                if now - last_update[0] < 0.1 and current < total:
                                    return
                                last_update[0] = now
                                asyncio.run_coroutine_threadsafe(
                                    safe_send({
                                        "type": "progress",
                                        "current": current,
                                        "total": total,
                                        "percent": round(current / max(total, 1) * 100, 1),
                                        "scenes_found": scene_count,
                                        "phase": phase,
                                    }),
                                    loop,
                                )

                            def do_detect():
                                det.detect(
                                    threshold=settings.get("threshold", 0.4),
                                    min_scene_len=settings.get("min_scene_len", 15),
                                    adaptive=settings.get("adaptive_threshold", settings.get("adaptive", True)),
                                    detect_faces=settings.get("detect_faces", settings.get("faces", False)),
                                    face_confidence=settings.get("face_confidence", 0.5),
                                    cluster_distance=settings.get("cluster_distance", 0.6),
                                    progress_callback=progress_cb,
                                    thumb_dir=str(thumb_dir),
                                    thumb_width=settings.get("thumb_width", 320),
                                    skip_frames=settings.get("skip_frames", 2),
                                    downscale_height=settings.get("downscale_height", settings.get("downscale", 480)),
                                    use_threading=settings.get("threaded_pipeline", settings.get("threading", True)),
                                )

                            async with analysis_lock:
                                await loop.run_in_executor(None, do_detect)

                            scenes_data = [sc.to_dict() for sc in det.scenes]
                            scores = det.all_scores
                            if len(scores) > 2000:
                                step = len(scores) // 2000
                                scores = scores[::step]
                            await safe_send({
                                "type": "complete",
                                "scenes": scenes_data,
                                "scores": [round(s, 4) for s in scores],
                                "fps": det.fps,
                                "total_frames": det.total_frames,
                            })
                        except Exception as e:
                            print(f"  Analysis error: {e}")
                            await safe_send({"type": "error", "message": str(e)})

                    asyncio.create_task(run_analysis())

                elif action == "cancel":
                    det = state["detector"]
                    if det:
                        det.cancel()
                    await ws.send_json({"type": "cancelled"})

        except WebSocketDisconnect:
            active_ws.remove(ws)

    print("\n  Scene Detect UI")
    if video_path:
        print(f"  Video: {video_path}")
    else:
        print("  No video preloaded -- select one from the UI")
    print(f"  Open http://localhost:{port} in your browser\n")

    uvicorn.run(app, host=host, port=port, log_level="warning")


# ── CLI mode ─────────────────────────────────────────────────────────────────

def run_cli(args) -> None:
    detector = SceneDetector(args.video)

    print(f"Video: {args.video}")

    def progress(current, total, scene_count, phase="detecting"):
        if current % 500 == 0 or current == total:
            pct = current / max(total, 1) * 100
            print(f"  [{pct:5.1f}%] frame {current}/{total}, {scene_count} scenes so far ({phase})")

    thumb_dir = None
    if not args.no_thumbnails:
        if args.thumbnails == "auto":
            base = os.path.splitext(os.path.basename(args.video))[0]
            thumb_dir = os.path.join(os.path.dirname(args.video) or ".", f"{base}_scenes")
        else:
            thumb_dir = args.thumbnails

    scenes = detector.detect(
        threshold=args.threshold,
        min_scene_len=args.min_scene_len,
        adaptive=not args.no_adaptive,
        detect_faces=args.faces,
        face_confidence=args.face_confidence,
        cluster_distance=args.cluster_distance,
        progress_callback=progress,
        thumb_dir=thumb_dir,
        thumb_width=args.thumb_width,
        skip_frames=args.skip_frames,
        downscale_height=args.downscale,
        use_threading=not args.no_threading,
    )

    print(f"\nFound {len(scenes)} scene change(s):\n")
    for i, sc in enumerate(scenes, 1):
        face_info = ""
        if sc.faces:
            chars = [f"#{f.character_id}" for f in sc.faces]
            face_info = f"  faces: {', '.join(chars)}"
        print(f"  {i:3d}. [{sc.timecode}] frame {sc.frame}  (score: {sc.score:.4f}){face_info}")

    if args.faces:
        char_scenes: dict[int, list[str]] = {}
        for sc in scenes:
            for f in sc.faces:
                char_scenes.setdefault(f.character_id, []).append(sc.timecode)
        if char_scenes:
            print("\nCharacter appearances:")
            for cid in sorted(char_scenes):
                times = char_scenes[cid]
                print(f"  Character #{cid}: {len(times)} scene(s) — "
                      f"{', '.join(times[:5])}{'...' if len(times) > 5 else ''}")

    if args.output:
        data = {
            "video": args.video,
            "scene_count": len(scenes),
            "scenes": [s.to_dict() for s in scenes],
        }
        with open(args.output, "w") as f:
            json.dump(data, f, indent=2)
        print(f"\nSaved to {args.output}")


# ── Entry point ──────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(
        description="Detect scene changes in a video, with optional face re-identification and web UI"
    )
    parser.add_argument("video", nargs="?", default=None, help="Path to video file (optional with --ui)")
    parser.add_argument("-t", "--threshold", type=float, default=0.4,
                        help="Detection threshold 0-1 (default: 0.4)")
    parser.add_argument("-m", "--min-scene-len", type=int, default=15,
                        help="Minimum frames between scene changes (default: 15)")
    parser.add_argument("-o", "--output", help="Save results to JSON file")
    parser.add_argument("--thumbnails", default="auto",
                        help="Thumbnail directory (default: <video>_scenes/)")
    parser.add_argument("--no-thumbnails", action="store_true")
    parser.add_argument("--thumb-width", type=int, default=320)
    parser.add_argument("--no-adaptive", action="store_true")
    parser.add_argument("--skip-frames", type=int, default=2,
                        help="Process every Nth frame (default: 2)")
    parser.add_argument("--downscale", type=int, default=480,
                        help="Downscale frame height for histogram (0 = disabled)")
    parser.add_argument("--no-threading", action="store_true",
                        help="Disable threaded decode pipeline")

    face_group = parser.add_argument_group("face detection")
    face_group.add_argument("--faces", action="store_true",
                            help="Enable face detection and re-identification")
    face_group.add_argument("--face-confidence", type=float, default=0.5)
    face_group.add_argument("--cluster-distance", type=float, default=0.6)

    ui_group = parser.add_argument_group("web UI")
    ui_group.add_argument("--ui", action="store_true", help="Launch web UI")
    ui_group.add_argument("--port", type=int, default=8500)
    ui_group.add_argument("--host", default="0.0.0.0")

    args = parser.parse_args()

    if args.ui:
        run_web_ui(args.video, port=args.port, host=args.host)
    else:
        if not args.video:
            parser.error("video path is required in CLI mode")
        run_cli(args)


if __name__ == "__main__":
    main()
