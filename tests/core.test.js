const test = require("node:test");
const assert = require("node:assert/strict");
const Core = require("../core.js");

test("normalizeAnswer trims, lowercases, strips end punctuation, collapses spaces", () => {
  assert.equal(Core.normalizeAnswer("  Can the  visitors use it? "), "can the visitors use it");
});

test("gradeItem treats contractions and full forms as equal", () => {
  assert.equal(Core.gradeItem({ answer: "She doesn't swim." }, "She does not swim"), true);
  assert.equal(Core.gradeItem({ answer: "He can't go" }, "he cannot go"), true);
  assert.equal(Core.gradeItem({ answer: "He can't go" }, "he can not go"), true);
  assert.equal(Core.gradeItem({ answer: "They won't go" }, "They will not go"), true);
  assert.equal(Core.gradeItem({ answer: "I am Turkish" }, "I\u2019m Turkish"), true);
  assert.equal(Core.gradeItem({ answer: "She doesn't swim" }, "She doesn\u2019t swim"), true);
});

test("gradeItem rejects wrong or empty answers and honours accepted", () => {
  assert.equal(Core.gradeItem({ answer: "arrives" }, ""), false);
  assert.equal(Core.gradeItem({ answer: "arrives" }, "arrive"), false);
  assert.equal(Core.gradeItem({ answer: "x", accepted: ["y"] }, " Y "), true);
});
