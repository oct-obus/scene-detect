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
from typing import Optional

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


# ── Face detection & embedding ────────────────────────────────────────────────

class FaceAnalyzer:
    def __init__(self, min_confidence: float = 0.5):
        import mediapipe as mp
        self.detector = mp.solutions.face_detection.FaceDetection(
            model_selection=1,
            min_detection_confidence=min_confidence,
        )

    def detect(self, frame: np.ndarray) -> list[FaceDetection]:
        h, w = frame.shape[:2]
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = self.detector.process(rgb)

        faces = []
        if not results.detections:
            return faces

        for det in results.detections:
            bb = det.location_data.relative_bounding_box
            x = max(0, int(bb.xmin * w))
            y = max(0, int(bb.ymin * h))
            bw = min(int(bb.width * w), w - x)
            bh = min(int(bb.height * h), h - y)
            if bw < 20 or bh < 20:
                continue

            embedding = self._compute_embedding(frame, x, y, bw, bh)
            faces.append(FaceDetection(
                bbox=(x, y, bw, bh),
                confidence=round(det.score[0], 4),
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

    def close(self):
        self.detector.close()


def cluster_faces(scenes: list[SceneChange], distance_threshold: float = 0.6):
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

    def __init__(self, video_path: str):
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
        progress_callback=None,
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
            face_analyzer = FaceAnalyzer(min_confidence=face_confidence)

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

        prev_frame = next_frame()
        if prev_frame is None:
            raise RuntimeError("Cannot read first frame")

        prev_hist = calc_histogram(maybe_downscale(prev_frame))
        last_cut_frame = 0
        frame_idx = 0

        window: list[float] = []
        window_size = int(self.fps * 4)

        while not self.cancelled:
            frame = next_frame()
            if frame is None:
                break
            frame_idx += 1

            # Read every frame for accurate timecodes, but only process every Nth
            if skip_frames > 1 and frame_idx % skip_frames != 0:
                continue

            curr_hist = calc_histogram(maybe_downscale(frame))
            corr = cv2.compareHist(prev_hist, curr_hist, cv2.HISTCMP_CORREL)
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
                faces = face_analyzer.detect(frame) if face_analyzer else []

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
                    self._save_thumbnail(frame, sc, thumb_dir, thumb_width)

            prev_hist = curr_hist

            if progress_callback and frame_idx % 10 == 0:
                progress_callback(frame_idx, self.total_frames, len(self.scenes))

        if use_threading:
            reader.join(timeout=2)

        cap.release()

        if face_analyzer:
            face_analyzer.close()
            if self.scenes and not self.cancelled:
                cluster_faces(self.scenes, distance_threshold=cluster_distance)

        if progress_callback:
            progress_callback(self.total_frames, self.total_frames, len(self.scenes))

        return self.scenes

    def cancel(self):
        self.cancelled = True

    def get_frame(self, frame_num: int) -> Optional[np.ndarray]:
        cap = cv2.VideoCapture(self.video_path)
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_num)
        ret, frame = cap.read()
        cap.release()
        return frame if ret else None

    def _save_thumbnail(self, frame: np.ndarray, sc: SceneChange, out_dir: str, thumb_width: int):
        fh, fw = frame.shape[:2]
        thumb_h = int(fh * thumb_width / fw)
        thumb = cv2.resize(frame, (thumb_width, thumb_h), interpolation=cv2.INTER_AREA)
        fname = os.path.join(out_dir, f"scene_{sc.frame:06d}.jpg")
        cv2.imwrite(fname, thumb, [cv2.IMWRITE_JPEG_QUALITY, 80])


# ── Web UI Server ────────────────────────────────────────────────────────────

def run_web_ui(video_path: str, port: int = 8500, host: str = "0.0.0.0"):
    from fastapi import FastAPI, WebSocket, WebSocketDisconnect
    from fastapi.staticfiles import StaticFiles
    from fastapi.responses import FileResponse, Response
    import uvicorn

    app = FastAPI(title="Scene Detect")
    detector = SceneDetector(video_path)
    static_dir = Path(__file__).parent / "static"
    thumb_dir = Path(__file__).parent / "thumbnails"

    active_ws: list[WebSocket] = []
    analysis_lock = threading.Lock()

    app.mount("/static", StaticFiles(directory=str(static_dir)), name="static")

    @app.get("/")
    async def index():
        return FileResponse(str(static_dir / "index.html"))

    @app.get("/api/video-info")
    async def video_info():
        cap = cv2.VideoCapture(video_path)
        info = {
            "path": video_path,
            "filename": os.path.basename(video_path),
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
        # Generate on the fly
        f = detector.get_frame(frame)
        if f is None:
            return Response(status_code=404)
        _, buf = cv2.imencode(".jpg", f, [cv2.IMWRITE_JPEG_QUALITY, 80])
        return Response(content=buf.tobytes(), media_type="image/jpeg")

    @app.get("/api/frame/{frame}")
    async def get_frame(frame: int):
        f = detector.get_frame(frame)
        if f is None:
            return Response(status_code=404)
        _, buf = cv2.imencode(".jpg", f, [cv2.IMWRITE_JPEG_QUALITY, 90])
        return Response(content=buf.tobytes(), media_type="image/jpeg")

    @app.get("/api/face-crop/{scene_idx}/{face_idx}")
    async def get_face_crop(scene_idx: int, face_idx: int):
        if scene_idx >= len(detector.scenes):
            return Response(status_code=404)
        sc = detector.scenes[scene_idx]
        if face_idx >= len(sc.faces):
            return Response(status_code=404)
        face = sc.faces[face_idx]
        frame = detector.get_frame(sc.frame)
        if frame is None:
            return Response(status_code=404)
        x, y, w, h = face.bbox
        # Add some padding
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
        return {
            "scenes": [sc.to_dict() for sc in detector.scenes if not sc.removed],
            "all_scores": detector.all_scores[::max(1, len(detector.all_scores) // 2000)],
            "fps": detector.fps,
            "total_frames": detector.total_frames,
        }

    @app.delete("/api/scenes/{frame}")
    async def remove_scene(frame: int):
        for sc in detector.scenes:
            if sc.frame == frame:
                sc.removed = True
                return {"ok": True}
        return Response(status_code=404)

    @app.post("/api/scenes/{frame}/restore")
    async def restore_scene(frame: int):
        for sc in detector.scenes:
            if sc.frame == frame:
                sc.removed = False
                return {"ok": True}
        return Response(status_code=404)

    @app.post("/api/faces/merge")
    async def merge_characters(data: dict):
        source_id = data.get("source")
        target_id = data.get("target")
        if source_id is None or target_id is None:
            return Response(status_code=400)
        for sc in detector.scenes:
            for face in sc.faces:
                if face.character_id == source_id:
                    face.character_id = target_id
        return {"ok": True}

    @app.post("/api/faces/split")
    async def split_face(data: dict):
        scene_idx = data.get("scene_idx")
        face_idx = data.get("face_idx")
        if scene_idx is None or face_idx is None:
            return Response(status_code=400)
        # Find max character_id
        max_id = 0
        for sc in detector.scenes:
            for f in sc.faces:
                max_id = max(max_id, f.character_id)
        new_id = max_id + 1
        detector.scenes[scene_idx].faces[face_idx].character_id = new_id
        return {"ok": True, "new_character_id": new_id}

    @app.websocket("/api/ws")
    async def websocket_endpoint(ws: WebSocket):
        await ws.accept()
        active_ws.append(ws)
        try:
            while True:
                data = await ws.receive_json()
                action = data.get("action")

                if action == "analyze":
                    settings = data.get("settings", {})

                    async def run_analysis():
                        loop = asyncio.get_event_loop()
                        last_update = [0.0]

                        def progress_cb(current, total, scene_count):
                            now = time.time()
                            if now - last_update[0] < 0.1 and current < total:
                                return
                            last_update[0] = now
                            asyncio.run_coroutine_threadsafe(
                                ws.send_json({
                                    "type": "progress",
                                    "current": current,
                                    "total": total,
                                    "percent": round(current / max(total, 1) * 100, 1),
                                    "scenes_found": scene_count,
                                }),
                                loop,
                            )

                        def do_detect():
                            detector.detect(
                                threshold=settings.get("threshold", 0.4),
                                min_scene_len=settings.get("min_scene_len", 15),
                                adaptive=settings.get("adaptive", True),
                                detect_faces=settings.get("faces", False),
                                face_confidence=settings.get("face_confidence", 0.5),
                                cluster_distance=settings.get("cluster_distance", 0.6),
                                progress_callback=progress_cb,
                                thumb_dir=str(thumb_dir),
                                thumb_width=settings.get("thumb_width", 320),
                                skip_frames=settings.get("skip_frames", 1),
                                downscale_height=settings.get("downscale", 0),
                                use_threading=settings.get("threading", True),
                            )

                        with analysis_lock:
                            await loop.run_in_executor(None, do_detect)

                        # Send completion
                        scenes_data = [sc.to_dict() for sc in detector.scenes]
                        # Downsample scores for the heatmap
                        scores = detector.all_scores
                        if len(scores) > 2000:
                            step = len(scores) // 2000
                            scores = scores[::step]
                        await ws.send_json({
                            "type": "complete",
                            "scenes": scenes_data,
                            "scores": [round(s, 4) for s in scores],
                            "fps": detector.fps,
                            "total_frames": detector.total_frames,
                        })

                    asyncio.create_task(run_analysis())

                elif action == "cancel":
                    detector.cancel()
                    await ws.send_json({"type": "cancelled"})

        except WebSocketDisconnect:
            active_ws.remove(ws)

    print(f"\n  Scene Detect UI")
    print(f"  Video: {video_path}")
    print(f"  Open http://localhost:{port} in your browser\n")
    uvicorn.run(app, host=host, port=port, log_level="warning")


# ── CLI mode ─────────────────────────────────────────────────────────────────

def run_cli(args):
    detector = SceneDetector(args.video)

    print(f"Video: {args.video}")

    def progress(current, total, scene_count):
        if current % 500 == 0 or current == total:
            pct = current / max(total, 1) * 100
            print(f"  [{pct:5.1f}%] frame {current}/{total}, {scene_count} scenes so far")

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
            print(f"\nCharacter appearances:")
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

def main():
    parser = argparse.ArgumentParser(
        description="Detect scene changes in a video, with optional face re-identification and web UI"
    )
    parser.add_argument("video", help="Path to video file")
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
    parser.add_argument("--skip-frames", type=int, default=1,
                        help="Process every Nth frame (default: 1, no skipping)")
    parser.add_argument("--downscale", type=int, default=0,
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
        run_cli(args)


if __name__ == "__main__":
    main()
