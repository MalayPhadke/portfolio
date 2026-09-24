import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://malayphadke.github.io',
  base: '/portfolio',
  output: 'static',
  integrations: [sitemap()]
});
