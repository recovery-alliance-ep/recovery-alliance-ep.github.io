/**
 * Recovery Alliance of El Paso — main.js
 * Mobile hamburger menu toggle only.
 * Accessible: aria-expanded, keyboard-friendly, closes on Escape.
 */
(function () {
  'use strict';

  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (!toggle || !mobileNav) return;

  /**
   * Open or close the mobile nav.
   * @param {boolean} open - true to open, false to close.
   */
  function setNavOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    mobileNav.classList.toggle('is-open', open);

    // When opening, move focus to the first nav link for keyboard users.
    if (open) {
      const firstLink = mobileNav.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  }

  // Toggle on button click.
  toggle.addEventListener('click', function () {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setNavOpen(!isOpen);
  });

  // Close on Escape key (wherever focus is on the page).
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setNavOpen(false);
      toggle.focus(); // return focus to the button
    }
  });

  // Close when a nav link is clicked (single-page navigation feel).
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setNavOpen(false);
    });
  });

  // Close when the user clicks outside the nav/toggle.
  document.addEventListener('click', function (e) {
    if (
      toggle.getAttribute('aria-expanded') === 'true' &&
      !toggle.contains(e.target) &&
      !mobileNav.contains(e.target)
    ) {
      setNavOpen(false);
    }
  });
})();
