// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import solidJs from '@astrojs/solid-js';

import * as sass from 'sass';

const port = 4321;

// https://astro.build/config
export default defineConfig({
  server: { port: port, host: true },
  adapter: node({
    mode: 'standalone',
  }),
  output: 'server',
  integrations: [
    react({
      include: ['**/*.react.tsx', '**/packages/react/**'],
      exclude: ['**/*.solid.tsx', '**/packages/solid/**'],
    }),
    solidJs({
      include: ['**/*.solid.tsx', '**/packages/solid/**'],
      exclude: ['**/*.react.tsx', '**/packages/react/**'],
    }),
    svelte(),
  ],
  vite: {
    plugins: [tailwindcss()],
    esbuild: { jsx: 'automatic', jsxImportSource: 'react' },
    css: {
      preprocessorOptions: {
        scss: {
          // Resolve `pkg:` imports (govuk-frontend, i.AI frontend) via package exports.
          importers: [new sass.NodePackageImporter()],
        },
      },
      // govuk-frontend ships some legacy media-query syntax LightningCSS can't parse;
      // recover instead of failing the build.
      lightningcss: {
        errorRecovery: true,
      },
    },
  },
});