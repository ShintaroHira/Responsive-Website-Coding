(() => {
  'use strict';

  // Menu drawer -------------------------------------------------
  const menuBtn = document.querySelector('.menu-btn');
  const drawer = document.getElementById('drawer');

  const setDrawer = (open) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) {
      drawer.hidden = false;
      requestAnimationFrame(() => drawer.classList.add('is-open'));
    } else {
      drawer.classList.remove('is-open');
      drawer.addEventListener('transitionend', () => { drawer.hidden = true; }, { once: true });
    }
  };

  menuBtn.addEventListener('click', () => {
    setDrawer(menuBtn.getAttribute('aria-expanded') !== 'true');
  });

  drawer.addEventListener('click', (event) => {
    if (event.target.closest('a')) setDrawer(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
      setDrawer(false);
      menuBtn.focus();
    }
  });

  // FAQ accordion ----------------------------------------------
  document.querySelectorAll('.faq__q').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq__item');
      const open = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
    });
  });

  // Google Map: scale the fixed-size frame to fill its box --------
  const mapBox = document.querySelector('.access__map');
  const fitMap = () => mapBox.style.setProperty('--map-zoom', mapBox.clientWidth / 1262.59);
  new ResizeObserver(fitMap).observe(mapBox);

  // Placeholder reservation links stay put until real URLs are set
  document.querySelectorAll('[data-placeholder]').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());
  });
})();
