import { useState, useCallback } from 'react';
import { useAppContext } from '../store';
import * as api from '../api';

export function ScenePanel() {
  const { state, selectAndSeek, removeScene, restoreScene } = useAppContext();
  const [zoom, setZoom] = useState(1);

  const onDelete = useCallback(
    async (e: React.MouseEvent, frame: number) => {
      e.stopPropagation();
      await removeScene(frame);
    },
    [removeScene]
  );

  const onRestore = useCallback(
    async (e: React.MouseEvent, frame: number) => {
      e.stopPropagation();
      await restoreScene(frame);
    },
    [restoreScene]
  );

  if (state.scenes.length === 0) {
    return (
      <div className="empty-state">
        <div>No scenes detected</div>
        <div style={{ fontSize: 11 }}>Run analysis to detect scenes</div>
      </div>
    );
  }

  const thumbWidth = Math.round(120 * zoom);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="panel-content" style={{ flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${thumbWidth}px, 1fr))`, gap: 8 }}>
          {state.scenes.map((scene) => (
            <div
              key={scene.frame}
              className={`scene-card${state.selectedScene === scene.frame ? ' active' : ''}${scene.removed ? ' removed' : ''}`}
              onClick={() => selectAndSeek(scene.frame)}
            >
              <img
                src={api.getThumbnailUrl(scene.frame)}
                alt={scene.timecode}
                loading="lazy"
                style={{ aspectRatio: '16/9', objectFit: 'cover' }}
              />
              <div className="scene-card-info">
                <span className="timecode">{scene.timecode}</span>
                <span className="score">{(scene.score * 100).toFixed(0)}%</span>
              </div>
              {!scene.removed ? (
                <button className="delete-btn" onClick={(e) => onDelete(e, scene.frame)} title="Remove scene">
                  X
                </button>
              ) : (
                <button className="restore-btn" onClick={(e) => onRestore(e, scene.frame)} title="Restore scene">
                  +
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="zoom-control">
        <span>Size</span>
        <input
          type="range"
          min={0.5}
          max={2.5}
          step={0.1}
          value={zoom}
          onChange={(e) => setZoom(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
}
