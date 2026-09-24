# Malay Phadke — Academic Website

A static, academic-first personal website built with Astro and designed for GitHub Pages.

## Local development

Requires Node.js 22.12 or newer (Node 24 LTS is recommended).

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The site is configured for `https://malayphadke.github.io/portfolio/`. Update `site` and `base` in `astro.config.mjs` if the repository or domain changes.

## Content maintenance

- Identity, contact links, status, and navigation: `src/site.config.ts`
- Experience and education: `src/data/experience.ts`
- Publications: `src/data/publications.bib`
- News and selected projects: `src/data/content.ts`
- Visitor map embed: `src/components/VisitorMap.astro`

Missing Google Scholar, GitHub, paper, code, and project URLs are intentionally left blank rather than invented.
