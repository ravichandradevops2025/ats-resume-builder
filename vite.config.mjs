// vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ats-resume-builder/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});