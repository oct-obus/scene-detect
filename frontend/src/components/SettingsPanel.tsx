import { useState, useCallback, useEffect, useRef } from 'react';
import { useAppContext } from '../store';
import type { AnalysisSettings } from '../types';

const DEFAULT_SETTINGS: AnalysisSettings = {
  threshold: 0.40,
  min_scene_len: 15,
  adaptive_threshold: true,
  skip_frames: 2,
  downscale_height: 480,
  threaded_pipeline: true,
  detect_faces: false,
  face_confidence: 0.50,
  cluster_distance: 0.60,
};

function loadSettings(): AnalysisSettings {
  try {
    const saved = localStorage.getItem('analysisSettings');
    if (saved) return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
  } catch { /* ignore */ }
  return { ...DEFAULT_SETTINGS };
}

export function SettingsPanel() {
  const { state, startAnalysis, cancelAnalysis, dispatch } = useAppContext();
  const [settings, setSettings] = useState<AnalysisSettings>(loadSettings);
  const [showContextMenu, setShowContextMenu] = useState<{ x: number; y: number } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('analysisSettings', JSON.stringify(settings));
  }, [settings]);

  const update = useCallback(<K extends keyof AnalysisSettings>(key: K, value: AnalysisSettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onAnalyze = useCallback(() => {
    startAnalysis(settings);
  }, [settings, startAnalysis]);

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setShowContextMenu({ x: e.clientX, y: e.clientY });
  }, []);

  const resetSettings = useCallback(() => {
    setSettings({ ...DEFAULT_SETTINGS });
    setShowContextMenu(null);
  }, []);

  useEffect(() => {
    if (!showContextMenu) return;
    const handler = () => setShowContextMenu(null);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [showContextMenu]);

  return (
    <div className="panel-content" onContextMenu={handleContextMenu} ref={panelRef}>
      {showContextMenu && (
        <div
          className="context-menu"
          style={{ position: 'fixed', left: showContextMenu.x, top: showContextMenu.y }}
        >
          <div className="menu-item" onClick={resetSettings}>Reset Settings to Default</div>
        </div>
      )}
      {!state.videoInfo?.path && (
        <div style={{ marginBottom: 12 }}>
          <button
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => dispatch({ type: 'SHOW_FILE_PICKER', payload: true })}
          >
            Open Video
          </button>
        </div>
      )}

      {state.videoInfo?.path && (
        <div style={{ marginBottom: 12, fontSize: 11, color: 'var(--text-muted)', wordBreak: 'break-all' }}>
          <span
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => dispatch({ type: 'SHOW_FILE_PICKER', payload: true })}
            title="Click to change video"
          >
            {state.videoInfo.filename}
          </span>
          <span style={{ display: 'block', marginTop: 2 }}>
            {state.videoInfo.width}x{state.videoInfo.height} | {state.videoInfo.fps.toFixed(1)} fps |{' '}
            {Math.round(state.videoInfo.duration)}s
          </span>
        </div>
      )}

      <div className="setting-row">
        <div className="setting-label">
          <span>Threshold</span>
          <span>{settings.threshold.toFixed(2)}</span>
        </div>
        <input
          type="range"
          min={0.05}
          max={1}
          step={0.05}
          value={settings.threshold}
          onChange={(e) => update('threshold', parseFloat(e.target.value))}
        />
      </div>

      <div className="setting-row">
        <div className="setting-label">
          <span>Min Scene Length</span>
          <span>{settings.min_scene_len}</span>
        </div>
        <input
          type="range"
          min={1}
          max={120}
          step={1}
          value={settings.min_scene_len}
          onChange={(e) => update('min_scene_len', parseInt(e.target.value))}
        />
      </div>

      <div className="checkbox-row">
        <input
          type="checkbox"
          id="adaptive"
          checked={settings.adaptive_threshold}
          onChange={(e) => update('adaptive_threshold', e.target.checked)}
        />
        <label htmlFor="adaptive">Adaptive Threshold</label>
      </div>

      <div className="setting-row">
        <div className="setting-label">
          <span>Skip Frames</span>
          <span>{settings.skip_frames}</span>
        </div>
        <input
          type="range"
          min={1}
          max={10}
          step={1}
          value={settings.skip_frames}
          onChange={(e) => update('skip_frames', parseInt(e.target.value))}
        />
      </div>

      <div className="setting-row">
        <div className="setting-label">
          <span>Downscale Height</span>
          <span>{settings.downscale_height || 'Off'}</span>
        </div>
        <input
          type="range"
          min={0}
          max={1080}
          step={60}
          value={settings.downscale_height}
          onChange={(e) => update('downscale_height', parseInt(e.target.value))}
        />
      </div>

      <div className="checkbox-row">
        <input
          type="checkbox"
          id="threaded"
          checked={settings.threaded_pipeline}
          onChange={(e) => update('threaded_pipeline', e.target.checked)}
        />
        <label htmlFor="threaded">Threaded Pipeline</label>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '12px 0' }} />

      <div className="checkbox-row">
        <input
          type="checkbox"
          id="faces"
          checked={settings.detect_faces}
          onChange={(e) => update('detect_faces', e.target.checked)}
        />
        <label htmlFor="faces">Face Detection</label>
      </div>

      {settings.detect_faces && (
        <>
          <div className="setting-row">
            <div className="setting-label">
              <span>Face Confidence</span>
              <span>{settings.face_confidence.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.1}
              max={1}
              step={0.05}
              value={settings.face_confidence}
              onChange={(e) => update('face_confidence', parseFloat(e.target.value))}
            />
          </div>

          <div className="setting-row">
            <div className="setting-label">
              <span>Cluster Distance</span>
              <span>{settings.cluster_distance.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.1}
              max={1.5}
              step={0.05}
              value={settings.cluster_distance}
              onChange={(e) => update('cluster_distance', parseFloat(e.target.value))}
            />
          </div>
        </>
      )}

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '12px 0' }} />

      {!state.analyzing ? (
        <button
          className="btn btn-primary"
          style={{ width: '100%' }}
          onClick={onAnalyze}
          disabled={!state.videoInfo?.path}
        >
          Analyze
        </button>
      ) : (
        <button className="btn btn-danger" style={{ width: '100%' }} onClick={cancelAnalysis}>
          Cancel
        </button>
      )}

      {state.analyzing && (
        <div style={{ marginTop: 8 }}>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${state.progress}%` }} />
          </div>
          <div className="progress-text">
            {state.phase} - {state.progress.toFixed(1)}% ({state.scenesFound} scenes)
          </div>
        </div>
      )}

      {!state.analyzing && state.scenes.length > 0 && (
        <div style={{ marginTop: 8, fontSize: 11, color: 'var(--text-muted)' }}>
          {state.scenes.filter((s) => !s.removed).length} scenes detected
        </div>
      )}

      {state.error && (
        <div
          style={{
            marginTop: 8,
            padding: '8px 10px',
            background: 'rgba(248, 81, 73, 0.15)',
            border: '1px solid rgba(248, 81, 73, 0.4)',
            borderRadius: 4,
            fontSize: 11,
            color: '#f85149',
            cursor: 'pointer',
          }}
          onClick={() => dispatch({ type: 'SET_ERROR', payload: null })}
          title="Click to dismiss"
        >
          {state.error}
        </div>
      )}
    </div>
  );
}
