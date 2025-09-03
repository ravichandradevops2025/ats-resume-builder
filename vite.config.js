// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ats-resume-builder/',  // ← Must be this
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});