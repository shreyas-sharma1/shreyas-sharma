/* Mock exam player: timer, palette, navigation, scoring, review. */

let mock = null;
let cur = 0;
let answers = []; // per question: null | option index (mcq) | string (tita)
let marked = [];
let secondsLeft = 0;
let timerHandle = null;
let submitted = false;

function $(id) {
  return document.getElementById(id);
}

function initMock() {
  const id = new URLSearchParams(location.search).get("id");
  mock = getMockById(id);
  if (!mock) {
    $("player").innerHTML =
      '<div class="notice warn">Mock not found. <a href="mocks.html">Back to mock list</a></div>';
    return;
  }
  answers = mock.questions.map(() => null);
  marked = mock.questions.map(() => false);
  secondsLeft = mock.duration;
  $("mock-title").textContent = mock.title;

  timerHandle = setInterval(() => {
    secondsLeft--;
    const t = $("timer");
    t.textContent = fmtTime(Math.max(0, secondsLeft));
    if (secondsLeft <= 120) t.classList.add("low");
    if (secondsLeft <= 0) {
      clearInterval(timerHandle);
      submitMock(true);
    }
  }, 1000);
  $("timer").textContent = fmtTime(secondsLeft);

  renderQuestion();
  renderPalette();
}

function sectionLabel(i) {
  if (mock.kind !== "full") return mock.section;
  return i < 8 ? "VARC" : i < 16 ? "LRDI" : "QA";
}

function renderQuestion() {
  const ref = mock.questions[cur];
  const q = getBankQuestion(ref);
  const ctx = getContext(ref);
  let html = `<div class="badge">${sectionLabel(cur)} · Q${cur + 1} of ${mock.questions.length}${
    q.type === "tita" ? " · TITA (no negative marking)" : ""
  }</div>`;
  if (ctx) html += `<div class="passage-box">${escapeHtml(ctx)}</div>`;
  html += `<div class="q-text">${escapeHtml(q.q)}</div>`;

  if (q.type === "mcq") {
    html += q.options
      .map(
        (opt, i) => `
      <div class="option ${answers[cur] === i ? "selected" : ""}" onclick="chooseOption(${i})">
        <input type="radio" name="opt" ${answers[cur] === i ? "checked" : ""}>
        <div>${escapeHtml(opt)}</div>
      </div>`
      )
      .join("");
  } else {
    html += `<label class="field-label">Your answer (type a number/value)</label>
      <input type="text" id="tita-input" value="${answers[cur] !== null ? escapeHtml(answers[cur]) : ""}"
        oninput="answers[cur] = this.value.trim() || null; renderPalette();" style="max-width:240px">`;
  }

  html += `<div style="margin-top:20px; display:flex; gap:10px; flex-wrap:wrap;">
    <button class="btn secondary" onclick="nav(-1)" ${cur === 0 ? "disabled" : ""}>◀ Previous</button>
    <button class="btn secondary" onclick="toggleMark()">${marked[cur] ? "Unmark" : "Mark for review"}</button>
    <button class="btn secondary" onclick="clearAnswer()">Clear response</button>
    <button class="btn" onclick="nav(1)" ${cur === mock.questions.length - 1 ? "disabled" : ""}>Save & Next ▶</button>
  </div>`;

  $("qarea").innerHTML = html;
}

function chooseOption(i) {
  answers[cur] = answers[cur] === i ? null : i;
  renderQuestion();
  renderPalette();
}
function nav(d) {
  cur = Math.min(mock.questions.length - 1, Math.max(0, cur + d));
  renderQuestion();
  renderPalette();
}
function jumpTo(i) {
  cur = i;
  renderQuestion();
  renderPalette();
}
function toggleMark() {
  marked[cur] = !marked[cur];
  renderQuestion();
  renderPalette();
}
function clearAnswer() {
  answers[cur] = null;
  renderQuestion();
  renderPalette();
}

function renderPalette() {
  $("palette").innerHTML = mock.questions
    .map((_, i) => {
      let cls = "pal-btn";
      if (answers[i] !== null) cls += " answered";
      else if (marked[i]) cls += " marked";
      if (i === cur) cls += " current";
      return `<button class="${cls}" onclick="jumpTo(${i})">${i + 1}</button>`;
    })
    .join("");
  const attempted = answers.filter((a) => a !== null).length;
  $("pal-stats").textContent = `${attempted}/${mock.questions.length} attempted`;
}

function submitMock(auto = false) {
  if (submitted) return;
  if (!auto && !confirm("Submit the mock? You cannot change answers after this.")) return;
  submitted = true;
  clearInterval(timerHandle);

  let score = 0,
    correct = 0,
    wrong = 0,
    skipped = 0;
  mock.questions.forEach((ref, i) => {
    const q = getBankQuestion(ref);
    const a = answers[i];
    if (a === null) {
      skipped++;
      return;
    }
    const isCorrect =
      q.type === "mcq" ? a === q.ans : normalize(a) === normalize(q.ans);
    if (isCorrect) {
      correct++;
      score += 3;
    } else {
      wrong++;
      if (q.type === "mcq") score -= 1;
    }
  });
  const max = mock.questions.length * 3;
  const result = {
    score,
    max,
    correct,
    wrong,
    skipped,
    date: new Date().toISOString().slice(0, 10),
    answers,
  };
  saveMockResult(mock.id, result);
  renderResult(result, auto);
}

function normalize(v) {
  return String(v).trim().toLowerCase().replace(/^0+(?=\d)/, "");
}

function accuracyOf(r) {
  const att = r.correct + r.wrong;
  return att === 0 ? 0 : Math.round((r.correct / att) * 100);
}

function renderResult(r, auto) {
  const acc = accuracyOf(r);
  let html = `
    <h2 class="section-title">${auto ? "Time's up — auto-submitted." : "Result"}</h2>
    <div class="table-scroll"><table class="data">
      <tr><th>Score</th><th>Correct</th><th>Wrong</th><th>Skipped</th><th>Accuracy</th></tr>
      <tr>
        <td><strong>${r.score} / ${r.max}</strong></td>
        <td>${r.correct}</td><td>${r.wrong}</td><td>${r.skipped}</td><td>${acc}%</td>
      </tr>
    </table></div>
    <p style="color:var(--text-dim); font-size:0.9rem;">Marking: MCQ +3/−1 · TITA +3/0. Review every question below — especially the ones you got wrong or skipped.</p>
    <h2 class="section-title">Solutions & Review</h2>`;

  mock.questions.forEach((ref, i) => {
    const q = getBankQuestion(ref);
    const ctx = getContext(ref);
    const a = answers[i];
    const isCorrect =
      a !== null && (q.type === "mcq" ? a === q.ans : normalize(a) === normalize(q.ans));
    const status =
      a === null
        ? '<span class="badge amber">Skipped</span>'
        : isCorrect
          ? '<span class="badge green">Correct +3</span>'
          : `<span class="badge red">Wrong ${q.type === "mcq" ? "−1" : "0"}</span>`;

    html += `<div class="card" style="margin-bottom:14px;">
      <div>${status} <span class="badge">${sectionLabel(i)} · Q${i + 1}</span></div>`;
    if (ctx)
      html += `<details style="margin:8px 0;"><summary style="cursor:pointer;color:var(--text-dim);font-size:0.85rem;">Show passage / set</summary><div class="passage-box" style="margin-top:8px;">${escapeHtml(ctx)}</div></details>`;
    html += `<div class="q-text" style="margin-top:8px;">${escapeHtml(q.q)}</div>`;

    if (q.type === "mcq") {
      html += q.options
        .map((opt, oi) => {
          let cls = "option";
          if (oi === q.ans) cls += " correct";
          else if (a === oi) cls += " wrong";
          return `<div class="${cls}"><div>${escapeHtml(opt)}${oi === q.ans ? " ✓" : a === oi ? " ✗ (your answer)" : ""}</div></div>`;
        })
        .join("");
    } else {
      html += `<p><strong>Correct answer:</strong> ${escapeHtml(q.ans)}${
        a !== null ? ` · <strong>Your answer:</strong> ${escapeHtml(a)}` : ""
      }</p>`;
    }
    html += `<div class="solution-box"><strong>Solution:</strong> ${escapeHtml(q.sol)}</div></div>`;
  });

  html += `<div style="margin-top:20px;"><a class="btn" href="mocks.html">Back to Mocks</a>
    <a class="btn secondary" href="mock.html?id=${mock.id}" style="margin-left:8px;">Retake this mock</a></div>`;

  $("player").innerHTML = html;
  window.scrollTo(0, 0);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

document.addEventListener("DOMContentLoaded", initMock);
