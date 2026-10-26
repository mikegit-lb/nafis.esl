# Units 1–2 Speaking, Vocabulary, Grammar & Reading Expansion — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Units 1 and 2 of the English 9 site so they follow the textbook's own flow (Vocabulary → Speaking/Pronunciation → Language Awareness/grammar → Reading) with ≥30 grammar questions, ≥25 direct speaking questions, a full vocabulary lesson and four reading passages per unit.

**Architecture:** The site stays a dependency-free static page. Per-unit extra content moves into `content/uN-*.js` files that fill `window.unitContent[unitIndex]`; a new pure module `core.js` (grading, section list, question counts) is unit-tested with `node --test`; new exercise types (`quiz`, `speak`, `roleplay`) plug into app.js through a small `window.ExerciseTypes` registry, and non-exercise sections are drawn by `section-views.js`. Units 3–8 keep their current single-page layout untouched.

**Tech Stack:** Plain HTML/CSS/JS (no build, runs from `file://`), Node 24 `node --test` for tests, Playwright MCP for a browser smoke check.

**Spec:** None on disk. The requirements are the user's request in chat, restated in "Requirements" below; source material is the two PDFs (`C:\Users\MIKE\OneDrive\Desktop\STUDENT\NAFIS\unit 1.pdf`, `unit 2.pdf`, textbook pp. 24–36 and 38–50, image-only scans).

## Requirements (from the user's request)

1. Analyse the PDFs (flow, difficulty, topics) and update the product's Unit 1 and Unit 2 content to match, adding more, with the emphasis on **speaking** and **vocabulary**.
2. **≥25–30 grammar questions per unit** (this plan sets the floor at 30).
3. **Straight speaking exercises** using the direct questions in the PDFs and the units' grammar topics.
4. Integrate **vocabulary** and **reading comprehension** following the PDFs' structure.
5. Only Units 1 and 2. Implement with subagents.

## PDF analysis (what the content must mirror)

**Textbook flow per theme:** opener (sub-themes, functions, social language, pronunciation) → Lead-In photos → Listening/Watching (Digital Story, video-only) → Pronunciation → Vocabulary → Language Awareness (text → examine sentences → *Let's Discover* → controlled practice) → Reading (jigsaw) → Writing → Roots and Routes (Türkiye text) → Consolidation (audio) → E-Portfolio → Self-Reflection. *Gamification* boxes sit after Vocabulary / Language Awareness.

**Difficulty:** CEFR A2 → low B1. Texts 150–300 words. Task types: skim for best title / main idea, scan, tick-what-you-can-infer, True/False/Not Mentioned, "circle the topic not mentioned", odd-one-out collocations, synonym/antonym, categorise, word-bank cloze, "think of the answers, ask and answer" pair questions, role cards, sound-grouping. The site's existing "B1 extra hard" items are *above* this level, so new items are ~40% textbook-level, ~60% contextual stretch.

| | Unit 1 — School Life (Theme 1, pp. 24–36) | Unit 2 — Classroom Life (Theme 2, pp. 37–50) |
|---|---|---|
| Topics | greetings in six languages; countries, nationalities, languages, capitals; tourist attractions & activities; Azerbaijan / Turkic states, Chile, Türkiye cybersecurity schools; Cultural Exchange Fair | classmates, friendships, daily/study routines; Jacob's and Ceren's planners; James's week; Akio (Japan) vs Lilja (Finland); Digital Transformation in Education (Türkiye) |
| Grammar | *to be* (am/is/are); *can* = ability, possibility, opportunity (`can be`) | simple present: habits & routines, affirmative/negative (don't/doesn't), questions with do/does + wh-, -s/-es, adverbs of frequency & time expressions (`twice a week`, `on weekdays`, clock times) |
| Vocabulary | castle, palace, art museum, tower, ancient ruin, historical site, tourist attraction; sightseeing, hiking, trekking, day trip, take photos; countries↔nationalities↔languages↔capitals | wake up, make the bed, get dressed, comb hair, leave home, take the bus, attend classes, take notes, have a break, return home, go shopping; plan/relax/participate/make/leave collocations; synonyms/antonyms; adverbs & time expressions |
| Pronunciation | bold-letter sounds: smart, around, way, control, exercise | relax, bed, get, generally (+ carefully, home) |
| Social language | Nice to meet you · What's your nationality? · What languages can you speak? · What's the capital of…? · Tourists can… | Bright and early! · I call it a day! · Hit the books! · I learn by heart! · Work hard, play later! |
| Speaking in PDF | pp. 26 d, 27 e–f, 29 h/j + Gamification, 30 c–d, 33 g–h, 34 d–e, 35 e, 36 | pp. 40 d, 41 g, 44 e, 45 k + Gamification, 43 i + Gamification, 47 g–h, 49 c, 50 |

**Current-site gap:** each of Units 1–2 has 5 activities / 7 scored questions, one reading passage, no vocabulary, no pronunciation, no speaking. The README and the `7 QUESTIONS · 56 TOTAL` header in `app.js` are hard-coded.

**Gap to flag:** Unit 1's theme-opener page (p. 23) is not in the PDF, so its Unit 1 sub-themes, functions, social language and pronunciation are inferred from pp. 24–36 (Unit 2's opener, p. 37, is in the PDF and is the source for the Unit 2 column). The Digital Story / audio content of both units is also unavailable. Content must be self-contained (see Content Rules).

## Global Constraints

- No dependencies, no build step, must work opened from `file://`; scripts are plain `<script defer>` files in `index.html`.
- Match existing style in `app.js`: `function` declarations, `forEach(function (x) {…})`, string-concatenated HTML, every dynamic string through `escapeHtml`. No ES modules.
- `window.unitContent` is an array indexed by unit (0 = Unit 1, 1 = Unit 2). `window.unitExercises` and `units[]` stay for Units 3–8.
- Section ids and labels, in this order: `overview` "Overview", `vocabulary` "Vocabulary", `speaking` "Speaking", `grammar` "Grammar", `reading` "Reading".
- Existing exercise types stay valid inside any section's `activities`: `choice`, `complete`, `transform`, `fix`, `build`, `sequence`, `match`, `reading` (4 options, `answer` is an index).
- Layout works at 375 px width with no horizontal page scroll; tabs are keyboard-operable (`role="tablist"`, Arrow keys, `aria-selected`).
- Commit trailer on every commit: `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.

## Content Rules (apply to every content task)

- **Do not paste textbook text.** Passages are paraphrased re-writes: same topic, facts, structure and length (120–260 words), new wording. Short direct questions from the PDFs may be used verbatim; text-bound questions are re-pointed at the site's own passage. Every task/question carries `source: "Unit 1 · Vocabulary a · p.28"` style provenance.
- **Self-contained.** Digital Stories and audio cannot be played. Where a PDF question depends on one, answer it from a fact sheet written into the same content file (Unit 1 characters: Mehmet–Türkiye/Turkish/Ankara, Alina–Poland/Polish/Warsaw, Odett–Hungary/Hungarian/Budapest, Ivan–Bulgaria/Bulgarian/Sofia, Ingrid–Norway/Norwegian/Oslo, Min-su–South Korea/Korean/Seoul; greetings Szia, 안녕, Здрасти, Hei, Merhaba, Cześć. Unit 2: Jacob's Friday planner and Ceren's planner using only the rows visible on pp. 40–41, Aybek/Temir routine written fresh). Never assert details of a video that the PDF pages do not show.
- Every scored item has a one-sentence `why`; multiple-choice items have exactly one defensible answer and plausible distractors; no duplicate prompts within a unit; plain text only (no HTML).
- Pronunciation sound groups must be checked against a dictionary before use (the PDF shows only the bold letters).
- Typed answers: write one canonical `answer`; add `accepted` only for genuinely different wording. Contractions are handled by `Core.gradeItem` — do not list them.

## Schemas (produced by the engine tasks, consumed by content tasks)

```js
window.unitContent[i] = {
  lesson?:     { focus?, summary?, examples?, patterns?, context? },   // shallow-merged over units[i]
  overview?:   { subThemes: string[], functions: string[], socialLanguage: string[],
                 pronunciation: string[], leadIn: { prompt: string, topics: string[] } },
  vocabulary?: { groups: [{ title, items: [{ term, meaning, example }] }], activities: Exercise[] },
  speaking?:   { pronunciation: { sounds: [{ label, words: string[] }], sentences: string[] }, tasks: Exercise[] },
  grammar?:    { activities: Exercise[] },
  reading?:    { activities: Exercise[] }
}
// new exercise types
quiz:     { type:"quiz", title, source?, instruction?, wordBank?: string[],
            items: [{ prompt, options?: string[], answer: string, accepted?: string[], why }] }
            // options present -> choose one (answer must equal an option); absent -> typed
speak:    { type:"speak", title, source, instruction, questions: [{ q, model, frames?: string[] }], checklist?: string[] }
roleplay: { type:"roleplay", title, source, scenario, cardA: { role, rows: [string,string][] },
            cardB: { role, rows: [string,string][] }, model: [{ speaker:"A"|"B", text }], checklist?: string[] }
```

## Review Focus

1. Typed answers with curly apostrophes (phone keyboards), contractions vs. expanded forms, stray spaces, capitals, missing final full stop → must be accepted (Task 1).
2. Units 3–8 and any unit without extra content must render exactly as today: no tab bar, same cards, header counts computed not hard-coded (Task 3).
3. Switching unit while on a tab the new unit lacks (e.g. Reading → Unit 3), or switching tabs and back, must not show stale checked/selected state or a blank pane (Task 3).
4. Phone width and keyboard: tab bar scrolls inside itself, no page-level horizontal scroll at 375 px; Left/Right arrows move between tabs (Tasks 3, 6).
5. Content integrity: answer absent from options, duplicate prompts, empty `model`, passages outside 120–260 words, fewer than the required counts (Task 2 validator guards all content tasks).

---

## File Structure

| File | Responsibility |
|---|---|
| `core.js` (new) | Pure functions: `normalizeAnswer`, `gradeItem`, `getSections`, `resolveSection`, `countQuestions`; exports to `window.Core` and `module.exports` |
| `exercise-types.js` (new) | `window.ExerciseTypes = { quiz, speak, roleplay }`, each `{ render(ex, key) → html, check?(card, ex), onClick?(event, card, ex) }` |
| `section-views.js` (new) | `window.SectionViews = { overview, vocabulary, speaking }`, each `(unit, content) → html` |
| `content/u1-language.js`, `u2-language.js` | `overview` + `vocabulary` |
| `content/u1-speaking.js`, `u2-speaking.js` | `speaking` |
| `content/u1-grammar.js`, `u2-grammar.js` | `lesson` + `grammar` |
| `content/u1-reading.js`, `u2-reading.js` | `reading` |
| `tests/core.test.js`, `tests/content.test.js` (new) | `node --test tests/` |
| `app.js`, `styles.css`, `index.html`, `exercises.js`, `README.md` | modified |

**Execution order:** Tasks 1–6 are sequential (shared `app.js`/`styles.css`). Tasks 7–14 each own exactly one new file and may run as parallel subagents once Task 6 is committed; the controller commits each file after its test group passes (parallel `git commit` races on the index lock). Task 15 runs last.

---

### Task 1: `core.js` grading

**Files:**
- Create: `core.js`, `tests/core.test.js`
- Modify: `index.html` (add `<script src="core.js" defer></script>` before `exercises.js`), `app.js` (delete the local `normalizeAnswer`, use `Core.normalizeAnswer`)

**Interfaces:**
- Produces: `Core.normalizeAnswer(value: unknown): string`, `Core.gradeItem(item: { answer: string, accepted?: string[] }, value: string): boolean`

- [ ] **Step 1: Write failing tests** in `tests/core.test.js` (`node:test`, `node:assert/strict`, `require("../core.js")`):
  - `normalizeAnswer("  Can the  visitors use it? ")` equals `"can the visitors use it"`.
  - `gradeItem({answer:"She doesn't swim."}, "She does not swim")` → `true`; `gradeItem({answer:"He can't go"}, "he cannot go")` → `true`; `gradeItem({answer:"I am Turkish"}, "I’m Turkish")` → `true`; curly `’` in the typed value equals straight `'` in the answer.
  - `gradeItem({answer:"arrives"}, "")` → `false`; `…, "arrive"` → `false`; `gradeItem({answer:"x", accepted:["y"]}, " Y ")` → `true`.
- [ ] **Step 2: Run** `node --test tests/core.test.js` — Expected: FAIL (`Cannot find module '../core.js'`).
- [ ] **Step 3: Implement** `core.js` as an IIFE assigning `window.Core` when `window` exists and `module.exports` when `module` exists. `normalizeAnswer`: existing behaviour (trim, lowercase, strip trailing `.!?`, collapse whitespace) plus `’`→`'`, then expand `n't`→` not` (irregular: `can't`/`can not`→`cannot`, `won't`→`will not`) and `'m`→` am`. `gradeItem` compares `normalizeAnswer(value)` with each of `[answer].concat(accepted||[])` normalised.
- [ ] **Step 4: Run** `node --test tests/core.test.js` — Expected: PASS. Then open `index.html` in the browser, answer one "Make the sentence negative" card in Unit 2 with `The revision club does not promise instant results` — Expected: "Correct."
- [ ] **Step 5: Commit** `feat: add core grading with contraction-safe answer matching`

---

### Task 2: Content stubs and validator

**Files:**
- Create: `content/u1-language.js`, `u1-speaking.js`, `u1-grammar.js`, `u1-reading.js`, `u2-*.js` (same four) — each a stub that only does `window.unitContent = window.unitContent || []; window.unitContent[N] = Object.assign(window.unitContent[N] || {}, {});`; `tests/content.test.js`
- Modify: `index.html` (eight `<script src="content/…" defer>` tags after `core.js`, before `app.js`)

**Interfaces:**
- Produces: `loadContent(): { unitContent: object[] }` inside the test file (runs every `content/*.js` with `vm.runInNewContext` and a `{ window: {} }` sandbox). Test names, used by later tasks as filters: `unit 1 language`, `unit 1 speaking`, `unit 1 grammar`, `unit 1 reading`, `unit 2 …` likewise, plus `schema` (cross-unit).

- [ ] **Step 1: Write failing tests** in `tests/content.test.js` asserting, per unit (use `Core.countQuestions`, `Core.normalizeAnswer`):

  | Test | Assertion |
  |---|---|
  | `unit N language` | `overview` has non-empty `subThemes`, `functions`, `socialLanguage`, `pronunciation`, `leadIn.topics`; `vocabulary.groups` ≥3 groups, ≥30 items in total, each item has `term`, `meaning`, `example`; `vocabulary.activities` scored total ≥20 and include a `match` and a `quiz` with `wordBank` |
  | `unit N speaking` | `pronunciation.sounds` ≥3 (each ≥3 words), `sentences` ≥3; ≥4 `speak` cards totalling ≥25 questions; ≥2 `roleplay` cards; every question has non-empty `q` and `model`; every card has `source` |
  | `unit N grammar` | `lesson.context` ≥6 lines and `lesson.patterns` ≥2; `grammar.activities` scored total ≥30 across ≥5 distinct `type` values |
  | `unit N reading` | ≥5 `reading` activities (4 new passages + the migrated B1 one), each passage 120–260 words (existing B1 passages are exempt from the max), scored total ≥24 |
  | `schema` | for every activity in every section: a known `type`; `choice`/`reading`/`quiz`-with-options answers are present in `options`; every scored item has non-empty `why`; no duplicate prompt within a unit; no `<` or `>` characters in any string |
- [ ] **Step 2: Run** `node --test tests/content.test.js` — Expected: 8 `unit N …` tests FAIL (empty stubs), `schema` PASSES vacuously. (`Core.countQuestions` doesn't exist yet: until Task 3, define the count inline in the test and swap to `Core.countQuestions` in Task 3.)
- [ ] **Step 3: Verify the site still loads** — open `index.html`; Units 1–8 render as before.
- [ ] **Step 4: Commit** `test: add content validator and unit content stubs`

---

### Task 3: Section tabs, ExerciseTypes hook, computed counts

**Files:**
- Modify: `core.js`, `app.js`, `index.html` (add `exercise-types.js` and `section-views.js` scripts — empty registries for now — before `app.js`), `styles.css`
- Create: `exercise-types.js` (`window.ExerciseTypes = window.ExerciseTypes || {};`), `section-views.js` (`window.SectionViews = window.SectionViews || {};`)
- Test: `tests/core.test.js`

**Interfaces:**
- Produces:
  - `Core.getSections(content: object | undefined): { id: string, label: string }[]` — `[]` when `content` is falsy or has none of `overview|vocabulary|speaking|grammar|reading|lesson`; otherwise the ids in Global-Constraints order for which the key exists, with `grammar` always included.
  - `Core.resolveSection(sections, wanted: string): string` — `wanted` if present, else `sections[0].id`, else `"grammar"`.
  - `Core.countQuestions(ex): number` — `quiz`→`items.length`, `reading`→`questions.length`, `match`→`pairs.length`, `speak`/`roleplay`→`0`, anything else→`1`.
  - `currentActivities(): Exercise[]` in `app.js` — activities for the active unit and section (content units: `content[activeSection].activities`; non-content units: `window.unitExercises[activeUnit]`).

- [ ] **Step 1: Write failing tests** for the three `Core` functions: `getSections(undefined)` → `[]`; `getSections({vocabulary:{}})` → ids `["vocabulary","grammar"]`; `getSections({lesson:{}})` → `["grammar"]`; `resolveSection([{id:"vocabulary"},{id:"grammar"}], "reading")` → `"vocabulary"`; `resolveSection([], "reading")` → `"grammar"`; `countQuestions` of a 3-item quiz, 2-pair match, speak, and a `choice` → `3, 2, 0, 1`.
- [ ] **Step 2: Run** `node --test tests/core.test.js` — Expected: FAIL (functions undefined).
- [ ] **Step 3: Implement the three `Core` functions** in `core.js`; switch `tests/content.test.js` to `Core.countQuestions`.
- [ ] **Step 4: Wire `app.js`.** Add `let activeSection = "grammar"`. `renderLesson()`: compute `sections = Core.getSections(window.unitContent && window.unitContent[activeUnit])`; if `sections.length` render `<div role="tablist" class="section-tabs">` of `<button role="tab" aria-selected data-section>` after the unit heading; the pane body is `SectionViews[id](unit, content)` for `overview|vocabulary|speaking`, and for `grammar`/`reading` the existing focus block + pattern/context grid (grammar only, with `lesson` merged over `units[activeUnit]` via `Object.assign({}, unit, content.lesson)`) followed by `renderExercises(activities)`. With `sections.length === 0` the output is byte-identical to today. `selectUnit` sets `activeSection = Core.resolveSection(sections, activeSection)`; a tab click re-renders and keeps focus on the clicked tab; Left/Right arrow keys move selection among tabs. Replace the four `window.unitExercises[activeUnit][...]` lookups (in `renderLesson`, `checkExercise`, the click handler's build/reset branches) with `currentActivities()`. In `renderExercises`: use `Core.countQuestions` for per-card counts, compute the header `practice-count` as `n QUESTIONS` from the same sum (drop the hard-coded `7 QUESTIONS · 56 TOTAL` and "Five activities per unit" text), change `"Answer all three reading questions first."` to `"Answer every reading question first."`; before the built-in `if/else` chains in `renderExercises` and `checkExercise`, defer to `window.ExerciseTypes[exercise.type]` (`render(ex, key)` / `check(card, ex)`), and in the delegate click handler call `ExerciseTypes[type].onClick(event, card, ex)` first when present and stop if it returns `true`.
- [ ] **Step 5: Style** `.section-tabs` (horizontal, `overflow-x:auto` inside itself, existing colour tokens, visible focus ring, active tab clearly marked).
- [ ] **Step 6: Verify** `node --test tests/` — Expected: PASS except the 8 content tests. In the browser (Playwright `browser_navigate` to `file:///C:/Users/MIKE/Documents/ESL%209.2/index.html`, `browser_evaluate`): Unit 3 shows 0 `[role=tab]` and 5 `.exercise-card`; the practice header shows a computed count; no console errors.
- [ ] **Step 7: Commit** `feat: add unit section tabs and exercise-type registry`

---

### Task 4: `quiz` exercise type

**Files:**
- Modify: `exercise-types.js`, `styles.css`
- Test: `tests/core.test.js` (reuse `gradeItem`); browser check

**Interfaces:**
- Consumes: `Core.gradeItem`, `escapeHtml`, `setExerciseFeedback` from `app.js` (declared with `function`, globally visible).
- Produces: `ExerciseTypes.quiz = { render(ex, key): string, check(card, ex): void, onClick(event, card, ex): boolean }`.

- [ ] **Step 1: Implement `render`.** Optional `.word-bank` chip row from `ex.wordBank`; then one `<fieldset class="quiz-item" data-quiz-index>` per item: numbered prompt; if `options` → option buttons (reuse `.reading-option` classes, `aria-pressed`); else a labelled text `<input class="exercise-input">` with id `quiz-<key>-<i>`. Per-item feedback `<p>` with `aria-live`.
- [ ] **Step 2: Implement `onClick`** (selects an option for the clicked item, returns `true`) and `check`: refuses with "Answer every question first." until every item has a selection/non-empty input; options items correct when selected text equals `answer`; typed items via `Core.gradeItem`; disables inputs, marks `.is-correct`/`.is-wrong`, writes each item's `why` (plus the correct answer when wrong), then `setExerciseFeedback(card, score === items.length, score + "/" + n + " correct.")`.
- [ ] **Step 3: Verify in the browser.** Temporarily add a 3-item quiz (one options item, two typed) to `content/u1-grammar.js`, confirm: unanswered check shows the refusal; wrong typed answer shows the correct answer; curly-apostrophe answer is accepted; score line is `2/3`. Remove the temporary quiz.
- [ ] **Step 4: Commit** `feat: add multi-item quiz exercise type`

---

### Task 5: `speak` and `roleplay` exercise types

**Files:**
- Modify: `exercise-types.js`, `styles.css`

**Interfaces:**
- Produces: `ExerciseTypes.speak`, `ExerciseTypes.roleplay` — both with `render` and `onClick`, **no** `check` and no "Check answer" button (extend `renderExercises` so a type may declare `unscored: true`, which omits `.exercise-actions` and shows `n/N practised` in the card summary instead of a question count).

- [ ] **Step 1: `speak.render`:** `instruction`, then per question: the `q` text, optional `frames` as a "Useful language" list, a `Show model answer` toggle button (`aria-expanded`) revealing `model`, and an `I said it aloud` checkbox; optional `checklist` rendered as checkboxes ("Did you use…"). `onClick` toggles the model and updates the card's `practised` counter (questions with the box ticked).
- [ ] **Step 2: `roleplay.render`:** scenario, two role cards (`role` + label/value rows), a `Choose your role` pair of buttons (A/B) that highlights your card and, via `Show model dialogue`, reveals `model` lines with your lines marked; optional checklist.
- [ ] **Step 3: Verify in the browser** with a temporary `speak` (2 questions) and `roleplay` card in `content/u1-speaking.js`: toggles reveal/hide text, counter reads `1/2 practised` after one tick, no "Correct/Not quite" text appears anywhere. Remove the temporary cards.
- [ ] **Step 4: Commit** `feat: add speaking and role-play exercise types`

---

### Task 6: Overview, Vocabulary and Speaking section views

**Files:**
- Modify: `section-views.js`, `styles.css`

**Interfaces:**
- Produces: `SectionViews.overview(unit, content)`, `SectionViews.vocabulary(unit, content)`, `SectionViews.speaking(unit, content)` → HTML strings. `vocabulary` and `speaking` end with `renderExercises(content.<section>.activities | tasks)` output.

- [ ] **Step 1: `overview`:** "Lead-in" prompt with `leadIn.topics` chips; three lists (Sub-themes, Functions, Social language); a "Sounds to practise" line from `pronunciation`.
- [ ] **Step 2: `vocabulary`:** one panel per `groups[]` with a term / meaning / example list (semantic `<dl>`), then the activities list.
- [ ] **Step 3: `speaking`:** a "Pronunciation" panel — each `sounds[]` entry as label + word chips, `sentences` as a read-aloud list — then the `tasks` cards. Use the platform's `speechSynthesis` for a `Listen` button on each sentence/word only when `"speechSynthesis" in window`; hide the button otherwise.
- [ ] **Step 4: Verify** with temporary minimal data for each section in a stub (then revert): panels render, 375 px width has `document.documentElement.scrollWidth <= innerWidth`, Left/Right arrows move across tabs.
- [ ] **Step 5: Commit** `feat: add overview, vocabulary and speaking section views`

---

### Task 7: Unit 1 language (`content/u1-language.js`)

**Files:** Modify `content/u1-language.js`. Test: `node --test tests/content.test.js --test-name-pattern "unit 1 language|schema"`.

- [ ] **Step 1: Fill `overview`:** sub-themes (greetings & introductions, countries & nationalities, tourist attractions, cultural exchange), functions (introducing yourself and your country, asking about nationality/languages/capitals, describing what tourists can do), social language (the p. 27 dialogue phrases), pronunciation list, `leadIn` built from pp. 24–25 (six greetings, photos of an Izmir school and tourist sites).
- [ ] **Step 2: Fill `vocabulary.groups`** (≥30 items total, every item has a meaning and an example sentence using *to be* or *can*): **Greetings & people** (the six greetings with language), **Countries, nationalities, languages, capitals** (the fact-sheet six, plus Japan, Mexico, Chile, Peru, Azerbaijan, Uzbekistan, Turkmenistan, Kazakhstan, Kyrgyzstan, Thailand, South Africa, Ukraine, Canada), **Tourist attractions** (castle, palace, art museum, tower, ancient ruin, historical site, tourist attraction, monument, national park, bazaar), **Activities** (sightseeing, hiking, trekking, take a day trip, take photos, explore, stroll, go on a fjord cruise, bike around).
- [ ] **Step 3: Fill `vocabulary.activities` (≥20 scored):** (a) word-bank cloze on attractions, 6 items, one distractor extra word (p. 28 a); (b) typed country→nationality, 8 items; (c) `match` of 6 character→capital/language facts; (d) odd-one-out / categorise quiz, 6 items (Countries · Nationalities/Languages · Attractions & Activities, p. 29 f).
- [ ] **Step 4: Run the test** — Expected: `unit 1 language` and `schema` PASS.
- [ ] **Step 5: Hand back to the controller to commit** `content: add Unit 1 overview and vocabulary`.

### Task 8: Unit 2 language (`content/u2-language.js`)

**Files:** Modify `content/u2-language.js`. Test filter: `unit 2 language|schema`.

- [ ] **Step 1: `overview`:** sub-themes (classmates, friendships, daily and study routines), function (describing routines, habits, activities), social language (the five idioms, each with a plain-English meaning in the lead-in topics), pronunciation (relax, bed, carefully, get, generally, home), `leadIn` from pp. 38–39 (a student morning to evening).
- [ ] **Step 2: `vocabulary.groups`** (≥30 items): **Before school** (wake up, make the bed, wash your face, get dressed, comb your hair, have breakfast, charge your phone, leave home), **At school** (take the bus / walk to school, attend classes, take notes, participate in activities, have a break, work on tasks), **After school** (leave school, return home, go shopping, watch TV, read books, relax, plan the next day), **How often & when** (always, usually, often, sometimes, occasionally, rarely, never, every day, at weekends, on weekdays, in the mornings, twice a week, clock-time forms `7.30 a.m.`/`half past seven`).
- [ ] **Step 3: `vocabulary.activities` (≥20 scored):** (a) collocation odd-one-out quiz, 5 items on plan / relax / participate / make / leave (p. 43 f, new phrases); (b) "what word follows" typed, 5 items (get out of bed, have a shower, plan…, repeat…, go to bed); (c) synonym/antonym `match`, 6 pairs (author's own valid pairs); (d) `match` categorising verbs / adverbs / time expressions, 6 items (p. 43 h).
- [ ] **Step 4: Run the test** — Expected: `unit 2 language` and `schema` PASS.
- [ ] **Step 5: Hand back to the controller to commit** `content: add Unit 2 overview and vocabulary`.

### Task 9: Unit 1 speaking (`content/u1-speaking.js`)

**Files:** Modify `content/u1-speaking.js`. Test filter: `unit 1 speaking|schema`.

- [ ] **Step 1: `pronunciation`** (verified sounds): ≥3 groups from pp. 27 a/c (smart, around, way, control, exercise as headwords with their sound label and 3+ example words each), ≥3 read-aloud sentences from the p. 27 b pattern (new sentences).
- [ ] **Step 2: `speak` cards (≥25 questions in ≥4 cards)** each with `model` answers (full sentence using *be* / *can*) and `frames`: **Meet the exchange students** (the 7 p. 26 d questions, answered from the fact sheet); **Azerbaijan and the Turkic states** (p. 30 c–d: *Where is the Republic of Azerbaijan? Why should people visit the Turkic states? What are the characteristics of Baku? What is the importance of the Silk Road?*); **Be a vlogger** (p. 29 h, j: *Why do you think Nora travels to so many different countries? Why do you think Nora does not say her next travel destination? Imagine you are a vlogger, which countries do you travel to? What do you do there?*); **Chile** (p. 33 g–h, 7 questions); **Online life** (p. 34 d–e); **Find someone who…** (p. 29: *Can you name five countries in Europe? Can you tell four tourist attractions in Türkiye? … ten nationalities … three languages*); **Cultural Exchange Fair + Türkiye video** (pp. 35 e, 36: monologue with a checklist: greeting, name, nationality, language, capital, two attractions, two things tourists *can* do, goodbye).
- [ ] **Step 3: `roleplay` cards (≥2):** Anton/Antonia (Bulgaria) ↔ Karl/Karla (Norway) from p. 27 e with a full model dialogue; a second pair of cards for the learner's own country (Mexico/Japan substitution of the Hina–Salma dialogue, p. 27 f).
- [ ] **Step 4: Run the test** — Expected: `unit 1 speaking` and `schema` PASS.
- [ ] **Step 5: Hand back to the controller to commit** `content: add Unit 1 speaking and pronunciation`.

### Task 10: Unit 2 speaking (`content/u2-speaking.js`)

**Files:** Modify `content/u2-speaking.js`. Test filter: `unit 2 speaking|schema`.

- [ ] **Step 1: `pronunciation`:** groups for relax, bed, get, generally (p. 41 c) with verified example words from the p. 41 word box (already, anything, August, back, catch, Germany, give, grocery, hand, never, Norwegian, orange) sorted by dictionary; ≥3 read-aloud sentences in the style of p. 41 b.
- [ ] **Step 2: `speak` cards (≥25 questions in ≥4 cards):** **Jacob's Friday** (p. 40 d, four questions answered from the written planner); **Your daily routine** (p. 41 g pair talk: *What time do you wake up?* plus follow-ups on every verb in the vocabulary, with `frames` using *always/usually/sometimes/rarely/never*); **Talk or Try cards** (p. 45: six "Talk" habit questions such as *What do you usually eat for lunch?* and six "Try" grammar challenges such as *Make a sentence using "never".*); **James's week** (p. 44 e, re-pointed at the site's own James-style passage from Task 14 — answer from that passage); **Akio and Lilja** (p. 47 g–h: *How do Akio and Lilja's daily routines reflect their cultures? Why do you think classroom cleaning is an important practice for students? How do you think cycling to school benefits Lilja?*); **Aybek's day** (p. 49 c six questions, answered from a self-written Aybek routine in this file); **Photo prompts** (p. 43 i, e.g. *What does she do at weekends?*); **My typical day video** (p. 50: intro, three activities, how you feel, end with a question to the audience; checklist).
- [ ] **Step 3: `roleplay` cards (≥2):** two classmates exchanging routines with different clock times (cards of "wake up / leave home / lunch / homework"); an interviewer and a student describing their school day.
- [ ] **Step 4: Run the test** — Expected: `unit 2 speaking` and `schema` PASS.
- [ ] **Step 5: Hand back to the controller to commit** `content: add Unit 2 speaking and pronunciation`.

### Task 11: Unit 1 grammar (`content/u1-grammar.js`)

**Files:** Modify `content/u1-grammar.js`. Test filter: `unit 1 grammar|schema`.

- [ ] **Step 1: `lesson` override:** `patterns` for *be* (affirmative / negative / question / short answers) and for *can* (ability, possibility, opportunity, `can be`), `context` ≥6 dialogue lines on nationality, languages and what tourists can do, plus the p. 31 "Let's Discover" idea in `summary` (can = ability / possibility / opportunity).
- [ ] **Step 2: `grammar.activities` (≥30 scored, ≥5 types)** — suggested mix: quiz A *be* choice ×8 (countries, nationalities); quiz B *can* choice ×8 including "which meaning of can" (ability / possibility / opportunity); quiz C typed cloze with the verb in brackets ×6 (a paragraph like the p. 31 "life in China" text, about another country); quiz D transform ×4 (statement → question, positive → *can't*); quiz E error-correction typed ×4 (`can speaks`, `He can to visit`, `Are you can…`); `build` ×2; one `match` of 4 sentences → ability / possibility / opportunity. Migrate the four existing grammar cards from `exercises.js` Unit 1 (choice, complete, transform, fix) verbatim.
- [ ] **Step 3: Run the test** — Expected: `unit 1 grammar` and `schema` PASS.
- [ ] **Step 4: Hand back to the controller to commit** `content: add Unit 1 grammar lesson and 30+ questions`.

### Task 12: Unit 2 grammar (`content/u2-grammar.js`)

**Files:** Modify `content/u2-grammar.js`. Test filter: `unit 2 grammar|schema`.

- [ ] **Step 1: `lesson` override:** `patterns` for affirmative (-s/-es rules), negative (don't/doesn't), questions (do/does + wh-), adverbs of frequency (position before the main verb, after *be*) and time expressions (`at 7.30`, `on weekdays`, `at weekends`, `twice a week`); `context` ≥6 lines of classmates swapping routines.
- [ ] **Step 2: `grammar.activities` (≥30 scored, ≥5 types)** — suggested mix: quiz A choice ×8 (verb form after he/she/it, -s/-es spelling, do vs does); quiz B choice ×6 (adverb position and in/on/at time expressions); quiz C typed cloze ×6 (verb in brackets, affirmative and negative); quiz D transform ×6 (to question with a wh-word / to negative); quiz E error-correction ×6 (sentences from a school-day paragraph with the p. 45 j kind of mistakes: `she do not share`, `does not likes`, `begin always`); `build` ×2 (a wh-question); one `match` of 4 sentences → habit / routine / one-time event / future plan (p. 45 Let's Discover). Migrate the four existing grammar cards from `exercises.js` Unit 2 verbatim.
- [ ] **Step 3: Run the test** — Expected: `unit 2 grammar` and `schema` PASS.
- [ ] **Step 4: Hand back to the controller to commit** `content: add Unit 2 grammar lesson and 30+ questions`.

### Task 13: Unit 1 reading (`content/u1-reading.js`)

**Files:** Modify `content/u1-reading.js`. Test filter: `unit 1 reading|schema`.

- [ ] **Step 1: Four paraphrased passages** (120–260 words each, own wording) each as a `reading` card (≥4 MCQ with explanations: main idea/best title, detail, inference, vocabulary-in-context) **plus** a `quiz` card where the PDF task type calls for it: **A vlogger's trip** (Chile → Peru → Northern Cyprus → Turkic states → Thailand; tick-the-cities quiz, fill-in-the-route cloze; p. 28 b–g); **A Warm Country — Azerbaijan** (country / capital / nationality scan; True/False/Not mentioned; p. 30 b–d); **Somewhere Far Away — Chile** (one question per paragraph A–E topic; why-questions on climate; p. 32 b, 33 g); **Getting Ready for a Safer Digital World** (Türkiye cybersecurity schools; best main idea; True/False/Not mentioned ×4; short answers; p. 34 b–d).
- [ ] **Step 2: Migrate** the existing Unit 1 B1 reading card ("The exchange-day map") from `exercises.js` verbatim as the fifth reading activity.
- [ ] **Step 3: Run the test** — Expected: `unit 1 reading` and `schema` PASS (≥24 scored questions).
- [ ] **Step 4: Hand back to the controller to commit** `content: add Unit 1 reading passages`.

### Task 14: Unit 2 reading (`content/u2-reading.js`)

**Files:** Modify `content/u2-reading.js`. Test filter: `unit 2 reading|schema`.

- [ ] **Step 1: Four paraphrased passages** (120–260 words, own wording), each a `reading` card plus a `quiz` where the PDF task type calls for it: **A student's morning** (a university student's social-media post on her day; fill the missing verbs; p. 42 c); **James's week** (best title; time ↔ activity quiz at 7.30 / 8 / 7 p.m. / 10.30 p.m.; tick what you can infer; p. 44 b–e — this is the passage Task 10's James questions refer to, so keep the facts: Boston, father a doctor leaves early, ten-minute walk, favourite subject maths, guitar on Wednesdays, basketball on Fridays, dinner at seven, bed at half past ten); **Cultural differences in daily routines** (Akio in Japan vs Lilja in Finland; main idea; "topic not mentioned"; supporting-sentence quiz; p. 46 b–f); **Digital Transformation in Education** (Türkiye project; best title; short answers; infer ✓ ×8 as options; p. 48 a–c).
- [ ] **Step 2: Migrate** the existing Unit 2 B1 reading card ("A revision club that works") from `exercises.js` verbatim as the fifth reading activity.
- [ ] **Step 3: Run the test** — Expected: `unit 2 reading` and `schema` PASS.
- [ ] **Step 4: Hand back to the controller to commit** `content: add Unit 2 reading passages`.

---

### Task 15: Cleanup, docs and full verification

**Files:** Modify `exercises.js` (replace Units 1–2 entries with `[]` so indices 2–7 stay aligned), `README.md`, `app.js` if verification finds defects.

- [ ] **Step 1: Run all tests** — `node --test tests/` — Expected: all PASS (core + 8 content groups + schema).
- [ ] **Step 2: Remove migrated Unit 1–2 cards** from `exercises.js` (leave `[]` placeholders); re-run `node --test tests/`; PASS.
- [ ] **Step 3: Browser smoke (Playwright MCP, `file:///C:/Users/MIKE/Documents/ESL%209.2/index.html`):** Units 1 and 2 each show 5 tabs; clicking each tab shows a non-empty pane; in Grammar answer one quiz and see a score; in Speaking reveal a model answer; open Unit 3 from Reading and confirm no tab bar and 5 cards; `browser_resize` 375×812 and `document.documentElement.scrollWidth <= window.innerWidth` on every tab; `read_console_messages` has no errors. Reset the viewport with preset `desktop`.
- [ ] **Step 4: Update `README.md`** (contents list: Units 1–2 sections and counts, `node --test tests/` command, file map, "Units 3–8 are not yet expanded").
- [ ] **Step 5: Commit** `docs: update README and drop migrated Unit 1-2 activities`

---

## Self-review

- **Coverage:** analysis → "PDF analysis"; speaking/pronunciation → Tasks 5, 9, 10; vocabulary → 6, 7, 8; ≥30 grammar → 11, 12 (enforced by Task 2); reading → 13, 14; PDF structure → tab order; subagents → execution order paragraph; Units 3–8 untouched → Task 3.
- **Type consistency:** `Core.getSections/resolveSection/countQuestions/gradeItem`, `ExerciseTypes.{render,check,onClick,unscored}`, `SectionViews.*`, `currentActivities()` and the `unitContent` schema use the same names everywhere.
- **Review Focus:** each of the five lines maps to Task 1, 3, 3, 3/6, 2.
- **Known gaps:** Digital Story/audio details and Unit 1's theme-opener page are not in the PDFs; Task 10's James questions depend on Task 14 (the two passages' facts are pinned in Task 14 so they can still run in parallel).
