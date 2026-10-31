(() => {
  'use strict';
  const setup = (root) => {
    if (!root || root.dataset.spFooterReady === 'true') return;
    root.dataset.spFooterReady = 'true';
    const sync = () => {
      const mobile = window.matchMedia('(max-width: 749px)').matches;
      root.querySelectorAll('.sp-free-footer__accordion').forEach((item) => {
        item.open = !mobile;
      });
    };
    sync();
    window.addEventListener('resize', sync, { passive: true });
  };
  document.querySelectorAll('[data-sp-free-footer]').forEach(setup);
  document.addEventListener('shopify:section:load', (event) => {
    const root = event.target.querySelector('[data-sp-free-footer]');
    if (root) setup(root);
  });
})();
