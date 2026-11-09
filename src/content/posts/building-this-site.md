---
title: 'How I built this site'
description: 'Astro, Markdown, a sprinkle of animation and free hosting on GitHub Pages.'
date: 2026-11-07
topic: engineering
tags: ['astro', 'web', 'github-pages']
---

This site is a static website built with [Astro](https://astro.build) and hosted for free on GitHub Pages.

## The stack

| Piece | Choice |
|---|---|
| Framework | Astro |
| Content | Markdown files in the repo |
| Animations | Plain CSS + a small canvas script |
| Hosting | GitHub Pages, deployed by GitHub Actions |

## Writing a post

Every post is just a Markdown file in `src/content/posts/`. I push it to GitHub and a workflow rebuilds and publishes the site in about a minute.

## The animations

- An interactive **constellation** canvas behind the intro that reacts to your cursor
- Floating gradient blobs and a **typewriter** headline
- Cards that **tilt** and glow as you hover them
- Content that **fades in** as you scroll, and smooth **page transitions**

All of it respects the "reduce motion" accessibility setting.

*(This is a sample post — edit or replace it with your own!)*
