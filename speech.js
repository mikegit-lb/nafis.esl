// Speaking session, timer, and self-recording helpers.
let sessionToken = 0;

function endSpeechSession() {
  sessionToken += 1;
}

// Recorder: one recording at a time; the microphone is released on every way out.
const RECORD_LIMIT_MS = 60000;
const RECORD_ERROR = "The microphone is not available. Allow it in the browser and try again.";
let recording = null;
let recordToken = 0;
const blobUrls = [];

function recorderControls() {
  return window.MediaRecorder && navigator.mediaDevices && navigator.mediaDevices.getUserMedia
    ? '<div class="recorder"><button type="button" data-rec-start>Record</button><button type="button" data-rec-stop hidden>Stop</button><audio class="rec-audio" controls hidden></audio><p class="rec-status" aria-live="polite"></p></div>'
    : "";
}

function recorderShow(root, live, message) {
  if (!root.isConnected) return;
  const had = root.contains(document.activeElement);
  root.classList.toggle("is-recording", live);
  root.querySelector("[data-rec-start]").hidden = live;
  root.querySelector("[data-rec-stop]").hidden = !live;
  root.querySelector(".rec-status").textContent = message;
  // The focused button just became hidden: keep keyboard focus on the one that replaced it.
  const next = root.querySelector(live ? "[data-rec-stop]" : "[data-rec-start]");
  if (had && next) next.focus();
}

function releaseStream(stream) {
  stream.getTracks().forEach(function (track) { track.stop(); });
}

function releaseRecording(rec) {
  clearTimeout(rec.timer);
  if (!rec.released) { rec.released = true; releaseStream(rec.stream); }
}

// Runs once per take, whether the learner stopped it or the recorder stopped by itself (unplugged, grant revoked).
function finishRecording(rec) {
  if (rec.done) return;
  rec.done = true;
  if (recording === rec) recording = null;
  releaseRecording(rec);
  if (!rec.keep || !rec.root.isConnected) return;
  if (!rec.chunks.length) { recorderShow(rec.root, false, RECORD_ERROR); return; }
  const audio = rec.root.querySelector(".rec-audio");
  const url = URL.createObjectURL(new Blob(rec.chunks, { type: rec.recorder.mimeType || "audio/webm" }));
  blobUrls.push(url);
  audio.src = url;
  audio.hidden = false;
  recorderShow(rec.root, false, "Play back your recording, then read the model answer and compare.");
}

// keep = show the take to the learner; otherwise the section is going away, so just discard it.
function endRecording(keep) {
  recordToken += 1;
  const rec = recording;
  recording = null;
  if (!rec) return;
  rec.keep = keep;
  try { rec.recorder.stop(); } catch (error) { finishRecording(rec); /* already inactive: no stop event will come */ }
  releaseRecording(rec);
}

function startRecording(root) {
  endRecording(true);
  const token = recordToken;
  const audio = root.querySelector(".rec-audio");
  if (audio.getAttribute("src")) {
    URL.revokeObjectURL(audio.src);
    blobUrls.splice(blobUrls.indexOf(audio.src), 1);
    audio.removeAttribute("src");
    audio.hidden = true;
  }
  new Promise(function (resolve) { resolve(navigator.mediaDevices.getUserMedia({ audio: true })); }).then(function (stream) {
    if (token !== recordToken) { releaseStream(stream); return; }
    let recorder;
    try {
      recorder = new window.MediaRecorder(stream);
      recorder.start();
    } catch (error) {
      releaseStream(stream);
      throw error;
    }
    const rec = { root: root, stream: stream, recorder: recorder, chunks: [], keep: true, timer: setTimeout(function () { endRecording(true); }, RECORD_LIMIT_MS) };
    recorder.ondataavailable = function (event) { if (event.data && event.data.size) rec.chunks.push(event.data); };
    recorder.onstop = function () { finishRecording(rec); };
    recording = rec;
    recorderShow(root, true, "Recording… press Stop when you finish.");
  }).catch(function () {
    if (token === recordToken) recorderShow(root, false, RECORD_ERROR);
  });
}

// Countdown: counts against an end timestamp (no drift); every live one is cancelled by stopAllActivity().
const countdowns = [];

function runCountdown(clockEl, seconds, onDone) {
  const end = Date.now() + seconds * 1000;
  let timer = null;
  let over = false;
  const cancel = function () {
    over = true;
    clearInterval(timer);
    const at = countdowns.indexOf(cancel);
    if (at !== -1) countdowns.splice(at, 1);
  };
  const tick = function () {
    const left = Math.ceil((end - Date.now()) / 1000);
    clockEl.textContent = Core.formatClock(left);
    if (left <= 0) { cancel(); onDone(); }
  };
  countdowns.push(cancel);
  tick();
  if (!over) timer = setInterval(tick, 250);
  return cancel;
}

// Only one talk or interview owns the timer at a time. Taking it over calls the old owner's reset, which puts its card back to idle.
let timedOwner = null;

function stopTimed(el) {
  const owner = timedOwner;
  if (!owner || (el && owner.el !== el)) return;
  timedOwner = null;
  owner.cancel();
  owner.reset();
}

function claimTimed(el, reset) {
  stopTimed();
  timedOwner = { el: el, reset: reset, cancel: function () {} };
  return timedOwner;
}

// Hands the timer back without calling reset (the owner finished by itself).
function releaseTimed(owner) {
  if (timedOwner !== owner) return;
  timedOwner = null;
  owner.cancel();
}

// Starts the owner's clock; a clock it ran before is cancelled first. Does nothing once another card has taken the timer.
function startTimed(owner, clockEl, seconds, onDone) {
  if (timedOwner !== owner) return;
  owner.cancel();
  owner.cancel = runCountdown(clockEl, seconds, onDone);
}

function stopAllActivity() {
  stopTimed();
  countdowns.slice().forEach(function (cancel) { cancel(); });
  endSpeechSession();
  endRecording(false);
  blobUrls.splice(0).forEach(function (url) { URL.revokeObjectURL(url); });
}

// Delegated so it survives re-renders.
document.addEventListener("click", function (event) {
  const rec = event.target.closest("[data-rec-start], [data-rec-stop]");
  if (rec) {
    if (rec.hasAttribute("data-rec-start")) startRecording(rec.closest(".recorder")); else endRecording(true);
  }
});
