/**
 * Vita Farma Landing Page — Interactive behaviors
 */

(function () {
  'use strict';

  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = navMenu ? navMenu.querySelectorAll('.nav-link') : [];
  const revealElements = document.querySelectorAll('.reveal');
  const counters = document.querySelectorAll('[data-count]');

  /** Toggle mobile navigation */
  function toggleMenu(force) {
    if (!navMenu || !navToggle) return;
    const isOpen = typeof force === 'boolean' ? force : !navMenu.classList.contains('open');
    navMenu.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      toggleMenu();
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        toggleMenu(false);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu(false);
        navToggle.focus();
      }
    });
  }

  /** Header shadow on scroll */
  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /** Reveal elements on scroll */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /** Animate counters */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (Number.isNaN(target)) return;

    const duration = 1600;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      el.textContent = current.toLocaleString('id-ID');

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('id-ID');
      }
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window && counters.length) {
    const counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  } else {
    counters.forEach(function (counter) {
      counter.textContent = counter.getAttribute('data-count');
    });
  }
})();
