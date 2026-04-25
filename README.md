# Mulher 360

Static landing pages for the **Mulher 360** brand, created by nutritionist **Dr. Luciana Teixeira**. This project brings together the brand’s institutional presence, the ebook catalog, and individual landing pages for each digital product, with a strong focus on clarity, performance, and conversion.

The site communicates the Mulher 360 method through an integrative approach centered on women’s health, connecting nutrition, self-care, emotional balance, and practical content for everyday life.

## Overview

This version of the project was built to centralize, in a single static codebase:

- the main Mulher 360 landing page
- the ebook catalog
- individual landing pages for each ebook
- a basic SEO and sharing structure

The goal is to keep the implementation easy to maintain, fast to load, and simple to deploy on any static hosting platform.

## Stack

- Astro 5
- Tailwind CSS 3
- `@astrojs/tailwind`
- `@astrojs/sitemap`

## Project Structure

```text
src/
├── components/
│   ├── EbookLandingPage.astro
│   ├── SiteFooter.astro
│   └── SiteHeader.astro
├── data/
│   └── ebooks.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   └── ebooks/
│       ├── index.astro
│       └── [slug].astro
└── styles/
    └── global.css

public/
├── avatars/
├── images/
└── favicon.svg
```

## Pages

- `/`
  Main institutional Mulher 360 landing page.
- `/ebooks`
  Catalog of available digital products.
- `/ebooks/[slug]`
  Individual ebook landing page, generated dynamically from `src/data/ebooks.ts`.

## Data Source

Ebooks are defined in [src/data/ebooks.ts](src/data/ebooks.ts).

Each item includes:

- slug
- SEO metadata
- catalog description
- pricing
- checkout URL
- landing page content
- offer blocks
- product FAQ

When a new ebook is added correctly to this file, its corresponding dynamic route is automatically generated during the build.

## Shared Components

- [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)
  Base HTML structure, metadata, canonical URL, Open Graph tags, and global integrations.
- [src/components/SiteHeader.astro](src/components/SiteHeader.astro)
  Shared header with the main navigation.
- [src/components/SiteFooter.astro](src/components/SiteFooter.astro)
  Shared footer used across pages.
- [src/components/EbookLandingPage.astro](src/components/EbookLandingPage.astro)
  Reusable template for individual ebook pages.

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## SEO and Static Generation

The project uses:

- `site` configured as `https://mulher360.com.br`
- static output with `output: "static"`
- automatic sitemap generation
- basic metadata for SEO and social sharing

Main configuration lives in [astro.config.mjs](astro.config.mjs).

## Institutional Content

The main homepage content currently lives in [src/pages/index.astro](src/pages/index.astro). This works well for the current project size, but if content grows significantly, moving text blocks into dedicated data files or components may be a good next step.

## Deployment

Because the project generates a static build, it can be deployed to platforms such as:

- Vercel
- Netlify
- Cloudflare Pages
- any server capable of hosting the `dist/` directory

## Project Goal

More than a single landing page, this repository acts as the web foundation for Mulher 360: it presents the brand’s positioning, reinforces Dr. Luciana Teixeira’s authorship, and provides a scalable structure for publishing digital products with dedicated sales pages.
