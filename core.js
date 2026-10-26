(function () {
  function normalizeAnswer(value) {
    return String(value).trim().toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/[.!?]+$/g, "")
      .replace(/\bcan't\b/g, "cannot")
      .replace(/\bwon't\b/g, "will not")
      .replace(/n't\b/g, " not")
      .replace(/'m\b/g, " am")
      .replace(/\bcan not\b/g, "cannot")
      .replace(/\s+/g, " ");
  }

  function gradeItem(item, value) {
    const got = normalizeAnswer(value);
    return [item.answer].concat(item.accepted || []).some(function (answer) {
      return normalizeAnswer(answer) === got;
    });
  }

  const Core = { normalizeAnswer: normalizeAnswer, gradeItem: gradeItem };
  if (typeof window !== "undefined") window.Core = Core;
  if (typeof module !== "undefined" && module.exports) module.exports = Core;
})();
