# CATprep Pro

A complete, self-contained CAT preparation website. Pure HTML/CSS/JS — no build step, no backend. Open `index.html` in a browser or serve the `cat-prep/` folder with GitHub Pages.

## Features

- **🤖 AI Question Solver** (`solver.html`) — submit any CAT question by **typing**, **dictating** (Web Speech API), or **uploading a photo**; get a step-by-step solution plus the fastest exam-hall approach. A second mode analyses **your own answer/solution** like an examiner: verdict, line-by-line critique, ratings, and a revision prescription.
  - Powered by the Claude API called directly from the browser. Requires the user's own Anthropic API key (from [console.anthropic.com](https://console.anthropic.com/)), stored only in the browser's localStorage and sent only to Anthropic.
- **📝 20 Mock Tests** (`mocks.html`) — 5 sectional mocks each for QA, VARC and LRDI (8 questions, 15 min, CAT pace) plus 5 full-length mocks (24 questions, 45 min, VARC→LRDI→QA order). Real exam engine: countdown timer, question palette, mark-for-review, TITA questions, +3/−1 marking, auto-submit on timeout, and a full solutions review. Results saved locally; note the full-length mocks reuse the sectional question bank, so attempt sectionals *or* full-lengths per bank slice for a fresh experience.
- **🧮 Quant Formula Book** (`formulas.html`) — 14 topics covering the entire CAT QA syllabus with exam shortcuts.
- **📚 VARC Command Centre** (`varc.html`) — 100 high-frequency words (searchable, with usage) + strategies for RC, para jumbles, summaries, odd-one-out and vocabulary retention.
- **🧩 LRDI War Room** (`lrdi.html`) — set-selection doctrine and playbooks for every major set type.
- **🗓️ Planner & Tools** (`planner.html`) — study plan generator (from exam date + hours/day + weak section), score→percentile estimator, exam blueprint, persistent revision checklist, and a 40-minute focus timer.
- **📊 Progress tracker** (`index.html`) — every mock attempt (score, accuracy, date) summarised on the dashboard.

## Structure

```
cat-prep/
├── index.html        # dashboard + progress tracker
├── solver.html       # AI solver & answer analyzer
├── mocks.html        # mock list          mock.html  # exam player
├── formulas.html     # quant formula book
├── varc.html         # vocab + VARC strategies
├── lrdi.html         # LRDI strategies
├── planner.html      # planner, predictor, checklist, timer
├── css/style.css
└── js/
    ├── app.js        # nav, storage, Claude API helper
    ├── mock.js       # exam engine
    ├── solver.js     # AI solver logic (vision + dictation)
    └── data/         # qa.js, varc.js, lrdi.js (120 questions with solutions),
                      # vocab.js (100 words), mocks.js (20 mock definitions)
```

All user data (API key, mock results, checklist) lives in `localStorage` — nothing leaves the browser except AI calls, which go straight to Anthropic.
