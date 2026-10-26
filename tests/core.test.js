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

test("gradeItem ignores stray whitespace around end punctuation and inside can not", () => {
  assert.equal(Core.gradeItem({ answer: "Can Ingrid speak three languages?" }, "Can Ingrid speak three languages ?"), true);
  assert.equal(Core.gradeItem({ answer: "Tourists can't enter the old tower at night." }, "Tourists cannot enter the old tower at night ."), true);
  assert.equal(Core.gradeItem({ answer: "Tourists can't enter the old tower at night." }, "Tourists can  not enter the old tower at night."), true);
});

test("gradeItem rejects wrong or empty answers and honours accepted", () => {
  assert.equal(Core.gradeItem({ answer: "arrives" }, ""), false);
  assert.equal(Core.gradeItem({ answer: "arrives" }, "arrive"), false);
  assert.equal(Core.gradeItem({ answer: "x", accepted: ["y"] }, " Y "), true);
});

test("getSections lists present sections in order and always includes grammar", () => {
  assert.deepEqual(Core.getSections(undefined), []);
  assert.deepEqual(Core.getSections({}), []);
  assert.deepEqual(Core.getSections({ vocabulary: {} }).map(function (s) { return s.id; }), ["vocabulary", "grammar"]);
  assert.deepEqual(Core.getSections({ lesson: {} }).map(function (s) { return s.id; }), ["grammar"]);
  assert.deepEqual(Core.getSections({ reading: {}, overview: {} }).map(function (s) { return s.id + ":" + s.label; }),
    ["overview:Overview", "grammar:Grammar", "reading:Reading"]);
});

test("resolveSection keeps a present section, else first, else grammar", () => {
  const s = [{ id: "vocabulary" }, { id: "grammar" }];
  assert.equal(Core.resolveSection(s, "grammar"), "grammar");
  assert.equal(Core.resolveSection(s, "reading"), "vocabulary");
  assert.equal(Core.resolveSection([], "reading"), "grammar");
});

test("countQuestions counts scored items per type", () => {
  assert.equal(Core.countQuestions({ type: "quiz", items: [{}, {}, {}] }), 3);
  assert.equal(Core.countQuestions({ type: "reading", questions: [{}, {}, {}] }), 3);
  assert.equal(Core.countQuestions({ type: "match", pairs: [{}, {}] }), 2);
  assert.equal(Core.countQuestions({ type: "speak", questions: [{}] }), 0);
  assert.equal(Core.countQuestions({ type: "roleplay" }), 0);
  assert.equal(Core.countQuestions({ type: "choice" }), 1);
});

test("shuffle is deterministic, a permutation, non-mutating and seed-dependent", () => {
  const ten = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const copy = ten.slice();
  const one = Core.shuffle(ten, "u1-vocabulary-0");
  assert.deepEqual(Core.shuffle(ten, "u1-vocabulary-0"), one);
  assert.deepEqual(ten, copy);
  assert.deepEqual(one.slice().sort(), copy);
  assert.notDeepEqual(one, Core.shuffle(ten, "u2-vocabulary-3"));
  const nine = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  assert.notDeepEqual(Core.shuffle(nine, "u1-grammar-0"), nine);
  assert.deepEqual(Core.shuffle([], "x"), []);
  assert.deepEqual(Core.shuffle(["only"], "x"), ["only"]);
});
