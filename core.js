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

  const Core = {
    shuffle: shuffle,
    normalizeAnswer: normalizeAnswer, gradeItem: gradeItem,
    getSections: getSections, resolveSection: resolveSection, countQuestions: countQuestions
  };
  if (typeof window !== "undefined") window.Core = Core;
  if (typeof module !== "undefined" && module.exports) module.exports = Core;
})();
