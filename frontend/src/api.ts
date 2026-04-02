import type { VideoInfo, BrowseResult, SceneChange } from './types';

const BASE = '';

export async function getVideoInfo(): Promise<VideoInfo> {
  const res = await fetch(`${BASE}/api/video-info`);
  return res.json();
}

export async function setVideo(path: string): Promise<VideoInfo> {
  const res = await fetch(`${BASE}/api/set-video`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(err.detail || 'Failed to set video');
  }
  return res.json();
}

export function getVideoUrl(): string {
  return `${BASE}/api/video`;
}

export async function browse(path?: string): Promise<BrowseResult> {
  const q = path ? `?path=${encodeURIComponent(path)}` : '';
  const res = await fetch(`${BASE}/api/browse${q}`);
  return res.json();
}

export function getThumbnailUrl(frame: number): string {
  return `${BASE}/api/thumbnail/${frame}`;
}

export function getFrameUrl(frame: number): string {
  return `${BASE}/api/frame/${frame}`;
}

export async function getScenes(): Promise<{
  scenes: SceneChange[];
  all_scores: number[];
  fps: number;
  total_frames: number;
}> {
  const res = await fetch(`${BASE}/api/scenes`);
  return res.json();
}

export async function removeScene(frame: number): Promise<void> {
  await fetch(`${BASE}/api/scenes/${frame}`, { method: 'DELETE' });
}

export async function restoreScene(frame: number): Promise<void> {
  await fetch(`${BASE}/api/scenes/${frame}/restore`, { method: 'POST' });
}

export async function mergeFaces(source: number, target: number): Promise<void> {
  await fetch(`${BASE}/api/faces/merge`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source, target }),
  });
}

export async function splitFace(sceneIdx: number, faceIdx: number): Promise<void> {
  await fetch(`${BASE}/api/faces/split`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ scene_idx: sceneIdx, face_idx: faceIdx }),
  });
}

export function getFaceCropUrl(sceneIdx: number, faceIdx: number): string {
  return `${BASE}/api/face-crop/${sceneIdx}/${faceIdx}`;
}

export function createWS(): WebSocket {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  return new WebSocket(`${protocol}//${window.location.host}/api/ws`);
}
