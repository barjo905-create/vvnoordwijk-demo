/* vv Noordwijk demo — gedeelde interactie */
(function () {
  'use strict';

  /* Nav: blur bij scroll */
  var nav = document.querySelector('.nav');
  function opScroll() {
    if (window.scrollY > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', opScroll, { passive: true });
  opScroll();

  /* Hamburger */
  var burger = document.querySelector('.nav-burger');
  var mobielMenu = document.querySelector('.mobiel-menu');
  if (burger && mobielMenu) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      mobielMenu.classList.toggle('open');
      document.body.style.overflow = mobielMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobielMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.classList.remove('open');
        mobielMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* Hero-kop woord voor woord */
  document.querySelectorAll('[data-woorden]').forEach(function (el) {
    var woorden = el.textContent.trim().split(/\s+/);
    el.innerHTML = woorden.map(function (w, i) {
      return '<span class="w" style="animation-delay:' + (0.35 + i * 0.08) + 's">' + w + '</span>';
    }).join(' ');
  });

  /* Scroll reveals */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('zichtbaar');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal, .reveal-foto').forEach(function (el) { io.observe(el); });

  /* Count-up cijfers */
  function countUp(el) {
    var doel = parseInt(el.getAttribute('data-tel'), 10);
    var duur = 1400, start = null;
    function stap(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / duur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(doel * eased).toLocaleString('nl-NL');
      if (p < 1) requestAnimationFrame(stap);
    }
    requestAnimationFrame(stap);
  }
  var ioTel = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { countUp(e.target); ioTel.unobserve(e.target); }
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-tel]').forEach(function (el) { ioTel.observe(el); });

  /* Countdown naar volgende wedstrijd */
  var cd = document.querySelector('[data-countdown]');
  if (cd) {
    var doelTijd = new Date(cd.getAttribute('data-countdown')).getTime();
    var velden = {
      d: cd.querySelector('[data-cd-d]'),
      u: cd.querySelector('[data-cd-u]'),
      m: cd.querySelector('[data-cd-m]'),
      s: cd.querySelector('[data-cd-s]')
    };
    function pad(n) { return String(n).padStart(2, '0'); }
    function tik() {
      var rest = doelTijd - Date.now();
      if (rest < 0) rest = 0;
      var s = Math.floor(rest / 1000);
      velden.d.textContent = pad(Math.floor(s / 86400));
      velden.u.textContent = pad(Math.floor(s % 86400 / 3600));
      velden.m.textContent = pad(Math.floor(s % 3600 / 60));
      velden.s.textContent = pad(s % 60);
    }
    tik();
    setInterval(tik, 1000);
  }

  /* Parallax hero-achtergrond */
  var heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y < window.innerHeight * 1.2) {
        heroBg.style.transform = 'translateY(' + y * 0.35 + 'px) scale(1)';
      }
    }, { passive: true });
  }
})();
