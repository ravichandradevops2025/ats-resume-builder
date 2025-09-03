import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',           // explicitly set root
  build: {
    outDir: 'dist',    // output to /dist
  },
});