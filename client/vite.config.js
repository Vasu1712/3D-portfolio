import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // .glb isn't a built-in asset type; without this Vite tries to parse the model as JS
  assetsInclude: ['**/*.glb'],
  build: {
    // Same output folder as CRA, so existing deploy settings keep working
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
