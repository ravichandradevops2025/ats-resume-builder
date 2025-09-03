// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ats-resume-builder/',
  plugins: [
    react(),
    {
      name: 'create-nojekyll',
      writeBundle() {
        require('fs').writeFileSync('dist/.nojekyll', '');
      },
    },
  ],
  build: {
    outDir: 'dist',
  },
});