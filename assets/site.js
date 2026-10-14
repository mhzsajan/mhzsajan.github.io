/* Sajan Maharjan — personal site behaviour.
   Progressive enhancement throughout: every element on this page is visible
   with scripting disabled, because the hiding styles are scoped to .js on
   <html> and that class is only added by the inline head script. */
(function () {
  'use strict';

  /* ── sticky nav ─────────────────────────────────────────────────────── */
  var nav = document.getElementById('nav');
  if (nav) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        nav.classList.toggle('stuck', window.scrollY > 8);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── mobile menu ────────────────────────────────────────────────────── */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    var setOpen = function (open) {
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    toggle.addEventListener('click', function () {
      setOpen(!links.classList.contains('open'));
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ── reveal on scroll ───────────────────────────────────────────────── */
  var targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // No observer, or reduced motion requested: show everything, skip the work.
  if (reduce || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

  Array.prototype.forEach.call(targets, function (el) { io.observe(el); });

  /* Safety net: if anything above failed to run, never leave the page blank.
     Anything still hidden after 3s is revealed. */
  setTimeout(function () {
    Array.prototype.forEach.call(targets, function (el) {
      if (!el.classList.contains('in')) el.classList.add('in');
    });
  }, 3000);
})();