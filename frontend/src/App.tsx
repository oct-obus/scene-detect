import { useCallback, useEffect } from 'react';
import { DockviewReact, type DockviewReadyEvent } from 'dockview-react';
import 'dockview-react/dist/styles/dockview.css';
import { AppProvider, useAppContext } from './store';
import { VideoPlayer } from './components/VideoPlayer';
import { Timeline } from './components/Timeline';
import { SettingsPanel } from './components/SettingsPanel';
import { ScenePanel } from './components/ScenePanel';
import { FacePanel } from './components/FacePanel';
import { FilePicker } from './components/FilePicker';
import * as api from './api';

const components: Record<string, React.FC> = {
  'video-player': VideoPlayer,
  timeline: Timeline,
  settings: SettingsPanel,
  scenes: ScenePanel,
  faces: FacePanel,
};

function DockviewApp() {
  const { state, dispatch } = useAppContext();

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

  const onReady = useCallback((event: DockviewReadyEvent) => {
    const settingsPanel = event.api.addPanel({
      id: 'settings',
      component: 'settings',
      title: 'Settings',
    });

    const videoPanel = event.api.addPanel({
      id: 'video-player',
      component: 'video-player',
      title: 'Video',
      position: { referencePanel: settingsPanel, direction: 'right' },
    });

    event.api.addPanel({
      id: 'timeline',
      component: 'timeline',
      title: 'Timeline',
      position: { referencePanel: videoPanel, direction: 'below' },
    });

    const scenesPanel = event.api.addPanel({
      id: 'scenes',
      component: 'scenes',
      title: 'Scenes',
      position: { referencePanel: videoPanel, direction: 'right' },
    });

    event.api.addPanel({
      id: 'faces',
      component: 'faces',
      title: 'Faces',
      position: { referencePanel: scenesPanel, direction: 'below' },
    });

    // Set proportions
    settingsPanel.api.setSize({ width: 260 });
    scenesPanel.api.setSize({ width: 240 });
  }, []);

  return (
    <>
      <DockviewReact
        className="dockview-theme-dark"
        onReady={onReady}
        components={components}
      />
      {state.showFilePicker && <FilePicker />}
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <DockviewApp />
    </AppProvider>
  );
}
