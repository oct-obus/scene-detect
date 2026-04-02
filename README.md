# scene-detect

Video scene change detection with optional face re-identification and a web UI.

## Features

- Histogram correlation-based scene change detection
- Adaptive thresholding that adjusts to local video content
- Face detection and embedding at scene boundaries using MediaPipe
- Face clustering across scenes to track recurring characters (agglomerative clustering)
- Threaded decode pipeline for overlapping frame reads with processing
- Frame skipping and downscaling options for faster analysis on large videos
- Interactive web UI with real-time progress, timeline heatmap, and scene grid
- Scene diff viewer to compare frames across cuts
- Drag-and-drop face cluster merging and right-click splitting
- Keyboard shortcuts for scene navigation, removal, and preview
- Drag-select multiple scenes in the grid
- Thumbnail generation for detected scenes
- JSON export of results

## Setup

```bash
uv venv
source .venv/bin/activate
```

### CLI only

```bash
uv pip install opencv-python-headless numpy
python scene-detect.py video.mp4
```

### Web UI

```bash
uv pip install opencv-python-headless numpy fastapi uvicorn websockets
python scene-detect.py video.mp4 --ui
```

### Face detection (optional add-on)

```bash
uv pip install mediapipe scikit-learn
python scene-detect.py video.mp4 --faces
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
python scene-detect.py video.mp4 --ui --port 8500
```

## Dependencies

Core:

```
opencv-python-headless
numpy
```

Optional (face detection):

```
mediapipe
scikit-learn
```

Optional (web UI):

```
fastapi
uvicorn
websockets
```
