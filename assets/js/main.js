// Mobile menu toggle, highlighter sweep on headings, footer year.
// The page works fully without this script (desktop nav is plain links, markers fall back to visible).
(function () {
  var btn = document.querySelector('.burger');
  var nav = document.getElementById('menu');
  if (btn && nav) {
    var setOpen = function (open) {
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      nav.classList.toggle('is-open', open);
    };
    btn.addEventListener('click', function () {
      setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        btn.focus();
      }
    });
    // Close the panel when switching to the desktop layout
    window.matchMedia('(min-width: 960px)').addEventListener('change', function (m) {
      if (m.matches) setOpen(false);
    });
  }
  // Highlighter: sweep the caramel marker under each key word once, when it enters the viewport
  var marks = document.querySelectorAll('.hl[data-hl]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    marks.forEach(function (m) { io.observe(m); });
  } else {
    marks.forEach(function (m) { m.classList.add('is-in'); });
  }

  // Marquee pause/play (WCAG 2.2.2): the button stops the loop for touch and keyboard users
  var mq = document.querySelector('.marquee');
  var mqBtn = mq && mq.querySelector('.marquee__toggle');
  if (mqBtn) {
    mqBtn.addEventListener('click', function () {
      var paused = mqBtn.getAttribute('aria-pressed') !== 'true';
      mqBtn.setAttribute('aria-pressed', String(paused));
      mqBtn.setAttribute('aria-label', paused ? 'Relancer le bandeau défilant' : 'Mettre en pause le bandeau défilant');
      mq.classList.toggle('is-paused', paused);
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
