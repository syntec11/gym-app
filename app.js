/* Recomp training log — prototype.
   Plan comes from window.PLAN; logs persist in localStorage per session.
   GitHub sync is phase 2 — Export gives the markdown the repo commit will use. */

const PLAN = window.PLAN;
const storeKey = (sid) => `gymlog-w${PLAN.week}-${sid}`;

function loadLog(sid) {
  try { return JSON.parse(localStorage.getItem(storeKey(sid))) || {}; }
  catch { return {}; }
}
function saveLog(sid, log) {
  localStorage.setItem(storeKey(sid), JSON.stringify(log));
}

/* ---------- state ---------- */

function todaySessionId() {
  const today = new Date().toISOString().slice(0, 10);
  const hit = PLAN.sessions.find(s => s.date === today);
  return (hit || PLAN.sessions[0]).id;
}

let currentId = todaySessionId();
let log = loadLog(currentId);
// log shape: { warmups: {key:true}, ex: { idx: { sets: {i:{done,weight,reps,film,note}}, rpe: n } } }

function exLog(i) {
  log.ex = log.ex || {};
  log.ex[i] = log.ex[i] || { sets: {} };
  return log.ex[i];
}
function setLog(i, s) {
  const e = exLog(i);
  e.sets[s] = e.sets[s] || {};
  return e.sets[s];
}

/* ---------- helpers ---------- */

const session = () => PLAN.sessions.find(s => s.id === currentId);

function prescribed(ex) {
  const w = typeof ex.weight === "number" ? `${ex.weight}${ex.unit}` : ex.weight;
  return `${w} — ${ex.sets} × ${ex.reps}`;
}

function setText(ex, i, s) {
  const sl = setLog(i, s);
  const w = sl.weight ?? ex.weight;
  const r = sl.reps ?? ex.reps;
  const wTxt = typeof w === "number" ? `${w}${ex.unit || "kg"}` : w;
  return `${wTxt} × ${r}`;
}

function exComplete(ex, i) {
  const e = exLog(i);
  for (let s = 0; s < ex.sets; s++) if (!e.sets[s] || !e.sets[s].done) return false;
  if (ex.rpe && e.rpe == null) return false;
  return true;
}

/* ---------- render ---------- */

function render() {
  log = loadLog(currentId);
  renderHeader();
  renderTabs();
  renderSession();
  renderFooter();
}

function renderHeader() {
  document.getElementById("header").innerHTML =
    `<h1>Week ${PLAN.week} — ${session().name}</h1>
     <div class="theme">${PLAN.theme}</div>`;
}

function renderTabs() {
  const today = new Date().toISOString().slice(0, 10);
  const nav = document.getElementById("session-tabs");
  nav.innerHTML = "";
  PLAN.sessions.forEach(s => {
    const b = document.createElement("button");
    b.className = "tab" + (s.id === currentId ? " active" : "") + (s.date === today ? " today" : "");
    const d = new Date(s.date + "T12:00:00");
    b.textContent = d.toLocaleDateString("en-NZ", { weekday: "short" }) + " · " + shortName(s);
    b.onclick = () => { currentId = s.id; render(); window.scrollTo(0, 0); };
    nav.appendChild(b);
  });
}

function shortName(s) {
  return s.name.split("—")[0].trim();
}

function renderSession() {
  const s = session();
  const main = document.getElementById("app");
  main.innerHTML = "";

  if (s.note) main.appendChild(el(`<div class="session-note">${s.note}</div>`));

  if (s.cueCard && PLAN.cueCards[s.cueCard]) {
    main.appendChild(el(
      `<div class="cue-card"><span class="label">Cue card — read between sets</span>${PLAN.cueCards[s.cueCard]}</div>`
    ));
  }

  if (s.lowerWarmup) main.appendChild(warmupBlock(PLAN.lowerWarmup, "protocol"));

  s.exercises.forEach((ex, i) => main.appendChild(exerciseCard(ex, i)));
}

function warmupBlock(wu, keyPrefix) {
  const wrap = el(`<div class="warmup-block"><h3>${wu.name} — ${wu.note}</h3></div>`);
  wu.items.forEach((item, j) => {
    const key = `${keyPrefix}-${j}`;
    const done = log.warmups && log.warmups[key];
    const row = el(
      `<div class="warmup-item${done ? " done" : ""}"><span class="box">${done ? "✓" : ""}</span><span>${item}</span></div>`
    );
    row.onclick = () => {
      log.warmups = log.warmups || {};
      log.warmups[key] = !log.warmups[key];
      saveLog(currentId, log);
      render();
    };
    wrap.appendChild(row);
  });
  return wrap;
}

function exerciseCard(ex, i) {
  const complete = exComplete(ex, i);
  const card = el(`<div class="exercise${complete ? " complete" : ""}"></div>`);

  card.appendChild(el(
    `<h2>${complete ? '<span class="check">✓</span>' : ""}${ex.name}</h2>
     <div class="prescription">${prescribed(ex)}</div>` +
    (ex.note ? `<div class="ex-note">${ex.note}</div>` : "") +
    (ex.film ? `<div class="film-note">🎥 Film: ${ex.film}</div>` : "")
  ));

  if (ex.warmup) {
    card.appendChild(warmupBlockInline(ex, i));
  }

  for (let s = 0; s < ex.sets; s++) card.appendChild(setRow(ex, i, s));

  if (ex.rpe) card.appendChild(rpeBlock(ex, i));

  return card;
}

function warmupBlockInline(ex, i) {
  const wrap = el(`<div class="warmup-block"><h3>Warmup</h3></div>`);
  ex.warmup.forEach((item, j) => {
    const key = `ex${i}-wu${j}`;
    const done = log.warmups && log.warmups[key];
    const row = el(
      `<div class="warmup-item${done ? " done" : ""}"><span class="box">${done ? "✓" : ""}</span><span>${item}</span></div>`
    );
    row.onclick = () => {
      log.warmups = log.warmups || {};
      log.warmups[key] = !log.warmups[key];
      saveLog(currentId, log);
      render();
    };
    wrap.appendChild(row);
  });
  return wrap;
}

function setRow(ex, i, s) {
  const sl = setLog(i, s);
  const wrap = el(`<div></div>`);

  const row = el(
    `<div class="set-row${sl.done ? " done" : ""}">
       <span class="set-label">Set ${s + 1}</span>
       <div class="set-value">${setText(ex, i, s)}</div>
       <div class="set-edit">
         <input class="w" inputmode="decimal" value="${sl.weight ?? ex.weight}">
         <span class="x">×</span>
         <input class="r" inputmode="numeric" value="${sl.reps ?? ex.reps}">
       </div>
       <button class="btn-done">${sl.done ? "✓ Done" : "Done"}</button>
     </div>`
  );

  // Tap the value to edit weight/reps for this set (deviation from plan).
  row.querySelector(".set-value").onclick = () => {
    row.classList.add("editing");
    row.querySelector(".r").focus();
  };

  const commitEdit = () => {
    const wRaw = row.querySelector(".w").value.trim();
    const rRaw = row.querySelector(".r").value.trim();
    sl.weight = wRaw === "" ? ex.weight : (isNaN(Number(wRaw)) ? wRaw : Number(wRaw));
    sl.reps = rRaw === "" ? ex.reps : (isNaN(Number(rRaw)) ? rRaw : Number(rRaw));
    saveLog(currentId, log);
  };

  row.querySelector(".btn-done").onclick = () => {
    if (row.classList.contains("editing")) commitEdit();
    sl.done = !sl.done;
    sl.ts = sl.done ? new Date().toISOString() : undefined;
    saveLog(currentId, log);
    render();
  };

  // extras: film + note + pain chips
  const extras = el(
    `<div class="set-extras">
       <button class="chip cam${sl.film ? " on" : ""}">🎥 filmed</button>
       <button class="chip note-chip${sl.note != null ? " on" : ""}">✎ note</button>
       <button class="chip pain-chip${sl.pain ? " on" : ""}">⚡ pain</button>
     </div>`
  );
  extras.querySelector(".cam").onclick = () => {
    sl.film = !sl.film;
    saveLog(currentId, log);
    render();
  };
  extras.querySelector(".note-chip").onclick = () => {
    if (sl.note == null) { sl.note = ""; } else if (sl.note === "") { sl.note = null; delete sl.note; }
    saveLog(currentId, log);
    render();
    if (sl.note === "") {
      const inp = wrap.querySelector(".note-input");
      if (inp) inp.focus();
    }
  };
  extras.querySelector(".pain-chip").onclick = () => {
    if (sl.pain) { delete sl.pain; }
    else { sl.pain = { site: "", severity: null }; }
    saveLog(currentId, log);
    render();
  };

  wrap.appendChild(row);
  wrap.appendChild(extras);

  if (sl.note != null) {
    const noteInp = el(`<input class="note-input" placeholder="twinge, stop-rep, cue felt right…">`);
    noteInp.value = sl.note;
    noteInp.onchange = () => { sl.note = noteInp.value; saveLog(currentId, log); };
    noteInp.onblur = () => { sl.note = noteInp.value; saveLog(currentId, log); };
    wrap.appendChild(noteInp);
  }

  if (sl.pain) wrap.appendChild(painEditor(sl));

  return wrap;
}

const PAIN_SITES = ["right bicep", "left knee", "right knee", "left heel/Achilles", "lower back"];

function painEditor(sl) {
  const wrap = el(
    `<div class="pain-editor">
       <input class="pain-site" list="pain-sites" placeholder="where?">
       <datalist id="pain-sites">${PAIN_SITES.map(s => `<option value="${s}">`).join("")}</datalist>
       <div class="pain-sev"></div>
     </div>`
  );
  const siteInp = wrap.querySelector(".pain-site");
  siteInp.value = sl.pain.site || "";
  const saveSite = () => { sl.pain.site = siteInp.value.trim(); saveLog(currentId, log); };
  siteInp.onchange = saveSite;
  siteInp.onblur = saveSite;

  const sevRow = wrap.querySelector(".pain-sev");
  [1, 2, 3, 4, 5].forEach(n => {
    const b = el(`<button class="sev-btn${sl.pain.severity === n ? " on" : ""}">${n}</button>`);
    b.onclick = () => {
      saveSite();
      sl.pain.severity = (sl.pain.severity === n) ? null : n;
      saveLog(currentId, log);
      render();
    };
    sevRow.appendChild(b);
  });
  return wrap;
}

function rpeBlock(ex, i) {
  const e = exLog(i);
  const allDone = (() => {
    for (let s = 0; s < ex.sets; s++) if (!e.sets[s] || !e.sets[s].done) return false;
    return true;
  })();

  const wrap = el(`<div class="rpe-block"></div>`);
  wrap.appendChild(el(
    `<div class="rpe-label${e.rpe != null ? " set" : ""}">` +
    (e.rpe != null ? `RPE ${e.rpe} logged` : (allDone ? "RPE — last working set. Required." : "RPE — after your last set")) +
    `</div>`
  ));

  const row = el(`<div class="rpe-row"></div>`);
  [6, 7, 8, 9, 10].forEach(n => {
    const b = el(`<button class="rpe-btn${e.rpe === n ? " on" : ""}">${n}</button>`);
    b.onclick = () => {
      e.rpe = (e.rpe === n) ? null : n;
      saveLog(currentId, log);
      render();
    };
    row.appendChild(b);
  });
  wrap.appendChild(row);
  wrap.appendChild(el(`<div class="rpe-hint">6 easy · 7 smooth (3 RIR) · 8 hard no grind · 9 near limit · 10 max</div>`));
  return wrap;
}

/* ---------- footer / export ---------- */

function renderFooter() {
  const f = document.getElementById("footer");
  f.innerHTML = "";
  const gearBtn = el(`<button style="flex:0 0 56px">⚙︎</button>`);
  gearBtn.onclick = showSettings;
  const resetBtn = el(`<button>Reset session</button>`);
  resetBtn.onclick = () => {
    if (confirm("Clear all logged sets for this session?")) {
      localStorage.removeItem(storeKey(currentId));
      render();
    }
  };
  const finishBtn = el(`<button class="primary">${GH.configured() ? "Finish & Sync" : "Finish & Export"}</button>`);
  finishBtn.onclick = finishSession;
  f.appendChild(gearBtn);
  f.appendChild(resetBtn);
  f.appendChild(finishBtn);
}

function sessionCompleted() {
  return session().exercises.every((ex, i) => exComplete(ex, i));
}

/* Structured log object — the data contract with Kinyoubi.
   Committed to data/workouts/ in the private repo. */
function exportJSON() {
  const s = session();
  return {
    date: new Date().toISOString().slice(0, 10),
    plannedDate: s.date,
    sessionId: s.id,
    sessionName: s.name,
    week: PLAN.week,
    completed: sessionCompleted(),
    exercises: s.exercises.map((ex, i) => {
      const e = exLog(i);
      return {
        name: ex.name,
        prescribed: { weight: ex.weight, unit: ex.unit || null, sets: ex.sets, reps: ex.reps },
        sets: Array.from({ length: ex.sets }, (_, st) => {
          const sl = e.sets[st] || {};
          return {
            weight: sl.weight ?? ex.weight,
            reps: sl.reps ?? ex.reps,
            done: !!sl.done,
            ...(sl.film ? { filmed: true } : {}),
            ...(sl.note ? { note: sl.note } : {}),
            ...(sl.pain && sl.pain.site ? { pain: { site: sl.pain.site, severity: sl.pain.severity } } : {}),
            ...(sl.ts ? { ts: sl.ts } : {})
          };
        }),
        ...(ex.rpe ? { rpe: e.rpe ?? null } : {})
      };
    }),
    warmups: log.warmups || {},
    exportedAt: new Date().toISOString()
  };
}

async function finishSession() {
  const { md, missing } = exportMarkdown();
  if (missing.length && !confirm(`RPE is missing on: ${missing.join(", ")}.\n\nFinish anyway?`)) return;

  if (GH.configured()) {
    const base = `w${PLAN.week}-${session().id}`;
    const btn = document.querySelector("footer .primary");
    btn.textContent = "Syncing…";
    btn.disabled = true;
    try {
      await GH.putFile(`data/workouts/${base}.json`, JSON.stringify(exportJSON(), null, 2), `log: ${base}`);
      await GH.putFile(`logs/${base}.md`, md, `log (md): ${base}`);
      btn.textContent = "Synced ✓";
      setTimeout(render, 1500);
      return;
    } catch (err) {
      alert(`Sync failed: ${err.message}\n\nFalling back to manual export.`);
      render();
    }
  }
  showExport(md);
}

function exportMarkdown() {
  const s = session();
  const lines = [];
  lines.push(`# W${PLAN.week} Log — ${s.name}`);
  lines.push(`**Date:** ${s.date}${s.date === new Date().toISOString().slice(0,10) ? "" : ` (logged ${new Date().toISOString().slice(0,10)})`}`);
  lines.push("");
  const missing = [];

  s.exercises.forEach((ex, i) => {
    const e = exLog(i);
    lines.push(`## ${ex.name}`);
    lines.push(`Prescribed: ${prescribed(ex)}`);
    for (let st = 0; st < ex.sets; st++) {
      const sl = e.sets[st] || {};
      const flags = [];
      if (sl.film) flags.push("🎥 filmed");
      if (sl.pain && sl.pain.site) flags.push(`⚡ PAIN: ${sl.pain.site}${sl.pain.severity ? ` (${sl.pain.severity}/5)` : ""}`);
      if (sl.note) flags.push(`note: ${sl.note}`);
      const flagTxt = flags.length ? ` — ${flags.join("; ")}` : "";
      if (sl.done) lines.push(`- Set ${st + 1}: ${setText(ex, i, st)}${flagTxt}`);
      else lines.push(`- Set ${st + 1}: NOT DONE${flagTxt}`);
    }
    if (ex.rpe) {
      if (e.rpe != null) lines.push(`- **RPE (last set): ${e.rpe}**`);
      else { lines.push(`- **RPE: MISSING**`); missing.push(ex.name); }
    }
    lines.push("");
  });

  if (missing.length) {
    lines.unshift("");
    lines.unshift(`> ⚠️ RPE missing on: ${missing.join(", ")} — Kinyoubi can't make W${PLAN.week + 1} load calls without it.`);
  }
  return { md: lines.join("\n"), missing };
}

function showExport(md) {
  const overlay = el(
    `<div id="export-overlay">
       <div class="panel">
         <strong>Session log (markdown)</strong>
         <textarea readonly></textarea>
         <button class="btn-done" id="copy-btn">Copy to clipboard</button>
         <button class="chip" id="close-btn">Close</button>
       </div>
     </div>`
  );
  overlay.querySelector("textarea").value = md;
  overlay.querySelector("#copy-btn").onclick = async () => {
    try {
      await navigator.clipboard.writeText(md);
      overlay.querySelector("#copy-btn").textContent = "Copied ✓";
    } catch {
      overlay.querySelector("textarea").select();
      document.execCommand("copy");
      overlay.querySelector("#copy-btn").textContent = "Copied ✓";
    }
  };
  overlay.querySelector("#close-btn").onclick = () => overlay.remove();
  document.body.appendChild(overlay);
}

function showSettings() {
  const c = GH.cfg() || {};
  const overlay = el(
    `<div id="export-overlay">
       <div class="panel">
         <strong>GitHub sync</strong>
         <div class="rpe-hint">Fine-grained token, scoped to ONLY the private data repo, Contents read/write. Stored on this device only.</div>
         <input class="note-input gh-inp" id="gh-owner" placeholder="GitHub username" value="${c.owner || ""}">
         <input class="note-input gh-inp" id="gh-repo" placeholder="data repo name (e.g. gym-data)" value="${c.repo || ""}">
         <input class="note-input gh-inp" id="gh-token" type="password" placeholder="fine-grained personal access token" value="${c.token || ""}">
         <div class="rpe-hint" id="gh-test-result"></div>
         <button class="btn-done" id="gh-test">Test connection</button>
         <button class="btn-done" id="gh-save">Save</button>
         <button class="chip" id="close-btn">Close</button>
       </div>
     </div>`
  );
  const saveFields = () => GH.save({
    owner: overlay.querySelector("#gh-owner").value.trim(),
    repo: overlay.querySelector("#gh-repo").value.trim(),
    token: overlay.querySelector("#gh-token").value.trim(),
    branch: "main"
  });
  overlay.querySelector("#gh-test").onclick = async () => {
    saveFields();
    const out = overlay.querySelector("#gh-test-result");
    out.textContent = "Testing…";
    out.textContent = await GH.test();
  };
  overlay.querySelector("#gh-save").onclick = () => {
    saveFields();
    overlay.remove();
    render();
  };
  overlay.querySelector("#close-btn").onclick = () => overlay.remove();
  document.body.appendChild(overlay);
}

/* ---------- util ---------- */

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

render();

if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
