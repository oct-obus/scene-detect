import { useState, useEffect, useRef, useCallback } from 'react';

interface ProfileEntry {
  name: string;
  calls: number;
  total_ms: number;
  avg_ms: number;
  pct: number;
}

export function ProfilerPanel() {
  const [enabled, setEnabled] = useState(false);
  const [entries, setEntries] = useState<ProfileEntry[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchProfile = useCallback(async () => {
    try {
      const res = await fetch('/api/profiler');
      if (!res.ok) return;
      const data = await res.json();
      setEntries(data.entries || []);
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(async (on: boolean) => {
    try {
      await fetch('/api/profiler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled: on }),
      });
      setEnabled(on);
      if (!on) setEntries([]);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (enabled) {
      fetchProfile();
      intervalRef.current = setInterval(fetchProfile, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [enabled, fetchProfile]);

  const exportProfile = useCallback(() => {
    if (entries.length === 0) return;
    const lines = ['Function, Calls, Total (ms), Avg (ms), %'];
    for (const e of entries) {
      lines.push(`${e.name}, ${e.calls}, ${e.total_ms.toFixed(1)}, ${e.avg_ms.toFixed(2)}, ${e.pct.toFixed(1)}%`);
    }
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `profile_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [entries]);

  return (
    <div className="panel-content">
      <div className="checkbox-row" style={{ marginBottom: 8 }}>
        <input
          type="checkbox"
          id="profiler-enable"
          checked={enabled}
          onChange={(e) => toggle(e.target.checked)}
        />
        <label htmlFor="profiler-enable">Enable Profiling</label>
      </div>

      {enabled && entries.length > 0 && (
        <>
          <table className="profiler-table">
            <thead>
              <tr>
                <th>Function</th>
                <th>Calls</th>
                <th>Total</th>
                <th>Avg</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.name}>
                  <td className="profiler-name">{e.name}</td>
                  <td>{e.calls}</td>
                  <td>{e.total_ms.toFixed(0)}ms</td>
                  <td>{e.avg_ms.toFixed(1)}ms</td>
                  <td>
                    <div className="profiler-bar-cell">
                      <div className="profiler-bar" style={{ width: `${Math.min(e.pct, 100)}%` }} />
                      <span>{e.pct.toFixed(0)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn" style={{ marginTop: 8, width: '100%' }} onClick={exportProfile}>
            Export Profile
          </button>
        </>
      )}

      {enabled && entries.length === 0 && (
        <div className="empty-state">
          <div>No profiling data</div>
          <div style={{ fontSize: 11 }}>Run an analysis to collect data</div>
        </div>
      )}

      {!enabled && (
        <div className="empty-state">
          <div>Profiler disabled</div>
          <div style={{ fontSize: 11 }}>Enable to measure function performance</div>
        </div>
      )}
    </div>
  );
}
