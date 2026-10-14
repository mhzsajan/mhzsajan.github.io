/* Sajan Maharjan — the book.
   One click turns one leaf, the way a real book behaves.
   Progressive enhancement: with scripting off the cover hides and every page
   is simply present in the flow. */
(function () {
  'use strict';

  var book = document.getElementById('book');
  var btn  = document.getElementById('openBtn');
  var next = document.getElementById('nextBtn');
  var prev = document.getElementById('prevBtn');
  var count = document.getElementById('turnCount');
  if (!book || !btn || !next || !prev) return;

  var leaves = [].slice.call(document.querySelectorAll('.leaf'));
  var LAST = leaves.length - 1;          // the back cover never turns
  var LABELS = ['Cover', '01 · 02', '03 · 04', '05 · 06'];

  // Clear the reverse state once it has played, so the next forward turn
  // starts clean. Without this a leaf can be left mid-animation.
  leaves.forEach(function (leaf) {
    leaf.addEventListener('animationend', function () {
      leaf.classList.remove('unturning');
    });
  });

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function paint() {
    var turned = parseInt(book.dataset.turned, 10) || 0;

    leaves.forEach(function (leaf, i) {
      var shouldTurn = i < turned;
      var isTurned = leaf.classList.contains('turned');
      if (shouldTurn && !isTurned) {
        leaf.classList.remove('unturning');
        leaf.classList.add('turned');
      } else if (!shouldTurn && isTurned) {
        // run the same keyframes backwards rather than snapping to the start
        leaf.classList.remove('turned');
        leaf.classList.add('unturning');
      }
      // Turned leaves pile up on the left, later turns on top. Un-turned
      // leaves sit on the right, earliest (the cover) on top.
      leaf.style.zIndex = i < turned ? (10 + i) : (100 - i);
    });

    // Mobile stacks instead of flipping: show the page pair for this step.
    leaves.forEach(function (leaf, i) {
      var show = i === Math.max(0, turned - 1) || i === turned;
      leaf.classList.toggle('on-stage', show);
    });

    if (count) count.textContent = LABELS[turned] || '';

    prev.disabled = turned === 0;
    next.disabled = turned === LAST;
    btn.setAttribute('aria-expanded', turned > 0 ? 'true' : 'false');
    var t = btn.querySelector('.cover-open-text');
    if (t) t.textContent = turned > 0 ? 'Close' : 'Open';

    document.body.classList.toggle('is-closed', turned === 0);
    document.body.classList.toggle('is-open', turned > 0);
  }

  function turnTo(n) {
    n = Math.max(0, Math.min(LAST, n));
    book.dataset.turned = String(n);
    paint();
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    turnTo(parseInt(book.dataset.turned, 10) === 0 ? 1 : 0);
  });
  next.addEventListener('click', function (e) { e.stopPropagation(); turnTo(parseInt(book.dataset.turned, 10) + 1); });
  prev.addEventListener('click', function (e) { e.stopPropagation(); turnTo(parseInt(book.dataset.turned, 10) - 1); });

  document.addEventListener('keydown', function (e) {
    var t = parseInt(book.dataset.turned, 10);
    if (e.key === 'Escape') turnTo(0);
    else if (e.key === 'ArrowRight') turnTo(t + 1);
    else if (e.key === 'ArrowLeft') turnTo(t - 1);
  });

  if (reduce) turnTo(1);   // CSS flattens it; keep the state honest
  paint();
})();