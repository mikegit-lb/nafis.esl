# English 9 Grammar Guide

A small, dependency-free website for the Grade 9 English textbook themes. Units 1 and 2 are fully expanded; Units 3-8 are not yet expanded.

## Open the site

Open index.html in a browser. The lesson navigation, answer feedback, and unit switching run locally and need no account or external service.

## Contents

- Units 1-2 each have five tabs: Overview, Vocabulary, Speaking, Grammar, Reading
  - Overview: sub-themes, functions, social language, pronunciation focus and a lead-in
  - Vocabulary: term lists with meanings and examples, plus word-bank, matching and quiz activities (Unit 1: 26 scored questions, Unit 2: 22)
  - Speaking: pronunciation sound groups, read-aloud sentences, practice questions with model answers and role-plays (Unit 1: 34 speaking questions, Unit 2: 68)
  - Grammar: contextual choice, cloze, transformation, editing, build-a-sentence and quiz activities (Unit 1: 40 scored questions, Unit 2: 42)
  - Reading: five passages per unit with comprehension and vocabulary quizzes (Unit 1: 66 scored questions, Unit 2: 53)
- Units 3-8 are not yet expanded: each still has grammar summaries, patterns, examples, one B1 reading card and four grammar challenges
- Responsive layout for desktop and mobile screens

## Files

- index.html, styles.css: page and styles
- app.js: unit lesson data and page logic
- core.js: section list and answer-checking helpers
- exercise-types.js: quiz, speaking and role-play exercise types
- section-views.js: Overview, Vocabulary and Speaking tab views
- exercises.js: activities for Units 3-8 (Units 1-2 are empty placeholders)
- content/*.js: Unit 1 and 2 content, one file per section group
- tests/: content and engine tests

## Tests

Uses the built-in Node test runner (run with Node 24):

    node --test tests/*.test.js
