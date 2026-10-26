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

function canSpeak() { return "speechSynthesis" in window; }

function listenButton(text, label) {
  return canSpeak()
    ? '<button class="listen-btn" type="button" data-listen="' + escapeHtml(text) + '" aria-label="Listen: ' + escapeHtml(label || text) + '">Listen</button>'
    : "";
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

window.SectionViews.speaking = function (unit, content) {
  const p = (content.speaking || {}).pronunciation || {};
  const sounds = (p.sounds || []).map(function (sound) {
    return '<div class="sound-group"><h4 class="sound-label">' + escapeHtml(sound.label) + '</h4>' +
      '<ul class="word-chips">' + sound.words.map(function (word) {
        return '<li>' + (canSpeak()
          ? '<button class="quiz-chip listen-chip" type="button" data-listen="' + escapeHtml(word) + '" aria-label="Listen: ' + escapeHtml(word) + '">' + escapeHtml(word) + '</button>'
          : '<span class="quiz-chip">' + escapeHtml(word) + '</span>') + '</li>';
      }).join("") + '</ul></div>';
  }).join("");
  const sentences = (p.sentences || []).length
    ? '<h4 class="sound-label">Read aloud</h4><ol class="read-aloud">' + p.sentences.map(function (sentence) {
        return '<li><span>' + escapeHtml(sentence) + '</span>' + listenButton(sentence) + '</li>';
      }).join("") + '</ol>'
    : "";
  const tasks = currentActivities();
  // currentActivities() is the list the card index lookups in app.js use, so it must be what we render.
  return '<div class="lesson-grid vocab-grid">' + viewPanel("pronunciation-title", "Pronunciation", sounds + sentences) + '</div>' +
    renderExercises(tasks, {
      heading: "Speaking practice",
      countText: tasks.length + (tasks.length === 1 ? " SPEAKING TASK" : " SPEAKING TASKS")
    });
};

// Delegated so it survives re-renders; speechSynthesis is absent in some browsers, in which case no button is rendered.
document.addEventListener("click", function (event) {
  const button = event.target.closest("[data-listen]");
  if (!button || !canSpeak()) return;
  const utterance = new SpeechSynthesisUtterance(button.dataset.listen);
  utterance.lang = "en-GB";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
});
