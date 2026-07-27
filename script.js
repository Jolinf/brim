// Brim Up — script.js
// Only job: run the Splash screen timing per design.md (2000ms hold + 400ms fade)
// and respect prefers-reduced-motion. The real page underneath is already
// loaded/loading the whole time — this never blocks or delays it.

(function () {
  var splash = document.getElementById('splash');
  if (!splash) return;

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var HOLD_MS = prefersReducedMotion ? 200 : 2000;
  var FADE_MS = prefersReducedMotion ? 0 : 400;

  setTimeout(function () {
    splash.classList.add('hide');
    setTimeout(function () {
      splash.remove();
    }, FADE_MS + 50);
  }, HOLD_MS);
})();
