import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ferrocarriles.clinicaemcosalud.com',
  integrations: [sitemap(), react()],
  // Ya no requerimos la sección vite con el plugin de tailwind aquí
});