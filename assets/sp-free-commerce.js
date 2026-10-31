(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const settingsNode = $('#SpiderGlobalSettings');
  let settings = {};
  try { settings = settingsNode ? JSON.parse(settingsNode.textContent) : {}; } catch (_) {}
  const rootPath = window.Shopify && window.Shopify.routes && window.Shopify.routes.root ? window.Shopify.routes.root : '/';
  let previousFocus = null;

  const escapeHtml = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  const money = (cents) => {
    const currency = (window.Shopify && window.Shopify.currency && window.Shopify.currency.active) || 'USD';
    try {
      return new Intl.NumberFormat(document.documentElement.lang || 'en', { style: 'currency', currency }).format((Number(cents) || 0) / 100);
    } catch (_) {
      return ((Number(cents) || 0) / 100).toFixed(2);
    }
  };

  const getDrawer = () => $('[data-sp-free-cart]');
  const setCount = (count) => {
    $$('[data-sp-cart-count]').forEach((node) => {
      node.textContent = String(count || 0);
      node.hidden = Number(count) < 1;
    });
    $$('[data-sp-cart-count-label]').forEach((node) => { node.textContent = `(${count || 0})`; });
  };

  const renderCart = (cart) => {
    const drawer = getDrawer();
    if (!drawer) return;
    setCount(cart.item_count);
    const body = $('[data-sp-cart-body]', drawer);
    if (!body) return;
    if (!cart.items || cart.items.length === 0) {
      body.innerHTML = `<div class="sp-free-cart__empty"><p>Your cart is currently empty.</p><a class="sp-button sp-button--primary" href="${rootPath}collections/all">Continue shopping</a></div>`;
      return;
    }
    const items = cart.items.map((item, index) => {
      const image = item.image ? `<a href="${escapeHtml(item.url)}"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.product_title)}" loading="lazy" width="88" height="108"></a>` : '';
      const variant = item.variant_title && item.variant_title !== 'Default Title' ? `<p>${escapeHtml(item.variant_title)}</p>` : '';
      return `<li class="sp-free-cart__item" data-cart-line="${index + 1}">
        ${image}
        <div class="sp-free-cart__item-info">
          <a href="${escapeHtml(item.url)}" class="sp-free-cart__item-title">${escapeHtml(item.product_title)}</a>
          ${variant}
          <strong>${money(item.final_line_price || item.line_price)}</strong>
          <div class="sp-free-cart__quantity">
            <button type="button" data-cart-quantity data-line-key="${escapeHtml(item.key)}" data-quantity="-1" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-cart-quantity data-line-key="${escapeHtml(item.key)}" data-quantity="1" aria-label="Increase quantity">+</button>
            <button type="button" data-cart-remove data-line-key="${escapeHtml(item.key)}">Remove</button>
          </div>
        </div>
      </li>`;
    }).join('');
    body.innerHTML = `<ul class="sp-free-cart__items" role="list">${items}</ul>
      <div class="sp-free-cart__summary">
        <p><span>Subtotal</span><strong>${money(cart.total_price)}</strong></p>
        <p class="sp-free-cart__note">Taxes and shipping are calculated at checkout.</p>
        <a class="sp-button sp-button--primary" href="${rootPath}checkout">Checkout</a>
        <a class="sp-free-cart__view-cart" href="${rootPath}cart">View cart</a>
      </div>`;
  };

  const fetchCart = async () => {
    const response = await fetch(`${rootPath}cart.js`, { headers: { Accept: 'application/json' }, credentials: 'same-origin' });
    if (!response.ok) throw new Error('Unable to load cart');
    const cart = await response.json();
    renderCart(cart);
    return cart;
  };

  const openDrawer = async () => {
    const drawer = getDrawer();
    if (!drawer) return;
    previousFocus = document.activeElement;
    drawer.hidden = false;
    document.documentElement.classList.add('sp-free-cart-open');
    const panel = $('.sp-free-cart__panel', drawer);
    if (panel) panel.focus();
    try { await fetchCart(); } catch (_) {}
    document.dispatchEvent(new CustomEvent('spider:drawer:opened', { detail: { drawer: 'cart' } }));
  };

  const closeDrawer = () => {
    const drawer = getDrawer();
    if (!drawer || drawer.hidden) return;
    drawer.hidden = true;
    document.documentElement.classList.remove('sp-free-cart-open');
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
    document.dispatchEvent(new CustomEvent('spider:drawer:closed', { detail: { drawer: 'cart' } }));
  };

  const showError = (form, message) => {
    const error = $('[data-product-error]', form);
    if (error) {
      error.textContent = message;
      error.hidden = false;
    } else {
      const live = $('[data-sp-cart-live]', getDrawer() || document);
      if (live) live.textContent = message;
    }
  };

  const addProduct = async (form) => {
    const submit = $('[data-product-submit]', form) || $('button[type="submit"]', form);
    const error = $('[data-product-error]', form);
    if (error) { error.hidden = true; error.textContent = ''; }
    if (submit) { submit.disabled = true; submit.setAttribute('aria-busy', 'true'); }
    try {
      const action = form.getAttribute('action') || `${rootPath}cart/add`;
      const url = new URL(action, window.location.origin);
      url.pathname = url.pathname.replace(/\/?$/, '.js');
      const response = await fetch(url.toString(), {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
        credentials: 'same-origin'
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.description || data.message || 'Unable to add this item to your cart.');
      document.dispatchEvent(new CustomEvent('spider:cart:updated', { detail: data }));
      if (settings.cartOpenAfterAdd !== false && getDrawer()) await openDrawer();
      else if (settings.cartType === 'page') window.location.href = `${rootPath}cart`;
      else await fetchCart();
      if (window.Spider && typeof window.Spider.announce === 'function') window.Spider.announce('Added to cart');
    } catch (error) {
      showError(form, error.message || 'Something went wrong. Please try again.');
    } finally {
      if (submit) { submit.disabled = false; submit.removeAttribute('aria-busy'); }
    }
  };

  const changeLine = async (key, quantity) => {
    const drawer = getDrawer();
    if (drawer) drawer.classList.add('is-loading');
    try {
      const response = await fetch(`${rootPath}cart/change.js`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ id: key, quantity }),
        credentials: 'same-origin'
      });
      const cart = await response.json();
      if (!response.ok) throw new Error(cart.description || 'Unable to update cart.');
      renderCart(cart);
      document.dispatchEvent(new CustomEvent('spider:cart:updated', { detail: cart }));
    } catch (error) {
      const live = $('[data-sp-cart-live]', drawer || document);
      if (live) live.textContent = error.message;
    } finally {
      if (drawer) drawer.classList.remove('is-loading');
    }
  };

  document.addEventListener('click', (event) => {
    const open = event.target.closest('[data-sp-cart-open]');
    if (open && getDrawer()) {
      event.preventDefault();
      openDrawer();
      return;
    }
    if (event.target.closest('[data-cart-close]')) {
      closeDrawer();
      return;
    }
    const quantity = event.target.closest('[data-cart-quantity]');
    if (quantity) {
      const key = quantity.dataset.lineKey;
      if (key) {
        const current = Number(quantity.parentElement.querySelector('span')?.textContent || 1);
        changeLine(key, Math.max(0, current + Number(quantity.dataset.quantity || 0)));
      }
      return;
    }
    const remove = event.target.closest('[data-cart-remove]');
    if (remove && remove.dataset.lineKey) {
      changeLine(remove.dataset.lineKey, 0);
      return;
    }
    const qtyButton = event.target.closest('[data-quantity-minus],[data-quantity-plus]');
    if (qtyButton) {
      const wrapper = qtyButton.closest('[data-quantity]');
      const input = wrapper && $('input[type="number"]', wrapper);
      if (input) {
        const min = Number(input.min || 1);
        const max = input.max ? Number(input.max) : Infinity;
        const delta = qtyButton.hasAttribute('data-quantity-plus') ? 1 : -1;
        input.value = String(Math.max(min, Math.min(max, Number(input.value || min) + delta)));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
    const thumb = event.target.closest('[data-product-thumb]');
    if (thumb) {
      const section = thumb.closest('[data-sp-product-page]');
      if (!section) return;
      const index = thumb.dataset.productThumb;
      $$('[data-product-media]', section).forEach((media) => { media.hidden = media.dataset.mediaIndex !== index; });
      $$('[data-product-thumb]', section).forEach((button) => button.setAttribute('aria-pressed', String(button === thumb)));
    }
  });

  document.addEventListener('submit', (event) => {
    const form = event.target.closest('form[action*="/cart/add"]');
    if (!form) return;
    if (settings.cartType === 'page' || settings.cartAjaxUpdates === false) return;
    if (!getDrawer()) return;
    event.preventDefault();
    addProduct(form);
  });

  document.addEventListener('change', (event) => {
    const select = event.target.closest('[data-product-variant]');
    if (!select || select.tagName !== 'SELECT') return;
    const option = select.options[select.selectedIndex];
    const section = select.closest('[data-sp-product-page]');
    if (!section || !option) return;
    const price = $('[data-product-price]', section);
    const compare = $('[data-product-compare]', section);
    const sku = $('[data-product-sku]', section);
    const submit = $('[data-product-submit]', section);
    const availability = $('[data-product-availability]', section);
    if (price && option.dataset.price) price.textContent = money(option.dataset.price);
    if (compare) {
      const compareValue = Number(option.dataset.compare || 0);
      const currentValue = Number(option.dataset.price || 0);
      compare.hidden = compareValue <= currentValue;
      compare.textContent = compareValue > currentValue ? money(compareValue) : '';
    }
    if (sku && option.dataset.sku) sku.textContent = `SKU: ${option.dataset.sku}`;
    if (submit) {
      const available = option.dataset.available === 'true';
      submit.disabled = !available;
      submit.textContent = available ? 'Add to cart' : 'Sold out';
    }
    if (availability) availability.textContent = option.dataset.available === 'true' ? 'In stock' : 'Sold out';
  });

  document.addEventListener('keydown', (event) => {
    const drawer = getDrawer();
    if (event.key === 'Escape') { closeDrawer(); return; }
    if (event.key === 'Tab' && drawer && !drawer.hidden) {
      const panel = $('.sp-free-cart__panel', drawer);
      const focusable = $$('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])', panel);
      if (!focusable.length) { event.preventDefault(); panel?.focus(); return; }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  document.addEventListener('shopify:section:load', () => {
    if (getDrawer() && !getDrawer().hidden) fetchCart().catch(() => {});
  });

  if (getDrawer()) {
    document.documentElement.addEventListener('click', (event) => {
      if (event.target.closest('[data-sp-cart-open]')) return;
    });
  }
})();
