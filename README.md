# Portfolio V2 — Neo-Brutalist

A second portfolio for John Benedict Salazar. Cream stock, thick ink borders,
hard offset shadows, and a bento hero — deliberately loud, with no gradient
washes, glass panels, or stock icons.

Content is real: nine projects taken from the actual repositories, with case
studies written from what those repos do.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

Node 20+ required (built on Node 24).

## Structure

```
src/
├─ content.config.ts          schema for the work collection
├─ content/work/*.md          one file per project
├─ layouts/BaseLayout.astro   head, pill nav, mobile menu, footer, reveal observer
├─ pages/
│  ├─ index.astro             bento hero + work, capability, journey, contact
│  ├─ work/[slug].astro       case study pages
│  └─ 404.astro
└─ styles/global.css          tokens + every component in the design system
```

Profile copy, capability layers, and the journey list are plain arrays at the
top of `src/pages/index.astro`.

## Adding a project

Drop a markdown file into `src/content/work/`. The filename becomes the URL
(`orbit.md` → `/work/orbit/`).

```yaml
---
order: 10
title: Project name
year: "2026"
discipline: web          # web | mobile | systems | concept
frame: wide              # wide | portrait — portrait only affects the case-study image
summary: One sentence for the card.
image: /assets/file.webp
imageAlt: What the image shows.
live: https://example.com     # optional
repo: https://github.com/...  # optional
specs:
  - label: Type
    value: Product
stack:
  - React
---

## First section

Body copy in markdown.
```

Images go in `public/assets/`. Card thumbnails are cropped to a uniform 16:10
from the top; the case-study image keeps its own proportions (portrait images
are capped at 360px wide).

## Design notes

- **Tokens** live in the `@theme` block and `:root` of `src/styles/global.css`
  (`--bd` border, `--sh` shadow, `--r` radius). Change those and the whole site
  follows.
- **Type** is Archivo Variable only, self-hosted through Fontsource. Headings
  use weight 900 with tight negative tracking; body sits at 17px / 1.62.
- **Breakpoints**: 560 (nav collapse), 660 (bento 2-up), 900 (nav menu + case
  sidebar), 1000 (bento 3-up).
- **No emoji**, no icon library — arrows and glyphs are text.
- Every interactive element has a visible focus ring and a pressed state.

## Deploy

Static output. On Vercel: framework preset **Astro**, build `npm run build`,
output `dist`. Update `site` in `astro.config.mjs` and the `site` constant in
`BaseLayout.astro` when the domain changes.

## Notes

- Reveal animations use `threshold: 0`. Do not raise it — some sections are
  taller than any viewport and would never reach a ratio.
- All motion is disabled under `prefers-reduced-motion`.
- Checked for horizontal overflow at 320, 390, 820, and 1440px.
