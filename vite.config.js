import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ats-resume-builder/',  // Critical for GitHub Pages subpath
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});