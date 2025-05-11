import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // 👈 essentiel pour les chemins relatifs sur Vercel
  plugins: [react()],
  server: {
    port: 3000
  }
});

