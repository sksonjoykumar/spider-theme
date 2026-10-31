# Spider Free - File Audit

**Source archive:** `Spider-thme-preiumn(2).zip`  
**Source SHA-256:** `7ebff63d0e3a31cc028e5bd301e9000a666a1d1e7e28ce7d204fa8e59db84160`  
**Free build:** Spider Free v1.0.0  
**Audit date:** 2026-10-30

## 1. Scope and protection

The uploaded Premium archive was extracted to a separate working directory. The original ZIP was not modified, overwritten, renamed or deleted. The Free package was assembled independently from the extracted copy.

The file counts below compare the complete 583-file source archive with the 181-file Shopify theme payload. Documentation files are prepared separately for the GitHub repository and are not included in the Shopify upload ZIP.

## 2. Inventory summary

| Metric | Premium source | Spider Free payload |
|---|---:|---:|
| Files | 583 | 181 |
| Uncompressed size | 6,148,795 bytes | 1,533,898 bytes |
| Assets | 159 | 56 |
| Sections + section groups | 111 | 52 |
| Snippets | 228 | 37 |
| Templates | 36 | 20 |
| Theme blocks | 33 | 0 |

The Free Shopify payload is approximately **75.1% smaller** than the complete source archive by uncompressed file bytes. This is a source-footprint comparison, not a runtime or PageSpeed measurement.

## 3. File action summary

| Classification | Count | Meaning |
|---|---:|---|
| UPDATE | 66 | Existing files changed in the Free working copy. |
| KEEP / SHARED | 110 | Existing files retained byte-for-byte. |
| NEW | 5 | New implementation files required for Free. |
| EXCLUDE from Free | 407 | Source files outside the agreed Free scope or dependencies of excluded Pro features. |

**Important:** EXCLUDE means absent from the separate Free distribution. It does not mean deleted from Spider Pro.

## 4. UPDATED files

### Architecture and configuration

- `config/settings_data.json` - Removed old Pro section-instance state and retained only settings exposed in Free.
- `config/settings_schema.json` - Reduced global settings to basic Free colors, fonts, buttons, layout, product cards, cart, performance, accessibility, SEO and social.
- `layout/password.liquid` - Simplified password layout and removed premium interaction dependencies.
- `layout/theme.liquid` - Rebuilt the global storefront layout and loads only Free shared assets.
- `sections/announcement-bar.liquid` - Simplified to one message and optional link.
- `sections/cart-drawer.liquid` - Rebuilt as a basic Shopify Ajax cart drawer.
- `sections/collection-list.liquid` - Reduced to one collection card style with essential settings and editable blocks.
- `sections/featured-collection.liquid` - Rebuilt to use the Free product card and a simple grid/carousel layout.
- `sections/footer-group.json` - Rebuilt the footer group around the Free footer blocks.
- `sections/footer.liquid` - Rebuilt with Brand, Menu, Newsletter, Text and Social blocks.
- `sections/header-group.json` - Rebuilt the header section group around the Free announcement bar and header.
- `sections/header.liquid` - Rebuilt as logo, standard navigation, mobile menu, search/account/cart links.
- `sections/main-404.liquid` - Rebuilt as a minimal accessible 404 page.
- `sections/main-cart.liquid` - Rebuilt with native cart form, quantity updates, removal and checkout.
- `sections/main-collection.liquid` - Rebuilt with native Shopify filters, sorting, pagination and the Free product card.
- `sections/main-password.liquid` - Removed a reference image whose asset was missing from the uploaded source.
- `sections/main-product.liquid` - Rebuilt with media gallery, variant picker, quantity, price, availability and add-to-cart.
- `sections/main-search.liquid` - Rebuilt with native Shopify search and paginated product/article/page results.
- `sections/sp-product-carousel.liquid` - Rebuilt as a simple horizontal product carousel using the Free card.
- `sections/sp-product-grid.liquid` - Rebuilt to use a manual product list and the Free product card.
- `sections/sp-product-hero.liquid` - Rebuilt as a simple product feature / hero section.
- `sections/sp-product-recommendations.liquid` - Rebuilt using Shopify's product recommendations endpoint and Free card.
- `sections/system-group.json` - Rebuilt the system group around the Free cart drawer.

### Shared snippets

- `snippets/global-settings-classes.liquid` - Reduced body classes to basic layout and accessibility.
- `snippets/global-settings-css.liquid` - Reduced CSS tokens to the basic Spider Free design system.
- `snippets/global-settings-json.liquid` - Exposes only basic cart and lazy-image settings.
- `snippets/product-card.liquid` - Replaced advanced product card markup with one lightweight default card.

### Assets

- `assets/sp-announcement-bar.css` - Added minimal announcement bar styles.
- `assets/sp-cart-drawer.css` - Replaced advanced cart drawer styles with accessible basic drawer styling.
- `assets/sp-content-sections.css` - Added the single-style Free collection list presentation.
- `assets/sp-featured-collection.css` - Updated to support the Free component architecture.
- `assets/sp-footer.css` - Replaced premium footer presentation with basic responsive footer styles.
- `assets/sp-footer.js` - Added simple mobile footer accordion behavior.
- `assets/sp-global-forms.css` - Added focus and input styles for the Free product, cart, search, footer and newsletter forms.
- `assets/sp-header.css` - Replaced advanced header styling with a lightweight responsive header.
- `assets/sp-header.js` - Added basic mobile navigation lifecycle handling.
- `assets/sp-main-404.css` - Updated to support the Free component architecture.
- `assets/sp-main-cart.css` - Updated to support the Free component architecture.
- `assets/sp-main-collection.css` - Updated to support the Free component architecture.
- `assets/sp-main-product.css` - Updated to support the Free component architecture.
- `assets/sp-main-search.css` - Updated to support the Free component architecture.
- `assets/sp-product-card.css` - Replaced advanced product card styling with one Free card design.
- `assets/sp-product-carousel.css` - Updated to support the Free component architecture.
- `assets/sp-product-grid.css` - Updated to support the Free component architecture.
- `assets/sp-product-hero.css` - Updated to support the Free component architecture.
- `assets/sp-product-recommendations.css` - Updated to support the Free component architecture.
- `assets/sp-product-recommendations.js` - Updated to support the Free component architecture.

### Complete updated path list

- `assets/sp-announcement-bar.css`
- `assets/sp-cart-drawer.css`
- `assets/sp-content-sections.css`
- `assets/sp-featured-collection.css`
- `assets/sp-footer.css`
- `assets/sp-footer.js`
- `assets/sp-global-forms.css`
- `assets/sp-header.css`
- `assets/sp-header.js`
- `assets/sp-main-404.css`
- `assets/sp-main-cart.css`
- `assets/sp-main-collection.css`
- `assets/sp-main-product.css`
- `assets/sp-main-search.css`
- `assets/sp-product-card.css`
- `assets/sp-product-carousel.css`
- `assets/sp-product-grid.css`
- `assets/sp-product-hero.css`
- `assets/sp-product-recommendations.css`
- `assets/sp-product-recommendations.js`
- `config/settings_data.json`
- `config/settings_schema.json`
- `layout/password.liquid`
- `layout/theme.liquid`
- `sections/announcement-bar.liquid`
- `sections/cart-drawer.liquid`
- `sections/collection-list.liquid`
- `sections/featured-collection.liquid`
- `sections/footer-group.json`
- `sections/footer.liquid`
- `sections/header-group.json`
- `sections/header.liquid`
- `sections/main-404.liquid`
- `sections/main-cart.liquid`
- `sections/main-collection.liquid`
- `sections/main-password.liquid`
- `sections/main-product.liquid`
- `sections/main-search.liquid`
- `sections/sp-product-carousel.liquid`
- `sections/sp-product-grid.liquid`
- `sections/sp-product-hero.liquid`
- `sections/sp-product-recommendations.liquid`
- `sections/system-group.json`
- `snippets/global-settings-classes.liquid`
- `snippets/global-settings-css.liquid`
- `snippets/global-settings-json.liquid`
- `snippets/product-card.liquid`
- `templates/404.json`
- `templates/article.json`
- `templates/blog.json`
- `templates/cart.json`
- `templates/collection.json`
- `templates/customers/account.json`
- `templates/customers/activate_account.json`
- `templates/customers/addresses.json`
- `templates/customers/login.json`
- `templates/customers/order.json`
- `templates/customers/register.json`
- `templates/customers/reset_password.json`
- `templates/index.json`
- `templates/list-collections.json`
- `templates/page.contact.json`
- `templates/page.json`
- `templates/password.json`
- `templates/product.json`
- `templates/search.json`

## 5. NEW implementation files

- `assets/sp-free-commerce.js` - Shared Ajax cart, drawer, quantity, variant price/availability and gallery behavior.
- `assets/sp-newsletter.css` - Styles for the new standalone Newsletter section.
- `assets/sp-rich-text.css` - Styles for the new Rich Text section.
- `sections/sp-newsletter.liquid` - Standalone Shopify customer/newsletter form section.
- `sections/sp-rich-text.liquid` - Standalone editable Rich Text section.

## 6. KEPT unchanged / shared files

These files are retained byte-for-byte from the uploaded source. They are referenced by Free templates/sections or remain required shared theme resources.

- `assets/sp-article-card.css`
- `assets/sp-base.css`
- `assets/sp-collection-banner.css`
- `assets/sp-collection-showcase.css`
- `assets/sp-collection-showcase.js`
- `assets/sp-components.css`
- `assets/sp-customer-account.css`
- `assets/sp-customer-account.js`
- `assets/sp-faq-accordion.css`
- `assets/sp-faq-accordion.js`
- `assets/sp-featured-blog-posts.css`
- `assets/sp-featured-blog-posts.js`
- `assets/sp-gift-card.css`
- `assets/sp-gift-card.js`
- `assets/sp-hero-banner.css`
- `assets/sp-hero-video.css`
- `assets/sp-hero-video.js`
- `assets/sp-logo-list.css`
- `assets/sp-logo-list.js`
- `assets/sp-main-blog.css`
- `assets/sp-main-blog.js`
- `assets/sp-main-contact.css`
- `assets/sp-main-list-collections.css`
- `assets/sp-main-password.css`
- `assets/sp-main-password.js`
- `assets/sp-reset.css`
- `assets/sp-section-heading.css`
- `assets/sp-slideshow.css`
- `assets/sp-slideshow.js`
- `assets/sp-split-hero.css`
- `assets/sp-split-hero.js`
- `assets/sp-testimonials-reviews.css`
- `assets/sp-testimonials-reviews.js`
- `layout/gift_card.liquid`
- `locales/ar.json`
- `locales/bn.json`
- `locales/de.json`
- `locales/en.default.json`
- `locales/en.default.schema.json`
- `locales/es.json`
- `locales/fr.json`
- `locales/it.json`
- `locales/ja.json`
- `locales/ko.json`
- `locales/pt-BR.json`
- `sections/apps.liquid`
- `sections/custom-liquid.liquid`
- `sections/hero-video.liquid`
- `sections/main-account.liquid`
- `sections/main-activate-account.liquid`
- `sections/main-addresses.liquid`
- `sections/main-article.liquid`
- `sections/main-blog.liquid`
- `sections/main-contact.liquid`
- `sections/main-list-collections.liquid`
- `sections/main-login.liquid`
- `sections/main-order.liquid`
- `sections/main-page.liquid`
- `sections/main-register.liquid`
- `sections/main-reset-password.liquid`
- `sections/sp-collection-banner.liquid`
- `sections/sp-collection-showcase.liquid`
- `sections/sp-cta-banner.liquid`
- `sections/sp-faq-accordion.liquid`
- `sections/sp-feature-cards.liquid`
- `sections/sp-featured-blog-posts.liquid`
- `sections/sp-hero-banner.liquid`
- `sections/sp-image-with-features.liquid`
- `sections/sp-logo-list.liquid`
- `sections/sp-page-intro.liquid`
- `sections/sp-slideshow.liquid`
- `sections/sp-split-hero.liquid`
- `sections/sp-stats-highlights.liquid`
- `sections/sp-story-with-image.liquid`
- `sections/sp-testimonials-reviews.liquid`
- `sections/sp-values-grid.liquid`
- `snippets/button.liquid`
- `snippets/collection-card.liquid`
- `snippets/icon.liquid`
- `snippets/meta-tags.liquid`
- `snippets/pagination.liquid`
- `snippets/placeholder-image.liquid`
- `snippets/responsive-image.liquid`
- `snippets/skip-link.liquid`
- `snippets/social-links.liquid`
- `snippets/social-meta.liquid`
- `snippets/sp-account-address-card.liquid`
- `snippets/sp-account-address-fields.liquid`
- `snippets/sp-account-empty-state.liquid`
- `snippets/sp-account-form-field.liquid`
- `snippets/sp-account-icon.liquid`
- `snippets/sp-account-nav.liquid`
- `snippets/sp-account-order-card.liquid`
- `snippets/sp-account-status-badge.liquid`
- `snippets/sp-article-card.liquid`
- `snippets/sp-contact-icon.liquid`
- `snippets/sp-content-icon.liquid`
- `snippets/sp-featured-blog-card.liquid`
- `snippets/sp-gift-card-content.liquid`
- `snippets/sp-hero-video-buttons.liquid`
- `snippets/sp-hero-video-content.liquid`
- `snippets/sp-hero-video-media.liquid`
- `snippets/sp-hero-video-placeholder.liquid`
- `snippets/sp-logo-item.liquid`
- `snippets/sp-password-icon.liquid`
- `snippets/sp-section-color-scheme.liquid`
- `snippets/sp-section-heading.liquid`
- `snippets/sp-testimonial-card.liquid`
- `snippets/structured-data.liquid`
- `templates/gift_card.liquid`

## 7. EXCLUDED from the Free distribution

All excluded paths below remain in the original Premium source archive. They were not deleted from Spider Pro.

### Sections - 61 files

- `sections/age-verification.liquid`
- `sections/back-to-top.liquid`
- `sections/collections-grid-tabs.liquid`
- `sections/cookies.liquid`
- `sections/exit-popup.liquid`
- `sections/footer-newsletter.liquid`
- `sections/newsletter-popup.liquid`
- `sections/predictive-search.liquid`
- `sections/search-modal.liquid`
- `sections/shop-protect.liquid`
- `sections/snow-effect.liquid`
- `sections/sp-before-after-slider.liquid`
- `sections/sp-certifications-product-badges.liquid`
- `sections/sp-collection-mosaic.liquid`
- `sections/sp-collection-spotlight.liquid`
- `sections/sp-compare-product-data.liquid`
- `sections/sp-countdown-campaign-banner.liquid`
- `sections/sp-featured-product.liquid`
- `sections/sp-gift-guide.liquid`
- `sections/sp-interactive-quiz.liquid`
- `sections/sp-order-tracking.liquid`
- `sections/sp-product-bundle.liquid`
- `sections/sp-product-comparison.liquid`
- `sections/sp-product-hotspots.liquid`
- `sections/sp-product-information-tabs.liquid`
- `sections/sp-product-registration-form.liquid`
- `sections/sp-product-showcase.liquid`
- `sections/sp-product-specifications-table.liquid`
- `sections/sp-promotional-banner-cards.liquid`
- `sections/sp-recently-purchased.liquid`
- `sections/sp-recently-viewed-products.liquid`
- `sections/sp-retail-locations.liquid`
- `sections/sp-rv-card-07.liquid`
- `sections/sp-rv-card-1.liquid`
- `sections/sp-rv-card-10.liquid`
- `sections/sp-rv-card-11.liquid`
- `sections/sp-rv-card-12.liquid`
- `sections/sp-rv-card-13.liquid`
- `sections/sp-rv-card-14.liquid`
- `sections/sp-rv-card-15.liquid`
- `sections/sp-rv-card-16.liquid`
- `sections/sp-rv-card-2.liquid`
- `sections/sp-rv-card-3.liquid`
- `sections/sp-rv-card-4.liquid`
- `sections/sp-rv-card-5.liquid`
- `sections/sp-rv-card-6.liquid`
- `sections/sp-rv-card-7.liquid`
- `sections/sp-rv-card-8.liquid`
- `sections/sp-rv-card-9.liquid`
- `sections/sp-rv-card-global.liquid`
- `sections/sp-scrolling-marquee.liquid`
- `sections/sp-search-modal-predictive.liquid`
- `sections/sp-shoppable-video.liquid`
- `sections/sp-size-guide-fit-finder.liquid`
- `sections/sp-social-gallery.liquid`
- `sections/sp-video-testimonials.liquid`
- `sections/sp-wholesale-b2b-cta.liquid`
- `sections/sp-wholesale-inquiry-form.liquid`
- `sections/spacer.liquid`
- `sections/toolbar-mobile.liquid`
- `sections/wishlist.liquid`

### Snippets - 191 files

- `snippets/accordion.liquid`
- `snippets/active-facets.liquid`
- `snippets/cart-discounts.liquid`
- `snippets/cart-icon-bubble.liquid`
- `snippets/cart-item.liquid`
- `snippets/cart-summary.liquid`
- `snippets/cart-upsells.liquid`
- `snippets/checkbox.liquid`
- `snippets/container.liquid`
- `snippets/custom-code.liquid`
- `snippets/drawer.liquid`
- `snippets/empty-state.liquid`
- `snippets/facets.liquid`
- `snippets/icon-button.liquid`
- `snippets/input.liquid`
- `snippets/inventory-status.liquid`
- `snippets/loading-spinner.liquid`
- `snippets/localization-form.liquid`
- `snippets/modal.liquid`
- `snippets/pickup-availability.liquid`
- `snippets/product-extras.liquid`
- `snippets/product-form.liquid`
- `snippets/product-media-gallery.liquid`
- `snippets/product-media.liquid`
- `snippets/product-price.liquid`
- `snippets/quantity-input.liquid`
- `snippets/radio.liquid`
- `snippets/search-empty-state.liquid`
- `snippets/search-result-card.liquid`
- `snippets/section-spacing.liquid`
- `snippets/select.liquid`
- `snippets/selling-plan-selector.liquid`
- `snippets/shipping-progress.liquid`
- `snippets/sort-by.liquid`
- `snippets/sp-active-filters.liquid`
- `snippets/sp-age-verification-content.liquid`
- `snippets/sp-age-verification-dob.liquid`
- `snippets/sp-age-verification-icon.liquid`
- `snippets/sp-age-verification-media.liquid`
- `snippets/sp-announcement-close.liquid`
- `snippets/sp-announcement-countdown.liquid`
- `snippets/sp-announcement-item.liquid`
- `snippets/sp-announcement-marquee.liquid`
- `snippets/sp-announcement-slider.liquid`
- `snippets/sp-back-to-top-icon.liquid`
- `snippets/sp-before-after-benefit.liquid`
- `snippets/sp-before-after-comparison.liquid`
- `snippets/sp-cart-drawer-complementary.liquid`
- `snippets/sp-cart-drawer-discount.liquid`
- `snippets/sp-cart-drawer-empty.liquid`
- `snippets/sp-cart-drawer-gift-wrap.liquid`
- `snippets/sp-cart-drawer-item.liquid`
- `snippets/sp-cart-drawer-items.liquid`
- `snippets/sp-cart-drawer-note.liquid`
- `snippets/sp-cart-drawer-shipping-bar.liquid`
- `snippets/sp-cart-drawer-shipping-estimator.liquid`
- `snippets/sp-cart-drawer-summary.liquid`
- `snippets/sp-cart-drawer-tools.liquid`
- `snippets/sp-cart-drawer-trust.liquid`
- `snippets/sp-cart-shipping-calculator.liquid`
- `snippets/sp-certification-badge-card.liquid`
- `snippets/sp-collection-filters.liquid`
- `snippets/sp-collection-header.liquid`
- `snippets/sp-collection-pagination.liquid`
- `snippets/sp-collection-toolbar.liquid`
- `snippets/sp-collections-grid-tabs-carousel-controls.liquid`
- `snippets/sp-collections-grid-tabs-empty.liquid`
- `snippets/sp-collections-grid-tabs-pagination.liquid`
- `snippets/sp-collections-grid-tabs-product-card.liquid`
- `snippets/sp-collections-grid-tabs-products.liquid`
- `snippets/sp-commerce-close-button.liquid`
- `snippets/sp-cookies-actions.liquid`
- `snippets/sp-cookies-content.liquid`
- `snippets/sp-cookies-preferences.liquid`
- `snippets/sp-countdown-icon.liquid`
- `snippets/sp-countdown-timer.liquid`
- `snippets/sp-exit-popup-benefits.liquid`
- `snippets/sp-exit-popup-content.liquid`
- `snippets/sp-exit-popup-discount.liquid`
- `snippets/sp-exit-popup-media.liquid`
- `snippets/sp-exit-popup-newsletter.liquid`
- `snippets/sp-exit-popup-product-card.liquid`
- `snippets/sp-exit-popup-products.liquid`
- `snippets/sp-featured-carousel-controls.liquid`
- `snippets/sp-featured-empty.liquid`
- `snippets/sp-featured-pagination.liquid`
- `snippets/sp-featured-product-card.liquid`
- `snippets/sp-featured-products.liquid`
- `snippets/sp-fit-finder-form.liquid`
- `snippets/sp-fit-illustration.liquid`
- `snippets/sp-fit-instructions.liquid`
- `snippets/sp-fit-unit-toggle.liquid`
- `snippets/sp-footer-accordion.liquid`
- `snippets/sp-footer-icon.liquid`
- `snippets/sp-footer-localization-form.liquid`
- `snippets/sp-footer-newsletter-form.liquid`
- `snippets/sp-gift-guide-card.liquid`
- `snippets/sp-global-loader.liquid`
- `snippets/sp-header-actions.liquid`
- `snippets/sp-header-badge.liquid`
- `snippets/sp-header-localization.liquid`
- `snippets/sp-header-logo.liquid`
- `snippets/sp-header-mega-menu.liquid`
- `snippets/sp-header-mobile-drawer.liquid`
- `snippets/sp-header-mobile-help.liquid`
- `snippets/sp-header-mobile-nav.liquid`
- `snippets/sp-header-mobile-utilities.liquid`
- `snippets/sp-header-mobile.liquid`
- `snippets/sp-header-nav.liquid`
- `snippets/sp-header-search-drawer.liquid`
- `snippets/sp-header-search-empty.liquid`
- `snippets/sp-header-search-results.liquid`
- `snippets/sp-header-topbar.liquid`
- `snippets/sp-header-wishlist.liquid`
- `snippets/sp-hero-buttons.liquid`
- `snippets/sp-hero-content.liquid`
- `snippets/sp-hero-image-video-modal.liquid`
- `snippets/sp-hero-media.liquid`
- `snippets/sp-interactive-quiz-icons.liquid`
- `snippets/sp-marquee-item.liquid`
- `snippets/sp-newsletter-popup-benefits.liquid`
- `snippets/sp-newsletter-popup-close.liquid`
- `snippets/sp-newsletter-popup-content.liquid`
- `snippets/sp-newsletter-popup-form.liquid`
- `snippets/sp-newsletter-popup-image.liquid`
- `snippets/sp-newsletter-popup-trigger.liquid`
- `snippets/sp-premium-cart-progress.liquid`
- `snippets/sp-premium-footer-icon.liquid`
- `snippets/sp-product-advanced-block.liquid`
- `snippets/sp-product-badges.liquid`
- `snippets/sp-product-bundle-icon.liquid`
- `snippets/sp-product-bundle-item.liquid`
- `snippets/sp-product-card-actions.liquid`
- `snippets/sp-product-card-info.liquid`
- `snippets/sp-product-card-media.liquid`
- `snippets/sp-product-card-swatches.liquid`
- `snippets/sp-product-card.liquid`
- `snippets/sp-product-commerce-ui.liquid`
- `snippets/sp-product-compare.liquid`
- `snippets/sp-product-comparison-icon.liquid`
- `snippets/sp-product-comparison-product.liquid`
- `snippets/sp-product-comparison-value.liquid`
- `snippets/sp-product-feature-icon.liquid`
- `snippets/sp-product-hotspots-product.liquid`
- `snippets/sp-product-information-tab-content.liquid`
- `snippets/sp-product-price.liquid`
- `snippets/sp-product-quick-add.liquid`
- `snippets/sp-product-quick-view.liquid`
- `snippets/sp-product-system-global.liquid`
- `snippets/sp-promotional-banner-card.liquid`
- `snippets/sp-recent-purchase-card.liquid`
- `snippets/sp-recently-viewed-card-renderer.liquid`
- `snippets/sp-recently-viewed-global.liquid`
- `snippets/sp-retail-location-card.liquid`
- `snippets/sp-retail-location-map.liquid`
- `snippets/sp-search-active-filters.liquid`
- `snippets/sp-search-article-card.liquid`
- `snippets/sp-search-facets.liquid`
- `snippets/sp-search-form.liquid`
- `snippets/sp-search-page-card.liquid`
- `snippets/sp-search-pagination.liquid`
- `snippets/sp-search-sort.liquid`
- `snippets/sp-shoppable-video-icon.liquid`
- `snippets/sp-shoppable-video-product.liquid`
- `snippets/sp-size-guide-table.liquid`
- `snippets/sp-social-gallery-item.liquid`
- `snippets/sp-social-gallery-lightbox.liquid`
- `snippets/sp-specification-row.liquid`
- `snippets/sp-specification-table.liquid`
- `snippets/sp-sticky-add-to-cart.liquid`
- `snippets/sp-toolbar-mobile-count.liquid`
- `snippets/sp-toolbar-mobile-icon.liquid`
- `snippets/sp-toolbar-mobile-item.liquid`
- `snippets/sp-toolbar-mobile-sheets.liquid`
- `snippets/sp-video-testimonial-card.liquid`
- `snippets/sp-wholesale-b2b-form.liquid`
- `snippets/sp-wholesale-b2b-icon.liquid`
- `snippets/sp-wishlist-card-actions.liquid`
- `snippets/sp-wishlist-card-info.liquid`
- `snippets/sp-wishlist-card-media.liquid`
- `snippets/sp-wishlist-card-swatches.liquid`
- `snippets/sp-wishlist-empty.liquid`
- `snippets/sp-wishlist-global.liquid`
- `snippets/sp-wishlist-product-card.liquid`
- `snippets/sp-wishlist-products.liquid`
- `snippets/sp-wishlist-toolbar.liquid`
- `snippets/status-message.liquid`
- `snippets/textarea.liquid`
- `snippets/unit-price.liquid`
- `snippets/variant-picker.liquid`
- `snippets/volume-pricing.liquid`

### Assets - 106 files

- `assets/sp-age-verification.css`
- `assets/sp-age-verification.js`
- `assets/sp-announcement-bar.js`
- `assets/sp-back-to-top.css`
- `assets/sp-back-to-top.js`
- `assets/sp-before-after-slider.css`
- `assets/sp-before-after-slider.js`
- `assets/sp-carousel.css`
- `assets/sp-carousel.js`
- `assets/sp-cart-controller.js`
- `assets/sp-cart-drawer.js`
- `assets/sp-cart-shipping-calculator.js`
- `assets/sp-certifications-product-badges.css`
- `assets/sp-certifications-product-badges.js`
- `assets/sp-collection-mosaic.css`
- `assets/sp-collection-spotlight.css`
- `assets/sp-collection-spotlight.js`
- `assets/sp-collections-grid-tabs.css`
- `assets/sp-collections-grid-tabs.js`
- `assets/sp-commerce.css`
- `assets/sp-cookies.css`
- `assets/sp-cookies.js`
- `assets/sp-core.js`
- `assets/sp-countdown-campaign-banner.css`
- `assets/sp-countdown-campaign-banner.js`
- `assets/sp-drawer.js`
- `assets/sp-exit-popup.css`
- `assets/sp-exit-popup.js`
- `assets/sp-facets.js`
- `assets/sp-featured-collection.js`
- `assets/sp-featured-product.css`
- `assets/sp-featured-product.js`
- `assets/sp-gift-guide.css`
- `assets/sp-gift-guide.js`
- `assets/sp-interactive-quiz.css`
- `assets/sp-interactive-quiz.js`
- `assets/sp-main-search.js`
- `assets/sp-motion.js`
- `assets/sp-newsletter-popup.css`
- `assets/sp-newsletter-popup.js`
- `assets/sp-order-tracking.css`
- `assets/sp-order-tracking.js`
- `assets/sp-page-transition.css`
- `assets/sp-page-transition.js`
- `assets/sp-predictive-search.js`
- `assets/sp-premium-cart.js`
- `assets/sp-premium-interactions.css`
- `assets/sp-product-advanced.js`
- `assets/sp-product-bundle.css`
- `assets/sp-product-bundle.js`
- `assets/sp-product-carousel.js`
- `assets/sp-product-commerce.css`
- `assets/sp-product-commerce.js`
- `assets/sp-product-comparison.css`
- `assets/sp-product-form.js`
- `assets/sp-product-gallery.js`
- `assets/sp-product-hero.js`
- `assets/sp-product-hotspots.css`
- `assets/sp-product-hotspots.js`
- `assets/sp-product-information-tabs.css`
- `assets/sp-product-information-tabs.js`
- `assets/sp-product-registration-form.css`
- `assets/sp-product-registration-form.js`
- `assets/sp-product-showcase.css`
- `assets/sp-product-showcase.js`
- `assets/sp-product-specifications-table.css`
- `assets/sp-product-specifications-table.js`
- `assets/sp-product-tooltips.js`
- `assets/sp-promotional-banner-cards.css`
- `assets/sp-promotional-banner-cards.js`
- `assets/sp-recently-purchased.css`
- `assets/sp-recently-purchased.js`
- `assets/sp-recently-viewed-core.js`
- `assets/sp-recently-viewed-products.css`
- `assets/sp-recently-viewed-products.js`
- `assets/sp-retail-locations.css`
- `assets/sp-retail-locations.js`
- `assets/sp-scrolling-marquee.css`
- `assets/sp-scrolling-marquee.js`
- `assets/sp-search-modal.css`
- `assets/sp-search-modal.js`
- `assets/sp-shop-protect.css`
- `assets/sp-shop-protect.js`
- `assets/sp-shoppable-video.css`
- `assets/sp-shoppable-video.js`
- `assets/sp-size-guide-fit-finder.css`
- `assets/sp-size-guide-fit-finder.js`
- `assets/sp-snow-effect.css`
- `assets/sp-snow-effect.js`
- `assets/sp-social-gallery.css`
- `assets/sp-social-gallery.js`
- `assets/sp-sticky-add-to-cart.css`
- `assets/sp-sticky-add-to-cart.js`
- `assets/sp-theme-editor.js`
- `assets/sp-theme-settings.js`
- `assets/sp-toolbar-mobile.css`
- `assets/sp-toolbar-mobile.js`
- `assets/sp-video-testimonials.css`
- `assets/sp-video-testimonials.js`
- `assets/sp-wholesale-b2b-cta.css`
- `assets/sp-wholesale-b2b-cta.js`
- `assets/sp-wholesale-inquiry-form.css`
- `assets/sp-wholesale-inquiry-form.js`
- `assets/sp-wishlist-core.js`
- `assets/sp-wishlist.css`
- `assets/sp-wishlist.js`

### Templates - 16 files

- `templates/collection.default.json`
- `templates/collection.filter.json`
- `templates/collection.full-width.json`
- `templates/collection.modern.json`
- `templates/collection.sidebar.json`
- `templates/page.about.json`
- `templates/page.compare.json`
- `templates/page.faq.json`
- `templates/page.landing.json`
- `templates/page.lookbook.json`
- `templates/page.wishlist.json`
- `templates/product.default.json`
- `templates/product.full-width.json`
- `templates/product.modern.json`
- `templates/product.quick-view.json`
- `templates/product.sticky-cart.json`

### Theme blocks - 33 files

- `blocks/app-wrapper.liquid`
- `blocks/button.liquid`
- `blocks/divider.liquid`
- `blocks/heading.liquid`
- `blocks/icon.liquid`
- `blocks/image.liquid`
- `blocks/sp-collections-grid-tabs-heading.liquid`
- `blocks/sp-collections-grid-tabs-item.liquid`
- `blocks/sp-collections-grid-tabs-product-grid.liquid`
- `blocks/sp-featured-product-carousel.liquid`
- `blocks/sp-featured-product-grid.liquid`
- `blocks/sp-featured-section-heading.liquid`
- `blocks/sp-footer-custom-liquid.liquid`
- `blocks/sp-premium-footer-benefit.liquid`
- `blocks/sp-premium-footer-benefits.liquid`
- `blocks/sp-premium-footer-brand.liquid`
- `blocks/sp-premium-footer-copyright.liquid`
- `blocks/sp-premium-footer-localization.liquid`
- `blocks/sp-premium-footer-menu.liquid`
- `blocks/sp-premium-footer-newsletter.liquid`
- `blocks/sp-premium-footer-payments.liquid`
- `blocks/sp-premium-footer-social-apps.liquid`
- `blocks/sp-slide-button-group.liquid`
- `blocks/sp-slide-button.liquid`
- `blocks/sp-slide-custom-button.liquid`
- `blocks/sp-slide-custom-html.liquid`
- `blocks/sp-slide-custom-text.liquid`
- `blocks/sp-slide-heading.liquid`
- `blocks/sp-slide-media.liquid`
- `blocks/sp-slide-spacer.liquid`
- `blocks/sp-slide-text.liquid`
- `blocks/spacer.liquid`
- `blocks/text.liquid`

## 8. Duplicate and dependency findings

- **3 exact duplicate groups** were found in the source. These are identical template JSON files:
  - `templates/product.full-width.json`, `templates/product.modern.json`, `templates/product.quick-view.json`, `templates/product.sticky-cart.json`
  - `templates/page.compare.json`, `templates/page.faq.json`, `templates/page.json`, `templates/page.landing.json`, `templates/page.lookbook.json`
  - `templates/collection.default.json`, `templates/collection.filter.json`, `templates/collection.full-width.json`, `templates/collection.modern.json`, `templates/collection.sidebar.json`
- The canonical `templates/product.json`, `templates/page.json` and `templates/collection.json` templates were retained; identical alternate template files were excluded from Free.
- All Free Liquid render/include references were checked recursively. No missing snippet references were found.
- All local `asset_url` references were checked. No missing asset references were found.
- All JSON templates and section-group references were checked against included section files. No unresolved section types were found.
- No Free section contains a Shopify theme-block `content_for 'blocks'` reference; therefore the `blocks/` directory is not required in the Free package.
- No unused snippet was detected in the final Free payload by the static render-reference scan.

## 9. File classification

- **KEEP:** 110 existing files retained unchanged.
- **UPDATE:** 66 existing files changed only in the separate Free working copy.
- **NEW:** 5 new implementation files.
- **EXCLUDE:** 407 source files excluded from Free: 61 sections, 191 snippets, 106 assets, 16 templates and 33 theme blocks.
- **SHARED:** Global color-scheme, image, icon, account, blog, content-section, and form resources retained where used.
- **REVIEW:** Live Shopify behavior still requires a development-store test; no static missing dependency remains.

## 10. Safe-to-exclude decision

The excluded files are not needed by the included Free templates, sections, snippets or section groups according to the static dependency scan. This classification is specific to Spider Free. It is not a recommendation to remove them from Spider Pro.

## 11. Outstanding manual verification

- Upload the ZIP to a Shopify development theme and run Shopify Theme Check.
- Verify Ajax add-to-cart, cart drawer open/close, quantity changes, item removal and checkout navigation.
- Verify product variant changes and product recommendations with real store products.
- Enable storefront filters in Shopify Search & Discovery and test collection filters/sorting.
- Submit contact and newsletter forms and verify store notification/subscriber behavior.
- Test the Theme Editor, all section presets and responsive layouts in a browser.
- Owner must approve an open-source license before public GitHub distribution.

## 12. Final note

This audit is based on the uploaded ZIP and static source analysis. It does not claim that Shopify runtime, checkout, email delivery, Lighthouse, Core Web Vitals or live browser behavior were tested.
