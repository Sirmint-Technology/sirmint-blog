import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.sirmint.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
