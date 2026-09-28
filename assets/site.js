/* Sajan Maharjan — personal site behaviour.
   Progressive enhancement: every section is readable with JS disabled. */
(function () {
  'use strict';

  /* ── sticky nav rule ─────────────────────────────────────────────── */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (nav) nav.classList.toggle('stuck', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── mobile menu ─────────────────────────────────────────────────── */
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

  /* ── fade sections in as they come up ─────────────────────────────── */
  var targets = document.querySelectorAll(
    '.spec, .col, .rig-group, .entries > li, .gear-col, .contact > li'
  );
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduce && 'IntersectionObserver' in window && targets.length) {
    Array.prototype.forEach.call(targets, function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'opacity .45s ease, transform .45s ease';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.style.opacity = '1';
        el.style.transform = 'none';
        io.unobserve(el);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  }
})();
