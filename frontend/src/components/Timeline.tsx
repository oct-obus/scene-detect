import { useEffect, useRef, useCallback, useState } from 'react';
import { useAppContext } from '../store';

export function Timeline() {
  const { state, selectAndSeek } = useAppContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hoverFrame, setHoverFrame] = useState<number | null>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    if (w === 0 || h === 0) return;

    canvas.width = w * window.devicePixelRatio;
    canvas.height = h * window.devicePixelRatio;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.clearRect(0, 0, w, h);

    // Background
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, w, h);

    const scores = state.scores;
    const totalFrames = state.totalFrames;
    if (scores.length === 0 || totalFrames === 0) {
      ctx.fillStyle = '#8b949e';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('No analysis data', w / 2, h / 2);
      return;
    }

    // Draw score heatmap
    const barW = w / scores.length;
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      const intensity = Math.min(score * 3, 1);
      const r = Math.floor(intensity * 255);
      const g = Math.floor((1 - intensity) * 80);
      const b = Math.floor((1 - intensity) * 40);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      const barH = Math.max(1, score * h * 0.8);
      ctx.fillRect(i * barW, h - barH, Math.max(1, barW), barH);
    }

    // Draw scene markers
    const scenes = state.scenes.filter((s) => !s.removed);
    ctx.strokeStyle = '#f85149';
    ctx.lineWidth = 1;
    for (const scene of scenes) {
      const x = (scene.frame / totalFrames) * w;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    // Draw hover indicator
    if (hoverFrame !== null) {
      const x = (hoverFrame / totalFrames) * w;
      ctx.strokeStyle = 'rgba(255,255,255,0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
  }, [state.scores, state.totalFrames, state.scenes, hoverFrame]);

  useEffect(() => {
    draw();
  }, [draw]);

  useEffect(() => {
    const ro = new ResizeObserver(() => draw());
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [draw]);

  const frameFromX = useCallback(
    (clientX: number) => {
      const canvas = canvasRef.current;
      if (!canvas || state.totalFrames === 0) return 0;
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      return Math.round((x / rect.width) * state.totalFrames);
    },
    [state.totalFrames]
  );

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      const frame = frameFromX(e.clientX);
      selectAndSeek(frame);
    },
    [frameFromX, selectAndSeek]
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      setHoverFrame(frameFromX(e.clientX));
    },
    [frameFromX]
  );

  const onMouseLeave = useCallback(() => {
    setHoverFrame(null);
  }, []);

  const formatFrame = (frame: number): string => {
    if (state.fps <= 0) return `${frame}`;
    const sec = frame / state.fps;
    const m = Math.floor(sec / 60);
    const s = (sec % 60).toFixed(1);
    return `${m}:${s.padStart(4, '0')}`;
  };

  return (
    <div className="timeline-container">
      <div
        className="timeline-canvas-wrap"
        ref={wrapRef}
        onClick={onClick}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <canvas ref={canvasRef} />
      </div>
      <div className="timeline-info">
        <span>{state.scenes.filter((s) => !s.removed).length} scenes</span>
        <span>{hoverFrame !== null ? `Frame ${hoverFrame} (${formatFrame(hoverFrame)})` : ''}</span>
        <span>{state.totalFrames > 0 ? `${state.totalFrames} frames` : ''}</span>
      </div>
    </div>
  );
}
