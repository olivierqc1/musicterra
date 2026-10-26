import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// @ts-expect-error -- plugin écrit en JavaScript (scripts/*.mjs), sans types
import genresSplit from './scripts/genres-split-plugin.mjs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), genresSplit()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
