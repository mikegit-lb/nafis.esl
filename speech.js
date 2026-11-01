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

function speakText(text, options) {
  if (!canSpeak()) return;
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = Core.pickVoice(window.speechSynthesis.getVoices(), "en-GB");
  if (voice) utterance.voice = voice;
  utterance.lang = "en-GB";
  utterance.rate = progress.get("slow", false) === true ? 0.7 : 1;
  if (options && options.onend) utterance.onend = utterance.onerror = options.onend;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function stopAllActivity() {
  if (canSpeak()) window.speechSynthesis.cancel();
}

// Delegated so it survives re-renders; the controls are not rendered when speechSynthesis is absent.
document.addEventListener("click", function (event) {
  const listen = event.target.closest("[data-listen]");
  if (listen) { speakText(listen.dataset.listen); return; }
  if (!event.target.closest(".speed-toggle")) return;
  const slow = progress.get("slow", false) !== true;
  progress.set("slow", slow);
  document.querySelectorAll(".speed-toggle").forEach(function (b) { b.setAttribute("aria-pressed", String(slow)); });
});
