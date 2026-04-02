// ── Scene Detect UI ──────────────────────────────────────────────────────────

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

// ── State ────────────────────────────────────────────────────────────────────

const state = {
    scenes: [],
    scores: [],
    fps: 30,
    totalFrames: 0,
    videoInfo: null,
    selectedScene: null,
    selectedScenes: new Set(),
    faceView: 'grouped',
    analyzing: false,
    ws: null,
};

// Character colors — deterministic from character ID
function charColor(id) {
    const hues = [210, 120, 0, 280, 50, 330, 170, 30, 250, 90];
    const hue = hues[id % hues.length];
    return `hsl(${hue}, 70%, 55%)`;
}

// ── Init ─────────────────────────────────────────────────────────────────────

async function init() {
    // Fetch video info
    const res = await fetch('/api/video-info');
    state.videoInfo = await res.json();
    $('#video-name').textContent = state.videoInfo.filename +
        ` (${state.videoInfo.width}×${state.videoInfo.height}, ${state.videoInfo.fps.toFixed(1)} fps, ${formatTime(state.videoInfo.duration)})`;

    setupSliders();
    setupButtons();
    setupKeyboard();
    setupDragSelect();

    // Try to load existing results
    const scenesRes = await fetch('/api/scenes');
    const data = await scenesRes.json();
    if (data.scenes && data.scenes.length > 0) {
        state.scenes = data.scenes;
        state.scores = data.all_scores || [];
        state.fps = data.fps;
        state.totalFrames = data.total_frames;
        renderAll();
        setStatus('done', `${state.scenes.length} scenes loaded`);
    }
}

// ── Sliders ──────────────────────────────────────────────────────────────────

function setupSliders() {
    const sliders = [
        ['threshold', 'threshold-val', (v) => parseFloat(v).toFixed(2)],
        ['min-scene-len', 'min-scene-val', (v) => v],
        ['face-confidence', 'face-conf-val', (v) => parseFloat(v).toFixed(2)],
        ['cluster-distance', 'cluster-dist-val', (v) => parseFloat(v).toFixed(2)],
        ['zoom', 'zoom-val', (v) => v],
        ['skip-frames', 'skip-val', (v) => v],
        ['downscale', 'downscale-val', (v) => v],
    ];

    for (const [id, valId, fmt] of sliders) {
        const el = $(`#${id}`);
        const valEl = $(`#${valId}`);
        el.addEventListener('input', () => {
            valEl.textContent = fmt(el.value);
            if (id === 'zoom') {
                document.documentElement.style.setProperty('--thumb-size', el.value + 'px');
            }
        });
    }

    // Toggle face settings visibility
    $('#faces').addEventListener('change', () => {
        const show = $('#faces').checked;
        $$('.face-setting').forEach(el => el.style.display = show ? 'block' : 'none');
    });
}

// ── Buttons ──────────────────────────────────────────────────────────────────

function setupButtons() {
    $('#analyze-btn').addEventListener('click', startAnalysis);
    $('#cancel-btn').addEventListener('click', cancelAnalysis);
    $('#diff-close').addEventListener('click', () => $('#diff-modal').style.display = 'none');

    $('#face-view-flat').addEventListener('click', () => {
        state.faceView = 'flat';
        $('#face-view-flat').classList.add('active');
        $('#face-view-grouped').classList.remove('active');
        renderFacePanel();
    });
    $('#face-view-grouped').addEventListener('click', () => {
        state.faceView = 'grouped';
        $('#face-view-grouped').classList.add('active');
        $('#face-view-flat').classList.remove('active');
        renderFacePanel();
    });
}

// ── WebSocket & Analysis ─────────────────────────────────────────────────────

function startAnalysis() {
    if (state.analyzing) return;
    state.analyzing = true;

    const settings = {
        threshold: parseFloat($('#threshold').value),
        min_scene_len: parseInt($('#min-scene-len').value),
        adaptive: $('#adaptive').checked,
        faces: $('#faces').checked,
        face_confidence: parseFloat($('#face-confidence').value),
        cluster_distance: parseFloat($('#cluster-distance').value),
        skip_frames: parseInt($('#skip-frames').value),
        downscale: parseInt($('#downscale').value),
        threading: $('#threading').checked,
    };

    $('#analyze-btn').style.display = 'none';
    $('#cancel-btn').style.display = '';
    $('#progress-section').style.display = 'block';
    $('#empty-state')?.remove();
    setStatus('analyzing', 'Analyzing...');

    // Clear previous results
    state.scenes = [];
    state.scores = [];
    renderGrid();

    const proto = location.protocol === 'https:' ? 'wss:' : 'ws:';
    const ws = new WebSocket(`${proto}//${location.host}/api/ws`);
    state.ws = ws;

    ws.onopen = () => {
        ws.send(JSON.stringify({ action: 'analyze', settings }));
    };

    ws.onmessage = (e) => {
        const msg = JSON.parse(e.data);

        if (msg.type === 'progress') {
            $('#progress-fill').style.width = msg.percent + '%';
            $('#progress-text').textContent =
                `${msg.percent}% — ${msg.scenes_found} scene${msg.scenes_found !== 1 ? 's' : ''} found`;
        }

        if (msg.type === 'complete') {
            state.scenes = msg.scenes;
            state.scores = msg.scores || [];
            state.fps = msg.fps;
            state.totalFrames = msg.total_frames;
            state.analyzing = false;

            $('#analyze-btn').style.display = '';
            $('#cancel-btn').style.display = 'none';
            $('#progress-section').style.display = 'none';

            renderAll();
            setStatus('done', `${state.scenes.length} scenes detected`);
            ws.close();
        }

        if (msg.type === 'cancelled') {
            state.analyzing = false;
            $('#analyze-btn').style.display = '';
            $('#cancel-btn').style.display = 'none';
            $('#progress-section').style.display = 'none';
            setStatus('', 'Cancelled');
            ws.close();
        }
    };

    ws.onerror = () => {
        state.analyzing = false;
        $('#analyze-btn').style.display = '';
        $('#cancel-btn').style.display = 'none';
        setStatus('', 'Connection error');
    };
}

function cancelAnalysis() {
    if (state.ws) {
        state.ws.send(JSON.stringify({ action: 'cancel' }));
    }
}

// ── Render all ───────────────────────────────────────────────────────────────

function renderAll() {
    renderGrid();
    renderTimeline();
    renderHeatmap();
    renderFacePanel();
}

// ── Scene grid ───────────────────────────────────────────────────────────────

function renderGrid() {
    const grid = $('#scene-grid');
    grid.innerHTML = '';

    const visibleScenes = state.scenes.filter(s => !s.removed);

    if (visibleScenes.length === 0) {
        grid.innerHTML = '<div class="empty-state" id="empty-state"><p>No scenes detected</p></div>';
        return;
    }

    for (const scene of visibleScenes) {
        const card = document.createElement('div');
        card.className = 'scene-card';
        card.dataset.frame = scene.frame;
        if (state.selectedScenes.has(scene.frame)) card.classList.add('selected');

        // Face dots
        let faceDots = '';
        if (scene.faces && scene.faces.length > 0) {
            faceDots = '<div class="scene-card-faces">' +
                scene.faces.map(f => `<div class="face-dot" style="background:${charColor(f.character_id)}"></div>`).join('') +
                '</div>';
        }

        card.innerHTML = `
            <img src="/api/thumbnail/${scene.frame}" alt="Scene at ${scene.timecode}" loading="lazy">
            ${faceDots}
            <div class="scene-card-actions">
                <button class="scene-action-btn" data-action="diff" title="Compare with previous">Diff</button>
                <button class="scene-action-btn" data-action="remove" title="Remove (false positive)">x</button>
            </div>
            <div class="scene-card-info">
                <span class="scene-card-time">${scene.timecode.substring(3, 12)}</span>
                <span class="scene-card-score">${(scene.score * 100).toFixed(0)}%</span>
            </div>
        `;

        // Click to select
        card.addEventListener('click', (e) => {
            if (e.target.closest('.scene-action-btn')) return;
            if (e.shiftKey && state.selectedScene !== null) {
                // Range select
                const frames = visibleScenes.map(s => s.frame);
                const a = frames.indexOf(state.selectedScene);
                const b = frames.indexOf(scene.frame);
                const [start, end] = [Math.min(a, b), Math.max(a, b)];
                for (let i = start; i <= end; i++) {
                    state.selectedScenes.add(frames[i]);
                }
            } else if (e.ctrlKey || e.metaKey) {
                if (state.selectedScenes.has(scene.frame)) {
                    state.selectedScenes.delete(scene.frame);
                } else {
                    state.selectedScenes.add(scene.frame);
                }
            } else {
                state.selectedScenes.clear();
                state.selectedScenes.add(scene.frame);
            }
            state.selectedScene = scene.frame;
            renderGrid();
            highlightTimelineMarker(scene.frame);
        });

        // Action buttons
        card.addEventListener('click', (e) => {
            const btn = e.target.closest('.scene-action-btn');
            if (!btn) return;
            const action = btn.dataset.action;
            if (action === 'diff') showDiff(scene);
            if (action === 'remove') removeScene(scene.frame);
        });

        grid.appendChild(card);
    }
}

// ── Timeline ─────────────────────────────────────────────────────────────────

function renderTimeline() {
    const markers = $('#timeline-markers');
    markers.innerHTML = '';

    const visibleScenes = state.scenes.filter(s => !s.removed);
    if (visibleScenes.length === 0 || state.totalFrames === 0) return;

    for (const scene of visibleScenes) {
        const pct = (scene.frame / state.totalFrames) * 100;
        const marker = document.createElement('div');
        marker.className = 'timeline-marker';
        if (scene.faces && scene.faces.length > 0) marker.classList.add('has-face');
        if (state.selectedScenes.has(scene.frame)) marker.classList.add('selected');
        marker.style.left = `calc(${pct}% - 1px)`;
        marker.dataset.frame = scene.frame;

        // Color by character if face detected
        if (scene.faces && scene.faces.length > 0) {
            marker.style.background = charColor(scene.faces[0].character_id);
        }

        marker.addEventListener('click', () => {
            state.selectedScenes.clear();
            state.selectedScenes.add(scene.frame);
            state.selectedScene = scene.frame;
            renderGrid();
            highlightTimelineMarker(scene.frame);
            // Scroll grid to scene
            const card = $(`.scene-card[data-frame="${scene.frame}"]`);
            if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        marker.addEventListener('mouseenter', (e) => {
            const tip = $('#timeline-tooltip');
            tip.textContent = `${scene.timecode.substring(3, 12)} (score: ${(scene.score * 100).toFixed(0)}%)`;
            tip.style.display = 'block';
            tip.style.left = e.clientX + 'px';
            tip.style.top = (e.clientY - 30) + 'px';
        });

        marker.addEventListener('mouseleave', () => {
            $('#timeline-tooltip').style.display = 'none';
        });

        markers.appendChild(marker);
    }
}

function highlightTimelineMarker(frame) {
    $$('.timeline-marker').forEach(m => {
        m.classList.toggle('selected', parseInt(m.dataset.frame) === frame);
    });
}

// ── Heatmap ──────────────────────────────────────────────────────────────────

function renderHeatmap() {
    const canvas = $('#heatmap-canvas');
    if (!state.scores.length) {
        canvas.width = 0;
        return;
    }

    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 20;
    const ctx = canvas.getContext('2d');

    const max = Math.max(...state.scores, 0.01);
    const w = canvas.width;

    for (let i = 0; i < w; i++) {
        const idx = Math.floor(i / w * state.scores.length);
        const val = state.scores[idx] / max;
        const r = Math.floor(val * 255);
        const b = Math.floor((1 - val) * 120);
        ctx.fillStyle = `rgb(${r}, ${Math.floor(val * 40)}, ${b})`;
        ctx.fillRect(i, 0, 1, 20);
    }
}

// ── Scene diff ───────────────────────────────────────────────────────────────

function showDiff(scene) {
    const idx = state.scenes.indexOf(scene);
    const prevFrame = idx > 0 ? state.scenes[idx - 1].frame : 0;

    $('#diff-prev').src = `/api/frame/${Math.max(0, scene.frame - 1)}`;
    $('#diff-next').src = `/api/frame/${scene.frame}`;
    $('#diff-title').textContent = `Scene Change at ${scene.timecode}`;
    $('#diff-modal').style.display = 'flex';
}

// ── Remove scene ─────────────────────────────────────────────────────────────

async function removeScene(frame) {
    await fetch(`/api/scenes/${frame}`, { method: 'DELETE' });
    const scene = state.scenes.find(s => s.frame === frame);
    if (scene) scene.removed = true;
    state.selectedScenes.delete(frame);
    renderAll();
}

async function restoreScene(frame) {
    await fetch(`/api/scenes/${frame}/restore`, { method: 'POST' });
    const scene = state.scenes.find(s => s.frame === frame);
    if (scene) scene.removed = false;
    renderAll();
}

// ── Face panel ───────────────────────────────────────────────────────────────

function renderFacePanel() {
    const hasFaces = state.scenes.some(s => s.faces && s.faces.length > 0);
    $('#face-panel').style.display = hasFaces ? '' : 'none';
    if (!hasFaces) return;

    const list = $('#face-list');
    list.innerHTML = '';

    // Collect all faces with scene info
    const allFaces = [];
    state.scenes.forEach((scene, si) => {
        if (scene.removed) return;
        (scene.faces || []).forEach((face, fi) => {
            allFaces.push({ ...face, sceneIdx: si, faceIdx: fi, scene });
        });
    });

    if (state.faceView === 'grouped') {
        // Group by character_id
        const groups = {};
        allFaces.forEach(f => {
            const id = f.character_id;
            if (!groups[id]) groups[id] = [];
            groups[id].push(f);
        });

        for (const [charId, faces] of Object.entries(groups).sort((a, b) => a[0] - b[0])) {
            const group = document.createElement('div');
            group.className = 'face-group';
            group.innerHTML = `
                <div class="face-group-header" draggable="true" data-char="${charId}">
                    <div class="face-group-color" style="background:${charColor(parseInt(charId))}"></div>
                    <span>Character #${charId}</span>
                    <span style="margin-left:auto;color:var(--text-muted);font-weight:normal">${faces.length}</span>
                </div>
                <div class="face-group-body">
                    ${faces.map(f => `
                        <img class="face-crop" 
                             src="/api/face-crop/${f.sceneIdx}/${f.faceIdx}"
                             title="Scene ${f.scene.timecode} (${(f.confidence * 100).toFixed(0)}%)"
                             data-scene-idx="${f.sceneIdx}"
                             data-face-idx="${f.faceIdx}"
                             loading="lazy">
                    `).join('')}
                </div>
            `;

            // Click face crop → scroll to that scene
            group.querySelectorAll('.face-crop').forEach(img => {
                img.addEventListener('click', () => {
                    const si = parseInt(img.dataset.sceneIdx);
                    const scene = state.scenes[si];
                    state.selectedScenes.clear();
                    state.selectedScenes.add(scene.frame);
                    state.selectedScene = scene.frame;
                    renderGrid();
                    highlightTimelineMarker(scene.frame);
                    const card = $(`.scene-card[data-frame="${scene.frame}"]`);
                    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                });

                // Context menu for split
                img.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    splitFace(parseInt(img.dataset.sceneIdx), parseInt(img.dataset.faceIdx));
                });
            });

            // Drag & drop for merge
            const header = group.querySelector('.face-group-header');
            header.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', charId);
            });
            group.addEventListener('dragover', (e) => e.preventDefault());
            group.addEventListener('drop', (e) => {
                e.preventDefault();
                const sourceId = parseInt(e.dataTransfer.getData('text/plain'));
                const targetId = parseInt(charId);
                if (sourceId !== targetId) {
                    mergeCharacters(sourceId, targetId);
                }
            });

            list.appendChild(group);
        }
    } else {
        // Flat view
        for (const f of allFaces) {
            const item = document.createElement('div');
            item.className = 'face-flat-item';
            item.innerHTML = `
                <img src="/api/face-crop/${f.sceneIdx}/${f.faceIdx}" loading="lazy">
                <div class="face-flat-info">
                    <strong style="color:${charColor(f.character_id)}">Char #${f.character_id}</strong><br>
                    ${f.scene.timecode.substring(3, 12)} · ${(f.confidence * 100).toFixed(0)}%
                </div>
            `;
            item.addEventListener('click', () => {
                const scene = f.scene;
                state.selectedScenes.clear();
                state.selectedScenes.add(scene.frame);
                renderGrid();
                const card = $(`.scene-card[data-frame="${scene.frame}"]`);
                if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            list.appendChild(item);
        }
    }
}

async function mergeCharacters(sourceId, targetId) {
    await fetch('/api/faces/merge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: sourceId, target: targetId }),
    });
    // Update local state
    for (const scene of state.scenes) {
        for (const face of (scene.faces || [])) {
            if (face.character_id === sourceId) face.character_id = targetId;
        }
    }
    renderAll();
}

async function splitFace(sceneIdx, faceIdx) {
    const res = await fetch('/api/faces/split', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scene_idx: sceneIdx, face_idx: faceIdx }),
    });
    const data = await res.json();
    if (data.ok) {
        state.scenes[sceneIdx].faces[faceIdx].character_id = data.new_character_id;
        renderAll();
    }
}

// ── Keyboard shortcuts ───────────────────────────────────────────────────────

function setupKeyboard() {
    document.addEventListener('keydown', (e) => {
        // Don't trigger in inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        const visibleScenes = state.scenes.filter(s => !s.removed);

        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
            if (visibleScenes.length === 0) return;

            let currentIdx = visibleScenes.findIndex(s => s.frame === state.selectedScene);
            if (e.key === 'ArrowRight') {
                currentIdx = Math.min(currentIdx + 1, visibleScenes.length - 1);
            } else {
                currentIdx = Math.max(currentIdx - 1, 0);
            }

            const scene = visibleScenes[currentIdx];
            state.selectedScenes.clear();
            state.selectedScenes.add(scene.frame);
            state.selectedScene = scene.frame;
            renderGrid();
            highlightTimelineMarker(scene.frame);
            const card = $(`.scene-card[data-frame="${scene.frame}"]`);
            if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        if (e.key === 'Delete' || e.key === 'Backspace') {
            e.preventDefault();
            for (const frame of state.selectedScenes) {
                removeScene(frame);
            }
        }

        if (e.key === 'Escape') {
            $('#diff-modal').style.display = 'none';
            $('#shortcuts-help').style.display = 'none';
            state.selectedScenes.clear();
            state.selectedScene = null;
            renderGrid();
        }

        if (e.key === '?') {
            const help = $('#shortcuts-help');
            help.style.display = help.style.display === 'none' ? '' : 'none';
        }

        if (e.key === ' ') {
            e.preventDefault();
            // Preview: just show the diff for the selected scene
            if (state.selectedScene !== null) {
                const scene = state.scenes.find(s => s.frame === state.selectedScene);
                if (scene) showDiff(scene);
            }
        }
    });
}

// ── Drag selection ───────────────────────────────────────────────────────────

function setupDragSelect() {
    const grid = $('#scene-grid');
    let dragging = false;
    let startX, startY;
    let rect = null;

    grid.addEventListener('mousedown', (e) => {
        if (e.target.closest('.scene-card') || e.button !== 0) return;
        dragging = true;
        startX = e.clientX;
        startY = e.clientY;
        rect = document.createElement('div');
        rect.className = 'selection-rect';
        document.body.appendChild(rect);
    });

    document.addEventListener('mousemove', (e) => {
        if (!dragging || !rect) return;
        const x = Math.min(e.clientX, startX);
        const y = Math.min(e.clientY, startY);
        const w = Math.abs(e.clientX - startX);
        const h = Math.abs(e.clientY - startY);
        rect.style.left = x + 'px';
        rect.style.top = y + 'px';
        rect.style.width = w + 'px';
        rect.style.height = h + 'px';
    });

    document.addEventListener('mouseup', (e) => {
        if (!dragging || !rect) return;
        dragging = false;

        const selRect = rect.getBoundingClientRect();
        rect.remove();
        rect = null;

        if (selRect.width < 5 && selRect.height < 5) return;

        if (!e.ctrlKey && !e.metaKey) {
            state.selectedScenes.clear();
        }

        $$('.scene-card').forEach(card => {
            const r = card.getBoundingClientRect();
            if (r.left < selRect.right && r.right > selRect.left &&
                r.top < selRect.bottom && r.bottom > selRect.top) {
                state.selectedScenes.add(parseInt(card.dataset.frame));
            }
        });
        renderGrid();
    });
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function setStatus(cls, text) {
    const el = $('#status');
    el.className = 'status' + (cls ? ' ' + cls : '');
    el.textContent = text;
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

// ── Resize handling ──────────────────────────────────────────────────────────

window.addEventListener('resize', () => {
    if (state.scores.length > 0) renderHeatmap();
});

// ── Start ────────────────────────────────────────────────────────────────────

init();
