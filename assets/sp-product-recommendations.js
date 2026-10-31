(() => {
  'use strict';
  const load = async (element) => {
    if (!element || element.dataset.loaded === 'true' || !element.dataset.url) return;
    element.dataset.loaded = 'true';
    try {
      const response = await fetch(element.dataset.url, { credentials: 'same-origin' });
      if (!response.ok) throw new Error('Recommendations request failed');
      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const id = element.dataset.sectionId;
      const replacement = doc.querySelector(`#shopify-section-${CSS.escape(id)} product-recommendations, product-recommendations[data-section-id="${CSS.escape(id)}"]`);
      if (replacement && replacement.innerHTML.trim()) element.innerHTML = replacement.innerHTML;
      else if (!element.querySelector('.sp-free-product-card')) element.remove();
    } catch (error) {
      element.remove();
    }
  };
  const init = () => document.querySelectorAll('product-recommendations[data-url]').forEach(load);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
  document.addEventListener('shopify:section:load', init);
})();
