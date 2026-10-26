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
