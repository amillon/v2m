// Menu toggle, carousel enhancement (prev/next buttons, dots) + footer year.
// The page is fully usable without this script: the track scrolls and swipes natively.
(function () {
  document.documentElement.classList.add('js');

  // Mobile menu toggle
  var btn = document.querySelector('.burger');
  var nav = document.getElementById('menu');
  if (btn && nav) {
    var setOpen = function (open) {
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      nav.classList.toggle('is-open', open);
    };
    btn.addEventListener('click', function () { setOpen(btn.getAttribute('aria-expanded') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setOpen(false); btn.focus(); }
    });
  }
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var svg = function (id) {
    return '<svg class="ico" aria-hidden="true" focusable="false"><use href="#' + id + '"/></svg>';
  };

  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var track = root.querySelector('.carousel__track');
    var slides = Array.prototype.slice.call(track.children);
    if (!track || slides.length < 2) return;

    var prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'carousel__btn carousel__btn--prev';
    prev.setAttribute('aria-label', 'Diapositive précédente');
    prev.innerHTML = svg('i-prev');

    var next = document.createElement('button');
    next.type = 'button';
    next.className = 'carousel__btn carousel__btn--next';
    next.setAttribute('aria-label', 'Diapositive suivante');
    next.innerHTML = svg('i-next');

    var dots = document.createElement('div');
    dots.className = 'carousel__dots';
    var dotEls = slides.map(function (_, i) {
      var d = document.createElement('button');
      d.type = 'button';
      d.className = 'carousel__dot';
      d.setAttribute('aria-label', 'Aller à la diapositive ' + (i + 1) + ' sur ' + slides.length);
      d.addEventListener('click', function () { goTo(i); });
      dots.appendChild(d);
      return d;
    });

    root.appendChild(prev);
    root.appendChild(next);
    root.appendChild(dots);

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    var index = 0;

    function goTo(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: reduce.matches ? 'auto' : 'smooth' });
    }
    function update() {
      index = Math.round(track.scrollLeft / track.clientWidth);
      index = Math.max(0, Math.min(slides.length - 1, index));
      dotEls.forEach(function (d, i) {
        if (i === index) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
      });
      prev.disabled = index === 0;
      next.disabled = index === slides.length - 1;
    }

    prev.addEventListener('click', function () { goTo(index - 1); });
    next.addEventListener('click', function () { goTo(index + 1); });
    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { update(); ticking = false; });
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
})();
