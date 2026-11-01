(function () {
  function normalizeAnswer(value) {
    return String(value).toLowerCase()
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\u2019/g, "'")
      .replace(/\s*[.!?]+$/, "")
      .replace(/\bcan't\b/g, "cannot")
      .replace(/\bwon't\b/g, "will not")
      .replace(/n't\b/g, " not")
      .replace(/'m\b/g, " am")
      .replace(/\bcan not\b/g, "cannot");
  }

  function gradeItem(item, value) {
    const got = normalizeAnswer(value);
    return [item.answer].concat(item.accepted || []).some(function (answer) {
      return normalizeAnswer(answer) === got;
    });
  }

  const SECTIONS = [
    { id: "overview", label: "Overview" }, { id: "vocabulary", label: "Vocabulary" }, { id: "speaking", label: "Speaking" },
    { id: "grammar", label: "Grammar" }, { id: "reading", label: "Reading" }
  ];

  function getSections(content) {
    if (!content || !SECTIONS.concat([{ id: "lesson" }]).some(function (s) { return content[s.id]; })) return [];
    return SECTIONS.filter(function (s) { return s.id === "grammar" || content[s.id]; });
  }

  function resolveSection(sections, wanted) {
    const ids = sections.map(function (s) { return s.id; });
    return ids.indexOf(wanted) !== -1 ? wanted : ids[0] || "grammar";
  }

  function countQuestions(ex) {
    if (ex.type === "quiz") return ex.items.length;
    if (ex.type === "reading") return ex.questions.length;
    if (ex.type === "match") return ex.pairs.length;
    return ex.type === "speak" || ex.type === "roleplay" ? 0 : 1;
  }

  // Deterministic Fisher-Yates: FNV-1a hash of the seed feeds mulberry32. Returns a new array.
  function shuffle(list, seed) {
    let h = 2166136261;
    String(seed).split("").forEach(function (ch) { h = Math.imul(h ^ ch.charCodeAt(0), 16777619); });
    let a = h >>> 0;
    const out = list.slice();
    for (let i = out.length - 1; i > 0; i--) {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      const j = Math.floor((((t ^ (t >>> 14)) >>> 0) / 4294967296) * (i + 1));
      const tmp = out[i]; out[i] = out[j]; out[j] = tmp;
    }
    return out;
  }

  function formatClock(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  }

  function createStore(storage) {
    return {
      get: function (key, fallback) {
        try {
          const raw = storage && storage.getItem("e9:" + key);
          return raw === null || raw === undefined || raw === false ? fallback : JSON.parse(raw);
        } catch (e) { return fallback; }
      },
      set: function (key, value) {
        try { if (storage) storage.setItem("e9:" + key, JSON.stringify(value)); } catch (e) { /* progress is simply not saved */ }
      },
      remove: function (key) {
        try { if (storage) storage.removeItem("e9:" + key); } catch (e) { /* nothing to remove */ }
      }
    };
  }

  function pickVoice(voices, lang) {
    const list = voices || [];
    const norm = function (v) { return String(v.lang).toLowerCase().replace(/_/g, "-"); };
    const want = String(lang).toLowerCase().replace(/_/g, "-");
    return list.filter(function (v) { return norm(v) === want; })[0] ||
      list.filter(function (v) { return /^en($|-)/.test(norm(v)); })[0] || null;
  }

  const LEITNER_DAYS = [0, 1, 2, 4, 7, 14];

  function leitnerUpdate(state, knew, today) {
    if (!knew) return { box: 1, due: today };
    const box = Math.min((state ? state.box : 0) + 1, 5);
    return { box: box, due: today + LEITNER_DAYS[box] };
  }

  function dueCards(ids, states, today, limit) {
    const due = ids.filter(function (id) { return !states[id] || states[id].due <= today; });
    const seen = due.filter(function (id) { return states[id]; }).sort(function (a, b) { return states[a].box - states[b].box; });
    return seen.concat(due.filter(function (id) { return !states[id]; })).slice(0, limit);
  }

  function pickInterview(cards, n, seed) {
    const pools = shuffle(cards, seed).map(function (card) {
      const qs = card.questions.filter(function (q) { return !q.cues; });
      return { title: card.title, qs: shuffle(qs, seed + card.title) };
    });
    const out = [], used = {};
    for (let round = 0; out.length < n; round++) {
      let any = false;
      for (let i = 0; i < pools.length && out.length < n; i++) {
        const q = pools[i].qs[round];
        if (!q) continue;
        any = true;
        if (used[q.q]) continue;
        used[q.q] = true;
        out.push({ q: q.q, model: q.model, frames: q.frames || [], card: pools[i].title });
      }
      if (!any) break;
    }
    return out;
  }

  const Core = {
    formatClock: formatClock, createStore: createStore, pickVoice: pickVoice,
    leitnerUpdate: leitnerUpdate, dueCards: dueCards, pickInterview: pickInterview,
    shuffle: shuffle,
    normalizeAnswer: normalizeAnswer, gradeItem: gradeItem,
    getSections: getSections, resolveSection: resolveSection, countQuestions: countQuestions
  };
  if (typeof window !== "undefined") window.Core = Core;
  if (typeof module !== "undefined" && module.exports) module.exports = Core;
})();
