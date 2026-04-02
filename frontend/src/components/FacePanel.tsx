import { useState, useMemo } from 'react';
import { useAppContext } from '../store';
import * as api from '../api';

const CHARACTER_COLORS = [
  '#58a6ff', '#f0883e', '#a371f7', '#3fb950', '#f85149',
  '#d2a8ff', '#79c0ff', '#ffa657', '#7ee787', '#ff7b72',
  '#d29922', '#56d4dd', '#bc8cff', '#e3b341', '#db61a2',
];

function getCharColor(id: number): string {
  return CHARACTER_COLORS[id % CHARACTER_COLORS.length];
}

export function FacePanel() {
  const { state, selectAndSeek } = useAppContext();
  const [viewMode, setViewMode] = useState<'all' | 'grouped'>('grouped');

  const allFaces = useMemo(() => {
    const faces: { sceneIdx: number; faceIdx: number; face: (typeof state.scenes)[0]['faces'][0]; scene: (typeof state.scenes)[0] }[] = [];
    state.scenes.forEach((scene, sceneIdx) => {
      if (scene.removed) return;
      scene.faces?.forEach((face, faceIdx) => {
        faces.push({ sceneIdx, faceIdx, face, scene });
      });
    });
    return faces;
  }, [state.scenes]);

  const grouped = useMemo(() => {
    const groups = new Map<number, typeof allFaces>();
    for (const entry of allFaces) {
      const id = entry.face.character_id;
      if (!groups.has(id)) groups.set(id, []);
      groups.get(id)!.push(entry);
    }
    return Array.from(groups.entries()).sort((a, b) => a[0] - b[0]);
  }, [allFaces]);

  if (allFaces.length === 0) {
    return (
      <div className="empty-state">
        <div>No faces detected</div>
        <div style={{ fontSize: 11 }}>Enable face detection in settings</div>
      </div>
    );
  }

  return (
    <div className="panel-content">
      <div className="face-toggle">
        <button className={viewMode === 'grouped' ? 'active' : ''} onClick={() => setViewMode('grouped')}>
          Grouped
        </button>
        <button className={viewMode === 'all' ? 'active' : ''} onClick={() => setViewMode('all')}>
          All
        </button>
      </div>

      {viewMode === 'grouped'
        ? grouped.map(([charId, faces]) => (
            <div key={charId}>
              <div className="face-group-header">
                <span className="face-color-dot" style={{ background: getCharColor(charId) }} />
                <span>Character {charId}</span>
                <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({faces.length})</span>
              </div>
              <div className="face-grid">
                {faces.map((entry) => (
                  <div
                    key={`${entry.sceneIdx}-${entry.faceIdx}`}
                    className="face-crop"
                    style={{ borderColor: getCharColor(charId) }}
                    onClick={() => selectAndSeek(entry.scene.frame)}
                    title={`Scene ${entry.sceneIdx}, ${entry.scene.timecode}`}
                  >
                    <img src={api.getFaceCropUrl(entry.sceneIdx, entry.faceIdx)} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))
        : (
          <div className="face-grid">
            {allFaces.map((entry) => (
              <div
                key={`${entry.sceneIdx}-${entry.faceIdx}`}
                className="face-crop"
                style={{ borderColor: getCharColor(entry.face.character_id) }}
                onClick={() => selectAndSeek(entry.scene.frame)}
                title={`Character ${entry.face.character_id}, ${entry.scene.timecode}`}
              >
                <img src={api.getFaceCropUrl(entry.sceneIdx, entry.faceIdx)} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        )}
    </div>
  );
}
