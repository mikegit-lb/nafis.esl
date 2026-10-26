const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const Core = require("../core.js");

const DIR = path.join(__dirname, "..", "content");
const FILES = fs.readdirSync(DIR).filter(function (f) { return /\.js$/.test(f); }).sort();
const TYPES = ["choice", "complete", "transform", "fix", "build", "sequence", "match", "reading", "quiz", "speak", "roleplay"];

function runFiles(files) {
  const sandbox = { window: {} };
  files.forEach(function (f) { vm.runInNewContext(fs.readFileSync(path.join(DIR, f), "utf8"), sandbox, { filename: f }); });
  return { unitContent: sandbox.window.unitContent || [] };
}
function loadContent() { return runFiles(FILES); }

const total = function (acts) { return acts.reduce(function (n, a) { return n + Core.countQuestions(a); }, 0); };
const list = function (v) { return Array.isArray(v) ? v : []; };
const filled = function (v) { return Array.isArray(v) && v.length > 0; };
const words = function (s) { return String(s).split(/\s+/).filter(Boolean).length; };

// Every activity of a unit as [sectionName, activities] (speaking keeps its cards in "tasks").
function sections(u) {
  return [["vocabulary", u.vocabulary && u.vocabulary.activities], ["speaking", u.speaking && u.speaking.tasks],
    ["grammar", u.grammar && u.grammar.activities], ["reading", u.reading && u.reading.activities]];
}
function acts(u, name) { return list(sections(u).filter(function (s) { return s[0] === name; })[0][1]); }
// Scored items of an activity: [{ prompt, why, ... }]
function scoredItems(a) {
  if (a.type === "quiz") return list(a.items);
  if (a.type === "reading") return list(a.questions);
  if (a.type === "match") return list(a.pairs).map(function (p) { return { prompt: p.left, why: a.why }; });
  if (a.type === "speak" || a.type === "roleplay") return [];
  return [a];
}
function prompts(a) {
  if (a.type === "speak") return list(a.questions).map(function (q) { return q.q; });
  if (a.type === "roleplay") return [a.scenario];
  return scoredItems(a).map(function (i) { return i.prompt; });
}
function walkStrings(v, where, bad) {
  if (typeof v === "string") { if (/[<>]/.test(v)) bad(where + " contains < or >: " + v.slice(0, 40)); }
  else if (v && typeof v === "object") Object.keys(v).forEach(function (k) { walkStrings(v[k], where + "." + k, bad); });
}
function unitOf(n) { return loadContent().unitContent[n - 1] || {}; }

[1, 2].forEach(function (n) {
  const label = "Unit " + n;

  test("unit " + n + " language", function () {
    const u = unitOf(n), o = u.overview || {}, v = u.vocabulary || {};
    ["subThemes", "functions", "socialLanguage", "pronunciation"].forEach(function (k) {
      assert.ok(filled(o[k]), label + " overview." + k + " must be a non-empty array");
    });
    assert.ok(o.leadIn && filled(o.leadIn.topics), label + " overview.leadIn.topics must be non-empty");
    const groups = list(v.groups), items = [];
    groups.forEach(function (g) { list(g.items).forEach(function (i) { items.push([g.title, i]); }); });
    assert.ok(groups.length >= 3, label + " vocabulary needs >=3 groups, has " + groups.length);
    assert.ok(items.length >= 30, label + " vocabulary needs >=30 items, has " + items.length);
    items.forEach(function (e) {
      ["term", "meaning", "example"].forEach(function (k) {
        assert.ok(e[1][k], label + " vocabulary group '" + e[0] + "' item '" + e[1].term + "' is missing " + k);
      });
    });
    const va = acts(u, "vocabulary");
    assert.ok(total(va) >= 20, label + " vocabulary activities need >=20 scored questions, have " + total(va));
    assert.ok(va.some(function (a) { return a.type === "match"; }), label + " vocabulary needs a match activity");
    assert.ok(va.some(function (a) { return a.type === "quiz" && filled(a.wordBank); }), label + " vocabulary needs a quiz with a wordBank");
  });

  test("unit " + n + " speaking", function () {
    const u = unitOf(n), p = (u.speaking && u.speaking.pronunciation) || {}, tasks = acts(u, "speaking");
    assert.ok(list(p.sounds).length >= 3, label + " speaking needs >=3 pronunciation sounds");
    list(p.sounds).forEach(function (s) { assert.ok(list(s.words).length >= 3, label + " sound '" + s.label + "' needs >=3 words"); });
    assert.ok(list(p.sentences).length >= 3, label + " speaking needs >=3 pronunciation sentences");
    const speak = tasks.filter(function (a) { return a.type === "speak"; });
    const qs = speak.reduce(function (c, a) { return c + list(a.questions).length; }, 0);
    assert.ok(speak.length >= 4, label + " speaking needs >=4 speak cards, has " + speak.length);
    assert.ok(qs >= 25, label + " speak cards need >=25 questions in total, have " + qs);
    assert.ok(tasks.filter(function (a) { return a.type === "roleplay"; }).length >= 2, label + " speaking needs >=2 roleplay cards");
    tasks.forEach(function (a) {
      assert.ok(a.source, label + " speaking card '" + a.title + "' is missing source");
      list(a.questions).forEach(function (q) {
        assert.ok(q.q && q.model, label + " speaking card '" + a.title + "' has a question without q/model: " + JSON.stringify(q.q));
      });
    });
  });

  test("unit " + n + " grammar", function () {
    const u = unitOf(n), l = u.lesson || {}, ga = acts(u, "grammar");
    assert.ok(list(l.context).length >= 6, label + " lesson.context needs >=6 lines, has " + list(l.context).length);
    assert.ok(list(l.patterns).length >= 2, label + " lesson.patterns needs >=2");
    assert.ok(total(ga) >= 30, label + " grammar activities need >=30 scored questions, have " + total(ga));
    const kinds = new Set(ga.map(function (a) { return a.type; }));
    assert.ok(kinds.size >= 5, label + " grammar activities need >=5 distinct types, have " + kinds.size);
  });

  test("unit " + n + " reading", function () {
    const u = unitOf(n), ra = acts(u, "reading").filter(function (a) { return a.type === "reading"; });
    assert.ok(ra.length >= 5, label + " reading needs >=5 reading activities, has " + ra.length);
    ra.forEach(function (a) {
      const w = words(a.passage);
      // shortcut: existing B1 passages are recognised by their title prefix; revisit if they are renamed.
      const max = /^B1 Reading/.test(a.title) ? Infinity : 260;
      assert.ok(w >= 120 && w <= max, label + " reading '" + a.title + "' passage has " + w + " words (need 120-" + max + ")");
    });
    assert.ok(total(ra) >= 24, label + " reading needs >=24 scored questions, has " + total(ra));
  });
});

test("schema", function () {
  const fails = [], seen = [new Map(), new Map()];
  FILES.forEach(function (f) {
    const bad = function (m) { fails.push(f + ": " + m); };
    runFiles([f]).unitContent.forEach(function (u, ui) {
      if (!u) return;
      const label = "Unit " + (ui + 1);
      walkStrings(u, label, bad);
      sections(u).forEach(function (s) {
        list(s[1]).forEach(function (a, ai) {
          const where = label + " " + s[0] + " #" + (ai + 1) + " '" + a.title + "'";
          if (TYPES.indexOf(a.type) < 0) return bad(where + " has unknown type " + a.type);
          scoredItems(a).forEach(function (it) {
            const iw = where + " item '" + String(it.prompt).slice(0, 40) + "'";
            if (!it.why) bad(iw + " is missing why");
            if (a.type === "choice" && list(a.options).indexOf(a.answer) < 0) bad(iw + " answer is not in options");
            if (a.type === "quiz" && !it.answer) bad(iw + " is missing answer");
            if (a.type === "quiz" && it.options && it.options.indexOf(it.answer) < 0) bad(iw + " answer is not in options");
            if (a.type === "reading" && !(Number.isInteger(it.answer) && it.options && it.answer >= 0 && it.answer < it.options.length)) bad(iw + " answer index is not in options");
          });
          prompts(a).forEach(function (p) {
            const key = String(p).trim().toLowerCase(), prev = seen[ui] && seen[ui].get(key);
            if (prev) bad(where + " duplicates prompt '" + String(p).slice(0, 40) + "' (first in " + prev + ")");
            else if (seen[ui]) seen[ui].set(key, f + " " + s[0] + " #" + (ai + 1));
          });
        });
      });
    });
  });
  assert.deepEqual(fails, [], "content violations:\n  " + fails.join("\n  "));
});
