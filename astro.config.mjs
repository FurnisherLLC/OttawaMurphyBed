// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ottawamurphybed.com',
  integrations: [sitemap()],
  output: 'static',
});
