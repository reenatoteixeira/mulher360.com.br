# Mulher 360

Static landing pages for the Mulher 360 brand, focused on:

- the main institutional clinic page
- the ebook catalog
- individual landing pages for each ebook

The project is structured to deliver a fast, easy-to-maintain, conversion-oriented static website without relying on a backend.

## Purpose

This repository centralizes Mulher 360’s web presence in a single static frontend. The goal is to combine:

- institutional presentation of the main service
- navigation to digital materials
- ebook sales pages with dedicated content
- basic SEO and sitemap generation

## Stack

- Astro 5
- Tailwind CSS 3
- `@astrojs/sitemap`
- static output (`output: "static"`)

## Structure

```text
src/
  components/
    EbookLandingPage.astro
    SiteFooter.astro
    SiteHeader.astro
  data/
    ebooks.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    ebooks/
      index.astro
      [slug].astro
  styles/
    global.css

public/
  avatars/
  images/
  favicon.svg
```

## Pages

- `/`
  Main Mulher 360 landing page.
- `/ebooks`
  Catalog of available ebooks.
- `/ebooks/[slug]`
  Individual ebook landing page, generated from `src/data/ebooks.ts`.

## Data source

Ebooks are defined in `src/data/ebooks.ts`.

This file contains:

- slug
- metadata
- pricing
- checkout CTA
- catalog content
- individual landing page content
- product FAQ

If a new ebook is added correctly to this file, the corresponding dynamic route will be generated automatically.

## Shared components

- `BaseLayout.astro`
  Handles the base HTML structure, meta tags, canonical URL, analytics, and the default social image.
- `SiteHeader.astro`
  Shared header with anchor navigation, scroll-based active state, and a compact mode for specific pages.
- `SiteFooter.astro`
  Shared footer used across the homepage, catalog, and landing pages.
- `EbookLandingPage.astro`
  Template for individual ebook pages.

## Commands

Install dependencies:

```bash
npm install
```

Run in development:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

## SEO and sharing

The project already includes:

- `canonical`
- `description`
- basic Open Graph metadata
- Twitter card metadata
- sitemap generation during build

Important note:

- the current social image uses a simple fallback defined in `BaseLayout.astro`
- if an official share image becomes available, replacing that fallback with a dedicated asset is recommended

## Analytics

The project loads Google Analytics through `gtag` in the base layout and also sends custom events on ebook pages, such as:

- `page_view`
- `scroll`
- `cta_click`
- `checkout_exit`

## Accessibility and behavior

- the header highlights the active section while scrolling
- the testimonials carousel rotates automatically, but respects `prefers-reduced-motion`
- `scroll-behavior: smooth` also respects reduced-motion preferences

## Maintenance

### Update checkout

There is still a placeholder in `src/data/ebooks.ts` with an explicit comment:

```ts
// TODO: Update checkout link with the real URL.
```

Before publishing the ebook, replace `checkoutUrl` with the real checkout URL.

### Update institutional content

Most homepage content currently lives in `src/pages/index.astro`. This is acceptable for the current project size, but any meaningful expansion may justify moving content blocks into data files or additional components.

## Deployment

The project generates a static build, so it can be hosted on any platform that supports static sites, such as:

- Vercel
- Netlify
- Cloudflare Pages
- traditional hosting by publishing the `dist/` directory