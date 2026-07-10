/* VARC question bank — 40 questions (5 sectional mocks x 8).
   Each mock = one RC passage (4 Qs) + 4 Verbal Ability items.
   p = key into VARC_PASSAGES (null for standalone VA questions). */

const VARC_PASSAGES = {
  p1: `The central insight of behavioural economics is that human beings are not the coolly rational calculators that classical economic theory imagines. We procrastinate, we overvalue the present at the expense of the future, and we are swayed by how choices are framed rather than by their substance. Recognising this, policymakers have embraced "nudges" — small changes in the design of choices, such as automatically enrolling employees in pension schemes while letting them opt out, that steer people toward better decisions without restricting their freedom.

Critics, however, argue that nudging is a form of manipulation dressed in benign clothing. If a government can engineer the "choice architecture" to produce outcomes it prefers, citizens are being managed rather than persuaded. Defenders respond that there is no neutral way to present choices: some default, some ordering, some framing is inevitable. Since choice architecture is unavoidable, they argue, it is better that it be designed deliberately and transparently, in the interest of the chooser, than left to accident or to marketers whose interests conflict with ours.`,

  p2: `Cities occupy barely three per cent of the Earth's land surface, yet they generate more than seventy per cent of global carbon emissions. This concentration is often read as an indictment of urban life, but the opposite conclusion is more defensible. Because city dwellers live closer together, share infrastructure, and rely more on public transport, their per-capita emissions are typically far lower than those of their suburban and rural counterparts in the same country. The dense city, paradoxically, may be the greenest form of human settlement available to us.

The real environmental problem is not the city itself but the way many cities grow: outward rather than upward, paving farmland into low-density sprawl that locks residents into car dependence. Policies that cap building heights or resist infill development, often passed in the name of preserving neighbourhood character, push growth to the periphery and raise the carbon cost of every commute. If environmentalists wish to reduce emissions, the counterintuitive prescription is to allow more people to live in exactly the places critics call overcrowded.`,

  p3: `Every previous wave of automation displaced muscle: machines lifted, wove, and assembled faster than human hands. The current wave is different in kind, for it encroaches on judgement — reading scans, drafting contracts, writing code. It is tempting to conclude that this time no refuge remains for human workers. History counsels more caution. The automated teller machine was expected to eliminate bank tellers; instead, by lowering the cost of operating a branch, it allowed banks to open more branches, and teller employment initially rose, though the job itself shifted from counting cash toward advising customers.

The lesson is not that technology never destroys jobs — it plainly does — but that the tasks composing a job matter more than the job's title. Occupations are bundles of tasks, and automation typically unbundles them, absorbing the routine components while raising the value of the judgement, empathy and dexterity that remain. The critical question for the coming decades is not whether machines will take all the work, but whether workers can move up the bundle faster than the machines climb after them.`,

  p4: `When Gutenberg's press began stamping out pages in the 1450s, the immediate effect was not enlightenment but noise. Europe was flooded with pamphlets, forged documents, astrological predictions and inflammatory tracts; scholars complained that the abundance of books made men lazy and shallow. Authorities responded with censorship, licensing and indexes of forbidden titles — attempts, mostly futile, to reimpose the scarcity that had once made information governable.

Yet out of this chaos grew the institutions we now take for granted: the scholarly journal, the editor, the publisher's imprint, the footnote — social technologies for establishing trust in a world where anyone could print anything. The parallel with our own moment is difficult to miss. The internet has again collapsed the cost of publishing, and again the first consequence has been a crisis of authority rather than an age of wisdom. If the print era is any guide, the remedy will come not from restoring the old gatekeepers but from inventing new conventions of verification suited to the new medium — and that invention took the print world the better part of two centuries.`,

  p5: `We like to think of memory as a recording device: events are captured, stored, and replayed on demand. Decades of research suggest a less flattering metaphor. Remembering is an act of reconstruction, closer to rebuilding a structure from a few surviving bricks than to replaying a film. Each time we recall an event we reassemble it, and in doing so we may quietly revise it — importing details from other occasions, from photographs, or from the questions an interviewer asks. Elizabeth Loftus's celebrated experiments showed that merely changing a verb — asking how fast cars 'smashed' rather than 'hit' each other — led witnesses to remember broken glass that never existed.

This malleability is not a design flaw so much as the price of a system built for the future rather than the past. A memory that flexibly recombines old experiences is precisely what allows us to imagine situations we have never encountered and to plan for them. The same machinery that lets us simulate tomorrow makes us unreliable narrators of yesterday. The courtroom, which stakes lives on eyewitness certainty, has been slower than the laboratory to absorb this lesson.`,
};

const VARC = [
  /* ---- Mock 1 (0-7): Passage 1 + VA ---- */
  {
    p: "p1",
    type: "mcq",
    q: "Which of the following best captures the main purpose of the passage?",
    options: [
      "To argue that classical economics should be abandoned entirely",
      "To present the case for nudges and the debate over their legitimacy",
      "To prove that governments routinely manipulate their citizens",
      "To show that pension enrolment schemes have failed",
    ],
    ans: 1,
    sol: "The passage introduces the idea of nudges, states the critics' objection, and presents the defenders' reply — i.e., it lays out the debate. Options 1, 3 and 4 are too extreme or unsupported.",
  },
  {
    p: "p1",
    type: "mcq",
    q: "Critics of nudging would most likely describe it as:",
    options: [
      "an inevitable feature of any choice",
      "manipulation disguised as help",
      "a transparent form of persuasion",
      "an inefficient policy tool",
    ],
    ans: 1,
    sol: "The passage says critics call nudging 'a form of manipulation dressed in benign clothing.'",
  },
  {
    p: "p1",
    type: "mcq",
    q: "The defenders' strongest counter-argument rests on the claim that:",
    options: [
      "citizens prefer to be nudged",
      "marketers are more ethical than governments",
      "no presentation of choices can be neutral, so deliberate design is preferable",
      "nudges restrict freedom only slightly",
    ],
    ans: 2,
    sol: "Defenders argue 'there is no neutral way to present choices,' so choice architecture should be designed deliberately and transparently.",
  },
  {
    p: "p1",
    type: "mcq",
    q: "In the passage, 'choice architecture' refers to:",
    options: [
      "the buildings in which decisions are made",
      "the legal framework governing consumer rights",
      "the way options are structured and presented to a decision-maker",
      "the mathematical models of classical economics",
    ],
    ans: 2,
    sol: "Choice architecture is the design of how choices are framed and presented — defaults, ordering, framing.",
  },
  {
    p: null,
    type: "mcq",
    q: "Para jumble: Arrange the sentences into a coherent paragraph.\n1. As a result, many of them defaulted on loans they had never understood in the first place.\n2. Microcredit was hailed as a revolution that would lift millions out of poverty.\n3. Studies later revealed, however, that many borrowers used the loans for consumption rather than investment.\n4. Lenders rushed into villages, offering small loans with minimal paperwork.",
    options: ["2413", "2431", "4231", "2341"],
    ans: 1,
    sol: "2 introduces microcredit's promise; 4 shows lenders acting on it; 3 reveals the problem (loans used for consumption); 1's 'As a result... defaulted' follows directly from 3. Order: 2-4-3-1.",
  },
  {
    p: null,
    type: "mcq",
    q: "Para jumble: Arrange the sentences into a coherent paragraph.\n1. That assumption collapsed when the ship's logs were finally decoded.\n2. For over a century, historians assumed the expedition had been destroyed by a storm.\n3. They revealed a mutiny, carefully concealed by the survivors.\n4. The fate of the 1845 expedition remained one of exploration's great mysteries.",
    options: ["4213", "2413", "4123", "4231"],
    ans: 0,
    sol: "4 introduces the mystery; 2 gives the long-held assumption; 1 says that assumption collapsed when the logs were decoded; 3 tells what the logs revealed. Order: 4-2-1-3.",
  },
  {
    p: null,
    type: "mcq",
    q: "Odd one out: Four of the five sentences form a coherent paragraph. Pick the one that does NOT belong.\n1. Coral reefs support roughly a quarter of all marine species.\n2. Rising sea temperatures cause corals to expel the algae they depend on, a process called bleaching.\n3. Repeated bleaching events leave reefs unable to recover.\n4. Scuba diving is one of the fastest-growing adventure sports worldwide.\n5. The loss of reefs would therefore cascade through entire ocean ecosystems.",
    options: ["Sentence 1", "Sentence 2", "Sentence 4", "Sentence 5"],
    ans: 2,
    sol: "Sentences 1, 2, 3, 5 build an argument about reef ecology and its collapse. Sentence 4, about scuba diving as a sport, breaks the logical chain.",
  },
  {
    p: null,
    type: "mcq",
    q: "Summary: 'Languages are disappearing at an alarming rate — one dies roughly every few weeks. With each loss, humanity loses not merely words but an entire system of knowledge: medicinal plant lore, oral histories, and unique ways of describing the world. Digital archives can preserve recordings, but a language that is no longer spoken by children is already functionally dead.' Which option best summarises the passage?",
    options: [
      "Digital archiving has successfully saved most endangered languages.",
      "Language death erases irreplaceable knowledge, and preservation without living speakers is inadequate.",
      "Children today refuse to learn traditional languages.",
      "The rate of language loss has been greatly exaggerated.",
    ],
    ans: 1,
    sol: "The passage's two claims: language loss destroys knowledge systems, and archives alone cannot keep a language alive without child speakers. Option 2 captures both.",
  },

  /* ---- Mock 2 (8-15): Passage 2 + VA ---- */
  {
    p: "p2",
    type: "mcq",
    q: "The author's central claim is that:",
    options: [
      "cities are the main cause of climate change and must shrink",
      "dense urban living is environmentally superior to sprawl",
      "rural living is the greenest option available",
      "public transport is unnecessary in well-designed cities",
    ],
    ans: 1,
    sol: "The author argues per-capita emissions are lower in dense cities and that sprawl, not density, is the real problem.",
  },
  {
    p: "p2",
    type: "mcq",
    q: "According to the passage, policies that cap building heights tend to:",
    options: [
      "preserve farmland on the city's edge",
      "lower the carbon cost of commuting",
      "push growth outward and increase car dependence",
      "make neighbourhoods more affordable",
    ],
    ans: 2,
    sol: "The passage says such policies 'push growth to the periphery and raise the carbon cost of every commute.'",
  },
  {
    p: "p2",
    type: "mcq",
    q: "The word 'paradoxically' is used because:",
    options: [
      "cities emit most of the world's carbon yet may be the greenest way to live",
      "environmentalists refuse to live in cities",
      "carbon emissions cannot be measured per capita",
      "sprawl is denser than the urban core",
    ],
    ans: 0,
    sol: "The paradox: cities generate 70%+ of emissions in aggregate, yet per person they are the most efficient settlement form.",
  },
  {
    p: "p2",
    type: "mcq",
    q: "Which of the following would the author most likely support?",
    options: [
      "A ban on high-rise construction in city centres",
      "Incentives for low-density suburban housing",
      "Zoning reforms that permit taller, denser infill development",
      "Relocating urban populations to the countryside",
    ],
    ans: 2,
    sol: "The author's prescription is to let cities grow 'upward' — i.e., allow more density and infill.",
  },
  {
    p: null,
    type: "mcq",
    q: "Para jumble: Arrange the sentences into a coherent paragraph.\n1. The vaccine, once developed, still had to be transported at temperatures below minus seventy degrees.\n2. Scientific breakthroughs, however dazzling, are only the first step.\n3. Cold-chain logistics thus became as decisive as the laboratory science itself.\n4. Rural clinics without specialised freezers simply could not receive doses.",
    options: ["2134", "2143", "1234", "2314"],
    ans: 1,
    sol: "2 states the theme (a breakthrough is only the first step); 1 gives the example (the vaccine had to be kept ultra-cold); 4 shows the consequence (clinics without freezers couldn't receive doses); 3's 'thus' concludes that logistics became decisive. Order: 2-1-4-3.",
  },
  {
    p: null,
    type: "mcq",
    q: "Para jumble: Arrange the sentences into a coherent paragraph.\n1. Yet the average smartphone user checks their device over ninety times a day.\n2. Each check fragments attention and makes deep concentration harder to recover.\n3. Most people insist they could give up their phones whenever they wish.\n4. The gap between what we claim and what we do suggests the habit is stronger than the will.",
    options: ["3124", "1234", "3214", "3142"],
    ans: 0,
    sol: "3 (the claim) → 1 ('Yet' contradicts the claim with data) → 2 (consequence of each check) → 4 (conclusion about the claim-behaviour gap). Order: 3-1-2-4.",
  },
  {
    p: null,
    type: "mcq",
    q: "Odd one out: Pick the sentence that does NOT belong.\n1. The Industrial Revolution drew millions from farms into factory towns.\n2. Working hours were long and conditions frequently dangerous.\n3. Trade unions emerged to bargain collectively for better terms.\n4. Modern remote work allows employees to live far from any office.\n5. Over decades, labour laws gradually improved factory conditions.",
    options: ["Sentence 2", "Sentence 3", "Sentence 4", "Sentence 5"],
    ans: 2,
    sol: "Sentences 1, 2, 3, 5 trace the arc of industrial labour and its reform. Sentence 4, about modern remote work, belongs to a different topic and era.",
  },
  {
    p: null,
    type: "mcq",
    q: "Summary: 'Antibiotic resistance is often blamed on doctors who overprescribe, but agriculture is the larger culprit: the majority of antibiotics sold globally are given to healthy livestock to promote growth. Bacteria that evolve resistance on farms readily transfer to humans through food, water and soil. Curbing hospital prescriptions while ignoring farms is treating the symptom, not the disease.' Which option best summarises the passage?",
    options: [
      "Doctors bear primary responsibility for antibiotic resistance.",
      "Antibiotic resistance cannot be meaningfully slowed anymore.",
      "Tackling antibiotic resistance requires addressing agricultural use, its biggest driver, not just medical prescribing.",
      "Livestock farming should be banned to protect human health.",
    ],
    ans: 2,
    sol: "The passage's point: farm use dominates and must be addressed; focusing only on prescriptions misses the main driver. Option 3 states exactly this; 4 is too extreme.",
  },

  /* ---- Mock 3 (16-23): Passage 3 + VA ---- */
  {
    p: "p3",
    type: "mcq",
    q: "The example of the automated teller machine is used to show that:",
    options: [
      "automation always increases employment",
      "predictions of job destruction can miss how technology reshapes work",
      "bank tellers were more efficient than machines",
      "banks should not have adopted ATMs",
    ],
    ans: 1,
    sol: "The ATM was expected to eliminate tellers but instead changed the nature of the job and initially increased branch employment — a caution against simple displacement predictions.",
  },
  {
    p: "p3",
    type: "mcq",
    q: "According to the passage, the current wave of automation differs from earlier ones because it:",
    options: [
      "is slower to spread across industries",
      "targets physical strength rather than skill",
      "encroaches on tasks involving judgement",
      "has created no new jobs at all",
    ],
    ans: 2,
    sol: "Earlier waves 'displaced muscle'; the current wave 'encroaches on judgement — reading scans, drafting contracts, writing code.'",
  },
  {
    p: "p3",
    type: "mcq",
    q: "The phrase 'move up the bundle' most nearly means:",
    options: [
      "earn promotions within a company hierarchy",
      "shift toward the non-routine, higher-value tasks within an occupation",
      "change occupations as frequently as possible",
      "acquire more academic degrees",
    ],
    ans: 1,
    sol: "Jobs are 'bundles of tasks'; as machines absorb routine components, workers must shift to the judgement/empathy/dexterity tasks that remain valuable.",
  },
  {
    p: "p3",
    type: "mcq",
    q: "Which best describes the author's overall stance on automation and employment?",
    options: [
      "Alarmist — machines will soon take all work",
      "Dismissive — automation poses no threat to workers",
      "Measured — technology destroys some tasks but the outcome depends on adaptation",
      "Nostalgic — earlier waves of automation were preferable",
    ],
    ans: 2,
    sol: "The author explicitly rejects both extremes: technology 'plainly does' destroy jobs, but outcomes hinge on whether workers adapt faster than machines advance.",
  },
  {
    p: null,
    type: "mcq",
    q: "Para jumble: Arrange the sentences into a coherent paragraph.\n1. Its costs, by contrast, are diffuse, delayed and easy to ignore.\n2. This asymmetry explains why reform is so politically difficult.\n3. The benefits of any subsidy are concentrated on a visible, vocal group.\n4. Farmers, for instance, rally instantly against cuts, while taxpayers rarely march over a few rupees each.",
    options: ["3142", "3124", "1342", "3412"],
    ans: 0,
    sol: "3 (benefits are concentrated) → 1 ('by contrast', the costs are diffuse) → 4 (example illustrating the asymmetry) → 2 ('this asymmetry' concludes why reform is hard). Order: 3-1-4-2.",
  },
  {
    p: null,
    type: "mcq",
    q: "Para jumble: Arrange the sentences into a coherent paragraph.\n1. Readers skim, scroll and rarely finish long articles.\n2. Publishers responded by making pieces shorter and headlines louder.\n3. The economics of online advertising reward attention, not comprehension.\n4. The result is a news ecosystem optimised for clicks rather than understanding.",
    options: ["3124", "1324", "3214", "1234"],
    ans: 0,
    sol: "3 (the incentive structure) → 1 (reader behaviour under it) → 2 (publisher response) → 4 (net result). Order: 3-1-2-4.",
  },
  {
    p: null,
    type: "mcq",
    q: "Odd one out: Pick the sentence that does NOT belong.\n1. Sleep deprivation impairs memory consolidation.\n2. It also weakens immune response and glucose regulation.\n3. Many successful executives boast about sleeping only four hours.\n4. Chronic short sleep is linked to higher risks of heart disease.\n5. The evidence overwhelmingly favours seven to nine hours a night.",
    options: ["Sentence 1", "Sentence 3", "Sentence 4", "Sentence 5"],
    ans: 1,
    sol: "Sentences 1, 2, 4, 5 present scientific evidence on sleep and health. Sentence 3 is an anecdotal aside about executives, not part of the evidence chain.",
  },
  {
    p: null,
    type: "mcq",
    q: "Summary: 'Standardised tests promise objectivity: every student faces the same questions under the same conditions. But identical questions do not mean identical circumstances. Test scores track family income remarkably closely, because affluent families buy coaching, quiet study space and repeated attempts. What is measured as merit is, in part, accumulated advantage.' Which option best summarises the passage?",
    options: [
      "Standardised tests should be made harder to ensure fairness.",
      "The apparent objectivity of standardised tests conceals the influence of socioeconomic advantage.",
      "Coaching classes should be banned before examinations.",
      "Test scores are entirely unrelated to student ability.",
    ],
    ans: 1,
    sol: "The passage argues that uniform questions don't equalise circumstances and that scores partly reflect purchased advantage. Option 2 captures this; 3 and 4 overreach.",
  },

  /* ---- Mock 4 (24-31): Passage 4 + VA ---- */
  {
    p: "p4",
    type: "mcq",
    q: "According to the passage, the immediate consequence of the printing press was:",
    options: [
      "a rapid spread of enlightenment ideals",
      "a flood of unreliable and inflammatory material",
      "the invention of the scholarly journal",
      "the end of censorship in Europe",
    ],
    ans: 1,
    sol: "'The immediate effect was not enlightenment but noise' — pamphlets, forgeries, predictions and inflammatory tracts.",
  },
  {
    p: "p4",
    type: "mcq",
    q: "The author describes journals, editors and footnotes as 'social technologies' because they:",
    options: [
      "were invented by engineers rather than scholars",
      "required printing machinery to function",
      "are human conventions that create trust in information",
      "made books cheaper to produce",
    ],
    ans: 2,
    sol: "They are institutional/consensual mechanisms — not machines — 'for establishing trust in a world where anyone could print anything.'",
  },
  {
    p: "p4",
    type: "mcq",
    q: "The author's prediction about the internet era is that credibility will be restored primarily through:",
    options: [
      "reviving the traditional gatekeepers of print",
      "government licensing of online publishers",
      "new verification conventions suited to the medium",
      "reducing the volume of online publishing",
    ],
    ans: 2,
    sol: "'The remedy will come not from restoring the old gatekeepers but from inventing new conventions of verification suited to the new medium.'",
  },
  {
    p: "p4",
    type: "mcq",
    q: "The final sentence ('that invention took the print world the better part of two centuries') serves to:",
    options: [
      "temper optimism by suggesting the transition may be long",
      "prove that the internet is worse than print",
      "argue that verification is impossible online",
      "praise the speed of modern institutions",
    ],
    ans: 0,
    sol: "It's a cautionary note: the fix is possible but historically took a very long time — tempering any expectation of a quick resolution.",
  },
  {
    p: null,
    type: "mcq",
    q: "Para jumble: Arrange the sentences into a coherent paragraph.\n1. Their reward system releases dopamine unpredictably, much like a slot machine.\n2. Social media platforms are engineered around a simple psychological principle.\n3. This is why 'just checking' so often becomes an hour of scrolling.\n4. Intermittent, variable rewards create the strongest behavioural loops.",
    options: ["2413", "2143", "4213", "2431"],
    ans: 0,
    sol: "2 (platforms use a principle) → 4 (the principle: variable rewards) → 1 (how platforms implement it) → 3 (everyday consequence). Order: 2-4-1-3.",
  },
  {
    p: null,
    type: "mcq",
    q: "Para jumble: Arrange the sentences into a coherent paragraph.\n1. By the 1960s, the river had become so polluted that it caught fire.\n2. The Cuyahoga once carried the industrial waste of an entire region.\n3. That single image galvanised the modern environmental movement.\n4. Within three years, sweeping clean-water legislation had passed.",
    options: ["2134", "1234", "2314", "2143"],
    ans: 0,
    sol: "2 (background) → 1 (climactic event: the fire) → 3 (the image galvanised a movement) → 4 (legislative outcome). Order: 2-1-3-4.",
  },
  {
    p: null,
    type: "mcq",
    q: "Odd one out: Pick the sentence that does NOT belong.\n1. The Renaissance revived interest in classical Greek and Roman texts.\n2. Wealthy patrons like the Medici funded artists and scholars.\n3. The printing press accelerated the circulation of new ideas.\n4. Modern art auctions routinely fetch hundreds of millions of dollars.\n5. Together these forces transformed Europe's intellectual landscape.",
    options: ["Sentence 1", "Sentence 2", "Sentence 4", "Sentence 5"],
    ans: 2,
    sol: "Sentences 1, 2, 3, 5 explain the forces behind the Renaissance. Sentence 4, about modern art auctions, is off-topic.",
  },
  {
    p: null,
    type: "mcq",
    q: "Summary: 'Remote work was supposed to empty city centres permanently. Instead, a hybrid pattern has settled in: offices fill mid-week and empty on Mondays and Fridays. Businesses that depend on weekday footfall — lunch spots, dry cleaners, transit systems — now face demand compressed into three days. Cities are not dying; they are being rescheduled.' Which option best summarises the passage?",
    options: [
      "Remote work has permanently destroyed city-centre economies.",
      "Hybrid work has redistributed, rather than eliminated, urban activity — concentrating it mid-week.",
      "Employees should return to offices five days a week.",
      "Transit systems have adapted well to new commuting patterns.",
    ],
    ans: 1,
    sol: "'Cities are not dying; they are being rescheduled' — activity is compressed into mid-week, straining footfall-dependent businesses. Option 2 captures the redistribution point.",
  },

  /* ---- Mock 5 (32-39): Passage 5 + VA ---- */
  {
    p: "p5",
    type: "mcq",
    q: "The central metaphor shift in the passage is from memory as:",
    options: [
      "a courtroom to a laboratory",
      "a recording device to an act of reconstruction",
      "a film to a photograph",
      "a brick to a building",
    ],
    ans: 1,
    sol: "The passage opens with the recording-device view and replaces it with reconstruction — 'rebuilding a structure from a few surviving bricks.'",
  },
  {
    p: "p5",
    type: "mcq",
    q: "The Loftus experiment is cited to demonstrate that:",
    options: [
      "witnesses deliberately lie under pressure",
      "the wording of a question can alter what people remember",
      "broken glass is commonly misidentified at accident scenes",
      "memory improves when questions are specific",
    ],
    ans: 1,
    sol: "Changing 'hit' to 'smashed' led witnesses to remember non-existent broken glass — question wording reshaped the memory itself.",
  },
  {
    p: "p5",
    type: "mcq",
    q: "According to the author, the malleability of memory is best understood as:",
    options: [
      "a defect that evolution failed to correct",
      "the by-product of a system designed for imagining the future",
      "a rare condition affecting only eyewitnesses",
      "proof that planning and memory are unrelated",
    ],
    ans: 1,
    sol: "'Not a design flaw so much as the price of a system built for the future' — flexible recombination enables simulation and planning.",
  },
  {
    p: "p5",
    type: "mcq",
    q: "The final sentence implies that the legal system:",
    options: [
      "has fully incorporated memory research into its procedures",
      "correctly places heavy weight on eyewitness testimony",
      "has lagged behind science in recognising the unreliability of eyewitness accounts",
      "should abolish witness testimony altogether",
    ],
    ans: 2,
    sol: "'The courtroom... has been slower than the laboratory to absorb this lesson' — i.e., law lags the science. Option 4 is too extreme.",
  },
  {
    p: null,
    type: "mcq",
    q: "Para jumble: Arrange the sentences into a coherent paragraph.\n1. A single vessel stuck sideways halted twelve per cent of global trade.\n2. For decades, supply chains were optimised for cost above all else.\n3. Resilience, once dismissed as expensive redundancy, is now a boardroom priority.\n4. The fragility of that design was exposed in a single week in 2021.",
    options: ["2413", "2143", "4123", "2431"],
    ans: 0,
    sol: "2 (design philosophy) → 4 (its fragility exposed in 2021) → 1 (the specific incident) → 3 (the lesson drawn). Order: 2-4-1-3.",
  },
  {
    p: null,
    type: "mcq",
    q: "Para jumble: Arrange the sentences into a coherent paragraph.\n1. Bees, it turns out, can learn to pull strings for a sugar reward.\n2. Intelligence was long assumed to require a large brain.\n3. Such findings are forcing a rethink of where thinking happens.\n4. More remarkably, they can learn the trick by watching other bees.",
    options: ["2143", "2134", "1243", "2413"],
    ans: 0,
    sol: "2 (old assumption) → 1 (counter-example: bees) → 4 ('More remarkably' extends the bee finding) → 3 (implication). Order: 2-1-4-3.",
  },
  {
    p: null,
    type: "mcq",
    q: "Odd one out: Pick the sentence that does NOT belong.\n1. Electric vehicles now outsell diesel cars in several European markets.\n2. Battery costs have fallen nearly ninety per cent in a decade.\n3. Charging networks are expanding along major highways.\n4. The first petrol-powered car was built by Karl Benz in 1885.\n5. Analysts expect price parity with petrol cars within a few years.",
    options: ["Sentence 1", "Sentence 2", "Sentence 4", "Sentence 5"],
    ans: 2,
    sol: "Sentences 1, 2, 3, 5 describe the current EV transition. Sentence 4 is a historical fact about petrol cars, unconnected to the paragraph's argument.",
  },
  {
    p: null,
    type: "mcq",
    q: "Summary: 'Generalists are often dismissed as dilettantes in a world that celebrates specialisation. Yet research on career trajectories shows that people who sample widely before committing tend to outperform early specialisers in fields that are complex and unpredictable. Breadth builds the ability to connect distant ideas — precisely the skill that narrow expertise cannot supply.' Which option best summarises the passage?",
    options: [
      "Specialisation is always inferior to generalism.",
      "In complex fields, early breadth of experience confers advantages that pure specialisation cannot.",
      "Dilettantes rarely succeed in any profession.",
      "Career success is unpredictable and cannot be studied.",
    ],
    ans: 1,
    sol: "The passage claims sampling widely helps in complex, unpredictable fields by enabling cross-domain connections. Option 2 is precise; option 1 overgeneralises ('always').",
  },
];
