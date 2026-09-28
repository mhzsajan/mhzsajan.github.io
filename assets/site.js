/* Sajan Maharjan — personal site behaviour.
   Progressive enhancement: every section is readable with JS disabled. */
(function () {
  'use strict';

  /* ── sticky nav border ─────────────────────────────────────────── */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (nav) nav.classList.toggle('stuck', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── mobile menu ───────────────────────────────────────────────── */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ── reveal sections on scroll ─────────────────────────────────── */
  var targets = document.querySelectorAll('.block, .card, .gear-col, .rig-col, .priv li, .cbtn');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduce && 'IntersectionObserver' in window && targets.length) {
    Array.prototype.forEach.call(targets, function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      el.style.transition = 'opacity .5s ease, transform .5s ease';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.style.transitionDelay = Math.min(i, 4) * 55 + 'ms';
        el.style.opacity = '1';
        el.style.transform = 'none';
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  }
})();
