// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sentry from '@sentry/astro';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

const port = 4321;

// https://astro.build/config
export default defineConfig({
  server: { port: port, host: true },
  adapter: node({
    mode: 'standalone',
  }),
  output: 'server',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    esbuild: { jsx: 'automatic', jsxImportSource: 'react' },
  },
});