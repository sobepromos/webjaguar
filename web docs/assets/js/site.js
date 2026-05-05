(function () {
  'use strict';

  // Nav scrolled state
  var nav = document.getElementById('nav');
  if (nav) {
    var setScrolled = function () {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('nav-mobile-panel');
  if (toggle && panel) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      panel.dataset.open = String(open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    });
    panel.addEventListener('click', function (e) {
      var t = e.target;
      if (t && t.tagName === 'A') setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false);
    });
    // Close on viewport resize back to desktop
    var mq = window.matchMedia('(min-width: 721px)');
    mq.addEventListener('change', function (e) { if (e.matches) setOpen(false); });
  }

  // Update copyright year
  var yr = document.getElementById('current-year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
