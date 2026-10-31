(() => {
  'use strict';
  const init = (root) => {
    if (!root || root.dataset.spHeaderReady === 'true') return;
    root.dataset.spHeaderReady = 'true';
    const toggle = root.querySelector('[data-mobile-menu-toggle]');
    const menu = root.querySelector('[data-mobile-menu]');
    const close = () => {
      if (!toggle || !menu) return;
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    };
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const opening = menu.hidden;
        menu.hidden = !opening;
        toggle.setAttribute('aria-expanded', String(opening));
      });
      menu.addEventListener('click', (event) => {
        if (event.target.closest('a')) close();
      });
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') close();
      });
    }
  };
  document.querySelectorAll('[data-sp-free-header]').forEach(init);
  document.addEventListener('shopify:section:load', (event) => {
    const root = event.target.querySelector('[data-sp-free-header]');
    if (root) init(root);
  });
})();
