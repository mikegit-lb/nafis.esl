const units = [
  {
    number: "01",
    navTitle: "School Life",
    title: "School Life",
    focus: "To be and can",
    summary: "Use be to introduce yourself and describe facts. Use can + base verb for ability, opportunity, and possibility.",
    examples: [
      "I am from Türkiye.",
      "You can visit the museum.",
      "Can you speak English?"
    ],
    patterns: [
      {
        label: "Be · present",
        formula: "I am · you / we / they are · he / she / it is",
        note: "Use am, is, or are to give identity and facts."
      },
      {
        label: "Can · ability and possibility",
        formula: "Subject + can / can't + base verb",
        note: "Questions begin with Can. Keep the next verb in its base form."
      }
    ],
    context: [
      { speaker: "A", text: "Where are you from?" },
      { speaker: "B", text: "I am from Türkiye." },
      { speaker: "A", text: "What can you do in Baku?" },
      { speaker: "B", text: "You can visit the Maiden Tower." }
    ]
  },
  {
    number: "02",
    navTitle: "Classroom Life",
    title: "Classroom Life",
    focus: "Simple present · routines and habits",
    summary: "Use the simple present for regular routines, habits, and repeated activities. Frequency words show how often they happen.",
    examples: [
      "I wake up at seven on weekdays.",
      "She studies after school.",
      "Do you walk to school?"
    ],
    patterns: [
      {
        label: "Affirmative",
        formula: "I / you / we / they + base verb · he / she / it + verb-s",
        note: "Add -s or -es to most verbs with he, she, or it."
      },
      {
        label: "Negative",
        formula: "don't / doesn't + base verb",
        note: "After doesn't, use the base verb: He doesn't take the bus."
      },
      {
        label: "Questions",
        formula: "Do / Does + subject + base verb?",
        note: "Use do with I, you, we, they; use does with he, she, it."
      }
    ],
    context: [
      { speaker: "A", text: "What time do you leave home?" },
      { speaker: "B", text: "We leave by half past seven." },
      { speaker: "A", text: "Does James take the bus?" },
      { speaker: "B", text: "No, he doesn't. He walks to school." }
    ]
  },
  {
    number: "03",
    navTitle: "Personal Life",
    title: "Personal Life: Physical Appearance & Personality",
    focus: "Simple present · too and enough",
    summary: "Describe appearance and personality in the simple present. Use too and enough to show degree or whether something is sufficient.",
    examples: [
      "Sophie is cheerful and outgoing.",
      "Sam is too shy to start a conversation.",
      "She is confident enough to try new things."
    ],
    patterns: [
      {
        label: "Descriptions",
        formula: "Subject + be / have / look(s) + description",
        note: "Use be for qualities, have for features, and look for how someone seems."
      },
      {
        label: "Too · more than is suitable",
        formula: "too + adjective + to + base verb",
        note: "Sam is too shy to start a conversation."
      },
      {
        label: "Enough · sufficient",
        formula: "adjective + enough + to + base verb",
        note: "Place enough after an adjective: clever enough to solve it."
      }
    ],
    context: [
      { speaker: "A", text: "What is Sophie like?" },
      { speaker: "B", text: "She is cheerful and outgoing." },
      { speaker: "A", text: "Why does Sam stay quiet?" },
      { speaker: "B", text: "He is too shy to start a conversation." }
    ]
  },
  {
    number: "04",
    navTitle: "Family Life",
    title: "Family Life",
    focus: "Simple present and prepositions of place",
    summary: "Use the simple present to talk about jobs and work routines. Use prepositions of place to say where people work.",
    examples: [
      "Tolga designs buildings in an architecture firm.",
      "Berkay works in a photography studio.",
      "Their grandfather works on a farm."
    ],
    patterns: [
      {
        label: "Jobs and regular work",
        formula: "Subject + simple-present verb",
        note: "Add -s or -es with he, she, or it: She reports the news."
      },
      {
        label: "Workplace · in",
        formula: "in an office · in a studio · in a company",
        note: "Use in for a workplace viewed as an enclosed place or organisation."
      },
      {
        label: "Workplace · at / on",
        formula: "at an office · at a pharmacy · on a farm",
        note: "Common workplace phrases often use at or on. Learn them with the place."
      }
    ],
    context: [
      { speaker: "A", text: "What does Gökçe do?" },
      { speaker: "B", text: "She is a journalist. She reports the news." },
      { speaker: "A", text: "Where does Berkay work?" },
      { speaker: "B", text: "He works in a photography studio." }
    ]
  },
  {
    number: "05",
    navTitle: "Home & Neighbourhood",
    title: "Life in the House & Neighbourhood",
    focus: "Simple present, present continuous, and possessive adjectives",
    summary: "Use the simple present to ask about home types and routines. Use the present continuous for activities happening now, and possessive adjectives to show whose things they are.",
    examples: [
      "What kind of house do you live in?",
      "The children are studying in their room right now.",
      "Her name is Joyce."
    ],
    patterns: [
      {
        label: "Simple present · home and routines",
        formula: "Do / Does + subject + base verb?",
        note: "Ask about a home or a regular fact: Do they live in a flat?"
      },
      {
        label: "Present continuous · happening now",
        formula: "am / is / are + verb-ing",
        note: "I am reading. He is preparing dinner. They are studying."
      },
      {
        label: "Possessive adjectives",
        formula: "my · your · his · her · its · our · their + noun",
        note: "Put the possessive adjective before the thing owned: their room."
      }
    ],
    context: [
      { speaker: "A", text: "What are you doing at the moment?" },
      { speaker: "B", text: "I am reading beside the window." },
      { speaker: "A", text: "Where are the children?" },
      { speaker: "B", text: "They are studying in their room." }
    ]
  },
  {
    number: "06",
    navTitle: "City & Country",
    title: "Life in the City & Country",
    focus: "Simple present, present continuous, and or",
    summary: "Use the simple present for facts and regular events, and the present continuous for what is happening now or around now. Use or to offer choices.",
    examples: [
      "The festival takes place every October.",
      "The chefs are preparing food today.",
      "Would you like tea or coffee?"
    ],
    patterns: [
      {
        label: "Facts and routines",
        formula: "Subject + base verb · he / she / it + verb-s",
        note: "Use the simple present for general truths and repeated events."
      },
      {
        label: "Now and around now",
        formula: "am / is / are + verb-ing",
        note: "Use the present continuous for a current or temporary activity."
      },
      {
        label: "Offer a choice",
        formula: "option A + or + option B",
        note: "Or connects alternatives: Do you prefer the festival or the concert?"
      }
    ],
    context: [
      { speaker: "A", text: "When does the festival take place?" },
      { speaker: "B", text: "It takes place every October." },
      { speaker: "A", text: "What are the chefs doing now?" },
      { speaker: "B", text: "They are preparing stuffed meatballs." }
    ]
  },
  {
    number: "07",
    navTitle: "World & Nature",
    title: "Life in the World & Nature",
    focus: "Was / were, there was / there were, and should",
    summary: "Use was and were for past facts. Use there was or there were to say something existed, and should to give advice or recommendations.",
    examples: [
      "There were thousands of bald ibises in the past.",
      "There was not enough food for them.",
      "We should protect their habitats."
    ],
    patterns: [
      {
        label: "Past of be",
        formula: "I / he / she / it was · you / we / they were",
        note: "Questions switch the verb and subject: Were they endangered?"
      },
      {
        label: "Past existence",
        formula: "There was + singular / uncountable · There were + plural",
        note: "There was no clean water. There were many animals."
      },
      {
        label: "Advice and recommendation",
        formula: "should / shouldn't + base verb",
        note: "Use should to recommend an action: We should protect wildlife."
      }
    ],
    context: [
      { speaker: "A", text: "Were bald ibises common in the past?" },
      { speaker: "B", text: "Yes. There were thousands of them." },
      { speaker: "A", text: "How can we help now?" },
      { speaker: "B", text: "We should protect their natural habitats." }
    ]
  },
  {
    number: "08",
    navTitle: "Universe & Future",
    title: "Life in the Universe & Future",
    focus: "Simple present and simple future",
    summary: "Use the simple present to describe a film's events or story. Use will and won't for predictions, expectations, and opinions about the future.",
    examples: [
      "The film follows a young astronaut.",
      "Technology will change film-making.",
      "Will cinemas disappear? Probably not."
    ],
    patterns: [
      {
        label: "Film events and story",
        formula: "Subject + simple-present verb",
        note: "A film summary often uses the simple present: The story follows a robot."
      },
      {
        label: "Future prediction",
        formula: "will / won't + base verb",
        note: "Use will for a prediction and won't for a negative prediction."
      },
      {
        label: "Future question",
        formula: "Will + subject + base verb?",
        note: "Put will before the subject: Will people watch films at home?"
      }
    ],
    context: [
      { speaker: "A", text: "What does the film follow?" },
      { speaker: "B", text: "It follows a young astronaut on a new planet." },
      { speaker: "A", text: "Will technology change cinema?" },
      { speaker: "B", text: "Yes. It will make storytelling more interactive." }
    ]
  }
];

const nav = document.getElementById("unit-nav");
const lesson = document.getElementById("lesson");
const themesToggle = document.getElementById("themes-toggle");
let activeUnit = 0;

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

function renderLesson() {
  const unit = units[activeUnit];
  const examples = unit.examples.map(function (example) {
    return '<li>' + escapeHtml(example) + '</li>';
  }).join("");

  lesson.innerHTML =
    '<header class="unit-heading">' +
      '<span class="unit-index">' + unit.number + ' /</span>' +
      '<h2>' + escapeHtml(unit.title) + '</h2>' +
    '</header>' +
    '<section class="focus-block" aria-labelledby="focus-title">' +
      '<p class="focus-label">Grammar focus</p>' +
      '<h3 id="focus-title">' + escapeHtml(unit.focus) + '</h3>' +
      '<p class="focus-summary">' + escapeHtml(unit.summary) + '</p>' +
      '<ul class="example-list">' + examples + '</ul>' +
    '</section>' +
    '<div class="lesson-grid">' +
      '<section class="lesson-panel" aria-labelledby="pattern-title">' +
        '<h3 class="panel-heading" id="pattern-title">The pattern</h3>' +
        '<div class="panel-body">' + renderPatterns(unit.patterns) + '</div>' +
      '</section>' +
      '<section class="lesson-panel" aria-labelledby="context-title">' +
        '<h3 class="panel-heading" id="context-title">In context</h3>' +
        '<div class="panel-body context-lines">' + renderContext(unit.context) + '</div>' +
      '</section>' +
    '</div>' +
    renderExercises(window.unitExercises[activeUnit]);

  lesson.querySelectorAll(".exercise-card").forEach(function (card) {
    if (card.dataset.exerciseType === "build") updateBuildTray(card, window.unitExercises[activeUnit][Number(card.dataset.exerciseIndex)]);
  });
}

function renderExercises(exercises) {
  const cards = exercises.map(function (exercise, index) {
    const questionCount = exercise.type === "match" ? exercise.pairs.length : exercise.type === "reading" ? exercise.questions.length : 1;
    let body = "";

    if (exercise.type === "reading") {
      body = '<article class="reading-passage" aria-label="B1 reading passage">' +
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
    } else if (exercise.type === "choice") {
      body = '<p class="exercise-prompt">' + escapeHtml(exercise.prompt) + '</p>' +
        '<div class="exercise-options" role="group" aria-label="Answer choices">' +
          exercise.options.map(function (option, optionIndex) {
            return '<button class="choice-option" type="button" data-choice="' + optionIndex + '" aria-pressed="false">' + escapeHtml(option) + '</button>';
          }).join("") +
        '</div>';
    } else if (exercise.type === "complete" || exercise.type === "fix" || exercise.type === "transform") {
      body = '<p class="exercise-prompt">' + escapeHtml(exercise.prompt) + '</p>' +
        '<label class="exercise-input-label" for="exercise-input-' + activeUnit + '-' + index + '">' + escapeHtml(exercise.inputLabel || "Your answer") + '</label>' +
        '<input class="exercise-input" id="exercise-input-' + activeUnit + '-' + index + '" type="text" autocomplete="off">';
    } else if (exercise.type === "build" || exercise.type === "sequence") {
      body = '<p class="exercise-prompt">' + escapeHtml(exercise.instruction || "Tap the words in the correct order.") + '</p>' +
        '<div class="word-bank" role="group" aria-label="Words to arrange">' +
          exercise.tokens.map(function (token, tokenIndex) {
            return '<button class="build-token" type="button" data-word-index="' + tokenIndex + '">' + escapeHtml(token) + '</button>';
          }).join("") +
        '</div>' +
        '<p class="build-tray-label">Your sentence</p>' +
        '<div class="build-tray" aria-live="polite"></div>' +
        '<button class="exercise-reset" type="button">Reset words</button>';
    } else if (exercise.type === "match") {
      body = '<p class="exercise-prompt">Choose the description that matches each example.</p>' +
        '<div class="match-list">' + exercise.pairs.map(function (pair, pairIndex) {
          return '<div class="match-row" data-match-index="' + pairIndex + '">' +
            '<span class="match-example">' + escapeHtml(pair.left) + '</span>' +
            '<select class="match-select" aria-label="Match for ' + escapeHtml(pair.left) + '">' +
              '<option value="">Choose a match</option>' +
              exercise.choices.map(function (choice) {
                return '<option value="' + escapeHtml(choice) + '">' + escapeHtml(choice) + '</option>';
              }).join("") +
            '</select>' +
            '<span class="match-answer"></span>' +
          '</div>';
        }).join("") + '</div>';
    }

    return '<details class="exercise-card" data-exercise-index="' + index + '" data-exercise-type="' + exercise.type + '"' + (index === 0 ? ' open' : '') + '>' +
      '<summary><span class="exercise-card-index">0' + (index + 1) + '</span>' +
        '<span class="exercise-card-title">' + escapeHtml(exercise.title) + '</span>' +
        '<span class="exercise-question-count">' + questionCount + (questionCount === 1 ? ' question' : ' questions') + '</span>' +
      '</summary>' +
      '<div class="exercise-content">' + body +
        '<div class="exercise-actions"><button class="exercise-check" type="button">Check answer</button>' +
          '<p class="exercise-feedback" role="status" aria-live="polite"></p></div>' +
      '</div>' +
    '</details>';
  }).join("");

  return '<section class="practice" aria-labelledby="practice-title">' +
    '<div class="practice-header"><h3 id="practice-title">B1 reading & grammar challenge</h3>' +
      '<span class="practice-count">7 QUESTIONS · 56 TOTAL</span></div>' +
    '<p class="practice-instruction">Five activities per unit: extra-hard B1 reading plus realistic grammar choices, completion, rewriting, and editing.</p>' +
    '<div class="exercise-list">' + cards + '</div>' +
  '</section>';
}

function updateBuildTray(card, exercise) {
  let sequence = [];
  try { sequence = JSON.parse(card.dataset.buildSequence || "[]"); } catch (error) { sequence = []; }
  card.querySelectorAll(".build-token").forEach(function (button) {
    const used = sequence.indexOf(Number(button.dataset.wordIndex)) !== -1;
    button.disabled = used;
    button.classList.toggle("is-used", used);
  });
  card.querySelector(".build-tray").innerHTML = sequence.map(function (tokenIndex) {
    return '<button class="chosen-word" type="button" data-word-index="' + tokenIndex + '" aria-label="Remove ' + escapeHtml(exercise.tokens[tokenIndex]) + '">' + escapeHtml(exercise.tokens[tokenIndex]) + '</button>';
  }).join("");
}

function setExerciseFeedback(card, correct, message) {
  const feedback = card.querySelector(".exercise-feedback");
  feedback.className = "exercise-feedback " + (correct ? "is-correct" : "is-wrong");
  feedback.innerHTML = '<strong>' + (correct ? "Correct." : "Not quite.") + '</strong> ' + escapeHtml(message);
}

function checkExercise(card) {
  if (card.dataset.checked === "true") return;
  const exercise = window.unitExercises[activeUnit][Number(card.dataset.exerciseIndex)];
  const feedback = card.querySelector(".exercise-feedback");

  if (exercise.type === "choice") {
    const selected = card.dataset.selectedChoice;
    if (selected === undefined) { feedback.textContent = "Choose an answer first."; return; }
    const correctIndex = exercise.options.indexOf(exercise.answer);
    const correct = Number(selected) === correctIndex;
    card.querySelectorAll(".choice-option").forEach(function (button, index) {
      button.disabled = true;
      if (index === correctIndex) button.classList.add("is-correct");
      if (index === Number(selected) && !correct) button.classList.add("is-wrong");
    });
    setExerciseFeedback(card, correct, correct ? exercise.why : "The correct answer is “" + exercise.answer + "”. " + exercise.why);
  } else if (exercise.type === "reading") {
    const questions = Array.from(card.querySelectorAll(".reading-question"));
    if (questions.some(function (question) { return question.dataset.selectedChoice === undefined; })) {
      feedback.textContent = "Answer all three reading questions first.";
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
  } else if (exercise.type === "complete" || exercise.type === "fix" || exercise.type === "transform") {
    const input = card.querySelector(".exercise-input");
    if (!input.value.trim()) { feedback.textContent = "Write your answer first."; input.focus(); return; }
    const correct = Core.gradeItem(exercise, input.value);
    input.disabled = true;
    setExerciseFeedback(card, correct, correct ? exercise.why : "One correct answer is: “" + exercise.answer + "” " + exercise.why);
  } else if (exercise.type === "build" || exercise.type === "sequence") {
    let sequence = [];
    try { sequence = JSON.parse(card.dataset.buildSequence || "[]"); } catch (error) { sequence = []; }
    if (sequence.length !== exercise.tokens.length) { feedback.textContent = "Use every word to build the sentence."; return; }
    const built = sequence.map(function (tokenIndex) { return exercise.tokens[tokenIndex]; }).join(" ");
    const target = exercise.answer.join(" ");
    const correct = Core.normalizeAnswer(built) === Core.normalizeAnswer(target);
    card.querySelectorAll(".build-token, .chosen-word, .exercise-reset").forEach(function (button) { button.disabled = true; });
    setExerciseFeedback(card, correct, correct ? exercise.why : "The correct sentence is: “" + target + "” " + exercise.why);
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

  card.dataset.checked = "true";
  card.querySelector(".exercise-check").disabled = true;
}

function selectUnit(index) {
  if (!Number.isInteger(index) || index < 0 || index >= units.length) return;
  activeUnit = index;
  renderNavigation();
  renderLesson();
  document.title = units[index].number + " · " + units[index].navTitle + " | English 9";
}

lesson.addEventListener("click", function (event) {
  const card = event.target.closest(".exercise-card");
  if (!card) return;

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

  const choice = event.target.closest(".choice-option");
  if (choice && card.dataset.checked !== "true") {
    card.dataset.selectedChoice = choice.dataset.choice;
    const feedback = card.querySelector(".exercise-feedback");
    feedback.textContent = "";
    feedback.className = "exercise-feedback";
    card.querySelectorAll(".choice-option").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button === choice));
      button.classList.toggle("is-selected", button === choice);
    });
    return;
  }

  const token = event.target.closest(".build-token");
  const chosenWord = event.target.closest(".chosen-word");
  if ((token || chosenWord) && card.dataset.checked !== "true") {
    const exercise = window.unitExercises[activeUnit][Number(card.dataset.exerciseIndex)];
    let sequence = [];
    try { sequence = JSON.parse(card.dataset.buildSequence || "[]"); } catch (error) { sequence = []; }
    const tokenIndex = Number((token || chosenWord).dataset.wordIndex);
    if (token) sequence.push(tokenIndex);
    else sequence = sequence.filter(function (index) { return index !== tokenIndex; });
    card.dataset.buildSequence = JSON.stringify(sequence);
    updateBuildTray(card, exercise);
    return;
  }

  if (event.target.closest(".exercise-reset") && card.dataset.checked !== "true") {
    card.dataset.buildSequence = "[]";
    updateBuildTray(card, window.unitExercises[activeUnit][Number(card.dataset.exerciseIndex)]);
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
