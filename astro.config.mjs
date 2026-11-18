import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteUrl } from './src/data/site.ts';

// Static site. The public address lives in src/data/site.ts (siteUrl).
// The sitemap, canonical links and share image all read it from there.
export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
