/**
 * Recovery Alliance of El Paso — main.js
 * 1. Mobile hamburger menu (drawer)
 * 2. Nav dropdowns (desktop) and accordions (mobile drawer)
 *
 * Every dropdown/accordion is a <button class="nav-disclosure" aria-expanded aria-controls>
 * followed by a <ul>. The CSS shows/hides the <ul> based on aria-expanded, so this
 * script only has to flip that attribute.
 *
 * To mark the current page, staff only need to put aria-current="page" on the right
 * link in the header. This script highlights its parent dropdown button automatically.
 */
(function () {
  'use strict';

  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const desktopToggles = Array.from(document.querySelectorAll('.nav-dropdown__toggle'));
  const mobileToggles = Array.from(document.querySelectorAll('.mobile-nav__toggle'));
  const allToggles = desktopToggles.concat(mobileToggles);

  /* ---------------------------------------------------------------------------
     Helpers
     --------------------------------------------------------------------------- */
  function isOpen(btn) {
    return btn.getAttribute('aria-expanded') === 'true';
  }

  function setExpanded(btn, open) {
    btn.setAttribute('aria-expanded', String(open));
  }

  function menuFor(btn) {
    return document.getElementById(btn.getAttribute('aria-controls'));
  }

  function closeDesktopDropdowns(except) {
    desktopToggles.forEach(function (btn) {
      if (btn !== except) setExpanded(btn, false);
    });
  }

  /* ---------------------------------------------------------------------------
     Current page: mark the parent dropdown button as active
     --------------------------------------------------------------------------- */
  allToggles.forEach(function (btn) {
    const menu = menuFor(btn);
    if (menu && menu.querySelector('a[aria-current="page"]')) {
      btn.classList.add('is-active');
      // In the mobile drawer, start with the current section's accordion open.
      if (btn.classList.contains('mobile-nav__toggle')) setExpanded(btn, true);
    }
  });

  /* ---------------------------------------------------------------------------
     Dropdowns + accordions: open/close on click (buttons handle Enter/Space natively)
     --------------------------------------------------------------------------- */
  allToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const open = !isOpen(btn);
      if (btn.classList.contains('nav-dropdown__toggle')) closeDesktopDropdowns(btn);
      setExpanded(btn, open);
    });
  });

  // Desktop: close a dropdown when keyboard focus moves out of it.
  desktopToggles.forEach(function (btn) {
    const item = btn.closest('.nav-dropdown');
    if (!item) return;
    item.addEventListener('focusout', function (e) {
      if (e.relatedTarget && !item.contains(e.relatedTarget)) setExpanded(btn, false);
    });
  });

  /* ---------------------------------------------------------------------------
     Mobile drawer
     --------------------------------------------------------------------------- */
  function setNavOpen(open) {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    mobileNav.classList.toggle('is-open', open);

    // When opening, move focus to the first item for keyboard users.
    if (open) {
      const first = mobileNav.querySelector('a, button');
      if (first) first.focus();
    }
  }

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      setNavOpen(!isOpen(toggle));
    });

    // Close the drawer when a link inside it is followed.
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setNavOpen(false);
      });
    });
  }

  /* ---------------------------------------------------------------------------
     Escape: close the innermost open thing and return focus to its button
     --------------------------------------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' && e.key !== 'Esc') return;

    // 1. An open desktop dropdown
    const openDesktop = desktopToggles.find(isOpen);
    if (openDesktop) {
      setExpanded(openDesktop, false);
      openDesktop.focus();
      return;
    }

    // 2. An open mobile accordion that currently holds focus
    const active = document.activeElement;
    const openAccordion = mobileToggles.find(function (btn) {
      const menu = menuFor(btn);
      return isOpen(btn) && menu && menu.contains(active);
    });
    if (openAccordion) {
      setExpanded(openAccordion, false);
      openAccordion.focus();
      return;
    }

    // 3. The mobile drawer
    if (toggle && isOpen(toggle)) {
      setNavOpen(false);
      toggle.focus();
    }
  });

  /* ---------------------------------------------------------------------------
     Outside click: close desktop dropdowns and the mobile drawer
     --------------------------------------------------------------------------- */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) closeDesktopDropdowns(null);

    if (
      toggle && mobileNav && isOpen(toggle) &&
      !toggle.contains(e.target) &&
      !mobileNav.contains(e.target)
    ) {
      setNavOpen(false);
    }
  });
})();
