window.ExerciseTypes = window.ExerciseTypes || {};

window.ExerciseTypes.quiz = {
  render: function (ex, key) {
    const bank = ex.wordBank && ex.wordBank.length
      ? '<div class="word-bank" role="group" aria-label="Word bank">' + Core.shuffle(ex.wordBank, "bank-" + key).map(function (word) {
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

// Progress keys use the content text, so reordering cards keeps what the learner has done.
function saidKey(q) { return "said|u" + (activeUnit + 1) + "|" + q; }
function doneKey(scenario) { return "done|u" + (activeUnit + 1) + "|" + scenario; }

function toggleReveal(button, target, showText, hideText) {
  const open = target.hidden;
  target.hidden = !open;
  button.setAttribute("aria-expanded", String(open));
  button.textContent = open ? hideText : showText;
}

// Timed talk: plan for 30 s, then talk for item.seconds. The timer is shared (speech.js), so only one talk or interview runs at a time.
const TALK_PLAN_SECONDS = 30;

function talkBlock(item) {
  if (!item.cues || !item.cues.length) return "";
  const seconds = Number(item.seconds) || 60;
  return '<ul class="talk-cues">' + item.cues.map(function (cue) { return '<li>' + escapeHtml(cue) + '</li>'; }).join("") + '</ul>' +
    '<div class="talk" data-seconds="' + seconds + '"><span class="talk-phase" aria-live="polite">Ready</span> <span class="talk-clock">' + Core.formatClock(TALK_PLAN_SECONDS) + '</span>' +
    '<div class="talk-buttons"><button class="speak-toggle" type="button" data-talk-plan>Plan (' + TALK_PLAN_SECONDS + ' s)</button>' +
    '<button class="speak-toggle" type="button" data-talk-go>Talk (' + seconds + ' s)</button>' +
    '<button class="speak-toggle" type="button" data-talk-stop>Stop</button></div>' + recorderControls() + '</div>';
}

function talkShow(talk, phase, clock) {
  if (!talk.isConnected) return;
  talk.querySelector(".talk-phase").textContent = phase;
  if (clock) talk.querySelector(".talk-clock").textContent = clock;
}

function talkIdle(talk) { talkShow(talk, "Ready", Core.formatClock(TALK_PLAN_SECONDS)); }

function talkStart(talk, go) {
  const owner = claimTimed(talk, function () { talkIdle(talk); });
  talkShow(talk, go ? "Talk now" : "Plan your talk");
  startTimed(owner, talk.querySelector(".talk-clock"), go ? Number(talk.dataset.seconds) : TALK_PLAN_SECONDS, function () {
    talkShow(talk, go ? "Time is up." : "Plan finished. Press Talk when you are ready.");
  });
}

window.ExerciseTypes.speak = {
  unscored: true,
  practiceTotal: function (ex) { return ex.questions.length; },
  practisedCount: function (ex) {
    return ex.questions.filter(function (item) { return progress.get(saidKey(item.q), false) === true; }).length;
  },

  render: function (ex, key) {
    const items = ex.questions.map(function (item, i) {
      const id = 'speak-' + key + '-' + i;
      const frames = item.frames && item.frames.length
        ? '<p class="speak-frames-title">Useful language</p><ul class="speak-frames">' + item.frames.map(function (f) {
            return '<li>' + escapeHtml(f) + '</li>';
          }).join("") + '</ul>'
        : "";
      return '<div class="speak-item">' +
        '<p class="speak-q">' + (i + 1) + '. ' + escapeHtml(item.q) + '</p>' + listenButton(item.q, "question " + (i + 1)) + talkBlock(item) + frames +
        '<button class="speak-toggle" type="button" data-speak-toggle aria-expanded="false" aria-controls="' + id + '-model">Show model answer</button>' +
        '<div class="speak-model" id="' + id + '-model" hidden><p>' + escapeHtml(item.model) + '</p>' + listenButton(item.model, "model answer " + (i + 1)) + '</div>' +
        '<label class="speak-check" for="' + id + '-said"><input type="checkbox" id="' + id + '-said" data-speak-said' + (progress.get(saidKey(item.q), false) === true ? ' checked' : '') + '> I said it aloud</label>' + (item.cues && item.cues.length ? "" : recorderControls()) +
      '</div>';
    }).join("");
    return (ex.instruction ? '<p class="exercise-prompt">' + escapeHtml(ex.instruction) + '</p>' : "") + items + speakChecklist(ex, key);
  },

  onClick: function (event, card, ex) {
    const talkButton = event.target.closest("[data-talk-plan], [data-talk-go], [data-talk-stop]");
    if (talkButton) {
      const talk = talkButton.closest(".talk");
      if (talkButton.hasAttribute("data-talk-stop")) stopTimed(talk); else talkStart(talk, talkButton.hasAttribute("data-talk-go"));
      return true;
    }
    const toggle = event.target.closest("[data-speak-toggle]");
    if (toggle) {
      toggleReveal(toggle, document.getElementById(toggle.getAttribute("aria-controls")), "Show model answer", "Hide model answer");
      return true;
    }
    const said = event.target.closest("[data-speak-said]");
    if (said) {
      const q = ex.questions[Array.prototype.indexOf.call(card.querySelectorAll("[data-speak-said]"), said)].q;
      if (said.checked) progress.set(saidKey(q), true); else progress.remove(saidKey(q));
      setPractised(card, card.querySelectorAll("[data-speak-said]:checked").length, ex.questions.length);
      return true;
    }
    return false;
  }
};

// Partner session: the app speaks the other role's lines, the learner speaks their own.
// A session is current only while its token equals sessionToken (speech.js); anything older does nothing.
let partner = null;

function partnerStatus(card, text, next, live) {
  const statusP = card.querySelector(".roleplay-status");
  const nextBtn = card.querySelector("[data-roleplay-next]");
  const active = document.activeElement;
  const had = card.contains(active) && active.matches("[data-roleplay-next], [data-roleplay-stop], [data-roleplay-play], .roleplay-status");
  statusP.textContent = text;
  nextBtn.hidden = !next;
  card.querySelector("[data-roleplay-stop]").hidden = !live;
  // The focused button may have just been hidden: move focus to what the learner needs next.
  if (had) (next ? nextBtn : text ? statusP : card.querySelector("[data-roleplay-play]")).focus();
}

function partnerClear(card) {
  card.querySelectorAll(".roleplay-model li.is-playing").forEach(function (li) { li.classList.remove("is-playing"); });
}

function partnerEnd(card) {
  endSpeechSession();
  partner = null;
  if (!card.querySelector("[data-roleplay-play]")) return;
  partnerClear(card);
  partnerStatus(card, "", false, false);
}

function partnerStep(session, index) {
  const card = session.card;
  if (session.token !== sessionToken || !card.isConnected) return;
  clearTimeout(session.timer);
  session.index = index;
  partnerClear(card);
  if (index >= session.ex.model.length) {
    partnerStatus(card, "Role-play finished. Well done!", false, false);
    partner = null;
    return;
  }
  const line = session.ex.model[index];
  if (line.speaker === session.mine) {
    partnerStatus(card, "Your turn (" + session.mine + "): use your card. Press Next line when you have spoken.", true, true);
    return;
  }
  partnerStatus(card, "Listen to " + line.speaker + "…", false, true);
  card.querySelectorAll(".roleplay-model li")[index].classList.add("is-playing");
  const advance = function () { partnerStep(session, index + 1); };
  // shortcut: a platform with no voices never fires `end`, so move on after a generous guess; tune if real lines get cut off.
  session.timer = setTimeout(advance, (400 + 90 * line.text.length) / (progress.get("slow", false) === true ? 0.7 : 1));
  speakText(line.text, { onend: advance });
}

window.ExerciseTypes.roleplay = {
  unscored: true,
  practiceTotal: function () { return 1; },
  practisedCount: function (ex) { return progress.get(doneKey(ex.scenario), false) === true ? 1 : 0; },

  render: function (ex, key) {
    const partnerControls = function () {
      return canSpeak()
        ? '<div class="roleplay-partner"><button class="speak-toggle" type="button" data-roleplay-play>Practise with the app</button>' +
          '<button class="speak-toggle" type="button" data-roleplay-next hidden>Next line</button>' +
          '<button class="speak-toggle" type="button" data-roleplay-stop hidden>Stop</button>' +
          '<p class="roleplay-status" tabindex="-1" aria-live="polite"></p></div>'
        : "";
    };
    const card = function (letter, c) {
      return '<div class="roleplay-card" data-roleplay-card="' + letter + '"><h4>Role ' + letter + ': ' + escapeHtml(c.role) + '</h4><dl>' +
        c.rows.map(function (row) { return '<dt>' + escapeHtml(row[0]) + '</dt><dd>' + escapeHtml(row[1]) + '</dd>'; }).join("") +
      '</dl></div>';
    };
    const lines = ex.model.map(function (line, i) {
      return '<li data-speaker="' + escapeHtml(line.speaker) + '"><strong>' + escapeHtml(line.speaker) + ':</strong> ' + escapeHtml(line.text) + ' ' + listenButton(line.text, line.speaker + " line " + (i + 1)) + '</li>';
    }).join("");
    return '<p class="exercise-prompt">' + escapeHtml(ex.scenario) + '</p>' +
      '<div class="roleplay-cards">' + card("A", ex.cardA) + card("B", ex.cardB) + '</div>' +
      '<div class="roleplay-choose" role="group" aria-label="Choose your role"><span>Choose your role</span>' +
        '<button class="speak-toggle" type="button" data-roleplay-role="A" aria-pressed="false">I am A</button>' +
        '<button class="speak-toggle" type="button" data-roleplay-role="B" aria-pressed="false">I am B</button></div>' +
      '<button class="speak-toggle" type="button" data-speak-toggle aria-expanded="false" aria-controls="roleplay-' + key + '-model">Show model dialogue</button>' +
      '<ol class="roleplay-model" id="roleplay-' + key + '-model" hidden>' + lines + '</ol>' + partnerControls() + recorderControls() +
      '<label class="speak-check" for="roleplay-' + key + '-done"><input type="checkbox" id="roleplay-' + key + '-done" data-roleplay-done' + (progress.get(doneKey(ex.scenario), false) === true ? ' checked' : '') + '> Done: I practised this role-play</label>' +
      speakChecklist(ex, key);
  },

  onClick: function (event, card, ex) {
    const role = event.target.closest("[data-roleplay-role]");
    if (role) {
      const mine = role.dataset.roleplayRole;
      partnerEnd(card);
      card.querySelectorAll("[data-roleplay-role]").forEach(function (b) { b.setAttribute("aria-pressed", String(b === role)); });
      card.querySelectorAll("[data-roleplay-card]").forEach(function (c) { c.classList.toggle("is-mine", c.dataset.roleplayCard === mine); });
      card.querySelectorAll("[data-speaker]").forEach(function (li) {
        li.classList.toggle("is-mine", li.dataset.speaker === mine);
        const tag = li.querySelector(".roleplay-you");
        if (tag) tag.remove();
        if (li.dataset.speaker === mine) li.querySelector("strong").insertAdjacentHTML("afterend", ' <em class="roleplay-you">(you)</em>');
      });
      return true;
    }
    if (event.target.closest("[data-roleplay-play]")) {
      if (partner && partner.card !== card) partnerEnd(partner.card);
      endSpeechSession();
      const chosen = card.querySelector("[data-roleplay-role][aria-pressed='true']");
      if (!chosen) {
        partner = null;
        partnerClear(card);
        partnerStatus(card, "Choose your role first.", false, false);
        return true;
      }
      partner = { card: card, ex: ex, mine: chosen.dataset.roleplayRole, token: sessionToken };
      partnerStep(partner, 0);
      return true;
    }
    if (event.target.closest("[data-roleplay-next]")) {
      if (partner && partner.card === card) partnerStep(partner, partner.index + 1);
      return true;
    }
    if (event.target.closest("[data-roleplay-stop]")) {
      partnerEnd(card);
      return true;
    }
    const toggle = event.target.closest("[data-speak-toggle]");
    if (toggle) {
      toggleReveal(toggle, document.getElementById(toggle.getAttribute("aria-controls")), "Show model dialogue", "Hide model dialogue");
      return true;
    }
    if (event.target.closest("[data-roleplay-done]")) {
      const done = card.querySelector("[data-roleplay-done]").checked;
      if (done) progress.set(doneKey(ex.scenario), true); else progress.remove(doneKey(ex.scenario));
      setPractised(card, done ? 1 : 0, 1);
      return true;
    }
    return false;
  }
};
