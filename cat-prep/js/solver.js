/* AI Question Solver & Answer Analyzer (Claude API, browser direct access). */

let imageData = null; // { media_type, data (base64, no prefix) }
let recognition = null;
let dictating = false;
let dictationTarget = null;

function $(id) {
  return document.getElementById(id);
}

const SOLVER_SYSTEM = `You are an expert CAT (Common Admission Test, India) tutor with 15+ years of experience training 99+ percentilers. When given a question (as text and/or an image of the question):
1. Identify the section (QA / VARC / LRDI) and the exact topic.
2. Solve it completely, step by step, showing all working.
3. Then give the FASTEST exam-hall approach (shortcut, elimination, approximation) and roughly how long a well-prepared aspirant should take.
4. End with 2-3 bullet points on the underlying concepts to revise.
If the image is unclear or the question is incomplete, say exactly what is missing instead of guessing. Format your answer with clear headings in plain text and use **bold** for key results.`;

const ANALYZER_SYSTEM = `You are a strict but encouraging CAT (Common Admission Test, India) examiner. You will receive a question and a student's own answer/solution to it. Your job:
1. State clearly whether the student's final answer is CORRECT or INCORRECT (solve the question independently first).
2. Go through the student's reasoning line by line: point out exactly where it is right, where it goes wrong, and any conceptual errors or lucky guesses.
3. Rate the attempt out of 10 on (a) accuracy, (b) method efficiency, (c) exam temperament (would this approach be fast enough in the real CAT?).
4. Show the ideal solution and the fastest alternative approach.
5. Give a short, specific revision prescription (topics + type of practice).
Be honest — do not praise wrong work. Use **bold** for verdicts and key numbers.`;

/* ---------- API key management ---------- */
function refreshKeyUi() {
  const has = !!getApiKey();
  $("key-status").innerHTML = has
    ? '<span class="badge green">API key saved in this browser</span>'
    : '<span class="badge amber">No API key set — AI features are disabled until you add one</span>';
  $("key-panel").open = !has;
}

function saveKey() {
  const v = $("key-input").value.trim();
  if (!v) return alert("Paste your Anthropic API key first.");
  setApiKey(v);
  $("key-input").value = "";
  refreshKeyUi();
}
function clearKey() {
  store.remove("api_key");
  refreshKeyUi();
}

/* ---------- Image upload ---------- */
function handleImage(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const url = reader.result; // data:<type>;base64,<data>
    const [meta, data] = url.split(",");
    imageData = {
      media_type: meta.match(/data:(.*?);/)[1],
      data,
    };
    const img = $("img-preview");
    img.src = url;
    img.style.display = "block";
    $("img-clear").style.display = "inline-block";
  };
  reader.readAsDataURL(file);
}
function clearImage() {
  imageData = null;
  $("img-preview").style.display = "none";
  $("img-clear").style.display = "none";
  $("img-input").value = "";
}

/* ---------- Dictation (Web Speech API) ---------- */
function toggleDictation(targetId, btn) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    alert("Speech recognition is not supported in this browser. Try Chrome or Edge.");
    return;
  }
  if (dictating) {
    recognition.stop();
    return;
  }
  recognition = new SR();
  recognition.lang = "en-IN";
  recognition.continuous = true;
  recognition.interimResults = false;
  dictationTarget = targetId;
  recognition.onresult = (e) => {
    let text = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) text += e.results[i][0].transcript + " ";
    }
    if (text) {
      const ta = $(dictationTarget);
      ta.value = (ta.value ? ta.value.trim() + " " : "") + text.trim();
    }
  };
  recognition.onend = () => {
    dictating = false;
    document.querySelectorAll(".mic-btn").forEach((b) => b.classList.remove("mic-active"));
  };
  recognition.onerror = recognition.onend;
  recognition.start();
  dictating = true;
  btn.classList.add("mic-active");
}

/* ---------- Solve & Analyze ---------- */
function buildQuestionContent(text) {
  const content = [];
  if (imageData) {
    content.push({
      type: "image",
      source: { type: "base64", media_type: imageData.media_type, data: imageData.data },
    });
  }
  if (text) content.push({ type: "text", text });
  return content;
}

async function runAi(btnId, outId, systemPrompt, content) {
  const out = $(outId);
  const btn = $(btnId);
  if (!getApiKey()) {
    out.textContent = "Add your Anthropic API key first (panel at the top of this page).";
    $("key-panel").open = true;
    window.scrollTo(0, 0);
    return;
  }
  btn.disabled = true;
  const orig = btn.innerHTML;
  btn.innerHTML = '<span class="spinner"></span>Thinking…';
  out.textContent = "Working on it — this can take up to a minute for hard questions…";
  try {
    const text = await askClaude(systemPrompt, content, 6000);
    renderAiText(out, text);
  } catch (err) {
    out.textContent =
      err.message === "NO_KEY"
        ? "Add your Anthropic API key first."
        : "Error: " + err.message;
  } finally {
    btn.disabled = false;
    btn.innerHTML = orig;
  }
}

function solveQuestion() {
  const text = $("q-text").value.trim();
  if (!text && !imageData) {
    alert("Type, dictate, or upload a photo of the question first.");
    return;
  }
  const content = buildQuestionContent(
    text || "The question is in the attached image. Read it carefully and solve it."
  );
  runAi("solve-btn", "solve-out", SOLVER_SYSTEM, content);
}

function analyzeAnswer() {
  const qText = $("a-question").value.trim();
  const myAns = $("a-answer").value.trim();
  if ((!qText && !imageData) || !myAns) {
    alert("Provide the question (text or photo above) AND your own answer/solution.");
    return;
  }
  const combined =
    "QUESTION:\n" +
    (qText || "(see attached image)") +
    "\n\nSTUDENT'S ANSWER AND SOLUTION:\n" +
    myAns;
  runAi("analyze-btn", "analyze-out", ANALYZER_SYSTEM, buildQuestionContent(combined));
}

document.addEventListener("DOMContentLoaded", () => {
  refreshKeyUi();
  $("img-input").addEventListener("change", (e) => handleImage(e.target.files[0]));
});
