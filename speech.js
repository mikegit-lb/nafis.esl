// Text-to-speech helpers. `progress` (the shared store) is created in app.js and only used at call time.
function canSpeak() { return "speechSynthesis" in window; }

function listenButton(text, label) {
  return canSpeak()
    ? '<button class="listen-btn" type="button" data-listen="' + escapeHtml(text) + '" aria-label="Listen: ' + escapeHtml(label || text) + '">Listen</button>'
    : "";
}

function speedToggle() {
  return canSpeak()
    ? '<button class="speed-toggle" type="button" aria-pressed="' + String(progress.get("slow", false) === true) + '">Slow speech</button>'
    : "";
}

// Kept so the browser cannot garbage-collect a speaking utterance (Chrome then never fires onend).
let current = null;
// Bumped whenever a partner session must end; sessions compare it to their own copy and do nothing when stale.
let sessionToken = 0;

// cancel() fires `error` on the interrupted utterance, so detach its callbacks first: an interrupted line never calls back.
function silenceSpeech() {
  if (current) current.onend = current.onerror = null;
  window.speechSynthesis.cancel();
}

function endSpeechSession() {
  sessionToken += 1;
  if (canSpeak()) silenceSpeech();
}

function speakText(text, options) {
  if (!canSpeak()) return;
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = Core.pickVoice(window.speechSynthesis.getVoices(), "en-GB");
  if (voice) utterance.voice = voice;
  utterance.lang = "en-GB";
  utterance.rate = progress.get("slow", false) === true ? 0.7 : 1;
  if (options && options.onend) utterance.onend = utterance.onerror = options.onend;
  silenceSpeech();
  current = utterance;
  window.speechSynthesis.speak(utterance);
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
  root.classList.toggle("is-recording", live);
  root.querySelector("[data-rec-start]").hidden = live;
  root.querySelector("[data-rec-stop]").hidden = !live;
  root.querySelector(".rec-status").textContent = message;
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
  recorderShow(rec.root, false, "Listen to your recording, then play the model answer and compare.");
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

function stopAllActivity() {
  endSpeechSession();
  endRecording(false);
  blobUrls.splice(0).forEach(function (url) { URL.revokeObjectURL(url); });
}

// Delegated so it survives re-renders; the controls are not rendered when speechSynthesis is absent.
document.addEventListener("click", function (event) {
  const rec = event.target.closest("[data-rec-start], [data-rec-stop]");
  if (rec) {
    if (rec.hasAttribute("data-rec-start")) startRecording(rec.closest(".recorder")); else endRecording(true);
    return;
  }
  const listen = event.target.closest("[data-listen]");
  if (listen) { speakText(listen.dataset.listen); return; }
  if (!event.target.closest(".speed-toggle")) return;
  const slow = progress.get("slow", false) !== true;
  progress.set("slow", slow);
  document.querySelectorAll(".speed-toggle").forEach(function (b) { b.setAttribute("aria-pressed", String(slow)); });
});
