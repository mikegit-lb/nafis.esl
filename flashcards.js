// Spaced vocabulary review (Leitner boxes). Needs Core, `progress`, listenButton, escapeHtml and viewPanel at call time.
(function () {
  const BATCH = 10;
  const decks = {};

  function today() { return Math.floor(Date.now() / 86400000); }
  function keyOf(unit, item) { return "vocab|u" + (Number(unit) + 1) + "|" + item.term; }
  function stateOf(unit, item) { return progress.get(keyOf(unit, item), null); }

  // Cards due now, most-struggled first, at most `limit`.
  function dueItems(unit, limit) {
    const items = decks[unit] || [];
    const states = {}, byTerm = {};
    items.forEach(function (item) { byTerm[item.term] = item; states[item.term] = stateOf(unit, item) || undefined; });
    return Core.dueCards(Object.keys(byTerm), states, today(), limit).map(function (term) { return byTerm[term]; });
  }

  function idleHtml(unit) {
    const n = dueItems(unit, BATCH).length;
    if (!n) return '<p>No words are due today. Come back tomorrow!</p>';
    return '<p>' + n + ' word' + (n === 1 ? "" : "s") + ' ready</p>' +
      '<button class="speak-toggle" type="button" data-fc-start>Start review</button>';
  }

  function cardHtml(session) {
    const item = session.queue[session.i];
    const head = '<p class="fc-count">Word ' + (session.i + 1) + ' of ' + session.queue.length + '</p>';
    if (!session.shown) {
      return head + '<p class="fc-meaning">' + escapeHtml(item.meaning) + '</p>' +
        '<p>Say the word aloud, then check.</p>' +
        '<button class="speak-toggle" type="button" data-fc-show>Show the word</button>';
    }
    return head + '<p class="fc-term">' + escapeHtml(item.term) + '</p>' +
      '<p class="vocab-example">' + escapeHtml(item.example) + '</p>' +
      (item.audio === false ? "" : listenButton(item.term) + listenButton(item.example, "example")) +
      '<div class="fc-answers"><button class="speak-toggle" type="button" data-fc-knew>I knew it</button>' +
      '<button class="speak-toggle" type="button" data-fc-again>Still learning</button></div>';
  }

  function endHtml(unit, session) {
    return '<p>You knew ' + session.knew + ' of ' + session.queue.length + ' words.</p>' +
      (dueItems(unit, 1).length ? '<button class="speak-toggle" type="button" data-fc-more>Review more</button>' : "");
  }

  function render(root) {
    const unit = root.getAttribute("data-unit");
    const session = root.fcSession;
    root.innerHTML = !session ? idleHtml(unit) : session.i >= session.queue.length ? endHtml(unit, session) : cardHtml(session);
    const first = root.querySelector("button");
    if (first && session) first.focus();
  }

  function start(root) {
    const queue = dueItems(root.getAttribute("data-unit"), BATCH);
    root.fcSession = queue.length ? { queue: queue, i: 0, knew: 0, shown: false } : null;
    render(root);
  }

  function answer(root, knew) {
    const unit = root.getAttribute("data-unit");
    const session = root.fcSession;
    const item = session.queue[session.i];
    progress.set(keyOf(unit, item), Core.leitnerUpdate(stateOf(unit, item), knew, today()));
    if (knew) session.knew += 1;
    session.i += 1;
    session.shown = false;
    render(root);
  }

  document.addEventListener("click", function (event) {
    const button = event.target.closest && event.target.closest("[data-fc-start],[data-fc-more],[data-fc-show],[data-fc-knew],[data-fc-again]");
    const root = button && button.closest("[data-flashcards]");
    if (!root) return;
    if (button.hasAttribute("data-fc-start") || button.hasAttribute("data-fc-more")) start(root);
    else if (!root.fcSession) return;
    else if (button.hasAttribute("data-fc-show")) { root.fcSession.shown = true; render(root); }
    else answer(root, button.hasAttribute("data-fc-knew"));
  });

  window.Flashcards = {
    html: function (unitIndex, items) {
      decks[unitIndex] = items || [];
      return viewPanel("vocab-review", "Word review",
        '<div data-flashcards data-unit="' + escapeHtml(String(unitIndex)) + '">' + idleHtml(unitIndex) + '</div>');
    }
  };
})();
