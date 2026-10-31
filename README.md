# Spider Free

**Spider Free v1.0.0** is a lightweight Shopify Online Store 2.0 theme derived from the Spider design language. It is a separate product build and does not modify or replace Spider Pro.

## What is included

- Basic global colors, Shopify font pickers, buttons, layout, and color schemes.
- Responsive announcement bar, header, dropdown navigation, mobile menu, and footer.
- Product cards with images, pricing, sale/sold-out badges, basic color swatches, and standard add-to-cart / choose-options behavior.
- Product, collection, cart, search, blog, article, contact, page, 404, password, gift-card, and customer account templates.
- Basic cart drawer, cart page, product variant selector, quantity control, collection filtering and sorting, pagination, and Shopify product recommendations.
- Homepage and content sections: Hero Banner, Slideshow, Split Hero, Collection Hero, Product Hero, Video Hero, Featured Collection, Product Grid, Product Carousel, Collection List, Collection Showcase, Feature Cards, Story with Image, Image with Features, Values Grid, Stats & Highlights, Logo List, Testimonials, Featured Blog Posts, FAQ Accordion, Newsletter, CTA Banner, and Rich Text.

## Intentionally excluded

Spider Free does not include Spider Pro-only systems such as Wishlist, Product Compare, Quick View, Quick Add modal, advanced Mega Menu, sticky add-to-cart, bundles, hotspots, advanced product comparison, advanced information tabs, recently viewed / purchased widgets, promotional popups, interactive quiz, size guide / fit finder, Shop Protect, order tracking, wholesale / B2B, shoppable video, or social gallery.

## Installation

1. Download the complete `spider-free-v1.0.0.zip` release archive.
2. In Shopify Admin, open **Online Store → Themes**.
3. Select **Add theme → Upload zip file**.
4. Upload the ZIP and wait for Shopify to finish processing it.
5. Preview the theme before publishing.
6. Configure the Header, Footer, navigation menus, homepage sections, product cards, and theme settings.

See [`docs/INSTALLATION.md`](docs/INSTALLATION.md) for the full checklist. The source-level audit is in [`Spider-Free-File-Audit.md`](Spider-Free-File-Audit.md), with QA details in [`Spider-Free-QA-Report.md`](Spider-Free-QA-Report.md) and [`Spider-Free-QA-Report.pdf`](Spider-Free-QA-Report.pdf).

## Customization

Open **Customize → Theme settings** to configure:

- Brand and core colors.
- Heading and body fonts.
- H1, H2, and H3 responsive typography.
- Primary and secondary button styles.
- Container width, gutters, section spacing, and basic radii.
- Basic product-card display.
- Cart drawer or cart-page behavior.
- Image loading, accessibility, SEO, and social links.

Add and configure storefront content from **Customize → Add section**. See [`docs/CUSTOMIZATION.md`](docs/CUSTOMIZATION.md).

## Development and validation

This package has undergone source-level validation:

- JSON templates, section-group JSON, and settings schema parsed.
- All 49 section schemas parsed; no duplicate setting IDs or invalid range definitions found.
- JavaScript files passed `node --check`.
- CSS files parsed with `tinycss2`; no parser errors found.
- Local snippet and asset references were checked; no missing references found.
- All template and section-group section types resolve to included section files.

**Live Shopify verification has not been completed.** Shopify CLI / Theme Check and an authorized development store were not available in the build environment. Before publishing, upload to a development theme and complete the functional checklist in `Spider-Free-QA-Report.md`.

## License

No open-source license is assigned in this release candidate. The theme owner must approve a license before public GitHub distribution. See [`LICENSE-DECISION.md`](LICENSE-DECISION.md). Do not assume that public availability grants permission to reuse, modify, or redistribute the source.

## Project structure

```text
assets/
config/
layout/
locales/
sections/
snippets/
templates/
docs/
README.md
CHANGELOG.md
LICENSE-DECISION.md
Spider-Free-File-Audit.md
Spider-Free-QA-Report.md
```

Spider Free is maintained separately from Spider Pro. Pro source code and Git history are not included in this package.
