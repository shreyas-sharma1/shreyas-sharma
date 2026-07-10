/* LRDI question bank — 10 sets x 4 questions = 40 (5 sectional mocks x 8).
   p = key into LRDI_SETS (the set/caselet text shown alongside each question). */

const LRDI_SETS = {
  s1: `LINEAR ARRANGEMENT
Five people — A, B, C, D and E — sit in a row facing north.
• C sits at the extreme left end.
• A sits immediately to the left of B.
• D sits immediately to the right of B.
• E sits at the extreme right end.`,

  s2: `SALES TABLE
Units sold by a company for four products in 2023 and 2024:

Product | 2023 | 2024
P       | 200  | 250
Q       | 300  | 270
R       | 150  | 210
S       | 350  | 320`,

  s3: `CIRCULAR ARRANGEMENT
Six friends — P, Q, R, S, T and U — sit around a circular table, all facing the centre.
• P sits directly opposite S.
• Q sits immediately clockwise of P.
• R sits adjacent to both S and T.
• U sits adjacent to both Q and S.
(The clockwise order works out to: P, Q, U, S, R, T.)`,

  s4: `RAINFALL DATA
Monthly rainfall (in mm) recorded in a city:
June 120, July 300, August 260, September 170, October 50.
(Total for the five months = 900 mm.)`,

  s5: `TEAM SELECTION
A 3-member team is to be selected from six players: two wicketkeepers (W1, W2), three batsmen (B1, B2, B3) and one bowler (Bo).
Rule: the team must contain exactly one wicketkeeper and at least one batsman.`,

  s6: `PROFESSIONS PUZZLE
Four friends — Anil, Bela, Chetan and Divya — have four different professions: doctor, engineer, lawyer and teacher.
• Anil is neither the doctor nor the lawyer.
• Bela is the teacher.
• Chetan is the lawyer.`,

  s7: `TOURNAMENT
Four teams — A, B, C and D — play a round-robin tournament (each team plays every other team exactly once; 6 matches in total). A win earns 2 points, a draw 1 point, a loss 0.
• A won all three of its matches.
• B drew with both C and D.
• C beat D.`,

  s8: `COLLEGE CASELET
A college has 1,200 students. 30% study Science, 45% study Commerce, and the rest study Arts.
Among Science students, 60% are boys.`,

  s9: `BEVERAGE SURVEY
In a survey of 100 students: 60 like tea, 50 like coffee, and 20 like both tea and coffee.`,

  s10: `LECTURE SCHEDULE
Five lectures — M, N, O, P and Q — are held Monday to Friday, one per day.
• N is on Wednesday.
• M is held on the day immediately before N.
• Q is on Friday.
• O is held earlier in the week than P.`,
};

const LRDI = [
  /* ---- Set 1 (Mock 1) — arrangement: C A B D E ---- */
  { p: "s1", type: "mcq", q: "Who sits exactly in the middle of the row?",
    options: ["A", "B", "D", "E"], ans: 1,
    sol: "From the clues the row (left to right) is C, A, B, D, E. The middle (3rd) position is B." },
  { p: "s1", type: "mcq", q: "Who sits second from the left end?",
    options: ["A", "B", "C", "D"], ans: 0,
    sol: "Row: C, A, B, D, E. Second from left is A." },
  { p: "s1", type: "mcq", q: "Who are the immediate neighbours of D?",
    options: ["A and B", "B and E", "C and E", "A and E"], ans: 1,
    sol: "Row: C, A, B, D, E. D sits between B and E." },
  { p: "s1", type: "mcq", q: "How many people sit between C and D?",
    options: ["1", "2", "3", "4"], ans: 1,
    sol: "Row: C, A, B, D, E. Between C (1st) and D (4th) sit A and B — 2 people." },

  /* ---- Set 2 (Mock 1) — sales table ---- */
  { p: "s2", type: "mcq", q: "Which product recorded the highest percentage growth from 2023 to 2024?",
    options: ["P", "Q", "R", "S"], ans: 2,
    sol: "P: +25%, Q: −10%, R: +60/150 = +40%, S: −8.6%. R has the highest growth." },
  { p: "s2", type: "tita", q: "The total units sold across all four products in 2024 is:",
    ans: "1050",
    sol: "250 + 270 + 210 + 320 = 1050 units." },
  { p: "s2", type: "mcq", q: "The percentage decline in sales of product Q from 2023 to 2024 is:",
    options: ["8%", "10%", "12%", "15%"], ans: 1,
    sol: "Decline = 30 on a base of 300 = 10%." },
  { p: "s2", type: "mcq", q: "The ratio of P's 2023 sales to S's 2024 sales is:",
    options: ["5 : 8", "2 : 3", "5 : 7", "4 : 7"], ans: 0,
    sol: "200 : 320 = 5 : 8." },

  /* ---- Set 3 (Mock 2) — circular: clockwise P,Q,U,S,R,T ---- */
  { p: "s3", type: "mcq", q: "Who sits directly opposite Q?",
    options: ["R", "S", "T", "U"], ans: 0,
    sol: "Clockwise order: P, Q, U, S, R, T. Opposite pairs: P–S, Q–R, U–T. So Q faces R." },
  { p: "s3", type: "mcq", q: "Who sits directly opposite U?",
    options: ["P", "R", "T", "S"], ans: 2,
    sol: "Opposite pairs are P–S, Q–R, U–T. U faces T." },
  { p: "s3", type: "mcq", q: "Who are the immediate neighbours of S?",
    options: ["Q and R", "U and R", "U and T", "P and R"], ans: 1,
    sol: "In the order P, Q, U, S, R, T, the seats adjacent to S are U and R." },
  { p: "s3", type: "mcq", q: "If T and Q exchange seats, who sits immediately clockwise of P?",
    options: ["Q", "R", "T", "U"], ans: 2,
    sol: "Q's original seat (immediately clockwise of P) is taken by T after the swap." },

  /* ---- Set 4 (Mock 2) — rainfall ---- */
  { p: "s4", type: "mcq", q: "July's rainfall is approximately what percentage of the total five-month rainfall?",
    options: ["30%", "33.3%", "36%", "40%"], ans: 1,
    sol: "300/900 = 1/3 ≈ 33.3%." },
  { p: "s4", type: "mcq", q: "The percentage decrease in rainfall from August to September is closest to:",
    options: ["30%", "35%", "40%", "45%"], ans: 1,
    sol: "(260 − 170)/260 = 90/260 ≈ 34.6% ≈ 35%." },
  { p: "s4", type: "tita", q: "The average monthly rainfall (in mm) over the five months is:",
    ans: "180",
    sol: "900 / 5 = 180 mm." },
  { p: "s4", type: "mcq", q: "In how many months was the rainfall above the five-month average?",
    options: ["1", "2", "3", "4"], ans: 1,
    sol: "Average = 180 mm. Only July (300) and August (260) exceed it — 2 months." },

  /* ---- Set 5 (Mock 3) — team selection ---- */
  { p: "s5", type: "tita", q: "The total number of valid teams that can be formed is:",
    ans: "12",
    sol: "Pick the wicketkeeper in 2 ways. The other 2 members come from {B1, B2, B3, Bo}: C(4,2) = 6 pairs, and every pair contains at least one batsman (only one non-batsman exists). Total = 2 × 6 = 12." },
  { p: "s5", type: "mcq", q: "How many valid teams include the bowler Bo?",
    options: ["3", "4", "6", "8"], ans: 2,
    sol: "WK in 2 ways; Bo takes one slot; the last member must be a batsman (3 ways). 2 × 3 = 6." },
  { p: "s5", type: "mcq", q: "How many valid teams contain both B1 and B2?",
    options: ["1", "2", "3", "4"], ans: 1,
    sol: "B1 and B2 fill both non-keeper slots; only the wicketkeeper choice remains: 2 teams." },
  { p: "s5", type: "mcq", q: "If W1 refuses to be in any team with Bo, how many valid teams can be formed?",
    options: ["6", "8", "9", "10"], ans: 2,
    sol: "Teams with W1: 6 total minus the 3 containing Bo = 3. Teams with W2: all 6 allowed. Total = 9." },

  /* ---- Set 6 (Mock 3) — professions: Anil-engineer, Bela-teacher, Chetan-lawyer, Divya-doctor ---- */
  { p: "s6", type: "mcq", q: "Who is the doctor?",
    options: ["Anil", "Bela", "Chetan", "Divya"], ans: 3,
    sol: "Bela = teacher, Chetan = lawyer. Anil is not the doctor, so Anil = engineer and Divya = doctor." },
  { p: "s6", type: "mcq", q: "What is Anil's profession?",
    options: ["Doctor", "Engineer", "Lawyer", "Teacher"], ans: 1,
    sol: "Teacher and lawyer are taken by Bela and Chetan; Anil can't be the doctor, so Anil is the engineer." },
  { p: "s6", type: "mcq", q: "Which of the following statements is definitely TRUE?",
    options: ["Divya is the engineer", "Chetan is the doctor", "Divya is the doctor", "Anil is the teacher"], ans: 2,
    sol: "The unique solution is Anil-engineer, Bela-teacher, Chetan-lawyer, Divya-doctor." },
  { p: "s6", type: "mcq", q: "If Bela and Divya exchange professions, what does Bela become?",
    options: ["Doctor", "Engineer", "Lawyer", "Teacher"], ans: 0,
    sol: "Divya is the doctor, so after the exchange Bela becomes the doctor." },

  /* ---- Set 7 (Mock 4) — tournament: A=6, C=3, B=2, D=1 ---- */
  { p: "s7", type: "mcq", q: "How many points did team C finish with?",
    options: ["2", "3", "4", "5"], ans: 1,
    sol: "C lost to A (0), drew with B (1), beat D (2) → 3 points." },
  { p: "s7", type: "mcq", q: "Which team finished second in the points table?",
    options: ["A", "B", "C", "D"], ans: 2,
    sol: "Points: A = 6, C = 3, B = 2 (two draws), D = 1 (one draw). C is second." },
  { p: "s7", type: "tita", q: "The total number of drawn matches in the tournament was:",
    ans: "2",
    sol: "Only B–C and B–D were draws. (A won all its games; C beat D.)" },
  { p: "s7", type: "mcq", q: "How many points did team D score?",
    options: ["0", "1", "2", "3"], ans: 1,
    sol: "D lost to A, drew with B (1 point), lost to C → 1 point." },

  /* ---- Set 8 (Mock 4) — college caselet ---- */
  { p: "s8", type: "tita", q: "The number of Arts students in the college is:",
    ans: "300",
    sol: "Arts = 100 − 30 − 45 = 25% of 1200 = 300 students." },
  { p: "s8", type: "mcq", q: "The number of girls studying Science is:",
    options: ["120", "144", "196", "216"], ans: 1,
    sol: "Science = 360 students; girls = 40% of 360 = 144." },
  { p: "s8", type: "mcq", q: "How many more students study Commerce than Science?",
    options: ["150", "160", "180", "200"], ans: 2,
    sol: "Commerce = 540, Science = 360. Difference = 180." },
  { p: "s8", type: "mcq", q: "If 10% of Commerce students shift to Arts, the new strength of Arts becomes:",
    options: ["330", "345", "354", "360"], ans: 2,
    sol: "10% of 540 = 54 students shift. Arts = 300 + 54 = 354." },

  /* ---- Set 9 (Mock 5) — venn ---- */
  { p: "s9", type: "mcq", q: "How many students like only tea?",
    options: ["30", "40", "50", "60"], ans: 1,
    sol: "Only tea = 60 − 20 = 40." },
  { p: "s9", type: "mcq", q: "How many students like at least one of the two beverages?",
    options: ["80", "85", "90", "100"], ans: 2,
    sol: "|T ∪ C| = 60 + 50 − 20 = 90." },
  { p: "s9", type: "tita", q: "The number of students who like neither tea nor coffee is:",
    ans: "10",
    sol: "100 − 90 = 10 students." },
  { p: "s9", type: "mcq", q: "How many students like exactly one beverage?",
    options: ["60", "65", "70", "75"], ans: 2,
    sol: "Only tea (40) + only coffee (30) = 70." },

  /* ---- Set 10 (Mock 5) — schedule: Mon O, Tue M, Wed N, Thu P, Fri Q ---- */
  { p: "s10", type: "mcq", q: "Which lecture is held on Monday?",
    options: ["M", "O", "P", "Q"], ans: 1,
    sol: "N = Wed, M = Tue, Q = Fri. O must precede P, so O = Mon and P = Thu." },
  { p: "s10", type: "mcq", q: "On which day is lecture P held?",
    options: ["Monday", "Tuesday", "Thursday", "Friday"], ans: 2,
    sol: "Schedule: Mon-O, Tue-M, Wed-N, Thu-P, Fri-Q. P is on Thursday." },
  { p: "s10", type: "mcq", q: "Which lecture is held between M and P (by day)?",
    options: ["N", "O", "Q", "None"], ans: 0,
    sol: "M is Tuesday and P is Thursday; Wednesday's lecture N lies between them." },
  { p: "s10", type: "mcq", q: "How many lectures are held after N in the week?",
    options: ["1", "2", "3", "4"], ans: 1,
    sol: "After Wednesday (N): P on Thursday and Q on Friday — 2 lectures." },
];
