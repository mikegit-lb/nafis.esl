# Units 1–2 Depth Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. Steps use checkbox syntax.

**Goal:** Make Units 1–2 deeper: many more speaking questions addressed directly to the learner, more items inside every exercise, and more grammar content (lesson notes, common mistakes) with matching exercises.

**Architecture:** Unchanged from `2026-10-26-unit1-2-speaking-vocab-expansion.md` (core.js, exercise-types.js, section-views.js, `content/uN-*.js`, `tests/`). One small engine addition (`lesson.mistakes` panel) and a stricter validator drive eight content expansions.

**Tech Stack:** Plain HTML/CSS/JS, `node --test tests/*.test.js`.

**Spec:** the user's request: "make sure there are many speaking questions that are more direct to the person and increase the number of exercises in each exercise, add more grammar content with its exercise too."

## Global Constraints
Same as the first plan (no deps, escapeHtml everywhere, plain text, no `<`/`>` in strings, every scored item has `why`, no duplicate prompts per unit, paraphrase don't copy the textbook, avoid `'re/'ll/'ve/'s` in typed answers, vary the correct option position and don't make the key the longest option). Only Units 1 and 2.

## Interpretation of the request (rulings)
- "Direct to the person" = personal questions that use *you/your* ("Do you …?", "What languages can you speak?"), answered with a first-person model answer.
- "More exercises in each exercise" = more items inside each card.
- "More grammar content" = more pattern blocks, dialogue lines and a new "Common mistakes" panel, each backed by new exercises.

## New validator thresholds (Task 1; per unit)
| Rule | Threshold |
|---|---|
| every `quiz` card | ≥ 8 items |
| every `match` card | ≥ 6 pairs |
| every `reading` card | ≥ 6 questions |
| every `speak` card | ≥ 6 questions |
| no stand-alone single-item `choice`/`complete`/`transform`/`fix` cards | fold them into a quiz (keep the original item) |
| vocabulary scored items | ≥ 40 |
| grammar scored items | ≥ 70, ≥ 8 quiz cards, ≥ 5 `build` cards |
| reading-card questions | ≥ 30 |
| speak questions | ≥ 70 in total, of which ≥ 40 personal (`q` matches `/\byou(r)?\b/i`) |
| roleplay cards | ≥ 4 |
| `lesson.patterns` | ≥ 8; `lesson.context` ≥ 10 lines |
| `lesson.mistakes` | ≥ 8 items `{wrong, right, why}`, `wrong` ≠ `right` |

### Task 1: `lesson.mistakes` panel and stricter validator
**Files:** Modify `app.js` (`renderGrammarBlock`), `styles.css`, `tests/content.test.js`; Test `tests/content.test.js`.
**Interfaces:** Produces `lesson.mistakes: {wrong: string, right: string, why: string}[]` rendered as a "Common mistakes" panel (wrong crossed out, right highlighted, why beneath) after "The pattern"/"In context"; absent → panel omitted; legacy Units 3–8 unchanged.
- [ ] Add the thresholds above to the validator (RED: the 8 `unit N …` tests fail on current content; `schema` also checks `mistakes` shape and the single-card ban).
- [ ] Render the panel with `escapeHtml`; 375px safe.
- [ ] Verify the panel with temporary injected data (http.server + Playwright), commit.

### Tasks 2–9: content expansions (parallel, one file each, controller commits)
- [ ] 2 `u1-speaking.js` / 3 `u2-speaking.js`: add ≥ 6 "About you · …" speak cards (≥ 8 personal questions each, with first-person models and frames) and ≥ 2 roleplays; lift existing speak cards to ≥ 6 questions with follow-ups. Unit 1 topics: introducing yourself, your country/nationality/languages, your school, your town's attractions and what tourists can do, trips, abilities (`can`), online life. Unit 2 topics: your day hour by hour, study habits, weekends, family and friends, subjects, technology, health habits, "And you?" swaps with a partner.
- [ ] 4 `u1-grammar.js` / 5 `u2-grammar.js`: new pattern blocks, longer context, `mistakes` (≥ 8), new exercise cards. Unit 1 topics: wh-questions with *be* and *can*, short answers, subject pronouns and possessive adjectives, a/an with nationalities, *can* for permission/requests, *can't* rules. Unit 2 topics: sequencers (first, then, after that, before/after + -ing), *How often* with once/twice/three times a week, *have/has* and irregular -s (does, goes, has), short answers with do/does, *be* vs *do* (He is tired / He does homework). Fold the four old single cards into quizzes.
- [ ] 6 `u1-language.js` / 7 `u2-language.js`: every quiz ≥ 8 items, every match ≥ 6 pairs, ≥ 40 scored, ≥ 15 new vocabulary items (more countries/attractions/activities and introduction phrases; more daily-routine, study and time phrases).
- [ ] 8 `u1-reading.js` / 9 `u2-reading.js`: every reading card ≥ 6 questions (including the migrated B1 cards), every quiz ≥ 8 items, ≥ 30 reading-card questions.

### Task 10: review, fixes, README, merge decision
- [ ] Per-file content review (answer keys, facts, English, copying), fix rounds, final whole-branch review, README counts.
