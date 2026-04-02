import { useEffect, useRef, useCallback, useState } from 'react';
import { useAppContext } from '../store';
import * as api from '../api';

export function VideoPlayer() {
  const { state, dispatch } = useAppContext();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Seek when seekToFrame changes
  useEffect(() => {
    if (state.seekToFrame !== null && videoRef.current && state.fps > 0) {
      const time = state.seekToFrame / state.fps;
      videoRef.current.currentTime = time;
      dispatch({ type: 'SEEK_TO_FRAME', payload: null });
    }
  }, [state.seekToFrame, state.fps, dispatch]);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  }, []);

  const onTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  }, []);

  const onPlay = useCallback(() => setPlaying(true), []);
  const onPause = useCallback(() => setPlaying(false), []);
  const onLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  }, []);

  const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const f = Math.floor((seconds % 1) * (state.fps || 30));
    if (h > 0) {
      return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(f).padStart(2, '0')}`;
    }
    return `${m}:${String(s).padStart(2, '0')}.${String(f).padStart(2, '0')}`;
  };

  if (!state.videoInfo?.path) {
    return (
      <div className="empty-state">
        <div>No video loaded</div>
        <button className="btn btn-primary" onClick={() => dispatch({ type: 'SHOW_FILE_PICKER', payload: true })}>
          Open Video
        </button>
      </div>
    );
  }

  const currentFrame = Math.round(currentTime * state.fps);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={api.getVideoUrl()}
        onTimeUpdate={onTimeUpdate}
        onPlay={onPlay}
        onPause={onPause}
        onLoadedMetadata={onLoadedMetadata}
      />
      <div className="video-controls">
        <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
        <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
        <span style={{ marginLeft: 'auto' }}>Frame: {currentFrame}</span>
      </div>
    </div>
  );
}
