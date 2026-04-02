import { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '../store';
import * as api from '../api';
import type { BrowseEntry } from '../types';

const VIDEO_EXTENSIONS = new Set([
  '.mp4', '.mkv', '.avi', '.mov', '.webm', '.wmv', '.flv', '.m4v', '.mpg', '.mpeg', '.ts',
]);

function isVideo(name: string): boolean {
  const dot = name.lastIndexOf('.');
  if (dot < 0) return false;
  return VIDEO_EXTENSIONS.has(name.substring(dot).toLowerCase());
}

function formatSize(bytes?: number): string {
  if (bytes === undefined) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

export function FilePicker() {
  const { loadVideo, dispatch } = useAppContext();
  const [path, setPath] = useState(() => localStorage.getItem('lastDir') || '~');
  const [entries, setEntries] = useState<BrowseEntry[]>([]);
  const [currentPath, setCurrentPath] = useState('');
  const [parentPath, setParentPath] = useState('');
  const [error, setError] = useState('');
  const [inputPath, setInputPath] = useState(() => localStorage.getItem('lastVideo') || '');
  const [loading, setLoading] = useState(false);

  const browse = useCallback(async (dir: string) => {
    try {
      setError('');
      const result = await api.browse(dir);
      setCurrentPath(result.path);
      setParentPath(result.parent);
      setEntries(result.entries.filter((e) => e.type === 'dir' || isVideo(e.name)));
      localStorage.setItem('lastDir', result.path);
    } catch (err) {
      setError(String(err));
    }
  }, []);

  useEffect(() => {
    browse(path);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onOpen = useCallback(async () => {
    if (!inputPath.trim()) return;
    setLoading(true);
    setError('');
    try {
      await loadVideo(inputPath.trim());
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, [inputPath, loadVideo]);

  const onClickEntry = useCallback(
    async (entry: BrowseEntry) => {
      if (entry.type === 'dir') {
        browse(entry.path);
      } else {
        setInputPath(entry.path);
        setLoading(true);
        setError('');
        try {
          await loadVideo(entry.path);
        } catch (err: unknown) {
          setError(err instanceof Error ? err.message : String(err));
        } finally {
          setLoading(false);
        }
      }
    },
    [browse, loadVideo]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') onOpen();
    },
    [onOpen]
  );

  return (
    <div className="file-picker-overlay" onClick={() => dispatch({ type: 'SHOW_FILE_PICKER', payload: false })}>
      <div className="file-picker" onClick={(e) => e.stopPropagation()}>
        <div className="file-picker-header">
          <input
            className="input"
            placeholder="Path to video file..."
            value={inputPath}
            onChange={(e) => setInputPath(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button className="btn btn-primary" onClick={onOpen} disabled={loading || !inputPath.trim()}>
            Open
          </button>
        </div>

        <div className="file-picker-path">{currentPath}</div>

        {error && <div className="file-picker-error">{error}</div>}

        <div className="file-picker-list">
          {parentPath && (
            <div className="file-picker-item" onClick={() => browse(parentPath)}>
              <span className="icon">..</span>
              <span className="name">(parent directory)</span>
            </div>
          )}
          {entries.map((entry) => (
            <div key={entry.path} className="file-picker-item" onClick={() => onClickEntry(entry)}>
              <span className="icon">{entry.type === 'dir' ? '/' : '#'}</span>
              <span className="name">{entry.name}</span>
              {entry.size !== undefined && <span className="size">{formatSize(entry.size)}</span>}
            </div>
          ))}
          {entries.length === 0 && !error && (
            <div style={{ padding: '12px', color: 'var(--text-muted)', textAlign: 'center', fontSize: 12 }}>
              No video files found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
