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

  const Core = {
    normalizeAnswer: normalizeAnswer, gradeItem: gradeItem,
    getSections: getSections, resolveSection: resolveSection, countQuestions: countQuestions
  };
  if (typeof window !== "undefined") window.Core = Core;
  if (typeof module !== "undefined" && module.exports) module.exports = Core;
})();
