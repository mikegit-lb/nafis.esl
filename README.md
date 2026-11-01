# English 9 Grammar Guide

A small, dependency-free website for the Grade 9 English textbook themes. Units 1 and 2 are fully expanded; Units 3-8 are not yet expanded.

## Open the site

Open index.html in a browser. The lesson navigation, answer feedback, and unit switching run locally and need no account or external service.

## Contents

- Units 1-2 each have five tabs: Overview, Vocabulary, Speaking, Grammar, Reading
  - Overview: sub-themes, functions, social language, pronunciation focus and a lead-in
  - Vocabulary: term lists with meanings and examples, plus word-bank, matching and quiz activities (Unit 1: 72 terms and 77 scored questions, Unit 2: 64 terms and 94), and a word review of spaced flashcards over every term (72 words in Unit 1, 64 in Unit 2)
  - Speaking: pronunciation sound groups plus extras (4 per unit), read-aloud sentences, exam tips, practice questions with model answers, timed talks and role-plays (Unit 1: 136 speaking questions, 4 timed talk topics, 5 role-plays; Unit 2: 186 questions, 4 timed talk topics, 6 role-plays)
  - Grammar: contextual choice, cloze, transformation, editing, build-a-sentence and quiz activities plus a lesson with pattern blocks, dialogues and a Common mistakes panel (Unit 1: 15 patterns, 11 common mistakes and 150 scored questions; Unit 2: 13 patterns, 12 common mistakes and 181 scored questions)
  - Reading: five passages per unit with comprehension and vocabulary quizzes (Unit 1: 190 scored questions, Unit 2: 205)
- All exercises are original: they follow the kinds of tasks in the textbook (best title, True/False/Not mentioned, odd one out, word-bank cloze, role cards...) but use new questions, texts and examples
- Matching choices and word banks are shown in a shuffled order, so the order no longer follows the rows
- Units 3-8 are not yet expanded: each still has grammar summaries, patterns, examples, one B1 reading card and four grammar challenges
- Responsive layout for desktop and mobile screens

## Speaking practice

These tools appear in the Speaking and Vocabulary tabs of Units 1 and 2. They need a browser with speech synthesis (listening) and a microphone (recording); where a browser lacks either, the matching buttons simply do not appear.

- Listen to model answers, read-aloud sentences, vocabulary words and role-play lines, using a British English voice if the device has one
- Slow speech: a toggle that slows every listen button
- Record and compare: record yourself, play it back, and listen to the model again
- Practise with the app: the app plays one role in a role-play and you say the other
- Timed talks: 30 seconds to plan, then a timed talk with cue questions and a model talk to check against
- Exam interview: a 30-second-per-question run of exam-style questions
- Pronunciation extras and exam tips for each unit
- Word review: flashcards on the Vocabulary tab that come back after longer and longer gaps
- Saved progress: "I said it" ticks, finished role-plays, flashcard boxes and the slow-speech setting are kept between visits

## Privacy and saved data

- Recordings never leave the device: they stay in the page, are not uploaded and are not saved
- Progress is stored in this browser only (local storage, keys starting with `e9:`). Clear the site data for the page to reset it

## Files

- index.html, styles.css: page and styles
- app.js: unit lesson data and page logic
- core.js: section list, answer-checking helpers and the saved-progress store
- exercise-types.js: quiz, speaking and role-play exercise types
- section-views.js: Overview, Vocabulary and Speaking tab views
- speech.js: listening (speech synthesis), recording and the shared timer
- flashcards.js: spaced word review for the Vocabulary tab
- exercises.js: activities for Units 3-8 (Units 1-2 are empty placeholders)
- content/*.js: Unit 1 and 2 content, one file per section group
- tests/: content and engine tests

## Tests

Uses the built-in Node test runner (run with Node 24):

    node --test tests/*.test.js
