# Speaking Quality Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Units 1–2 Speaking and Vocabulary tabs produce better spoken English: hear models, hear and compare yourself, rehearse with a partner, practise exam-style talks and interviews, fix thin pronunciation work, and recall vocabulary aloud.

**Architecture:** Same classic-script, dependency-free site. Pure logic goes in `core.js` (unit-tested); all audio, recording and timers go in one new file `speech.js`; vocabulary review goes in one new file `flashcards.js`; existing views and the speak/roleplay exercise types are extended, not rewritten. A stricter content validator is written first and drives the content tasks.

**Tech Stack:** Plain HTML/CSS/JS, Web Speech API (`speechSynthesis`), `MediaRecorder`, `localStorage`. Tests: `node --test tests/*.test.js` (Node 24).

**Spec:** The user's request ("analyze the workspace and the product… improve and upgrade speaking quality… touches to prepare learners for school exams… no mistake and no wasted tokens"). Its findings are in the table below. Prior context: `2026-10-26-units-1-2-depth-expansion.md`.

## Findings (why each task exists)

| # | Finding (evidence) | Fix | Task |
|---|---|---|---|
| 1 | Model answers and role-play lines cannot be heard: `listenButton` is used only for sound words and read-aloud sentences. No slow mode. | Listen buttons + slow toggle | 4 |
| 2 | Practised ticks vanish when the learner changes tab: `selectSection` re-renders. | Persist in `localStorage` | 5 |
| 3 | Learners never hear themselves. | Record, play back, compare | 6 |
| 4 | Role-plays are text only. | App plays the other role | 7 |
| 5 | No exam-style speaking: no timed long turn, no interview. | Timed talks + random interview | 8 |
| 6 | Pronunciation is thin: Unit 2 has 4 sound groups of 3 words. Nothing on word stress, the `-s` ending (Unit 2's main grammar), weak/strong `can`/`can't` (Unit 1's main grammar), `th`, `w`/`v`, question melody. | New "extras" panels and data | 9, 11, 12 |
| 7 | Models sound stiff: only 5 of 394 use a contraction; 101 use full forms such as "I am", "do not". | Codemod + rule | 3 |
| 8 | Vocabulary cannot be heard and is never recalled aloud. | Listen + spaced flashcards | 10 |
| 9 | Question types skew to facts: "why" in 25 of 124 Unit 1 and 8 of 174 Unit 2 questions; opinions in about 5 each. | "Say more" cards | 11, 12 |

**Not in this plan (say so in the final report):** Units 3–8 have no Vocabulary or Speaking tabs at all (the largest remaining gap; a separate plan, and every feature here will apply to them unchanged). Speech-recognition scoring (unreliable for A2 voices and a privacy cost). Persisting scored-exercise results. Changing the site title or branding.

## Global Constraints

- No dependencies, no network calls, no build step; classic `<script defer>` files; work offline from `index.html`.
- Work on branch `speaking-quality` (`git switch -c speaking-quality`). No attribution lines in commit messages.
- Match the surrounding code: `function` expressions, `const`/`let`, double quotes, no arrow-function-heavy style, no frameworks.
- Every value put in HTML goes through `escapeHtml` (global from `app.js`), including `data-listen` text.
- Content strings are plain text: no `<` or `>` (the validator rejects them). Use `↗` and `↘` for melody arrows. IPA uses `/…/`.
- Feature-detect everything: no `speechSynthesis`, no voices, no `MediaRecorder`, no `getUserMedia`, no `localStorage` must hide the control or show a message and never throw.
- Layout works at 375 px wide with no horizontal scroll; every new button has a `:focus-visible` outline; the `hidden` attribute must really hide (add `[hidden]{display:none}` if a display rule overrides it).
- Spoken-English rule for speaking models (speak `model`, role-play `text`): contractions, never `do not`, `does not`, `did not`, `is not`, `are not`, `was not`, `were not`, `has not`, `have not`, `would not`, `could not`, `should not`, `cannot`, `will not`, and never `I am`, `you are`, `we are`, `they are`, `he is`, `she is`, `it is`, `there is`, `that is` followed by a word. Short answers such as "Yes, I am." keep the full form.
- New speak cards need `source` (non-empty), `instruction` (non-empty), a `model` and `frames` for every question; prompts must be unique within the unit; paraphrase, never copy the textbook.
- Grammar scope for new content: Unit 1 = *be*, *can/can't*; Unit 2 = simple present, adverbs of frequency, time expressions. Vocabulary from that unit's own list.
- Persona sheets (new first-person models must not contradict these):
  - Unit 1: Elif Demir, 15, born in and living in Denizli (south-west Türkiye), Atatürk High School in the city centre next to a park, speaks Turkish and English and a few words of German, brother aged 11, nickname Eli, a little shy at first, classmates Ahmet (guitar) and Zeynep (maths), favourite place the library, favourite country Japan, wants to visit Antalya, can play football and basketball, cannot ski yet.
  - Unit 2: gets up at 6.45 on school days and about nine on Saturdays, breakfast with mother and little brother (father leaves early), older sister (helps with maths, plays piano), friend Mert lives in the next street, meets two friends at the corner at 7.30 and walks to school, last lesson ends at three, studies about two hours on school days, guitar three times a week, favourite teacher Mrs Aksoy, drinks about four glasses of water a day, rarely late.
- **Token discipline for executors:** a subagent gets only its task text, this Global Constraints section, and the Review Focus lines naming its task. Each task lists the only files to read; do not explore further. Run tests as `node --test tests/*.test.js 2>&1 | tail -30`. Reviewers read `git diff` of their task plus the task text, and report violations only.
- **Expected failing tests** from Task 2 until their owning task lands: names containing `speaking upgrades`, `spoken English` (until Task 3 for the latter), or `audio flags` (until Task 11). Every other test must pass at every commit.
- **Browser smoke harness** (used by Tasks 4–10; DOM code has no unit-test runner). Open `file:///C:/Users/MIKE/Documents/ESL%209.2/index.html` in the built-in browser, then run in the page:
  ```js
  window.__go = function (unit, section) { document.querySelector('[data-unit="' + unit + '"]').click(); document.querySelector('[data-section="' + section + '"]').click(); };
  window.__spoken = []; window.speechSynthesis.getVoices = function () { return []; };
  window.speechSynthesis.speak = function (u) { window.__spoken.push(u); if (u.onend) setTimeout(u.onend, 0); };
  ```
  Unit indexes are 0-based (`__go(0, "speaking")` = Unit 1). If a subagent has no browser tools it reports `DONE_WITH_CONCERNS` listing the unverified smoke checks, and the controller runs them.

## Review Focus

1. **Browser without speech, voices or microphone** (Safari private mode, Linux without voices, Firefox without `MediaRecorder` permission): the control is hidden or shows a message; nothing throws. Tests in Tasks 1 (`pickVoice`), 4 and 6.
2. **`localStorage` missing, throwing, full or holding corrupt JSON** (private windows, some `file://` setups): everything works; progress is simply not saved. Tests in Tasks 1 and 5.
3. **Leaving the section or unit while audio, a countdown, a partner session, an interview or a recording is running:** everything stops; no late speech; no stuck microphone. Tests in Tasks 4, 6, 7 and 8.
4. **Apostrophes and quotes in listened text** (every contracted model now has one, inside a `data-listen` attribute): the spoken text equals the content string exactly. Test in Task 4.
5. **Fewer items than a session needs** (interview pool under 4 questions, flashcards with 0 or under 10 due, deck fully learned, day rollover): sensible message, no crash, no empty card. Tests in Tasks 1, 8 and 10.

---

### Task 1: Pure helpers in `core.js`

**Files:**
- Modify: `core.js` (add helpers, export on `Core`)
- Test: `tests/core.test.js`

**Read only:** `core.js`, `tests/core.test.js`.

**Interfaces:**
- Produces on `Core`:
  - `formatClock(seconds: number): string` — `0:00` style, floors, negatives → `0:00`.
  - `createStore(storage: Storage|null): { get(key, fallback), set(key, value), remove(key) }` — JSON values under the prefix `e9:`; every storage or JSON error returns `fallback` / does nothing.
  - `pickVoice(voices: {lang, name}[]|undefined, lang: string): voice|null` — exact `lang` match first (treat `_` as `-`, case-insensitive), then any `en*`, else `null`.
  - `leitnerUpdate(state: {box, due}|undefined, knew: boolean, today: number): {box, due}` — `knew`: `box = min((state ? state.box : 0) + 1, 5)`, `due = today + [0,1,2,4,7,14][box]`; not knew: `{box: 1, due: today}`.
  - `dueCards(ids: string[], states: {[id]: {box, due}}, today: number, limit: number): string[]` — due = no state or `state.due <= today`; cards with a state first (lowest `box` first, input order on ties), then new cards in input order; at most `limit`.
  - `pickInterview(cards: {title, questions: {q, model, frames?, cues?}[]}[], n: number, seed: string): {q, model, frames, card}[]` — ignore questions that have `cues`; shuffle cards with `Core.shuffle(cards, seed)`; round 1 takes one shuffled question (`Core.shuffle(questions, seed + title)[0]`) per card; further rounds take the next unused question; stop at `n`; never repeat a `q`; `[]` when nothing is available.

- [ ] **Step 1: Write the failing tests** in `tests/core.test.js` (append):

```js
test("formatClock", () => {
  assert.equal(Core.formatClock(0), "0:00");
  assert.equal(Core.formatClock(5), "0:05");
  assert.equal(Core.formatClock(65), "1:05");
  assert.equal(Core.formatClock(59.9), "0:59");
  assert.equal(Core.formatClock(-3), "0:00");
});

test("createStore round-trips JSON under the e9: prefix and survives every failure", () => {
  const mem = {}, fake = { getItem: k => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = v; }, removeItem: k => { delete mem[k]; } };
  const s = Core.createStore(fake);
  s.set("a", { x: 1 });
  assert.deepEqual(s.get("a"), { x: 1 });
  assert.equal(mem["e9:a"], '{"x":1}');
  assert.equal(s.get("missing", 7), 7);
  mem["e9:bad"] = "{";
  assert.equal(s.get("bad", "d"), "d");
  s.remove("a");
  assert.equal(s.get("a", null), null);
  const boom = { getItem() { throw new Error("x"); }, setItem() { throw new Error("x"); }, removeItem() { throw new Error("x"); } };
  const b = Core.createStore(boom);
  assert.equal(b.get("k", 1), 1);
  b.set("k", 2); b.remove("k");
  assert.equal(Core.createStore(null).get("k", "f"), "f");
  Core.createStore(null).set("k", 1);
});

test("pickVoice prefers the exact language, then any English, else null", () => {
  assert.equal(Core.pickVoice([{ lang: "en-US", name: "A" }, { lang: "en-GB", name: "B" }], "en-GB").name, "B");
  assert.equal(Core.pickVoice([{ lang: "en_gb", name: "C" }], "en-GB").name, "C");
  assert.equal(Core.pickVoice([{ lang: "fr-FR", name: "F" }, { lang: "en-AU", name: "D" }], "en-GB").name, "D");
  assert.equal(Core.pickVoice([{ lang: "fr-FR", name: "F" }], "en-GB"), null);
  assert.equal(Core.pickVoice([], "en-GB"), null);
  assert.equal(Core.pickVoice(undefined, "en-GB"), null);
});

test("leitnerUpdate and dueCards", () => {
  assert.deepEqual(Core.leitnerUpdate(undefined, true, 100), { box: 1, due: 101 });
  assert.deepEqual(Core.leitnerUpdate({ box: 3, due: 100 }, true, 100), { box: 4, due: 107 });
  assert.deepEqual(Core.leitnerUpdate({ box: 5, due: 100 }, true, 100), { box: 5, due: 114 });
  assert.deepEqual(Core.leitnerUpdate({ box: 4, due: 100 }, false, 100), { box: 1, due: 100 });
  const states = { b: { box: 3, due: 99 }, c: { box: 1, due: 100 }, d: { box: 2, due: 101 } };
  assert.deepEqual(Core.dueCards(["a", "b", "c", "d", "e"], states, 100, 10), ["c", "b", "a", "e"]);
  assert.deepEqual(Core.dueCards(["a", "b", "c", "d", "e"], states, 100, 2), ["c", "b"]);
  assert.deepEqual(Core.dueCards(["d"], states, 100, 5), []);
  assert.deepEqual(Core.dueCards([], {}, 100, 5), []);
});

test("pickInterview takes distinct questions across cards, skips talk items, is deterministic", () => {
  const card = (t, n, cues) => ({ title: t, questions: Array.from({ length: n }, (_, i) => ({ q: t + " q" + i, model: "m", cues: cues })) });
  const cards = [card("A", 3), card("B", 3), card("T", 3, ["x", "y", "z"])];
  const six = Core.pickInterview(cards, 6, "s1");
  assert.equal(six.length, 6);
  assert.equal(new Set(six.map(x => x.q)).size, 6);
  assert.ok(six.every(x => x.card !== "T"));
  assert.deepEqual(Core.pickInterview(cards, 6, "s1"), six);
  assert.equal(Core.pickInterview(cards, 20, "s1").length, 6);
  assert.deepEqual(Core.pickInterview([], 6, "s1"), []);
  assert.deepEqual(Core.pickInterview([card("T", 3, ["x"])], 6, "s1"), []);
});
```

- [ ] **Step 2: Run to verify failure:** `node --test tests/core.test.js 2>&1 | tail -30`. Expected: the five new tests FAIL with `Core.<name> is not a function`.
- [ ] **Step 3: Implement the six functions in `core.js`** and add them to the `Core` object. `createStore` wraps every storage call in try/catch; `dueCards` sorts with a stable sort on `[box]`.
- [ ] **Step 4: Run to verify pass:** `node --test tests/*.test.js 2>&1 | tail -30`. Expected: all pass.
- [ ] **Step 5: Commit**

```bash
git switch -c speaking-quality
git add core.js tests/core.test.js
git commit -m "feat: add clock, store, voice, leitner and interview helpers to core"
```

---

### Task 2: Stricter content validator (RED)

**Files:**
- Modify: `tests/content.test.js`

**Read only:** `tests/content.test.js`.

**Interfaces:**
- Consumes: `unitOf`, `acts`, `list`, `filled`, `str`, `words`, `walkStrings` helpers already in the file.
- Produces the content schema Tasks 9–12 must satisfy. Per unit `n` in `[1, 2]`:
  - `speaking.pronunciation.extras`: array, length ≥ 4. Each `{title: str, note?: str, kind: "words"|"sentences"|"pairs", groups: [{label: str, <kind>: [...]}]}`. Each group's list under the key equal to `kind` has ≥ 3 entries for `words` and `pairs`, ≥ 2 for `sentences`; every entry is a non-empty string, except `pairs` entries, which are `[a, b]` with two different non-empty strings.
  - `speaking.examTips`: array of ≥ 5 non-empty strings.
  - ≥ 1 speak card titled `Say more · …` with ≥ 8 questions, every `model` containing `because`.
  - ≥ 1 speak card where every question has `cues` (3–4 non-empty strings) and integer `seconds` 30–90; such a card has ≥ 4 questions; each of its models has 45–110 words.
  - Every speak `model` and role-play `text` obeys the spoken-English rule from Global Constraints (two regexes, below).
  - The existing "every speak card needs ≥ 6 questions" check is relaxed to ≥ 4 for cards whose questions all have `cues`.
- Vocabulary: any item whose `meaning` matches `/\bin (Hungarian|Korean|Bulgarian|Norwegian|Turkish|Polish)\b/` must have `audio === false` (shortcut: language list is hand-kept; extend it when new foreign words are added).

- [ ] **Step 1: Write the tests.** Inside the `[1, 2].forEach` loop add `test("unit " + n + " speaking upgrades", …)` asserting the bullets above with messages that name the unit, card and index (follow the existing message style). Add `test("unit " + n + " spoken English", …)` using exactly these regexes over every speak `model` and role-play `text`, reporting the offending string:

```js
const FULL_NOT = /\b(?:do|does|did|is|are|was|were|has|have|would|could|should) not\b|\bcannot\b|\bwill not\b/i;
const FULL_BE = /\b(?:I am|you are|we are|they are|he is|she is|it is|there is|that is)\s+[A-Za-z0-9]/i;
```

  Add one top-level `test("vocabulary audio flags", …)` applying the vocabulary rule to both units. Relax the speak-card minimum in the existing `unit n speaking` test as described (`const min = list(a.questions).every(q => q && q.cues) ? 4 : 6`).
- [ ] **Step 2: Run:** `node --test tests/*.test.js 2>&1 | tail -40`. Expected: FAIL only `unit 1/2 speaking upgrades`, `unit 1/2 spoken English`, `vocabulary audio flags`; everything else passes. Confirm the failure messages name real gaps (for example "extras needs ≥4, has 0"), not typos.
- [ ] **Step 3: Commit**

```bash
git add tests/content.test.js
git commit -m "test: require pronunciation extras, exam tips, talk cards, spoken-form models and vocabulary audio flags"
```

---

### Task 3: Contraction codemod for existing models

**Files:**
- Modify: `content/u1-speaking.js`, `content/u2-speaking.js` (string literals of speak `model:` and role-play `text:` only)
- Create then delete: a one-off script in the scratchpad directory (not committed)

**Read only:** the validator regexes from Task 2; do not read the content files by hand.

**Interfaces:**
- Consumes: `FULL_NOT`, `FULL_BE` rule.
- Produces: models in spoken form. Apostrophes are straight `'`.

- [ ] **Step 1: Write the one-off script.** Load every `content/*.js` with `vm` (as `tests/content.test.js` does). For each speak question `model` and role-play `model[i].text` compute `contract(old)`; where it differs, replace the exact token `JSON.stringify(old)` by `JSON.stringify(new)` in the source file text (abort and print the string if the token is not found; replacing every occurrence of identical literals is intended). Write the files back. Use this function:

```js
const NOT = [["do","don't"],["does","doesn't"],["did","didn't"],["is","isn't"],["are","aren't"],["was","wasn't"],["were","weren't"],["has","hasn't"],["have","haven't"],["would","wouldn't"],["could","couldn't"],["should","shouldn't"]];
const BE = { "i am": "I'm", "you are": "you're", "we are": "we're", "they are": "they're", "he is": "he's", "she is": "she's", "it is": "it's", "there is": "there's", "that is": "that's" };
const up = s => s[0].toUpperCase() + s.slice(1);
function contract(text) {
  let t = text.replace(/\bcannot\b/gi, m => m[0] === "C" ? "Can't" : "can't")
              .replace(/\bwill not\b/gi, m => m[0] === "W" ? "Won't" : "won't");
  NOT.forEach(([full, short]) => { t = t.replace(new RegExp("\\b" + full + " not\\b", "gi"), m => m[0] === m[0].toUpperCase() ? up(short) : short); });
  return t.replace(/\b(I am|you are|we are|they are|he is|she is|it is|there is|that is)(?=\s+[A-Za-z0-9])/gi,
    m => { const c = BE[m.toLowerCase()]; return m[0] === m[0].toUpperCase() && m[0] !== "I" ? up(c) : c; });
}
```

- [ ] **Step 2: Run it once.** Print the number of changed strings (expect roughly 100–250) and 12 before/after pairs chosen at random; confirm none reads unnaturally (for example no "Yes, I'm." and no contraction inside a proper noun). If one does, fix the rule in the script and re-run from a clean `git checkout -- content/`.
- [ ] **Step 3: Verify:** `node --test tests/*.test.js 2>&1 | tail -30`. Expected: `unit 1/2 spoken English` now PASS; only `speaking upgrades` and `vocabulary audio flags` still fail.
- [ ] **Step 4: Commit** (delete the script first)

```bash
git add content/u1-speaking.js content/u2-speaking.js
git commit -m "content: put speaking models and role-play lines into spoken (contracted) form"
```

---

### Task 4: `speech.js` — Listen on models, slow toggle, stop hook

**Files:**
- Create: `speech.js`
- Modify: `section-views.js` (remove `canSpeak`, `listenButton` and the `[data-listen]` click listener; add the speed toggle to the Speaking pronunciation panel), `exercise-types.js` (Listen buttons), `app.js` (`stopAllActivity()` at the top of `renderLesson`; create the shared store), `index.html` (script tag), `styles.css`

**Read only:** `section-views.js` (all), `exercise-types.js` lines 1–10 and the `speak` and `roleplay` blocks, `app.js` lines 285–292 and 394–417, `index.html` script list, `styles.css` lines 938–943.

**Interfaces:**
- Consumes: `Core.createStore`, `Core.pickVoice` (Task 1).
- Produces (globals, plain function declarations in `speech.js`):
  - `canSpeak(): boolean`
  - `listenButton(text: string, label?: string): string` — same markup as today; `""` when `!canSpeak()`.
  - `speakText(text: string, options?: {onend?: function}): void` — cancels current speech, voice from `Core.pickVoice(speechSynthesis.getVoices(), "en-GB")`, `lang = "en-GB"`, `rate = 0.7` when slow mode is on else `1`; `options.onend` is called when the utterance ends or errors.
  - `speedToggle(): string` — `<button class="speed-toggle" type="button" aria-pressed="…">Slow speech</button>`; `""` when `!canSpeak()`. Slow mode is stored with `progress.get("slow", false)` / `progress.set("slow", …)`.
  - `stopAllActivity(): void` — cancels speech and (in later tasks) timers, sessions and recording. Safe to call any time.
  - In `app.js`: `const progress = Core.createStore((function () { try { return window.localStorage; } catch (e) { return null; } })());` at top level, before first use.
- Markup changes: speak items get `listenButton(item.q, "question " + (i + 1))` after `.speak-q`; the model becomes `<div class="speak-model" id="…" hidden><p>MODEL</p>LISTEN</div>` (the toggle's `aria-controls` target stays the same id); each role-play model line gets a Listen button after its text.

- [ ] **Step 1: Define the checks** (the smoke harness is the test). After implementation, in the browser run `__go(0, "speaking")` and then:

```js
const c = document.querySelector(".exercise-card");
const n = window.unitContent[0].speaking.tasks[0].questions.length;
console.assert(c.querySelectorAll(".speak-item .listen-btn").length === 2 * n, "listen on question and model");
const m = c.querySelector(".speak-model .listen-btn"); m.click();
console.assert(__spoken[0].text === window.unitContent[0].speaking.tasks[0].questions[0].model, "spoken text equals content (apostrophes intact)");
console.assert(__spoken[0].rate === 1);
document.querySelector(".speed-toggle").click();
c.querySelector(".speak-model .listen-btn").click();
console.assert(__spoken[1].rate === 0.7 && document.querySelector(".speed-toggle").getAttribute("aria-pressed") === "true");
console.assert(localStorage.getItem("e9:slow") === "true");
const rp = [...document.querySelectorAll(".exercise-card")].find(x => x.dataset.exerciseType === "roleplay");
console.assert(rp.querySelectorAll(".roleplay-model .listen-btn").length === rp.querySelectorAll(".roleplay-model li").length);
// leaving mid-speech cancels: stub cancel, switch tab, expect it called
let cancelled = 0; speechSynthesis.cancel = function () { cancelled++; }; __go(0, "vocabulary");
console.assert(cancelled > 0, "stopAllActivity on re-render");
// no-speech browser: delete the API and re-render
const real = window.speechSynthesis; delete window.speechSynthesis; __go(0, "grammar"); __go(0, "speaking");
console.assert(document.querySelectorAll(".listen-btn, .speed-toggle").length === 0, "controls hidden without speechSynthesis");
```
  (`delete window.speechSynthesis` works on the page object; reload the page afterwards.) Expected: no assertion message printed, no console error.
- [ ] **Step 2: Implement** `speech.js` (add `<script src="speech.js" defer></script>` after `content/u2-reading.js` and before `exercise-types.js`), move the three pieces out of `section-views.js`, apply the markup changes, add CSS (`.speed-toggle` with an `.is-on`/`[aria-pressed="true"]` state; Listen button spacing inside `.speak-item` and `.roleplay-model li`).
- [ ] **Step 3: Run `node --test tests/*.test.js 2>&1 | tail -30` (still only the expected failures) and the Step 1 checks.**
- [ ] **Step 4: Commit**

```bash
git add speech.js section-views.js exercise-types.js app.js index.html styles.css
git commit -m "feat: listen to questions, model answers and role-play lines, with a slow-speech toggle"
```

---

### Task 5: Remember what the learner has practised

**Files:**
- Modify: `exercise-types.js` (speak and roleplay), `app.js` (`renderExercises` summary text)

**Read only:** the `speak` and `roleplay` blocks of `exercise-types.js`; `app.js` lines 480–490.

**Interfaces:**
- Consumes: global `progress` store (Task 4).
- Produces: `ExerciseTypes.speak.practisedCount(ex): number` and `ExerciseTypes.roleplay.practisedCount(ex): number`. Keys: `"said|u" + (activeUnit + 1) + "|" + item.q` → `true`; `"done|u" + (activeUnit + 1) + "|" + ex.scenario` → `true`. A cleared tick removes the key. `renderExercises` shows `custom.practisedCount(exercise) + "/" + custom.practiceTotal(exercise) + " practised"` instead of the hard-coded `0/…`. Rendered checkboxes carry `checked` when stored. Keys use content text, not card position, so reordering cards keeps progress.

- [ ] **Step 1: Define the checks** (browser). `__go(0, "speaking")`; tick the first two `[data-speak-said]` boxes of the first card; expect its summary `.exercise-question-count` to read `2/<n> practised`; `__go(0, "vocabulary"); __go(0, "speaking")`; expect the same summary text and the first two boxes `checked`. Then `localStorage.setItem("e9:said|u1|" + window.unitContent[0].speaking.tasks[0].questions[2].q, "{")`, re-enter the section: no console error and that box unchecked. Finally run `Storage.prototype.setItem = function () { throw new Error("full"); }`, re-enter the section and tick a box: no console error and the summary still counts it for this visit.
- [ ] **Step 2: Implement.** Toggle logic lives in the existing `onClick` handlers.
- [ ] **Step 3: Run tests and Step 1 checks.**
- [ ] **Step 4: Commit**

```bash
git add exercise-types.js app.js
git commit -m "feat: remember practised speaking tasks between visits and tab switches"
```

---

### Task 6: Record, play back, compare

**Files:**
- Modify: `speech.js` (recorder), `exercise-types.js` (controls in speak items and role-plays), `section-views.js` (one privacy line), `styles.css`

**Read only:** `speech.js`; the `speak` and `roleplay` render functions.

**Interfaces:**
- Produces in `speech.js`: `recorderControls(): string` — `""` unless `window.MediaRecorder && navigator.mediaDevices && navigator.mediaDevices.getUserMedia`; otherwise `<div class="recorder"><button type="button" data-rec-start>Record</button><button type="button" data-rec-stop hidden>Stop</button><audio class="rec-audio" controls hidden></audio><p class="rec-status" aria-live="polite"></p></div>`. Delegated click handling for `[data-rec-start]` / `[data-rec-stop]` lives in `speech.js`. Exactly one recording at a time (starting another stops the first); auto-stop after 60 s; blob URLs are tracked and revoked on re-record and in `stopAllActivity()`; tracks are stopped when recording ends. Status strings: recording → `Recording… press Stop when you finish.`; done → `Listen to your recording, then play the model answer and compare.`; refusal or any error → `The microphone is not available. Allow it in the browser and try again.`
- `SectionViews.speaking` shows one line when `recorderControls() !== ""`: `Recordings stay on your device and are not saved.`
- Speak items include `recorderControls()` after the "I said it aloud" label; role-plays include one after the model toggle.

- [ ] **Step 1: Define the checks** (browser, with stubs; real mics are not needed):

```js
window.MediaRecorder = class { constructor(s) { this.s = s; } start() { this.state = "recording"; } stop() { this.ondataavailable && this.ondataavailable({ data: new Blob(["x"]) }); this.onstop && this.onstop(); } };
navigator.mediaDevices.getUserMedia = () => Promise.resolve({ getTracks: () => [{ stop() { window.__stopped = (window.__stopped || 0) + 1; } }] });
__go(0, "grammar"); __go(0, "speaking");
const r = document.querySelector(".exercise-card .recorder");
r.querySelector("[data-rec-start]").click();
await new Promise(res => setTimeout(res, 50));
console.assert(!r.querySelector("[data-rec-stop]").hidden && /Recording/.test(r.querySelector(".rec-status").textContent));
r.querySelector("[data-rec-stop]").click();
console.assert(!r.querySelector("audio").hidden && r.querySelector("audio").src.startsWith("blob:") && window.__stopped === 1);
// a second recorder stops the first
const r2 = document.querySelectorAll(".recorder")[1];
r.querySelector("[data-rec-start]").click(); await new Promise(res => setTimeout(res, 50));
r2.querySelector("[data-rec-start]").click(); await new Promise(res => setTimeout(res, 50));
console.assert(r.querySelector("[data-rec-stop]").hidden && !r2.querySelector("[data-rec-stop]").hidden);
// leaving the section stops a live recording and releases the microphone
const before = window.__stopped; __go(0, "vocabulary");
console.assert(window.__stopped === before + 1);
// refusal path
__go(0, "speaking");
navigator.mediaDevices.getUserMedia = () => Promise.reject(new Error("denied"));
const r3 = document.querySelector(".exercise-card .recorder");
r3.querySelector("[data-rec-start]").click(); await new Promise(res => setTimeout(res, 50));
console.assert(/microphone is not available/.test(r3.querySelector(".rec-status").textContent));
// unsupported browser
delete window.MediaRecorder; __go(0, "grammar"); __go(0, "speaking");
console.assert(document.querySelectorAll(".recorder").length === 0);
```
  Expected: no assertion output. Also confirm a recording in progress is stopped when switching tab (`__stopped` increments).
- [ ] **Step 2: Implement.** Add CSS: buttons match `.speak-toggle`; a recording state `.recorder.is-recording` with a visible (non-colour-only) "Recording" text.
- [ ] **Step 3: Run tests and Step 1 checks.**
- [ ] **Step 4: Commit**

```bash
git add speech.js exercise-types.js section-views.js styles.css
git commit -m "feat: record yourself and play it back next to the model answer"
```

---

### Task 7: Practise a role-play with the app as your partner

**Files:**
- Modify: `exercise-types.js` (roleplay), `speech.js` (session token cleared by `stopAllActivity`), `styles.css`

**Read only:** the `roleplay` block of `exercise-types.js`; `speech.js`.

**Interfaces:**
- Consumes: `speakText(text, {onend})`, `canSpeak()`, `stopAllActivity()`.
- Produces: in each role-play card, when `canSpeak()`: `<button class="speak-toggle" type="button" data-roleplay-play>Practise with the app</button>`, `<button … data-roleplay-next hidden>Next line</button>`, `<button … data-roleplay-stop hidden>Stop</button>`, `<p class="roleplay-status" aria-live="polite"></p>`.
- Behaviour: pressing Play before choosing a role sets the status to `Choose your role first.`. Otherwise it walks `ex.model` from line 0: a line spoken by the other role is played with `speakText` (the line's `<li>` gets class `is-playing`; on end, advance); a line by the learner's role sets the status to `Your turn (A): use your card. Press Next line when you have spoken.` and shows Next; after the last line the status is `Role-play finished. Well done!`. Choosing a different role, pressing Stop, or `stopAllActivity()` ends the session; a callback from an ended session does nothing (use a session token).

- [ ] **Step 1: Define the checks** (browser). `__go(0, "speaking")`; open the first role-play card; press Play → status `Choose your role first.`; press `[data-roleplay-role="B"]`; press Play; wait; expect `__spoken` to contain exactly the A lines up to the first B line, then status starting `Your turn (B)`; click Next repeatedly until finished, expecting `__spoken.map(u => u.text)` to equal the A-speaker lines of `ex.model` in order and the final status `Role-play finished. Well done!`. Start again, then `__go(0, "vocabulary")` mid-session and wait 100 ms: `__spoken.length` must not grow.
- [ ] **Step 2: Implement.**
- [ ] **Step 3: Run tests and Step 1 checks.**
- [ ] **Step 4: Commit**

```bash
git add exercise-types.js speech.js styles.css
git commit -m "feat: practise role-plays with the app speaking the other role"
```

---

### Task 8: Timed talks and a random exam interview

**Files:**
- Modify: `speech.js` (countdown), `exercise-types.js` (speak items with `cues`), `section-views.js` (interview panel in `SectionViews.speaking`), `styles.css`

**Read only:** `speech.js`; the `speak` block of `exercise-types.js`; `SectionViews.speaking` in `section-views.js`.

**Interfaces:**
- Consumes: `Core.formatClock`, `Core.pickInterview`, `speakText`, `recorderControls`, `stopAllActivity`.
- Produces in `speech.js`: `runCountdown(clockEl: Element, seconds: number, onDone: function): function` — writes `Core.formatClock(remaining)` into `clockEl` about every 250 ms using an end timestamp (no drift), calls `onDone` exactly once at 0, returns a cancel function; all live countdowns are cancelled by `stopAllActivity()`; starting a second countdown through the helpers below cancels the first.
- Speak item with `cues` (optional `seconds`, default 60) renders, after its question: `<ul class="talk-cues">` of the cues, and `<div class="talk">` with `<span class="talk-phase" aria-live="polite">Ready</span> <span class="talk-clock">0:30</span>`, buttons `data-talk-plan` (`Plan (30 s)`), `data-talk-go` (`Talk (N s)`), `data-talk-stop` (`Stop`), and `recorderControls()`. Plan runs 30 s with phase `Plan your talk`, then phase `Plan finished. Press Talk when you are ready.`; Talk runs `seconds` with phase `Talk now`, then `Time is up.`.
- Interview panel (Speaking view, above the cards), shown only when `Core.pickInterview(speakCards, 6, "x").length >= 4`: title `Exam interview`, text `Six questions, 30 seconds to answer each.`, `data-interview-start` (`Start interview`). Running: `Question i of N`, the question text in `.interview-question`, the question is read aloud with `speakText` (clock starts when speech ends, or at once when `!canSpeak()`), `.interview-clock`, `recorderControls()`, `data-interview-next` (`Next question`) and `data-interview-stop` (`Stop`). Questions come from `Core.pickInterview(speakCards, 6, String(Date.now()))`. At the end: `Interview finished. Well done!` and a list of the asked questions, each with a `Show model answer` toggle revealing the model and a Listen button. Stop returns to the start state.

- [ ] **Step 1: Define the checks** (browser). Countdown: `const el = document.createElement("span"); let done = 0; runCountdown(el, 2, () => done++); await new Promise(r => setTimeout(r, 2600));` → `el.textContent === "0:00" && done === 1`. Cancel: `const stop = runCountdown(el, 5, () => done++); stop(); await …3 s` → `done` unchanged. Talk: in a card whose items have `cues` (use `window.unitContent[0].speaking.tasks.findIndex` after Task 11; before that, temporarily push a fixture item with `cues: ["a","b","c"], seconds: 30` into `window.unitContent[0].speaking.tasks[0].questions` and re-enter the section), click Plan, expect phase `Plan your talk` and the clock to count down; click Talk while planning: the plan clock stops. Interview: click Start; expect `Question 1 of 6`, `__spoken[0].text` equal to the shown question; click Next five times; expect `Interview finished. Well done!` and six toggle buttons; Start again then `__go(0, "vocabulary")`: no further `__spoken` entries and no console errors. Pool guard: with `window.unitContent[0].speaking.tasks` filtered to one two-question card, re-enter: no interview panel.
- [ ] **Step 2: Implement.**
- [ ] **Step 3: Run tests and Step 1 checks.**
- [ ] **Step 4: Commit**

```bash
git add speech.js exercise-types.js section-views.js styles.css
git commit -m "feat: add timed talks with cue cards and a random exam-interview simulator"
```

---

### Task 9: Pronunciation extras and exam tips panels

**Files:**
- Modify: `section-views.js` (`SectionViews.speaking`), `styles.css`

**Read only:** `SectionViews.speaking` and the helpers above it in `section-views.js`.

**Interfaces:**
- Consumes the Task 2 schema: `pronunciation.extras[]` (`title`, optional `note`, `kind`, `groups`) and `speaking.examTips[]`.
- Produces: for each extra, `viewPanel("pron-extra-" + i, extra.title, …)` placed after the existing Pronunciation panel inside the same `lesson-grid`. `kind: "words"` reuses the existing sound-group markup (factor it into a helper `soundGroupsHtml(groups)`; the existing `sounds` call site uses it too, output unchanged). `kind: "sentences"`: `<h4 class="sound-label">` + `<ol class="read-aloud">` like today's read-aloud list with `listenButton`. `kind: "pairs"`: `<h4 class="sound-label">` + `<ul class="pair-list">` whose `<li>` holds word chip, `<span aria-hidden="true">↔</span>`, word chip (Listen chips, plain chips when `!canSpeak()`). `note` renders as `<p class="pron-note">`. A panel `Exam tips` (`<ol class="view-list">`) follows the extras when `examTips` is non-empty. Missing `extras` / `examTips` render nothing (legacy-safe).

- [ ] **Step 1: Define the checks** (browser, with a fixture because content arrives in Tasks 11–12). In the page push `window.unitContent[0].speaking.pronunciation.extras = [{title:"T", note:"n", kind:"pairs", groups:[{label:"L", pairs:[["west","vest"],["wine","vine"],["wet","vet"]]}]}, {title:"S", kind:"sentences", groups:[{label:"L", sentences:["I can swim.","Can you swim?"]}]}, {title:"W", kind:"words", groups:[{label:"L", words:["a","b","c"]}]}]` and `window.unitContent[0].speaking.examTips = ["one","two"]`, re-enter the section, and expect: three extra panels in order; `.pair-list li` count 3, each with two `.listen-chip`; `.read-aloud` count increases by 1 and each of its items has a `.listen-btn`; one `Exam tips` panel with 2 `li`; at 375 px width (`resize_window` mobile) `document.documentElement.scrollWidth <= innerWidth`. Delete the fixture keys and re-enter: no extra panels, no errors.
- [ ] **Step 2: Implement.**
- [ ] **Step 3: Run tests and Step 1 checks.**
- [ ] **Step 4: Commit**

```bash
git add section-views.js styles.css
git commit -m "feat: render pronunciation extras and exam tips on the Speaking tab"
```

---

### Task 10: Vocabulary — Listen buttons and spaced flashcards

**Files:**
- Create: `flashcards.js`
- Modify: `section-views.js` (`SectionViews.vocabulary`), `index.html` (script tag after `speech.js`), `styles.css`

**Read only:** `SectionViews.vocabulary`; `core.js` helper signatures (Task 1 block above).

**Interfaces:**
- Consumes: `Core.dueCards`, `Core.leitnerUpdate`, global `progress`, `listenButton`, `speedToggle`, `escapeHtml`.
- Produces: `window.Flashcards = { html(unitIndex: number, items: {term, meaning, example, audio?}[]): string }` plus a delegated click listener in `flashcards.js`.
- Vocabulary list: each `dt` gets `listenButton(item.term)` and each example gets `listenButton(item.example)`, both omitted when `item.audio === false`; `speedToggle()` sits above the groups.
- Flashcards panel `Word review`, placed above the vocabulary groups, root `<div data-flashcards data-unit="…">`:
  - idle: `N words ready` and `<button data-fc-start>Start review</button>` where N = `min(10, due count)`; when none are due: `No words are due today. Come back tomorrow!`. Day number = `Math.floor(Date.now() / 86400000)`; deck = every item of the unit, id = `term`; state key `"vocab|u" + (unitIndex + 1) + "|" + term`.
  - card front: the meaning, `Say the word aloud, then check.`, `<button data-fc-show>Show the word</button>`; back: term, example, Listen (unless `audio === false`), `<button data-fc-knew>I knew it</button>` and `<button data-fc-again>Still learning</button>`; each answer stores `Core.leitnerUpdate(...)`.
  - end: `You knew X of Y words.`, and `<button data-fc-more>Review more</button>` only when other cards are still due.
  - The session lives in memory; `stopAllActivity()` is irrelevant here; a re-render resets it to idle.

- [ ] **Step 1: Define the checks** (browser). `localStorage.clear(); __go(0, "vocabulary")`: expect `.vocab-item` Listen buttons equal 2 × (items with `audio !== false`) (before Task 11 flags the six greeting items this equals 2 × all items; assert against the data, not a constant); the panel reads `10 words ready`; click Start, Show, I knew it ten times; expect `You knew 10 of 10 words.`; `Review more` visible; `localStorage` holds 10 keys `e9:vocab|u1|…` with `box` 1 and `due` = today + 1; re-enter the tab: `10 words ready` again (the next 10 new cards); repeat until all items reviewed: finally `No words are due today. Come back tomorrow!`. Click `I knew it` and `Still learning` mix: `Still learning` card has `box 1, due today` and returns as due on the next session. Set the clock forward by stubbing `Date.now` +2 days: reviewed cards due after one day are due again. `speechSynthesis` removed: no Listen buttons, flashcards still work. Zero-item unit guard: `Flashcards.html(0, [])` returns the no-words message without throwing.
- [ ] **Step 2: Implement.**
- [ ] **Step 3: Run tests and Step 1 checks.**
- [ ] **Step 4: Commit**

```bash
git add flashcards.js section-views.js index.html styles.css
git commit -m "feat: add listen buttons and spaced flashcards to the vocabulary tab"
```

---

### Task 11: Unit 1 content

**Files:**
- Modify: `content/u1-speaking.js`, `content/u1-language.js`

**Read only:** the schema bullets in Task 2; `content/u1-language.js` lines 40–50; the first and last 10 lines of `content/u1-speaking.js` (structure); the persona sheet; do not read the rest of the speaking file.

**Interfaces:**
- Consumes: Task 2 schema; Task 3 contraction rule.
- Produces: everything `unit 1 speaking upgrades` and `vocabulary audio flags` require.

- [ ] **Step 1: Vocabulary flags.** Add `audio: false` to the six items in "Greetings and people" (Szia, 안녕, Здрасти, Hei, Merhaba, Cześć) in `content/u1-language.js`.
- [ ] **Step 2: Add `pronunciation.extras` and `examTips`** to `content/u1-speaking.js` with exactly this data (insert `extras` after `sentences`; `examTips` as a sibling of `pronunciation` inside `speaking`):

```js
extras: [
  { title: "Word stress", note: "Say the strong syllable louder and longer. O is a strong syllable and o is a weak one.", kind: "words", groups: [
    { label: "Countries with the stress on the first syllable (Oo, Ooo)", words: ["Poland", "Norway", "Egypt", "Italy", "Germany", "Hungary", "Canada", "Mexico"] },
    { label: "Countries with the stress on the second syllable (oO, oOoo)", words: ["Japan", "Brazil", "Peru", "Bulgaria"] },
    { label: "Nationalities with the stress on the second syllable (oOo)", words: ["Italian", "Egyptian", "Korean", "Norwegian", "Hungarian", "Brazilian"] },
    { label: "Tourist words with the stress on the first syllable (Oo)", words: ["castle", "palace", "tower", "tourist", "ancient", "sightseeing"] },
    { label: "Tourist words with the stress on a later syllable (oO, oOo)", words: ["museum", "bazaar", "explore", "attraction", "historical"] }
  ] },
  { title: "Can and can't", note: "In the middle of a sentence can is weak, like /kən/. In a short answer it is strong, like /kæn/. Can't is always strong, like /kɑːnt/.", kind: "sentences", groups: [
    { label: "Weak can in statements", sentences: ["I can speak English and a little German.", "She can swim, but she can't ski.", "Visitors can take photos in the park."] },
    { label: "Strong can in short answers", sentences: ["Can you swim? Yes, I can.", "Can tourists visit the castle? Yes, they can."] },
    { label: "Strong can't", sentences: ["I can't play the guitar.", "Tourists can't enter the tower at night.", "We can't go inside the mosque in shoes."] }
  ] },
  { title: "Sounds that are easy to mix up", note: "Listen to both words in each pair, then say them slowly.", kind: "pairs", groups: [
    { label: "w and v", pairs: [["west", "vest"], ["wine", "vine"], ["wet", "vet"], ["worse", "verse"]] },
    { label: "th /θ/ and s, t", pairs: [["think", "sink"], ["three", "tree"], ["thank", "tank"], ["thick", "sick"]] }
  ] },
  { title: "Question melody", note: "Let your voice go up at the end of a yes/no question and down at the end of a wh- question.", kind: "sentences", groups: [
    { label: "Yes/no questions go up ↗", sentences: ["Can you swim?", "Are you from Türkiye?", "Is it a big city?", "Can tourists visit the castle?"] },
    { label: "Wh- questions go down ↘", sentences: ["Where are you from?", "What languages can you speak?", "What can tourists do there?", "What is the capital of Italy?"] },
    { label: "Lists: up, up, then down", sentences: ["You can see a castle, a museum and a bridge.", "I can speak Turkish, English and a little German."] }
  ] }
],
```

```js
examTips: [
  "Answer in a full sentence, then add one more detail: I'm from Izmir. It's a big city by the sea.",
  "Do not stop after yes or no. Add a short reason or example.",
  "If you do not understand, say: Sorry, could you say that again? or Could you speak more slowly, please?",
  "If you forget a word, describe it: It's a place where tourists can take photos.",
  "Speak at a steady speed and look at your partner. A clear answer is better than a fast one."
],
```

- [ ] **Step 3: Author two new speak cards** appended to `speaking.tasks` (`source`: `"Unit 1 · Speaking (exam practice)"`):
  - `Say more · Give a reason`: 8 questions that ask for a reason or opinion using *be*, *can* and Unit 1 vocabulary (for example places to visit, languages, what tourists can do, what is good about a school or town), each with `frames` (3 frames including a `because …` frame), a first-person model containing `because`, persona-consistent, in spoken form. `instruction`: ask learners to answer in two sentences: an answer and a reason. `checklist`: 3 items.
  - `Exam talk · One-minute talks`: 4 topics, each `{q, cues (3–4), seconds (60), model (45–110 words), frames}`. The first topic is fixed:

```js
{ q: "Talk for one minute: introduce yourself and your town to a new exchange student.",
  cues: ["your name, age and town", "the languages you can speak", "what visitors can see and do in your town", "one thing you like about it"],
  seconds: 60,
  model: "Hello, I'm Elif. I'm fifteen, and I live in Denizli, a city in the south-west of Türkiye. I can speak Turkish and English, and I can say a few words in German. Visitors can see Pamukkale, take photos of the white terraces and walk around the ancient ruins at Hierapolis. They can't wear shoes on the terraces, but they can walk there in bare feet. I like Denizli because the people are friendly. Welcome!",
  frames: ["Hello, I'm … I live in …", "I can speak …", "Visitors can …", "I like … because …"] }
```

  Topics 2–4: your school and what you can do there; a country you know and what tourists can do there; what you can and can't do in your free time. `instruction`: plan for 30 seconds, speak for one minute, use the cue words in order. `checklist`: 4 items (cues covered, `can`/`can't` used, full sentences, steady speed).
- [ ] **Step 4: Run** `node --test tests/*.test.js 2>&1 | tail -30`. Expected: all Unit 1 tests and `vocabulary audio flags` PASS; only `unit 2 speaking upgrades` fails.
- [ ] **Step 5: Dispatch one reviewer** on the diff for the new cards only. Checklist: grammar scope; persona contradictions; facts (Pamukkale and Hierapolis claims); `because` present; frames match models; spoken form; each answer realistic for A2 length (talks 45–110 words, say-more 20–35 words); no copying from the textbook. Fix findings, re-run tests.
- [ ] **Step 6: Commit**

```bash
git add content/u1-speaking.js content/u1-language.js
git commit -m "content: Unit 1 pronunciation extras, exam tips, say-more and exam-talk cards, audio flags"
```

---

### Task 12: Unit 2 content

**Files:**
- Modify: `content/u2-speaking.js`

**Read only:** the schema bullets in Task 2; first and last 10 lines of `content/u2-speaking.js`; the persona sheet; do not read the rest.

**Interfaces:**
- Produces: everything `unit 2 speaking upgrades` requires. Independent of Task 11 (different file); may run in parallel with it.

- [ ] **Step 1: Add `pronunciation.extras` and `examTips`** with exactly this data (`extras` after `sentences`; `examTips` beside `pronunciation`):

```js
extras: [
  { title: "The -s ending", note: "With he, she and it the verb ends in -s or -es. The ending sounds different after different sounds.", kind: "words", groups: [
    { label: "-s says /s/ after p, t, k and f sounds", words: ["walks", "takes", "likes", "eats", "meets", "helps", "starts", "stops"] },
    { label: "-s says /z/ after a vowel or a voiced sound", words: ["plays", "goes", "reads", "leaves", "learns", "studies", "does", "has"] },
    { label: "-es says /ɪz/ after s, z, sh, ch and j sounds", words: ["washes", "watches", "finishes", "relaxes", "changes", "brushes", "teaches", "misses"] }
  ] },
  { title: "The th sounds", note: "Put your tongue gently between your teeth.", kind: "words", groups: [
    { label: "th /ð/ is voiced, as in mother", words: ["the", "they", "then", "mother", "father", "brother", "together", "weather"] },
    { label: "th /θ/ is voiceless, as in Thursday", words: ["Thursday", "three", "thirty", "month", "think", "birthday"] }
  ] },
  { title: "Numbers that sound alike", note: "In -teen numbers the strong syllable is at the end. In -ty numbers it is at the start.", kind: "pairs", groups: [
    { label: "-teen and -ty", pairs: [["thirteen", "thirty"], ["fourteen", "forty"], ["fifteen", "fifty"], ["sixteen", "sixty"]] }
  ] },
  { title: "Times and routines aloud", note: "Say the important words a little louder and longer: the time, the adverb and the verb.", kind: "sentences", groups: [
    { label: "Say the times clearly", sentences: ["I wake up at half past six.", "School starts at a quarter to eight.", "We have lunch at twelve thirty.", "He goes to bed at ten fifteen."] },
    { label: "Stress the important words", sentences: ["She usually walks to school.", "I never forget my lunch box.", "Does he study in the evening?"] }
  ] }
],
```

```js
examTips: [
  "Use adverbs of frequency and times: I usually get up at half past six.",
  "Remember the -s with he, she and it: She walks to school. He does his homework.",
  "Link your ideas: First, … Then … After that … Finally …",
  "Add a reason with because: I like Saturdays because I can relax.",
  "If you forget a word, describe it, or say: Sorry, could you say that again?"
],
```

- [ ] **Step 2: Author two new speak cards** appended to `speaking.tasks` (`source`: `"Unit 2 · Speaking (exam practice)"`):
  - `Say more · Give a reason`: 8 questions asking why about routines and habits (get-up time, favourite subject or day, a habit, free time, study place) in simple present with frequency adverbs, each with 3 frames including a `because …` frame, a first-person model containing `because`, persona-consistent, spoken form, 20–35 words. `checklist`: 3 items.
  - `Exam talk · One-minute talks`: 4 topics (`seconds` 60, 3–4 cues each, models 45–110 words): the first is fixed:

```js
{ q: "Talk for one minute about your Saturday.",
  cues: ["when you get up", "what you usually do in the morning", "what you do in the afternoon", "why you like Saturdays"],
  seconds: 60,
  model: "On Saturdays I get up at about nine because there's no school. I have a long breakfast with my family. Then I usually meet my friends, and we play football in the park. In the afternoon I play the guitar or draw. I never do homework in the morning, but I always do it on Sunday evening. I like Saturdays because I can relax.",
  frames: ["On Saturdays I … at …", "Then I usually …", "In the afternoon I …", "I like … because …"] }
```

  Topics 2–4: a friend or classmate and what they do; your study habits; what you do to stay healthy. (The existing "My typical day talk" card already covers a school day; do not repeat it.) `checklist`: 4 items.
- [ ] **Step 3: Run** `node --test tests/*.test.js 2>&1 | tail -30`. Expected: all tests PASS (the suite is now fully green).
- [ ] **Step 4: Dispatch one reviewer** with the same checklist as Task 11 Step 5 (facts check replaced by: no invented facts contradicting the persona sheet; `-s` forms correct after he/she/it).
- [ ] **Step 5: Commit**

```bash
git add content/u2-speaking.js
git commit -m "content: Unit 2 pronunciation extras, exam tips, say-more and exam-talk cards"
```

---

### Task 13: README, whole-branch verification, handoff

**Files:**
- Modify: `README.md`

**Read only:** `README.md`; the output of the count script below.

- [ ] **Step 1: Recount.** Run this and use its numbers in the README (speak questions, role-plays, talk topics, pronunciation extras, flashcard deck sizes) — never reuse the old figures:

```bash
node -e 'const fs=require("fs"),vm=require("vm");const sb={window:{}};fs.readdirSync("content").sort().forEach(f=>vm.runInNewContext(fs.readFileSync("content/"+f,"utf8"),sb));sb.window.unitContent.forEach((u,i)=>{if(!u)return;const t=u.speaking.tasks,s=t.filter(a=>a.type==="speak");console.log("Unit",i+1,"speak Qs",s.reduce((n,a)=>n+a.questions.length,0),"talk topics",s.reduce((n,a)=>n+a.questions.filter(q=>q.cues).length,0),"roleplays",t.length-s.length,"extras",u.speaking.pronunciation.extras.length,"vocab terms",u.vocabulary.groups.reduce((n,g)=>n+g.items.length,0))})'
```

- [ ] **Step 2: Update `README.md`:** new features (listen to models and role-play lines, slow speech, record and compare, practise with the app, timed talks, exam interview, pronunciation extras, word review flashcards, saved progress), the file list (`speech.js`, `flashcards.js`), a line that recordings never leave the device, a line that progress is stored in the browser (`e9:` keys) and can be reset by clearing site data, and the corrected counts.
- [ ] **Step 3: Full smoke at two widths** (desktop and `resize_window` mobile 375): Unit 1 and Unit 2, Speaking and Vocabulary: no console errors, `document.documentElement.scrollWidth <= innerWidth`, keyboard Tab reaches every new button with a visible focus ring, a screen-reader check that each new button has text or `aria-label` and every status line is `aria-live`. Then `resize_window` desktop.
- [ ] **Step 4: Dispatch one whole-branch reviewer on the strongest available model** with the diff against `main`, this plan and its Review Focus section. Ask for: spec coverage per Findings row, Review Focus failures, leaks (`setInterval`, blob URLs, utterances after leaving a section), unescaped HTML, and content errors in the new cards. Fix every confirmed finding in small commits.
- [ ] **Step 5: Run the full suite:** `node --test tests/*.test.js 2>&1 | tail -30`. Expected: all PASS.
- [ ] **Step 6: Commit and hand off**

```bash
git add README.md
git commit -m "docs: describe the speaking upgrade and update counts"
```

  Then use superpowers:finishing-a-development-branch. In the final report say what was skipped: Units 3–8, speech-recognition scoring, persistence of scored results.
