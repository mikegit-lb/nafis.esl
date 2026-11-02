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

function sectionJumpBar(summaryText, linkLabel) {
  return '<div class="section-jump-bar">' +
    '<span class="section-jump-meta">' + escapeHtml(summaryText) + '</span>' +
    '<a class="section-jump-link" href="#practice-title">' + escapeHtml(linkLabel || "Jump to practice ↓") + '</a>' +
  '</div>';
}

window.SectionViews.overview = function (unit, content) {
  const o = content.overview || {};
  const leadIn = o.leadIn || {};
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
    '</div>';
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
  const all = [];
  (v.groups || []).forEach(function (group) { all.push.apply(all, group.items); });
  const activities = currentActivities();
  const questionTotal = activities.reduce(function (n, a) { return n + Core.countQuestions(a); }, 0);
  return sectionJumpBar(all.length + " key terms · " + activities.length + " practice sets (" + questionTotal + " questions)", "Jump to vocabulary practice ↓") +
    Flashcards.html(activeUnit, all) + '<div class="lesson-grid vocab-grid">' + groups + '</div>' +
    renderExercises(activities, { heading: "Vocabulary practice" });
};

// Exam interview. A session counts only while it is `interview` and its panel is still on the page; every callback checks that.
const INTERVIEW_SECONDS = 30;
let interview = null;

// Same structure as viewPanel: heading, then the content inside .panel-body (which carries the inner padding).
function interviewShell(body) {
  return '<h3 class="panel-heading" id="interview-title">Exam interview</h3><div class="panel-body">' + body + '</div>';
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
  panel.innerHTML = interviewShell('<p class="interview-status" tabindex="-1" aria-live="polite">Interview finished. Well done!</p>' +
    '<ol class="interview-review">' + session.questions.map(function (item, i) {
      const id = "interview-model-" + i;
      return '<li><p class="interview-question">' + escapeHtml(item.q) + '</p>' +
        '<button class="speak-toggle" type="button" data-interview-toggle aria-expanded="false" aria-controls="' + id + '">Show model answer</button>' +
        '<div class="speak-model" id="' + id + '" hidden><p>' + escapeHtml(item.model) + '</p></div></li>';
    }).join("") + '</ol>' + interviewStartBody(true));
  panel.querySelector(".interview-status").focus();
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
    '<p class="interview-question" tabindex="-1">' + escapeHtml(item.q) + '</p>' +
    '<p class="interview-status" aria-live="polite">Answer aloud now.</p>' +
    '<p class="interview-clock">' + Core.formatClock(INTERVIEW_SECONDS) + '</p>' + recorderControls() +
    '<button class="speak-toggle" type="button" data-interview-next>' + (last ? "Finish interview" : "Next question") + '</button>' +
    '<button class="speak-toggle" type="button" data-interview-stop>Stop</button>');
  panel.querySelector(".interview-question").focus();
  startTimed(session.owner, panel.querySelector(".interview-clock"), INTERVIEW_SECONDS, function () {
    if (interviewLive(session) && session.index === index) panel.querySelector(".interview-status").textContent = "Time is up. Press " + (last ? "Finish interview." : "Next question.");
  });
}

function interviewStart(panel) {
  const cards = currentActivities().filter(function (ex) { return ex.type === "speak"; });
  const questions = Core.pickInterview(cards, 6, String(Date.now()));
  if (!questions.length) return;
  if (partner) partnerEnd(partner.card);
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
  if (event.target.closest("[data-interview-stop]")) { interviewReset(panel); panel.querySelector("[data-interview-start]").focus(); return; }
  if (event.target.closest("[data-interview-next]")) {
    if (interview && interview.panel === panel) interviewStep(interview, interview.index + 1);
    return;
  }
  const toggle = event.target.closest("[data-interview-toggle]");
  if (toggle) toggleReveal(toggle, document.getElementById(toggle.getAttribute("aria-controls")), "Show model answer", "Hide model answer");
});

// Content may be malformed: anything that is not an array counts as empty, and null entries are skipped.
function listOf(value) {
  return Array.isArray(value) ? value.filter(function (item) { return item !== null && item !== undefined; }) : [];
}

window.SectionViews.speaking = function (unit, content) {
  const speaking = content.speaking || {};
  const privacy = recorderControls() !== "" ? '<p class="rec-privacy">Recordings stay on your device and are not saved.</p>' : "";
  const tasks = currentActivities();
  // currentActivities() is the list the card index lookups in app.js use, so it must be what we render.
  // The interview needs a pool of at least four questions across the speak cards.
  const speakCards = tasks.filter(function (ex) { return ex.type === "speak"; });
  const questionTotal = speakCards.reduce(function (n, c) { return n + (c.questions ? c.questions.length : 0); }, 0);
  const interviewPanel = Core.pickInterview(speakCards, 6, "x").length >= 4
    ? '<section class="lesson-panel interview" data-interview aria-labelledby="interview-title">' + interviewStartHtml() + '</section>'
    : "";
  const examTips = listOf(speaking.examTips).length
    ? viewPanel("exam-tips-title", "Exam tips", '<ol class="view-list">' + listOf(speaking.examTips).map(function (tip) {
        return '<li>' + escapeHtml(tip) + '</li>';
      }).join("") + '</ol>')
    : "";
  return sectionJumpBar(tasks.length + " speaking & role-play tasks · " + questionTotal + " personal prompts", "Jump to speaking tasks ↓") +
    '<div class="lesson-grid speaking-top-grid">' + examTips + interviewPanel + '</div>' + privacy +
    renderExercises(tasks, {
      heading: "Speaking practice",
      countText: tasks.length + (tasks.length === 1 ? " SPEAKING TASK" : " SPEAKING TASKS")
    });
};
