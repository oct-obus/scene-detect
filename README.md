# scene-detect

Video scene change detection with optional face re-identification and a web UI.

## Features

- Histogram correlation-based scene change detection
- Adaptive thresholding that adjusts to local video content
- Face detection and embedding at scene boundaries using MediaPipe
- Face clustering across scenes to track recurring characters (agglomerative clustering)
- Threaded decode pipeline for overlapping frame reads with processing
- Frame skipping and downscaling options for faster analysis on large videos
- Dockable panel web UI (React + dockview) with real-time progress via WebSocket
- Timeline heatmap, scene grid, video player with frame-accurate scrubbing
- Drag-and-drop face cluster merging and right-click splitting
- File picker to browse and load videos from within the UI
- Thumbnail generation for detected scenes
- JSON export of results

## Setup

All dependencies are declared in `pyproject.toml`. Install with uv:

```bash
uv sync
```

Or with pip in a venv:

```bash
python -m venv .venv
source .venv/bin/activate
pip install .
```

## Usage

### CLI

```bash
# Basic scene detection
python scene-detect.py video.mp4

# With face detection and JSON output
python scene-detect.py video.mp4 --faces --output results.json

# Performance tuning
python scene-detect.py video.mp4 --skip-frames 3 --downscale 480

# Adjust sensitivity
python scene-detect.py video.mp4 --threshold 0.3 --min-scene-len 30
```

### Web UI

```bash
python scene-detect.py video.mp4 --ui
python scene-detect.py --ui                   # no video -- pick from browser
python scene-detect.py video.mp4 --ui --port 8500
```

Open `http://localhost:8500` in a browser. The UI has five dockable panels: Settings, Video, Scenes, Faces, and Timeline. Drag panel tabs to rearrange the layout.

## Frontend development

The frontend source lives in `frontend/`. To iterate on it:

```bash
cd frontend
npm install
npm run dev       # starts Vite dev server with proxy to backend on :8500
```

To build the production bundle (outputs to `static/`):

```bash
cd frontend
npm run build
```

## Dependencies

All managed via `pyproject.toml`:

- opencv-python-headless, numpy -- core detection
- fastapi, uvicorn, websockets -- web UI server
- mediapipe, scikit-learn -- face detection and clustering
