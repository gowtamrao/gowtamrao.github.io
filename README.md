# RaoWeb — personal site & blog

My personal website: a bio on the home page, plus posts grouped by the topics I find interesting.
Built with [Astro](https://astro.build), deployed to GitHub Pages.

**Live:** https://gowtamrao.github.io/RaoWeb/

## Features
- Animated home page: interactive constellation background, floating gradient blobs, typewriter headline
- Topic cards with 3D tilt + cursor spotlight, reveal-on-scroll animations, smooth page transitions
- Topics dropdown in the nav, per-topic pages, post archive, older/newer navigation, table of contents
- Light / dark mode, mobile menu, RSS feed, sitemap
- Respects the "reduce motion" accessibility setting

## Writing
| I want to… | Edit |
|---|---|
| Change my bio, links, skills | `src/data/site.ts` |
| Add / rename a topic | `topics` in `src/data/site.ts` |
| Write a post | add a `.md` file to `src/content/posts/` |

Post front-matter:

```md
---
title: 'My post title'
description: 'One-line summary shown in lists'
date: 2026-11-09
topic: ai            # a slug from src/data/site.ts
tags: ['llm']
draft: false         # true = only visible in local dev
---
```

Push to `main` and the GitHub Action rebuilds and publishes the site (~1 min).

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321/RaoWeb/
```
