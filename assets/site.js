/* Sajan Maharjan — book behaviour.
   Progressive enhancement: with scripting off the cover hides and the detail
   below is simply visible, so the page still works. */
(function () {
  'use strict';

  var book  = document.getElementById('book');
  var btn   = document.getElementById('openBtn');
  if (!book || !btn) return;

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setOpen(open) {
    book.setAttribute('data-open', open ? 'true' : 'false');
    document.body.classList.toggle('is-open', open);
    document.body.classList.toggle('is-closed', !open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    var text = btn.querySelector('.cover-open-text');
    if (text) text.textContent = open ? 'Close' : 'Open';
    if (open) {
      // let the flip finish before moving focus / scrolling anywhere
      window.setTimeout(function () {
        var first = document.querySelector('#detail .h2');
        if (first) first.setAttribute('tabindex', '-1');
      }, reduce ? 0 : 950);
    }
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(book.getAttribute('data-open') !== 'true');
  });

  // Tapping the open book closes it again.
  book.addEventListener('click', function (e) {
    if (book.getAttribute('data-open') !== 'true') return;
    if (e.target.closest('a, button')) return;
    setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && book.getAttribute('data-open') === 'true') {
      setOpen(false);
      btn.focus();
    }
  });

  if (reduce) {
    // CSS already flattens the book; make the state match so nothing lies.
    setOpen(true);
  }

  /* ── reveal detail sections on scroll (inert if reduced motion) ───────── */
  var targets = document.querySelectorAll('#detail .duties > li, #detail .rig-col, ' +
    '#detail .shot, #detail .card, #detail .tk');
  if (!targets.length) return;

  if (reduce || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add('in'); });
    return;
  }
  targets.forEach(function (el) { el.classList.add('reveal'); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -6% 0px' });

  Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
})();