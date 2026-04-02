import React, { createContext, useContext, useReducer, useCallback, useRef, type ReactNode } from 'react';
import type { VideoInfo, SceneChange, AnalysisSettings, WSMessage } from './types';
import * as api from './api';

interface AppState {
  videoInfo: VideoInfo | null;
  scenes: SceneChange[];
  scores: number[];
  fps: number;
  totalFrames: number;
  analyzing: boolean;
  phase: string;
  progress: number;
  scenesFound: number;
  selectedScene: number | null;
  seekToFrame: number | null;
  showFilePicker: boolean;
}

type Action =
  | { type: 'SET_VIDEO_INFO'; payload: VideoInfo }
  | { type: 'SET_SCENES'; payload: { scenes: SceneChange[]; scores: number[]; fps: number; totalFrames: number } }
  | { type: 'SET_ANALYZING'; payload: boolean }
  | { type: 'SET_PROGRESS'; payload: { phase: string; progress: number; scenesFound: number } }
  | { type: 'SELECT_SCENE'; payload: number | null }
  | { type: 'SEEK_TO_FRAME'; payload: number | null }
  | { type: 'UPDATE_SCENE'; payload: { frame: number; changes: Partial<SceneChange> } }
  | { type: 'SHOW_FILE_PICKER'; payload: boolean }
  | { type: 'RESET_ANALYSIS' };

const initialState: AppState = {
  videoInfo: null,
  scenes: [],
  scores: [],
  fps: 30,
  totalFrames: 0,
  analyzing: false,
  phase: '',
  progress: 0,
  scenesFound: 0,
  selectedScene: null,
  seekToFrame: null,
  showFilePicker: false,
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_VIDEO_INFO':
      return { ...state, videoInfo: action.payload, showFilePicker: false };
    case 'SET_SCENES':
      return {
        ...state,
        scenes: action.payload.scenes,
        scores: action.payload.scores,
        fps: action.payload.fps,
        totalFrames: action.payload.totalFrames,
      };
    case 'SET_ANALYZING':
      return { ...state, analyzing: action.payload };
    case 'SET_PROGRESS':
      return {
        ...state,
        phase: action.payload.phase,
        progress: action.payload.progress,
        scenesFound: action.payload.scenesFound,
      };
    case 'SELECT_SCENE':
      return { ...state, selectedScene: action.payload };
    case 'SEEK_TO_FRAME':
      return { ...state, seekToFrame: action.payload };
    case 'UPDATE_SCENE': {
      const scenes = state.scenes.map((s) =>
        s.frame === action.payload.frame ? { ...s, ...action.payload.changes } : s
      );
      return { ...state, scenes };
    }
    case 'SHOW_FILE_PICKER':
      return { ...state, showFilePicker: action.payload };
    case 'RESET_ANALYSIS':
      return { ...state, analyzing: false, phase: '', progress: 0, scenesFound: 0 };
    default:
      return state;
  }
}

interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  loadVideo: (path: string) => Promise<void>;
  loadScenes: () => Promise<void>;
  startAnalysis: (settings: AnalysisSettings) => void;
  cancelAnalysis: () => void;
  removeScene: (frame: number) => Promise<void>;
  restoreScene: (frame: number) => Promise<void>;
  selectAndSeek: (frame: number) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const wsRef = useRef<WebSocket | null>(null);

  const loadVideo = useCallback(async (path: string) => {
    const info = await api.setVideo(path);
    dispatch({ type: 'SET_VIDEO_INFO', payload: info });
    localStorage.setItem('lastVideo', path);
    localStorage.setItem('lastDir', path.substring(0, path.lastIndexOf('/')));
  }, []);

  const loadScenes = useCallback(async () => {
    const data = await api.getScenes();
    dispatch({
      type: 'SET_SCENES',
      payload: { scenes: data.scenes, scores: data.all_scores, fps: data.fps, totalFrames: data.total_frames },
    });
  }, []);

  const startAnalysis = useCallback((settings: AnalysisSettings) => {
    dispatch({ type: 'SET_ANALYZING', payload: true });
    dispatch({ type: 'SET_PROGRESS', payload: { phase: 'Starting...', progress: 0, scenesFound: 0 } });

    const ws = api.createWS();
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({ action: 'analyze', settings }));
    };

    ws.onmessage = (event) => {
      const msg: WSMessage = JSON.parse(event.data);
      switch (msg.type) {
        case 'progress':
          dispatch({
            type: 'SET_PROGRESS',
            payload: { phase: msg.phase || 'Analyzing', progress: msg.percent, scenesFound: msg.scenes_found },
          });
          break;
        case 'complete':
          dispatch({
            type: 'SET_SCENES',
            payload: { scenes: msg.scenes, scores: msg.scores, fps: msg.fps, totalFrames: msg.total_frames },
          });
          dispatch({ type: 'RESET_ANALYSIS' });
          ws.close();
          break;
        case 'cancelled':
          dispatch({ type: 'RESET_ANALYSIS' });
          ws.close();
          break;
        case 'error':
          dispatch({ type: 'RESET_ANALYSIS' });
          ws.close();
          break;
      }
    };

    ws.onerror = () => {
      dispatch({ type: 'RESET_ANALYSIS' });
    };

    ws.onclose = () => {
      wsRef.current = null;
    };
  }, []);

  const cancelAnalysis = useCallback(() => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ action: 'cancel' }));
    }
  }, []);

  const removeSceneFn = useCallback(async (frame: number) => {
    await api.removeScene(frame);
    dispatch({ type: 'UPDATE_SCENE', payload: { frame, changes: { removed: true } } });
  }, []);

  const restoreSceneFn = useCallback(async (frame: number) => {
    await api.restoreScene(frame);
    dispatch({ type: 'UPDATE_SCENE', payload: { frame, changes: { removed: false } } });
  }, []);

  const selectAndSeek = useCallback((frame: number) => {
    dispatch({ type: 'SELECT_SCENE', payload: frame });
    dispatch({ type: 'SEEK_TO_FRAME', payload: frame });
  }, []);

  const value: AppContextValue = {
    state,
    dispatch,
    loadVideo,
    loadScenes,
    startAnalysis,
    cancelAnalysis,
    removeScene: removeSceneFn,
    restoreScene: restoreSceneFn,
    selectAndSeek,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
