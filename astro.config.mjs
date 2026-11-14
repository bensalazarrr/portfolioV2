import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO(deploy): replace with the V2 production URL before going live.
// Left as a reserved example domain on purpose — it must never point at the V1 site.
export default defineConfig({
  site: 'https://portfolio-v2.example.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
