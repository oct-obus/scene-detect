import { useCallback, useEffect, useRef, useState } from 'react';
import { DockviewReact, type DockviewReadyEvent, type DockviewApi } from 'dockview-react';
import 'dockview-react/dist/styles/dockview.css';
import { AppProvider, useAppContext } from './store';
import { VideoPlayer } from './components/VideoPlayer';
import { Timeline } from './components/Timeline';
import { SettingsPanel } from './components/SettingsPanel';
import { ScenePanel } from './components/ScenePanel';
import { FacePanel } from './components/FacePanel';
import { FilePicker } from './components/FilePicker';
import { MenuBar } from './components/MenuBar';
import { ProfilerPanel } from './components/ProfilerPanel';
import * as api from './api';

const components: Record<string, React.FC> = {
  'video-player': VideoPlayer,
  timeline: Timeline,
  settings: SettingsPanel,
  scenes: ScenePanel,
  faces: FacePanel,
  profiler: ProfilerPanel,
};

const ALL_PANELS = [
  { id: 'settings', title: 'Settings' },
  { id: 'video-player', title: 'Video' },
  { id: 'scenes', title: 'Scenes' },
  { id: 'faces', title: 'Faces' },
  { id: 'timeline', title: 'Timeline' },
  { id: 'profiler', title: 'Profiler' },
];

function DockviewApp() {
  const { state, dispatch } = useAppContext();
  const dockviewApiRef = useRef<DockviewApi | null>(null);
  const [panelVisibility, setPanelVisibility] = useState<Record<string, boolean>>({
    settings: true,
    'video-player': true,
    scenes: true,
    faces: true,
    timeline: true,
    profiler: false,
  });

  useEffect(() => {
    api.getVideoInfo().then((info) => {
      if (info.path) {
        dispatch({ type: 'SET_VIDEO_INFO', payload: info });
        api.getScenes().then((data) => {
          dispatch({
            type: 'SET_SCENES',
            payload: { scenes: data.scenes, scores: data.all_scores, fps: data.fps, totalFrames: data.total_frames },
          });
        }).catch(() => {});
      } else {
        dispatch({ type: 'SHOW_FILE_PICKER', payload: true });
      }
    }).catch(() => {
      dispatch({ type: 'SHOW_FILE_PICKER', payload: true });
    });
  }, [dispatch]);

  const setupDefaultLayout = useCallback((dockviewApi: DockviewApi) => {
    const settingsPanel = dockviewApi.addPanel({
      id: 'settings',
      component: 'settings',
      title: 'Settings',
    });

    const videoPanel = dockviewApi.addPanel({
      id: 'video-player',
      component: 'video-player',
      title: 'Video',
      position: { referencePanel: settingsPanel, direction: 'right' },
    });

    dockviewApi.addPanel({
      id: 'timeline',
      component: 'timeline',
      title: 'Timeline',
      position: { referencePanel: videoPanel, direction: 'below' },
    });

    const scenesPanel = dockviewApi.addPanel({
      id: 'scenes',
      component: 'scenes',
      title: 'Scenes',
      position: { referencePanel: videoPanel, direction: 'right' },
    });

    dockviewApi.addPanel({
      id: 'faces',
      component: 'faces',
      title: 'Faces',
      position: { referencePanel: scenesPanel, direction: 'below' },
    });

    settingsPanel.api.setSize({ width: 260 });
    scenesPanel.api.setSize({ width: 240 });
  }, []);

  const onReady = useCallback((event: DockviewReadyEvent) => {
    dockviewApiRef.current = event.api;
    setupDefaultLayout(event.api);
  }, [setupDefaultLayout]);

  const togglePanel = useCallback((panelId: string) => {
    const dockviewApi = dockviewApiRef.current;
    if (!dockviewApi) return;

    const panel = dockviewApi.getPanel(panelId);
    if (panel) {
      dockviewApi.removePanel(panel);
      setPanelVisibility((prev) => ({ ...prev, [panelId]: false }));
    } else {
      const info = ALL_PANELS.find((p) => p.id === panelId);
      if (!info) return;
      dockviewApi.addPanel({
        id: panelId,
        component: panelId,
        title: info.title,
      });
      setPanelVisibility((prev) => ({ ...prev, [panelId]: true }));
    }
  }, []);

  const resetWorkspace = useCallback(() => {
    const dockviewApi = dockviewApiRef.current;
    if (!dockviewApi) return;

    // Remove all panels
    const panels = dockviewApi.panels.slice();
    for (const p of panels) {
      dockviewApi.removePanel(p);
    }

    // Re-add default layout
    setupDefaultLayout(dockviewApi);
    setPanelVisibility({
      settings: true,
      'video-player': true,
      scenes: true,
      faces: true,
      timeline: true,
      profiler: false,
    });
  }, [setupDefaultLayout]);

  const menuPanels = ALL_PANELS.map((p) => ({
    ...p,
    visible: panelVisibility[p.id] ?? false,
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <MenuBar panels={menuPanels} onTogglePanel={togglePanel} onResetWorkspace={resetWorkspace} />
      <div style={{ flex: 1, position: 'relative' }}>
        <DockviewReact
          className="dockview-theme-dark"
          onReady={onReady}
          components={components}
        />
      </div>
      {state.showFilePicker && <FilePicker />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <DockviewApp />
    </AppProvider>
  );
}
