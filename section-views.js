window.SectionViews = window.SectionViews || {};

function viewList(items, className) {
  return '<ul class="' + className + '">' + (items || []).map(function (item) {
    return '<li>' + escapeHtml(item) + '</li>';
  }).join("") + '</ul>';
}

function viewPanel(id, title, body) {
  return '<section class="lesson-panel" aria-labelledby="' + id + '">' +
    '<h3 class="panel-heading" id="' + id + '">' + escapeHtml(title) + '</h3>' +
    '<div class="panel-body">' + body + '</div>' +
  '</section>';
}

window.SectionViews.overview = function (unit, content) {
  const o = content.overview || {};
  const leadIn = o.leadIn || {};
  const sounds = (o.pronunciation || []).map(escapeHtml).join(" · ");
  return '<section class="focus-block" aria-labelledby="leadin-title">' +
      '<p class="focus-label">Lead-in</p>' +
      '<h3 id="leadin-title">' + escapeHtml(leadIn.prompt || unit.title) + '</h3>' +
      '<ul class="topic-chips" aria-label="Topics to talk about">' + (leadIn.topics || []).map(function (topic) {
        return '<li class="quiz-chip">' + escapeHtml(topic) + '</li>';
      }).join("") + '</ul>' +
    '</section>' +
    '<div class="lesson-grid overview-grid">' +
      viewPanel("subthemes-title", "Sub-themes", viewList(o.subThemes, "view-list")) +
      viewPanel("functions-title", "Functions", viewList(o.functions, "view-list")) +
      viewPanel("social-title", "Social language", viewList(o.socialLanguage, "view-list")) +
    '</div>' +
    (sounds ? '<p class="sounds-line"><strong>Sounds to practise:</strong> ' + sounds + '</p>' : "");
};

window.SectionViews.vocabulary = function (unit, content) {
  const v = content.vocabulary || {};
  const groups = (v.groups || []).map(function (group, index) {
    return viewPanel("vocab-group-" + index, group.title,
      '<dl class="vocab-list">' + group.items.map(function (item) {
        return '<div class="vocab-item"><dt>' + escapeHtml(item.term) + '</dt>' +
          '<dd>' + escapeHtml(item.meaning) + '</dd>' +
          '<dd class="vocab-example">' + escapeHtml(item.example) + '</dd></div>';
      }).join("") + '</dl>');
  }).join("");
  // currentActivities() is the list the card index lookups in app.js use, so it must be what we render.
  return '<div class="lesson-grid vocab-grid">' + groups + '</div>' +
    renderExercises(currentActivities(), { heading: "Vocabulary practice" });
};

// Exam interview. A session counts only while it is `interview` and its panel is still on the page; every callback checks that.
const INTERVIEW_SECONDS = 30;
let interview = null;

// Same structure as viewPanel: heading, then the content inside .panel-body (which carries the inner padding).
function interviewShell(body) {
  return '<h3 class="panel-heading">Exam interview</h3><div class="panel-body">' + body + '</div>';
}

function interviewStartBody(again) {
  return '<p>Six questions, ' + INTERVIEW_SECONDS + ' seconds to answer each.</p>' +
    '<button class="speak-toggle" type="button" data-interview-start>' + (again ? "Start again" : "Start interview") + '</button>';
}

function interviewStartHtml() { return interviewShell(interviewStartBody(false)); }

function interviewLive(session) {
  return interview === session && session.panel.isConnected;
}

// Back to the start state: used by Stop, and when a talk takes the timer over.
function interviewReset(panel) {
  interview = null;
  stopTimed(panel);
  endSpeechSession();
  endRecording(false);
  if (panel.isConnected) panel.innerHTML = interviewStartHtml();
}

function interviewFinish(session) {
  const panel = session.panel;
  interview = null;
  releaseTimed(session.owner);
  endSpeechSession();
  endRecording(false);
  panel.innerHTML = interviewShell('<p class="interview-status" aria-live="polite">Interview finished. Well done!</p>' +
    '<ol class="interview-review">' + session.questions.map(function (item, i) {
      const id = "interview-model-" + i;
      return '<li><p class="interview-question">' + escapeHtml(item.q) + '</p>' +
        '<button class="speak-toggle" type="button" data-interview-toggle aria-expanded="false" aria-controls="' + id + '">Show model answer</button>' +
        '<div class="speak-model" id="' + id + '" hidden><p>' + escapeHtml(item.model) + '</p>' + listenButton(item.model, "model answer " + (i + 1)) + '</div></li>';
    }).join("") + '</ol>' + interviewStartBody(true));
}

function interviewStep(session, index) {
  if (!interviewLive(session)) return;
  clearTimeout(session.timer);
  endRecording(false);
  session.index = index;
  if (index >= session.questions.length) { interviewFinish(session); return; }
  const panel = session.panel;
  const item = session.questions[index];
  const last = index === session.questions.length - 1;
  panel.innerHTML = interviewShell('<p class="interview-count">Question ' + (index + 1) + ' of ' + session.questions.length + '</p>' +
    '<p class="interview-question">' + escapeHtml(item.q) + '</p>' +
    '<p class="interview-status" aria-live="polite">' + (canSpeak() ? "Listen to the question…" : "") + '</p>' +
    '<p class="interview-clock">' + Core.formatClock(INTERVIEW_SECONDS) + '</p>' + recorderControls() +
    '<button class="speak-toggle" type="button" data-interview-next>' + (last ? "Finish interview" : "Next question") + '</button>' +
    '<button class="speak-toggle" type="button" data-interview-stop>Stop</button>');
  let begun = false;
  // The answer clock starts when the question has been read (or at once without speech).
  const begin = function () {
    if (begun || !interviewLive(session) || session.index !== index) return;
    begun = true;
    clearTimeout(session.timer);
    panel.querySelector(".interview-status").textContent = "Answer now.";
    startTimed(session.owner, panel.querySelector(".interview-clock"), INTERVIEW_SECONDS, function () {
      if (interviewLive(session) && session.index === index) panel.querySelector(".interview-status").textContent = "Time is up. Press " + (last ? "Finish interview." : "Next question.");
    });
  };
  if (!canSpeak()) { begin(); return; }
  // shortcut: a platform with no voices never fires `end`, so start the clock after a generous guess (same estimate as the role-play walk).
  session.timer = setTimeout(begin, (400 + 90 * item.q.length) / (progress.get("slow", false) === true ? 0.7 : 1));
  speakText(item.q, { onend: begin });
}

function interviewStart(panel) {
  const cards = currentActivities().filter(function (ex) { return ex.type === "speak"; });
  const questions = Core.pickInterview(cards, 6, String(Date.now()));
  if (!questions.length) return;
  endSpeechSession();
  const session = { panel: panel, questions: questions, index: 0, timer: null, owner: null };
  session.owner = claimTimed(panel, function () { if (interview === session) interviewReset(panel); });
  interview = session;
  interviewStep(session, 0);
}

document.addEventListener("click", function (event) {
  const panel = event.target.closest("[data-interview]");
  if (!panel) return;
  if (event.target.closest("[data-interview-start]")) { interviewStart(panel); return; }
  if (event.target.closest("[data-interview-stop]")) { interviewReset(panel); return; }
  if (event.target.closest("[data-interview-next]")) {
    if (interview && interview.panel === panel) interviewStep(interview, interview.index + 1);
    return;
  }
  const toggle = event.target.closest("[data-interview-toggle]");
  if (toggle) toggleReveal(toggle, document.getElementById(toggle.getAttribute("aria-controls")), "Show model answer", "Hide model answer");
});

function wordChip(word) {
  return canSpeak()
    ? '<button class="quiz-chip listen-chip" type="button" data-listen="' + escapeHtml(word) + '" aria-label="Listen: ' + escapeHtml(word) + '">' + escapeHtml(word) + '</button>'
    : '<span class="quiz-chip">' + escapeHtml(word) + '</span>';
}

function soundGroupsHtml(groups) {
  return (groups || []).map(function (sound) {
    return '<div class="sound-group"><h4 class="sound-label">' + escapeHtml(sound.label) + '</h4>' +
      '<ul class="word-chips">' + sound.words.map(function (word) {
        return '<li>' + wordChip(word) + '</li>';
      }).join("") + '</ul></div>';
  }).join("");
}

function pronExtraHtml(extra) {
  const groups = (extra.groups || []).map(function (group) {
    if (extra.kind === "words") return soundGroupsHtml([group]);
    const label = '<h4 class="sound-label">' + escapeHtml(group.label) + '</h4>';
    if (extra.kind === "sentences") {
      return '<div class="sound-group">' + label + '<ol class="read-aloud">' + (group.sentences || []).map(function (sentence) {
        return '<li><span>' + escapeHtml(sentence) + '</span>' + listenButton(sentence) + '</li>';
      }).join("") + '</ol></div>';
    }
    if (extra.kind === "pairs") {
      return '<div class="sound-group">' + label + '<ul class="pair-list">' + (group.pairs || []).map(function (pair) {
        return '<li>' + wordChip(pair[0]) + '<span aria-hidden="true">↔</span>' + wordChip(pair[1]) + '</li>';
      }).join("") + '</ul></div>';
    }
    return "";
  }).join("");
  return (extra.note ? '<p class="pron-note">' + escapeHtml(extra.note) + '</p>' : "") + groups;
}

window.SectionViews.speaking = function (unit, content) {
  const speaking = content.speaking || {};
  const p = speaking.pronunciation || {};
  const sounds = soundGroupsHtml(p.sounds);
  const sentences = (p.sentences || []).length
    ? '<h4 class="sound-label">Read aloud</h4><ol class="read-aloud">' + p.sentences.map(function (sentence) {
        return '<li><span>' + escapeHtml(sentence) + '</span>' + listenButton(sentence) + '</li>';
      }).join("") + '</ol>'
    : "";
  const privacy = recorderControls() !== "" ? '<p class="rec-privacy">Recordings stay on your device and are not saved.</p>' : "";
  const tasks = currentActivities();
  // currentActivities() is the list the card index lookups in app.js use, so it must be what we render.
  // The interview needs a pool of at least four questions across the speak cards.
  const speakCards = tasks.filter(function (ex) { return ex.type === "speak"; });
  const interviewPanel = Core.pickInterview(speakCards, 6, "x").length >= 4
    ? '<section class="lesson-panel interview" data-interview>' + interviewStartHtml() + '</section>'
    : "";
  const extras = (p.extras || []).map(function (extra, i) {
    return viewPanel("pron-extra-" + i, extra.title, pronExtraHtml(extra));
  }).join("");
  const examTips = (speaking.examTips || []).length
    ? viewPanel("exam-tips-title", "Exam tips", '<ol class="view-list">' + speaking.examTips.map(function (tip) {
        return '<li>' + escapeHtml(tip) + '</li>';
      }).join("") + '</ol>')
    : "";
  return '<div class="lesson-grid vocab-grid">' + viewPanel("pronunciation-title", "Pronunciation", speedToggle() + sounds + sentences) + extras + examTips + '</div>' + privacy +
    interviewPanel + renderExercises(tasks, {
      heading: "Speaking practice",
      countText: tasks.length + (tasks.length === 1 ? " SPEAKING TASK" : " SPEAKING TASKS")
    });
};
