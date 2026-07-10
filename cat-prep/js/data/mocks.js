/* Mock definitions. Sectional mocks: 8 questions, 15 minutes (CAT pace ≈ 1.8 min/question).
   Full-length mocks: 24 questions (8 VARC + 8 LRDI + 8 QA), 45 minutes, section order as in CAT.
   Questions reference the banks in qa.js / varc.js / lrdi.js by index.
   Scoring: MCQ +3 / −1, TITA +3 / 0. */

function slice8(bank, mockNum) {
  const start = (mockNum - 1) * 8;
  return Array.from({ length: 8 }, (_, i) => ({ bank, idx: start + i }));
}

const MOCKS = [];

const SECTION_META = {
  qa: { name: "Quantitative Ability", short: "QA" },
  varc: { name: "Verbal Ability & RC", short: "VARC" },
  lrdi: { name: "Logical Reasoning & DI", short: "LRDI" },
};

for (let i = 1; i <= 5; i++) {
  MOCKS.push({
    id: "varc-" + i,
    title: "VARC Sectional Mock " + i,
    kind: "sectional",
    section: "VARC",
    duration: 15 * 60,
    questions: slice8("varc", i),
  });
}
for (let i = 1; i <= 5; i++) {
  MOCKS.push({
    id: "lrdi-" + i,
    title: "LRDI Sectional Mock " + i,
    kind: "sectional",
    section: "LRDI",
    duration: 15 * 60,
    questions: slice8("lrdi", i),
  });
}
for (let i = 1; i <= 5; i++) {
  MOCKS.push({
    id: "qa-" + i,
    title: "Quant Sectional Mock " + i,
    kind: "sectional",
    section: "QA",
    duration: 15 * 60,
    questions: slice8("qa", i),
  });
}
for (let i = 1; i <= 5; i++) {
  MOCKS.push({
    id: "fl-" + i,
    title: "Full-Length Mock " + i,
    kind: "full",
    section: "Full",
    duration: 45 * 60,
    questions: [...slice8("varc", i), ...slice8("lrdi", i), ...slice8("qa", i)],
  });
}

function getMockById(id) {
  return MOCKS.find((m) => m.id === id) || null;
}

function getBankQuestion(ref) {
  const banks = { qa: QA, varc: VARC, lrdi: LRDI };
  return banks[ref.bank][ref.idx];
}

function getContext(ref) {
  const q = getBankQuestion(ref);
  if (ref.bank === "varc" && q.p) return VARC_PASSAGES[q.p];
  if (ref.bank === "lrdi" && q.p) return LRDI_SETS[q.p];
  return null;
}
