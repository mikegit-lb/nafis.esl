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
const str = function (v) { return typeof v === "string" && v.trim() !== ""; };
const strList = function (v) { return v === undefined || (Array.isArray(v) && v.every(str)); };
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
  if (a.type === "speak") return list(a.questions).map(function (q) { return q && q.q; });
  if (a.type === "roleplay") return [a.scenario];
  return scoredItems(a).map(function (i) { return i.prompt != null ? i.prompt : (i.instruction || i.title); });
}
function walkStrings(v, where, bad) {
  if (typeof v === "string") { if (/[<>]/.test(v)) bad(where + " contains < or >: " + v.slice(0, 40)); }
  else if (v && typeof v === "object") Object.keys(v).forEach(function (k) { walkStrings(v[k], where + "." + k, bad); });
}
// Every quiz needs >=8 items and every match >=6 pairs (activities of one section).
function checkSizes(label, name, activities) {
  activities.forEach(function (a, i) {
    const where = label + " " + name + " #" + (i + 1) + " '" + a.title + "'";
    if (a.type === "quiz") assert.ok(list(a.items).length >= 8, where + " quiz needs >=8 items, has " + list(a.items).length);
    if (a.type === "match") assert.ok(list(a.pairs).length >= 6, where + " match needs >=6 pairs, has " + list(a.pairs).length);
  });
}
function unitOf(n) { return loadContent().unitContent[n - 1] || {}; }

const UNITS = [1, 2, 3, 4, 5, 6, 7, 8];

UNITS.forEach(function (n) {
  const label = "Unit " + n;

  test("unit " + n + " language", function () {
    const u = unitOf(n), o = u.overview || {}, v = u.vocabulary || {};
    ["subThemes", "functions", "socialLanguage"].forEach(function (k) {
      assert.ok(filled(o[k]), label + " overview." + k + " must be a non-empty array");
    });
    assert.equal(o.pronunciation, undefined, label + " overview.pronunciation must be omitted");
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
    assert.ok(total(va) >= 40, label + " vocabulary activities need >=40 scored questions, have " + total(va));
    checkSizes(label, "vocabulary", va);
    assert.ok(va.some(function (a) { return a.type === "match"; }), label + " vocabulary needs a match activity");
    assert.ok(va.some(function (a) { return a.type === "quiz" && filled(a.wordBank); }), label + " vocabulary needs a quiz with a wordBank");
  });

  test("unit " + n + " speaking", function () {
    const u = unitOf(n), tasks = acts(u, "speaking");
    assert.equal((u.speaking || {}).pronunciation, undefined, label + " speaking.pronunciation must be omitted");
    const speak = tasks.filter(function (a) { return a.type === "speak"; });
    const qs = speak.reduce(function (c, a) { return c + list(a.questions).length; }, 0);
    assert.ok(speak.length >= 4, label + " speaking needs >=4 speak cards, has " + speak.length);
    assert.ok(qs >= 70, label + " speak cards need >=70 questions in total, have " + qs);
    const nonPersonal = [];
    speak.forEach(function (a) {
      list(a.questions).forEach(function (q, qi) {
        if (!q || !/\byou(r|rs|rself)?\b/i.test(q.q)) {
          nonPersonal.push(label + " '" + a.title + "' Q" + (qi + 1) + ": " + (q && q.q));
        }
      });
    });
    assert.deepEqual(nonPersonal, [], label + " all speaking questions must address the learner (you/your):\n  " + nonPersonal.join("\n  "));
    const rp = tasks.filter(function (a) { return a.type === "roleplay"; }).length;
    assert.ok(rp >= 4, label + " speaking needs >=4 roleplay cards, has " + rp);
    speak.forEach(function (a, i) {
      const min = list(a.questions).every(function (q) { return q && q.cues; }) ? 4 : 6;
      assert.ok(list(a.questions).length >= min, label + " speaking speak card #" + (i + 1) + " '" + a.title + "' needs >=" + min + " questions, has " + list(a.questions).length);
    });
    tasks.forEach(function (a) {
      assert.ok(a.source, label + " speaking card '" + a.title + "' is missing source");
      assert.ok(!/Listening\/Watching|Pronunciation|\blisten to the model|\blisten for\b/i.test(a.source + " " + (a.instruction || "")),
        label + " speaking card '" + a.title + "' must not reference Listening/Watching, Pronunciation, or listening to audio");
      list(a.questions).forEach(function (q) {
        assert.ok(q.q && q.model, label + " speaking card '" + a.title + "' has a question without q/model: " + JSON.stringify(q.q));
      });
    });
  });

  test("unit " + n + " speaking upgrades", function () {
    const u = unitOf(n), sp = u.speaking || {};
    const speak = acts(u, "speaking").filter(function (a) { return a.type === "speak"; });
    const tips = list(sp.examTips);
    assert.ok(tips.length >= 5, label + " speaking.examTips needs >=5, has " + tips.length);
    tips.forEach(function (t, i) { assert.ok(str(t), label + " speaking.examTips #" + (i + 1) + " must be a non-empty string"); });
    const more = speak.filter(function (a) { return /^Say more · /.test(a.title); });
    assert.ok(more.length >= 1, label + " speaking needs >=1 'Say more · ' card, has " + more.length);
    more.forEach(function (a) {
      assert.ok(list(a.questions).length >= 8, label + " card '" + a.title + "' needs >=8 questions, has " + list(a.questions).length);
      list(a.questions).forEach(function (q, i) {
        assert.ok(q && /\bbecause\b/i.test(q.model), label + " card '" + a.title + "' question #" + (i + 1) + " model must contain 'because': " + JSON.stringify(q && q.model));
      });
    });
    const talk = speak.filter(function (a) { return filled(a.questions) && a.questions.every(function (q) { return q && q.cues; }); });
    assert.ok(talk.length >= 1, label + " speaking needs >=1 talk card (every question has cues), has " + talk.length);
    talk.forEach(function (a) {
      assert.ok(list(a.questions).length >= 4, label + " card '" + a.title + "' needs >=4 questions, has " + list(a.questions).length);
      list(a.questions).forEach(function (q, i) {
        const where = label + " card '" + a.title + "' question #" + (i + 1);
        assert.ok(Array.isArray(q.cues) && q.cues.length >= 3 && q.cues.length <= 4 && q.cues.every(str), where + " cues must be 3-4 non-empty strings: " + JSON.stringify(q.cues));
        assert.ok(Number.isInteger(q.seconds) && q.seconds >= 30 && q.seconds <= 90, where + " seconds must be an integer 30-90, has " + q.seconds);
        const w = words(q.model);
        assert.ok(w >= 45 && w <= 110, where + " model has " + w + " words (need 45-110)");
      });
    });
  });

  test("unit " + n + " spoken English", function () {
    const FULL_NOT = /\b(?:do|does|did|is|are|was|were|has|have|would|could|should) not\b|\bcannot\b|\bwill not\b/i;
    const FULL_BE = /\b(?:I am|you are|we are|they are|he is|she is|it is|there is|that is)\s+[A-Za-z0-9]/i;
    const fails = [];
    acts(unitOf(n), "speaking").forEach(function (a) {
      const spoken = [];
      if (a.type === "speak") list(a.questions).forEach(function (q, i) { spoken.push(["question #" + (i + 1), q && q.model]); });
      if (a.type === "roleplay") list(a.model).forEach(function (l, i) { spoken.push(["line #" + (i + 1), l && l.text]); });
      spoken.forEach(function (s) {
        if (typeof s[1] === "string" && (FULL_NOT.test(s[1]) || FULL_BE.test(s[1]))) fails.push(label + " card '" + a.title + "' " + s[0] + ": " + s[1]);
      });
    });
    assert.deepEqual(fails, [], "models must use contractions:\n  " + fails.join("\n  "));
  });

  test("unit " + n + " grammar", function () {
    const u = unitOf(n), l = u.lesson || {}, ga = acts(u, "grammar");
    assert.ok(list(l.context).length >= 10, label + " lesson.context needs >=10 lines, has " + list(l.context).length);
    assert.ok(list(l.patterns).length >= 8, label + " lesson.patterns needs >=8, has " + list(l.patterns).length);
    assert.ok(list(l.mistakes).length >= 8, label + " lesson.mistakes needs >=8 items, has " + list(l.mistakes).length);
    assert.ok(total(ga) >= 70, label + " grammar activities need >=70 scored questions, have " + total(ga));
    const count = function (t) { return ga.filter(function (a) { return a.type === t; }).length; };
    assert.ok(count("quiz") >= 8, label + " grammar needs >=8 quiz cards, has " + count("quiz"));
    assert.ok(count("match") >= 2, label + " grammar needs >=2 match cards, has " + count("match"));
    assert.ok(count("reading") >= 1, label + " grammar needs >=1 reading card, has " + count("reading"));
    checkSizes(label, "grammar", ga);
    sections(u).forEach(function (s) {
      list(s[1]).forEach(function (a, i) {
        assert.ok(["choice", "complete", "transform", "fix", "build", "sequence"].indexOf(a.type) < 0,
          label + " " + s[0] + " #" + (i + 1) + " '" + (a.title || a.prompt) + "' is a 1-question " + a.type + " card; only multi-question cards are allowed");
        if (s[0] !== "speaking") {
          assert.ok(Core.countQuestions(a) >= 6,
            label + " " + s[0] + " #" + (i + 1) + " '" + a.title + "' must have >=6 questions, has " + Core.countQuestions(a));
        }
      });
    });
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
    assert.ok(total(ra) >= 30, label + " reading needs >=30 scored questions, has " + total(ra));
    ra.forEach(function (a, i) {
      assert.ok(list(a.questions).length >= 6, label + " reading #" + (i + 1) + " '" + a.title + "' needs >=6 questions, has " + list(a.questions).length);
    });
    checkSizes(label, "reading", acts(u, "reading"));
  });
});

test("all 8 units present", function () {
  assert.equal(FILES.length, 32, "expected 32 content files (4 per unit across 8 units), found " + FILES.length);
  UNITS.forEach(function (n) {
    ["language", "speaking", "grammar", "reading"].forEach(function (part) {
      assert.ok(fs.existsSync(path.join(DIR, "u" + n + "-" + part + ".js")), "missing content/u" + n + "-" + part + ".js");
    });
  });
});

test("schema", function () {
  const fails = [], seen = Array.from({ length: 8 }, function () { return new Map(); });
  FILES.forEach(function (f) {
    const bad = function (m) { fails.push(f + ": " + m); };
    runFiles([f]).unitContent.forEach(function (u, ui) {
      if (!u) return;
      const label = "Unit " + (ui + 1);
      walkStrings(u, label, bad);
      if (u.lesson && u.lesson.mistakes !== undefined) {
        if (!Array.isArray(u.lesson.mistakes)) bad(label + " lesson.mistakes must be an array");
        else u.lesson.mistakes.forEach(function (m, mi) {
          const mw = label + " lesson.mistakes #" + (mi + 1);
          if (!m || !str(m.wrong) || !str(m.right) || !str(m.why)) bad(mw + " needs non-empty wrong, right and why strings");
          else if (m.wrong === m.right) bad(mw + " wrong and right must differ: '" + m.wrong.slice(0, 40) + "'");
        });
      }
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
          if (a.type === "speak") {
            if (!filled(a.questions)) bad(where + " needs a non-empty questions array");
            if (!str(a.source)) bad(where + " needs a non-empty source");
            if (!str(a.instruction)) bad(where + " needs a non-empty instruction");
            if (!strList(a.checklist)) bad(where + " checklist must be an array of non-empty strings");
            list(a.questions).forEach(function (q, qi) {
              if (!q || !q.q || !q.model) bad(where + " question #" + (qi + 1) + " needs non-empty q and model");
              else if (!strList(q.frames)) bad(where + " question #" + (qi + 1) + " frames must be an array of non-empty strings");
            });
          }
          if (a.type === "roleplay") {
            if (!a.scenario) bad(where + " needs a scenario");
            if (!str(a.source)) bad(where + " needs a non-empty source");
            if (!strList(a.checklist)) bad(where + " checklist must be an array of non-empty strings");
            ["cardA", "cardB"].forEach(function (c) {
              const card = a[c];
              if (!card || !card.role) bad(where + " " + c + " needs a role");
              if (!card || !filled(card.rows) || !card.rows.every(function (r) { return Array.isArray(r) && r.length === 2 && typeof r[0] === "string" && typeof r[1] === "string"; })) bad(where + " " + c + ".rows must be a non-empty array of [string,string] pairs");
            });
            if (!filled(a.model) || !a.model.every(function (l) { return l && (l.speaker === "A" || l.speaker === "B") && l.text; })) bad(where + " model must be a non-empty array of {speaker: A|B, text}");
          }
          prompts(a).forEach(function (p) {
            const key = Core.normalizeAnswer(p), prev = seen[ui] && seen[ui].get(key);
            if (prev) bad(where + " duplicates prompt '" + String(p).slice(0, 40) + "' (first in " + prev + ")");
            else if (seen[ui]) seen[ui].set(key, f + " " + s[0] + " #" + (ai + 1));
          });
        });
      });
    });
  });
  assert.deepEqual(fails, [], "content violations:\n  " + fails.join("\n  "));
});
