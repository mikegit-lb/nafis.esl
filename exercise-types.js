window.ExerciseTypes = window.ExerciseTypes || {};

window.ExerciseTypes.quiz = {
  render: function (ex, key) {
    const bank = ex.wordBank && ex.wordBank.length
      ? '<div class="word-bank" role="group" aria-label="Word bank">' + ex.wordBank.map(function (word) {
          return '<span class="quiz-chip">' + escapeHtml(word) + '</span>';
        }).join("") + '</div>'
      : "";
    const items = ex.items.map(function (item, i) {
      const id = 'quiz-' + key + '-' + i;
      const control = item.options
        ? '<div class="reading-options">' + item.options.map(function (option, o) {
            return '<button class="reading-option" type="button" data-quiz-choice="' + o + '" aria-pressed="false">' + escapeHtml(option) + '</button>';
          }).join("") + '</div>'
        : '<label class="exercise-input-label" for="' + id + '">Your answer</label>' +
          '<input class="exercise-input" id="' + id + '" type="text" autocomplete="off">';
      return '<fieldset class="reading-question quiz-item" data-quiz-index="' + i + '">' +
        '<legend>' + (i + 1) + '. ' + escapeHtml(item.prompt) + '</legend>' + control +
        '<p class="reading-question-feedback" aria-live="polite"></p>' +
      '</fieldset>';
    }).join("");
    return (ex.instruction ? '<p class="exercise-prompt">' + escapeHtml(ex.instruction) + '</p>' : "") +
      bank + '<div class="reading-questions">' + items + '</div>';
  },

  onClick: function (event, card) {
    const option = event.target.closest("[data-quiz-choice]");
    if (!option) return false;
    if (card.dataset.checked === "true") return true;
    const item = option.closest(".quiz-item");
    item.dataset.selectedChoice = option.dataset.quizChoice;
    item.querySelectorAll(".reading-option").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button === option));
      button.classList.toggle("is-selected", button === option);
    });
    return true;
  },

  check: function (card, ex) {
    const nodes = Array.from(card.querySelectorAll(".quiz-item"));
    const answered = nodes.map(function (node, i) {
      if (ex.items[i].options) return node.dataset.selectedChoice !== undefined;
      return node.querySelector(".exercise-input").value.trim() !== "";
    });
    if (answered.indexOf(false) !== -1) {
      card.querySelector(".exercise-feedback").textContent = "Answer every question first.";
      const first = nodes[answered.indexOf(false)].querySelector(".exercise-input");
      if (first) first.focus();
      return;
    }
    let score = 0;
    nodes.forEach(function (node, i) {
      const item = ex.items[i];
      let correct;
      if (item.options) {
        const selected = Number(node.dataset.selectedChoice);
        correct = item.options[selected] === item.answer;
        node.querySelectorAll(".reading-option").forEach(function (button, o) {
          button.disabled = true;
          if (item.options[o] === item.answer) button.classList.add("is-correct");
          if (o === selected && !correct) button.classList.add("is-wrong");
        });
      } else {
        const input = node.querySelector(".exercise-input");
        correct = Core.gradeItem(item, input.value);
        input.disabled = true;
      }
      if (correct) score += 1;
      const result = node.querySelector(".reading-question-feedback");
      result.className = "reading-question-feedback " + (correct ? "is-correct" : "is-wrong");
      result.textContent = (correct ? "Correct. " : "Correct answer: " + item.answer + ". ") + item.why;
    });
    markChecked(card);
    setExerciseFeedback(card, score === ex.items.length, score + "/" + ex.items.length + " correct.");
  }
};

// Speaking tasks are practice, not scored: no Check button; the card summary counts ticked "said it aloud" boxes.
function speakChecklist(ex, key) {
  if (!ex.checklist || !ex.checklist.length) return "";
  return '<fieldset class="speak-checklist"><legend>Did you use…</legend>' + ex.checklist.map(function (item, i) {
    const id = 'speak-' + key + '-c' + i;
    return '<label class="speak-check" for="' + id + '"><input type="checkbox" id="' + id + '"> ' + escapeHtml(item) + '</label>';
  }).join("") + '</fieldset>';
}

function setPractised(card, done, total) {
  card.querySelector(".exercise-question-count").textContent = done + "/" + total + " practised";
}

function toggleReveal(button, target, showText, hideText) {
  const open = target.hidden;
  target.hidden = !open;
  button.setAttribute("aria-expanded", String(open));
  button.textContent = open ? hideText : showText;
}

window.ExerciseTypes.speak = {
  unscored: true,
  practiceTotal: function (ex) { return ex.questions.length; },

  render: function (ex, key) {
    const items = ex.questions.map(function (item, i) {
      const id = 'speak-' + key + '-' + i;
      const frames = item.frames && item.frames.length
        ? '<p class="speak-frames-title">Useful language</p><ul class="speak-frames">' + item.frames.map(function (f) {
            return '<li>' + escapeHtml(f) + '</li>';
          }).join("") + '</ul>'
        : "";
      return '<div class="speak-item">' +
        '<p class="speak-q">' + (i + 1) + '. ' + escapeHtml(item.q) + '</p>' + frames +
        '<button class="speak-toggle" type="button" data-speak-toggle aria-expanded="false" aria-controls="' + id + '-model">Show model answer</button>' +
        '<p class="speak-model" id="' + id + '-model" hidden>' + escapeHtml(item.model) + '</p>' +
        '<label class="speak-check" for="' + id + '-said"><input type="checkbox" id="' + id + '-said" data-speak-said> I said it aloud</label>' +
      '</div>';
    }).join("");
    return (ex.instruction ? '<p class="exercise-prompt">' + escapeHtml(ex.instruction) + '</p>' : "") + items + speakChecklist(ex, key);
  },

  onClick: function (event, card, ex) {
    const toggle = event.target.closest("[data-speak-toggle]");
    if (toggle) {
      toggleReveal(toggle, document.getElementById(toggle.getAttribute("aria-controls")), "Show model answer", "Hide model answer");
      return true;
    }
    if (event.target.closest("[data-speak-said]")) {
      setPractised(card, card.querySelectorAll("[data-speak-said]:checked").length, ex.questions.length);
      return true;
    }
    return false;
  }
};

window.ExerciseTypes.roleplay = {
  unscored: true,
  practiceTotal: function () { return 1; },

  render: function (ex, key) {
    const card = function (letter, c) {
      return '<div class="roleplay-card" data-roleplay-card="' + letter + '"><h4>Role ' + letter + ': ' + escapeHtml(c.role) + '</h4><dl>' +
        c.rows.map(function (row) { return '<dt>' + escapeHtml(row[0]) + '</dt><dd>' + escapeHtml(row[1]) + '</dd>'; }).join("") +
      '</dl></div>';
    };
    const lines = ex.model.map(function (line) {
      return '<li data-speaker="' + escapeHtml(line.speaker) + '"><strong>' + escapeHtml(line.speaker) + ':</strong> ' + escapeHtml(line.text) + '</li>';
    }).join("");
    return '<p class="exercise-prompt">' + escapeHtml(ex.scenario) + '</p>' +
      '<div class="roleplay-cards">' + card("A", ex.cardA) + card("B", ex.cardB) + '</div>' +
      '<div class="roleplay-choose" role="group" aria-label="Choose your role"><span>Choose your role</span>' +
        '<button class="speak-toggle" type="button" data-roleplay-role="A" aria-pressed="false">I am A</button>' +
        '<button class="speak-toggle" type="button" data-roleplay-role="B" aria-pressed="false">I am B</button></div>' +
      '<button class="speak-toggle" type="button" data-speak-toggle aria-expanded="false" aria-controls="roleplay-' + key + '-model">Show model dialogue</button>' +
      '<ol class="roleplay-model" id="roleplay-' + key + '-model" hidden>' + lines + '</ol>' +
      '<label class="speak-check" for="roleplay-' + key + '-done"><input type="checkbox" id="roleplay-' + key + '-done" data-roleplay-done> Done: I practised this role-play</label>' +
      speakChecklist(ex, key);
  },

  onClick: function (event, card) {
    const role = event.target.closest("[data-roleplay-role]");
    if (role) {
      const mine = role.dataset.roleplayRole;
      card.querySelectorAll("[data-roleplay-role]").forEach(function (b) { b.setAttribute("aria-pressed", String(b === role)); });
      card.querySelectorAll("[data-roleplay-card]").forEach(function (c) { c.classList.toggle("is-mine", c.dataset.roleplayCard === mine); });
      card.querySelectorAll("[data-speaker]").forEach(function (li) {
        li.classList.toggle("is-mine", li.dataset.speaker === mine);
        const tag = li.querySelector(".roleplay-you");
        if (tag) tag.remove();
        if (li.dataset.speaker === mine) li.insertAdjacentHTML("beforeend", ' <em class="roleplay-you">(you)</em>');
      });
      return true;
    }
    const toggle = event.target.closest("[data-speak-toggle]");
    if (toggle) {
      toggleReveal(toggle, document.getElementById(toggle.getAttribute("aria-controls")), "Show model dialogue", "Hide model dialogue");
      return true;
    }
    if (event.target.closest("[data-roleplay-done]")) {
      setPractised(card, card.querySelector("[data-roleplay-done]").checked ? 1 : 0, 1);
      return true;
    }
    return false;
  }
};
