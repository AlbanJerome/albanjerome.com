# albanjerome.com

Personal essay site for Alban Jerome — writing on capital, governance, and cross-border networks.

Built with [Astro](https://astro.build), TypeScript, Tailwind CSS, and Markdown content collections.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Content

- Essays: `src/content/writing/` (current essays in `2026/`, older work in `archive/`)
- Static pages: `src/content/pages/` (`about.md`, `contact.md`, `media.md`)

### Frontmatter (essays)

```yaml
---
title: "Essay title"
date: 2026-02-06
description: "Short excerpt for SEO and listings"
themes:
  - Capital
source: "Substack"
original_url: "https://..."
featured: false
status: current
---
```

## Deployment

GitHub Pages deployment is configured via `.github/workflows/deploy.yml`.

The custom domain `albanjerome.com` is set via `public/CNAME`.

## Migration scripts

- `scripts/extract-content.mjs` — one-time extraction from the legacy Vite bundle
- `scripts/normalize-frontmatter.mjs` — fixes YAML frontmatter in migrated files
- `scripts/generate-legacy-redirects.mjs` — regenerates legacy essay URL redirects

## URL redirects (SEO)

Old React SPA URLs are mapped in `src/data/redirects.ts` (organized in batches) and applied via Astro's `redirects` config in `astro.config.mjs`.

On GitHub Pages, Astro emits static HTML redirect pages (meta refresh + canonical link). Add a new batch object in `src/data/redirects.ts`, spread it into `redirects`, then rebuild.
