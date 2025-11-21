// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sandiegorentals.com',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // Automatically discovers and includes all pages from src/pages
      // Updates automatically whenever new pages are added
    })
  ],
  build: {
    inlineStylesheets: 'auto'
  }
});