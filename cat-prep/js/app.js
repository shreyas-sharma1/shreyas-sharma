/* CATprep Pro — shared app utilities */

const NAV_LINKS = [
  ["index.html", "Dashboard"],
  ["solver.html", "AI Solver"],
  ["mocks.html", "Mocks"],
  ["formulas.html", "Quant Formulas"],
  ["varc.html", "VARC"],
  ["lrdi.html", "LRDI"],
  ["planner.html", "Planner & Tools"],
];

function renderNav() {
  const here = location.pathname.split("/").pop() || "index.html";
  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.innerHTML =
    '<a class="brand" href="index.html">CAT<span>prep</span> Pro</a>' +
    NAV_LINKS.map(
      ([href, label]) =>
        `<a class="navlink${here === href ? " active" : ""}" href="${href}">${label}</a>`
    ).join("");
  document.body.prepend(nav);
}

function renderFooter() {
  const f = document.createElement("footer");
  f.className = "site";
  f.innerHTML =
    "CATprep Pro — built for serious CAT aspirants. Practice honestly, review ruthlessly. All the best!";
  document.body.appendChild(f);
}

/* ---------- localStorage helpers ---------- */
const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem("catprep_" + key);
      return v === null ? fallback : JSON.parse(v);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem("catprep_" + key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem("catprep_" + key);
  },
};

/* Mock results: store.get("results") -> { mockId: {score, max, correct, wrong, skipped, date, answers} } */
function saveMockResult(mockId, result) {
  const all = store.get("results", {});
  all[mockId] = result;
  store.set("results", all);
}
function getMockResult(mockId) {
  return store.get("results", {})[mockId] || null;
}

/* ---------- Claude API (browser direct access) ---------- */
const API_KEY_STORE = "api_key";

function getApiKey() {
  return store.get(API_KEY_STORE, "");
}
function setApiKey(k) {
  store.set(API_KEY_STORE, k.trim());
}

/**
 * Call the Claude API directly from the browser.
 * Requires the user's own Anthropic API key (stored locally in this browser only).
 * content: array of Anthropic content blocks (text / image).
 */
async function askClaude(systemPrompt, content, maxTokens = 4096) {
  const key = getApiKey();
  if (!key) throw new Error("NO_KEY");

  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: "claude-opus-4-8",
      max_tokens: maxTokens,
      thinking: { type: "adaptive" },
      system: systemPrompt,
      messages: [{ role: "user", content }],
    }),
  });

  if (!resp.ok) {
    let msg = "API error (" + resp.status + ")";
    try {
      const err = await resp.json();
      if (err && err.error && err.error.message) msg = err.error.message;
    } catch {}
    throw new Error(msg);
  }

  const data = await resp.json();
  if (data.stop_reason === "refusal") {
    throw new Error("The model declined this request. Try rephrasing the question.");
  }
  return data.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n");
}

/* Very small markdown-ish renderer for AI output (bold + headings only, rest as text). */
function renderAiText(el, text) {
  const esc = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  el.innerHTML = esc
    .replace(/^#{1,4}\s*(.+)$/gm, "<strong>$1</strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function fmtTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();
});
