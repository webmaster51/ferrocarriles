import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ferrocarriles.clinicaemcosalud.com',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
