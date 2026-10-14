/* Sajan Maharjan — book behaviour.
   Progressive enhancement: with scripting off the cover hides and the two
   inside pages are simply visible, so the page still works. */
(function () {
  'use strict';

  var book = document.getElementById('book');
  var btn  = document.getElementById('openBtn');
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

  if (reduce) setOpen(true);   // CSS already flattens it; keep state honest
})();