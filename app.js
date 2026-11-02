const units = [
  {
    number: "01",
    navTitle: "School Life",
    title: "School Life",
    focus: "To be and can",
    summary: "Use be to introduce yourself and describe facts. Use can + base verb for ability, opportunity, and possibility."
  },
  {
    number: "02",
    navTitle: "Classroom Life",
    title: "Classroom Life",
    focus: "Simple present · routines and habits",
    summary: "Use the simple present for regular routines, habits, and repeated activities. Frequency words show how often they happen."
  },
  {
    number: "03",
    navTitle: "Personal Life",
    title: "Personal Life: Physical Appearance & Personality",
    focus: "Simple present · too and enough",
    summary: "Describe appearance and personality in the simple present. Use too and enough to show degree or whether something is sufficient."
  },
  {
    number: "04",
    navTitle: "Family Life",
    title: "Family Life",
    focus: "Simple present and prepositions of place",
    summary: "Use the simple present to talk about jobs and work routines. Use prepositions of place to say where people work."
  },
  {
    number: "05",
    navTitle: "Home & Neighbourhood",
    title: "Life in the House & Neighbourhood",
    focus: "Simple present, present continuous, and possessive adjectives",
    summary: "Use the simple present to ask about home types and routines. Use the present continuous for activities happening now, and possessive adjectives to show whose things they are."
  },
  {
    number: "06",
    navTitle: "City & Country",
    title: "Life in the City & Country",
    focus: "Simple present, present continuous, and or",
    summary: "Use the simple present for facts and regular events, and the present continuous for what is happening now or around now. Use or to offer choices."
  },
  {
    number: "07",
    navTitle: "World & Nature",
    title: "Life in the World & Nature",
    focus: "Was / were, there was / there were, and should",
    summary: "Use was and were for past facts. Use there was or there were to say something existed, and should to give advice or recommendations."
  },
  {
    number: "08",
    navTitle: "Universe & Future",
    title: "Life in the Universe & Future",
    focus: "Simple present and simple future",
    summary: "Use the simple present to describe a film's events or story. Use will and won't for predictions, expectations, and opinions about the future."
  }
];

const nav = document.getElementById("unit-nav");
const lesson = document.getElementById("lesson");
const themesToggle = document.getElementById("themes-toggle");
const progress = Core.createStore((function () { try { return window.localStorage; } catch (e) { return null; } })());
let activeUnit = 0;
let activeSection = "overview";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderNavigation() {
  nav.innerHTML = units.map(function (unit, index) {
    return '<button class="unit-link" type="button" data-unit="' + index + '"' +
      (index === activeUnit ? ' aria-current="page"' : "") +
      ' aria-label="Unit ' + unit.number + ': ' + escapeHtml(unit.title) + '">' +
      '<span class="unit-number">' + unit.number + '</span>' +
      '<span class="unit-name">' + escapeHtml(unit.navTitle) + '</span>' +
      '<span class="unit-chevron" aria-hidden="true">›</span>' +
      '</button>';
  }).join("");

  nav.querySelectorAll(".unit-link").forEach(function (button) {
    button.addEventListener("click", function () {
      selectUnit(Number(button.dataset.unit));
    });
  });
}

function renderPatterns(patterns) {
  return patterns.map(function (pattern) {
    return '<article class="pattern-block">' +
      '<h4 class="pattern-label">' + escapeHtml(pattern.label) + '</h4>' +
      '<p class="pattern-formula">' + escapeHtml(pattern.formula) + '</p>' +
      '<p class="pattern-note">' + escapeHtml(pattern.note) + '</p>' +
      '</article>';
  }).join("");
}

function renderContext(lines) {
  return lines.map(function (line) {
    return '<p class="context-line"><span class="context-speaker">' +
      escapeHtml(line.speaker) + ':</span><span>' + escapeHtml(line.text) + '</span></p>';
  }).join("");
}

function unitContentFor(index) {
  return window.unitContent && window.unitContent[index];
}

function currentActivities() {
  const content = unitContentFor(activeUnit);
  return ((content && content[activeSection]) || {})[activeSection === "speaking" ? "tasks" : "activities"] || [];
}

function renderGrammarBlock(unit) {
  const examples = (unit.examples || []).map(function (example) {
    return '<li>' + escapeHtml(example) + '</li>';
  }).join("");

  return '<section class="focus-block" aria-labelledby="focus-title">' +
      '<p class="focus-label">Grammar focus</p>' +
      '<h3 id="focus-title">' + escapeHtml(unit.focus) + '</h3>' +
      '<p class="focus-summary">' + escapeHtml(unit.summary) + '</p>' +
      '<ul class="example-list">' + examples + '</ul>' +
    '</section>' +
    '<div class="lesson-grid">' +
      '<section class="lesson-panel" aria-labelledby="pattern-title">' +
        '<h3 class="panel-heading" id="pattern-title">The pattern</h3>' +
        '<div class="panel-body">' + renderPatterns(unit.patterns || []) + '</div>' +
      '</section>' +
      '<section class="lesson-panel" aria-labelledby="context-title">' +
        '<h3 class="panel-heading" id="context-title">In context</h3>' +
        '<div class="panel-body context-lines">' + renderContext(unit.context || []) + '</div>' +
      '</section>' +
    '</div>' + renderMistakes(unit.mistakes);
}

function renderMistakes(items) {
  if (!Array.isArray(items) || !items.length) return "";
  return '<section class="lesson-panel mistakes-panel" aria-labelledby="mistakes-title">' +
      '<h3 class="panel-heading" id="mistakes-title">Common mistakes</h3>' +
      '<ul class="panel-body mistake-list" role="list">' + items.map(function (m) {
        return '<li class="mistake-item">' +
          '<p class="mistake-wrong"><span class="sr-only">Incorrect: </span><del>' + escapeHtml(m.wrong) + '</del></p>' +
          '<p class="mistake-right"><span class="sr-only">Correct: </span><ins>' + escapeHtml(m.right) + '</ins></p>' +
          '<p class="mistake-why">' + escapeHtml(m.why) + '</p>' +
        '</li>';
      }).join("") + '</ul>' +
    '</section>';
}

function renderSectionTabs(sections) {
  return '<div class="section-tabs" role="tablist" aria-label="Unit sections">' + sections.map(function (section) {
    const selected = section.id === activeSection;
    return '<button class="section-tab" type="button" role="tab" id="tab-' + section.id + '" data-section="' + section.id + '"' +
      ' aria-selected="' + selected + '" aria-controls="section-panel" tabindex="' + (selected ? "0" : "-1") + '">' +
      escapeHtml(section.label) + '</button>';
  }).join("") + '</div>';
}

function renderSectionBody(unit, content) {
  const views = window.SectionViews || {};
  if (activeSection === "overview" || activeSection === "vocabulary" || activeSection === "speaking") {
    return views[activeSection] ? views[activeSection](unit, content) : "";
  }
  const activities = currentActivities();
  if (activeSection === "grammar") {
    const mergedLesson = Object.assign({}, unit, content && content.lesson);
    const questionTotal = activities.reduce(function (n, a) { return n + Core.countQuestions(a); }, 0);
    const jump = typeof sectionJumpBar === "function"
      ? sectionJumpBar((mergedLesson.patterns || []).length + " patterns · " + activities.length + " practice sets (" + questionTotal + " questions)", "Jump to grammar practice ↓")
      : "";
    return jump + renderGrammarBlock(mergedLesson) + renderExercises(activities, { heading: "Grammar practice" });
  }
  return renderExercises(activities, { heading: "Reading practice" });
}

function renderLesson() {
  stopAllActivity();
  const unit = units[activeUnit];
  const content = unitContentFor(activeUnit);
  const sections = Core.getSections(content);
  const heading =
    '<header class="unit-heading">' +
      '<span class="unit-index">' + unit.number + ' /</span>' +
      '<h2>' + escapeHtml(unit.title) + '</h2>' +
    '</header>';

  if (sections.length) {
    lesson.innerHTML = heading + renderSectionTabs(sections) +
      '<div class="section-panel" id="section-panel" role="tabpanel" aria-labelledby="tab-' + activeSection + '">' +
        renderSectionBody(unit, content) +
      '</div>';
  } else {
    lesson.innerHTML = heading + renderGrammarBlock(unit) + renderExercises(currentActivities());
  }
}

// options (section views only): heading overrides the legacy title; countText overrides the "N QUESTIONS" badge.
function renderExercises(exercises, options) {
  options = options || {};
  if (!exercises.length) return "";
  const cards = exercises.map(function (exercise, index) {
    const questionCount = Core.countQuestions(exercise);
    const custom = (window.ExerciseTypes || {})[exercise.type];
    const unscored = Boolean(custom && custom.unscored);
    let body = "";

    if (custom && custom.render) {
      body = custom.render(exercise, activeUnit + "-" + index);
    } else if (exercise.type === "reading") {
      body = '<article class="reading-passage" aria-label="Reading passage">' +
          '<h4>' + escapeHtml(exercise.passageTitle) + '</h4>' +
          '<p>' + escapeHtml(exercise.passage) + '</p>' +
        '</article>' +
        '<div class="reading-questions">' + exercise.questions.map(function (question, questionIndex) {
          return '<fieldset class="reading-question" data-reading-question-index="' + questionIndex + '">' +
            '<legend>' + (questionIndex + 1) + '. ' + escapeHtml(question.prompt) + '</legend>' +
            '<div class="reading-options">' + question.options.map(function (option, optionIndex) {
              return '<button class="reading-option" type="button" data-reading-choice="' + optionIndex + '" aria-pressed="false">' + escapeHtml(option) + '</button>';
            }).join("") + '</div>' +
            '<p class="reading-question-feedback" aria-live="polite"></p>' +
          '</fieldset>';
        }).join("") + '</div>';
    } else if (exercise.type === "match") {
      body = '<p class="exercise-prompt">Choose the description that matches each example.</p>' +
        '<div class="match-list">' + exercise.pairs.map(function (pair, pairIndex) {
          return '<div class="match-row" data-match-index="' + pairIndex + '">' +
            '<span class="match-example">' + escapeHtml(pair.left) + '</span>' +
            '<select class="match-select" aria-label="Match for ' + escapeHtml(pair.left) + '">' +
              '<option value="">Choose a match</option>' +
              Core.shuffle(exercise.choices, activeUnit + "-" + activeSection + "-" + index).map(function (choice) {
                return '<option value="' + escapeHtml(choice) + '">' + escapeHtml(choice) + '</option>';
              }).join("") +
            '</select>' +
            '<span class="match-answer"></span>' +
          '</div>';
        }).join("") + '</div>';
    }

    const indexLabel = (index + 1 < 10 ? "0" : "") + (index + 1);
    return '<details class="exercise-card" data-exercise-index="' + index + '" data-exercise-type="' + exercise.type + '"' + (index === 0 ? ' open' : '') + '>' +
      '<summary><span class="exercise-card-index">' + indexLabel + '</span>' +
        '<span class="exercise-card-title">' + escapeHtml(exercise.title) + '</span>' +
        '<span class="exercise-question-count">' + (unscored ? custom.practisedCount(exercise) + '/' + custom.practiceTotal(exercise) + ' practised' : questionCount + ' questions') + '</span>' +
      '</summary>' +
      '<div class="exercise-content">' + body +
        (unscored ? '' : '<div class="exercise-actions"><button class="exercise-check" type="button">Check answer</button>' +
          '<p class="exercise-feedback" role="status" aria-live="polite"></p></div>') +
      '</div>' +
    '</details>';
  }).join("");

  const total = exercises.reduce(function (sum, exercise) { return sum + Core.countQuestions(exercise); }, 0);

  // No scored questions (unscored speaking cards only): count the tasks instead of showing "0 QUESTIONS".
  const countText = options.countText || (total > 0
    ? total + (total === 1 ? ' QUESTION' : ' QUESTIONS')
    : exercises.length + (exercises.length === 1 ? ' TASK' : ' TASKS'));

  return '<section class="practice" aria-labelledby="practice-title">' +
    '<div class="practice-header"><h3 id="practice-title">' + escapeHtml(options.heading || "Practice") + '</h3>' +
      '<span class="practice-count">' + escapeHtml(countText) + '</span></div>' +
    '<div class="exercise-list">' + cards + '</div>' +
  '</section>';
}

function setExerciseFeedback(card, correct, message) {
  const feedback = card.querySelector(".exercise-feedback");
  feedback.className = "exercise-feedback " + (correct ? "is-correct" : "is-wrong");
  feedback.innerHTML = '<strong>' + (correct ? "Correct." : "Not quite.") + '</strong> ' + escapeHtml(message);
}

function checkExercise(card) {
  if (card.dataset.checked === "true") return;
  const exercise = currentActivities()[Number(card.dataset.exerciseIndex)];
  const feedback = card.querySelector(".exercise-feedback");
  const custom = (window.ExerciseTypes || {})[exercise.type];

  // A registered type owns its whole check, including calling markChecked(card) once it accepts the answers.
  if (custom && custom.check) { custom.check(card, exercise); return; }

  if (exercise.type === "reading") {
    const questions = Array.from(card.querySelectorAll(".reading-question"));
    if (questions.some(function (question) { return question.dataset.selectedChoice === undefined; })) {
      feedback.textContent = "Answer every reading question first.";
      return;
    }
    let score = 0;
    exercise.questions.forEach(function (item, index) {
      const question = questions[index];
      const selected = Number(question.dataset.selectedChoice);
      const correct = selected === item.answer;
      if (correct) score += 1;
      question.querySelectorAll(".reading-option").forEach(function (button, optionIndex) {
        button.disabled = true;
        if (optionIndex === item.answer) button.classList.add("is-correct");
        if (optionIndex === selected && !correct) button.classList.add("is-wrong");
      });
      const result = question.querySelector(".reading-question-feedback");
      result.className = "reading-question-feedback " + (correct ? "is-correct" : "is-wrong");
      result.textContent = (correct ? "Correct. " : "Correct answer: " + item.options[item.answer] + ". ") + item.why;
    });
    setExerciseFeedback(card, score === exercise.questions.length, score + "/" + exercise.questions.length + " reading answers correct. Review the notes above.");
  } else if (exercise.type === "match") {
    const selects = Array.from(card.querySelectorAll(".match-select"));
    if (selects.some(function (select) { return !select.value; })) { feedback.textContent = "Choose a match for each example first."; return; }
    let score = 0;
    exercise.pairs.forEach(function (pair, index) {
      const row = card.querySelector('[data-match-index="' + index + '"]');
      const correct = selects[index].value === pair.answer;
      if (correct) score += 1;
      selects[index].disabled = true;
      row.classList.add(correct ? "is-correct" : "is-wrong");
      row.querySelector(".match-answer").textContent = correct ? "Correct" : "Correct match: " + pair.answer;
    });
    const correct = score === exercise.pairs.length;
    setExerciseFeedback(card, correct, score + "/" + exercise.pairs.length + " matches. " + exercise.why);
  }

  markChecked(card);
}

function markChecked(card) {
  card.dataset.checked = "true";
  card.querySelector(".exercise-check").disabled = true;
}

function selectUnit(index) {
  if (!Number.isInteger(index) || index < 0 || index >= units.length) return;
  activeUnit = index;
  activeSection = Core.resolveSection(Core.getSections(unitContentFor(index)), activeSection);
  renderNavigation();
  renderLesson();
  document.title = units[index].number + " · " + units[index].navTitle + " | English 9";
}

function selectSection(id) {
  // Re-rendering the active section would wipe the learner's answered state; just move focus.
  if (id !== activeSection) {
    activeSection = id;
    renderLesson();
  }
  const tab = lesson.querySelector('[role="tab"][data-section="' + id + '"]');
  if (tab) tab.focus();
}

lesson.addEventListener("keydown", function (event) {
  const tab = event.target.closest('[role="tab"]');
  if (!tab || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
  const tabs = Array.from(lesson.querySelectorAll('[role="tab"]'));
  const next = tabs[(tabs.indexOf(tab) + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
  event.preventDefault();
  selectSection(next.dataset.section);
});

lesson.addEventListener("click", function (event) {
  const tab = event.target.closest('[role="tab"]');
  if (tab) { selectSection(tab.dataset.section); return; }

  const card = event.target.closest(".exercise-card");
  if (!card) return;

  const cardExercise = currentActivities()[Number(card.dataset.exerciseIndex)];
  const custom = cardExercise && (window.ExerciseTypes || {})[cardExercise.type];
  if (custom && custom.onClick && custom.onClick(event, card, cardExercise) === true) return;

  const readingOption = event.target.closest(".reading-option");
  if (readingOption && card.dataset.checked !== "true") {
    const question = readingOption.closest(".reading-question");
    question.dataset.selectedChoice = readingOption.dataset.readingChoice;
    question.querySelectorAll(".reading-option").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button === readingOption));
      button.classList.toggle("is-selected", button === readingOption);
    });
    question.querySelector(".reading-question-feedback").textContent = "";
    return;
  }

  if (event.target.closest(".exercise-check")) checkExercise(card);
});

themesToggle.addEventListener("click", function () {
  const isExpanded = themesToggle.getAttribute("aria-expanded") === "true";
  themesToggle.setAttribute("aria-expanded", String(!isExpanded));
  document.getElementById("unit-navigation").classList.toggle("nav-collapsed", isExpanded);
});

renderNavigation();
renderLesson();
