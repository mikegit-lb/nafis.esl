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

test("formatClock", () => {
  assert.equal(Core.formatClock(0), "0:00");
  assert.equal(Core.formatClock(5), "0:05");
  assert.equal(Core.formatClock(65), "1:05");
  assert.equal(Core.formatClock(59.9), "0:59");
  assert.equal(Core.formatClock(-3), "0:00");
});

test("createStore round-trips JSON under the e9: prefix and survives every failure", () => {
  const mem = {}, fake = { getItem: k => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = v; }, removeItem: k => { delete mem[k]; } };
  const s = Core.createStore(fake);
  s.set("a", { x: 1 });
  assert.deepEqual(s.get("a"), { x: 1 });
  assert.equal(mem["e9:a"], '{"x":1}');
  assert.equal(s.get("missing", 7), 7);
  mem["e9:bad"] = "{";
  assert.equal(s.get("bad", "d"), "d");
  s.remove("a");
  assert.equal(s.get("a", null), null);
  const boom = { getItem() { throw new Error("x"); }, setItem() { throw new Error("x"); }, removeItem() { throw new Error("x"); } };
  const b = Core.createStore(boom);
  assert.equal(b.get("k", 1), 1);
  b.set("k", 2); b.remove("k");
  assert.equal(Core.createStore(null).get("k", "f"), "f");
  Core.createStore(null).set("k", 1);
});

test("pickVoice prefers the exact language, then any English, else null", () => {
  assert.equal(Core.pickVoice([{ lang: "en-US", name: "A" }, { lang: "en-GB", name: "B" }], "en-GB").name, "B");
  assert.equal(Core.pickVoice([{ lang: "en_gb", name: "C" }], "en-GB").name, "C");
  assert.equal(Core.pickVoice([{ lang: "fr-FR", name: "F" }, { lang: "en-AU", name: "D" }], "en-GB").name, "D");
  assert.equal(Core.pickVoice([{ lang: "fr-FR", name: "F" }], "en-GB"), null);
  assert.equal(Core.pickVoice([], "en-GB"), null);
  assert.equal(Core.pickVoice(undefined, "en-GB"), null);
});

test("leitnerUpdate and dueCards", () => {
  assert.deepEqual(Core.leitnerUpdate(undefined, true, 100), { box: 1, due: 101 });
  assert.deepEqual(Core.leitnerUpdate({ box: 3, due: 100 }, true, 100), { box: 4, due: 107 });
  assert.deepEqual(Core.leitnerUpdate({ box: 5, due: 100 }, true, 100), { box: 5, due: 114 });
  assert.deepEqual(Core.leitnerUpdate({ box: 4, due: 100 }, false, 100), { box: 1, due: 100 });
  const states = { b: { box: 3, due: 99 }, c: { box: 1, due: 100 }, d: { box: 2, due: 101 } };
  assert.deepEqual(Core.dueCards(["a", "b", "c", "d", "e"], states, 100, 10), ["c", "b", "a", "e"]);
  assert.deepEqual(Core.dueCards(["a", "b", "c", "d", "e"], states, 100, 2), ["c", "b"]);
  assert.deepEqual(Core.dueCards(["d"], states, 100, 5), []);
  assert.deepEqual(Core.dueCards([], {}, 100, 5), []);
  // corrupt saved state is treated as unseen and never throws
  assert.deepEqual(Core.leitnerUpdate({ box: "x" }, true, 100), { box: 1, due: 101 });
  assert.deepEqual(Core.leitnerUpdate("junk", true, 100), { box: 1, due: 101 });
  assert.deepEqual(Core.dueCards(["a", "b", "c"], { a: "junk", b: { box: NaN, due: NaN }, c: { box: 2, due: null } }, 100, 5), ["c", "a", "b"]);
});

test("pickInterview takes distinct questions across cards, skips talk items, is deterministic", () => {
  const card = (t, n, cues) => ({ title: t, questions: Array.from({ length: n }, (_, i) => ({ q: t + " q" + i, model: "m", cues: cues })) });
  const cards = [card("A", 3), card("B", 3), card("T", 3, ["x", "y", "z"])];
  const six = Core.pickInterview(cards, 6, "s1");
  assert.equal(six.length, 6);
  assert.equal(new Set(six.map(x => x.q)).size, 6);
  assert.ok(six.every(x => x.card !== "T"));
  assert.deepEqual(Core.pickInterview(cards, 6, "s1"), six);
  assert.equal(Core.pickInterview(cards, 20, "s1").length, 6);
  assert.deepEqual(Core.pickInterview([], 6, "s1"), []);
  assert.deepEqual(Core.pickInterview([card("T", 3, ["x"])], 6, "s1"), []);
});
