export interface VideoInfo {
  path: string | null;
  filename: string | null;
  fps: number;
  total_frames: number;
  width: number;
  height: number;
  duration: number;
}

export interface FaceInfo {
  bbox: [number, number, number, number];
  confidence: number;
  character_id: number;
  embedding?: number[];
}

export interface SceneChange {
  frame: number;
  timecode: string;
  timestamp_sec: number;
  score: number;
  method: string;
  faces: FaceInfo[];
  removed?: boolean;
}

export interface BrowseEntry {
  name: string;
  type: 'dir' | 'file';
  path: string;
  size?: number;
}

export interface BrowseResult {
  path: string;
  parent: string;
  entries: BrowseEntry[];
}

export interface ProgressMessage {
  type: 'progress';
  current: number;
  total: number;
  percent: number;
  scenes_found: number;
  phase?: string;
}

export interface CompleteMessage {
  type: 'complete';
  scenes: SceneChange[];
  scores: number[];
  fps: number;
  total_frames: number;
}

export interface ErrorMessage {
  type: 'error';
  message: string;
}

export interface CancelledMessage {
  type: 'cancelled';
}

export type WSMessage = ProgressMessage | CompleteMessage | ErrorMessage | CancelledMessage;

export interface AnalysisSettings {
  threshold: number;
  min_scene_len: number;
  adaptive_threshold: boolean;
  skip_frames: number;
  downscale_height: number;
  threaded_pipeline: boolean;
  detect_faces: boolean;
  face_confidence: number;
  cluster_distance: number;
}
