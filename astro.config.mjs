// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Hosted on GitHub Pages at https://gowtamrao.github.io
// If you add a custom domain, set `site` to it and add public/CNAME.
export default defineConfig({
  site: 'https://gowtamrao.github.io',
  integrations: [sitemap()],
});
