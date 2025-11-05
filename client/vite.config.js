import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // ✅ ensures correct routing and asset paths on Vercel
  base: '/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  server: {
    port: 5173,
    open: true,

    // ✅ keep this proxy for local dev only (Vercel will use its own backend or API routes)
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: 'dist',        // Vercel serves this directory
    assetsDir: 'assets',   // keeps static files organized
  },
});
