// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Hosted on GitHub Pages at https://gowtamrao.github.io/NivasWeb
// If you move to a custom domain, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://gowtamrao.github.io',
  base: '/NivasWeb',
  integrations: [sitemap()],
});
