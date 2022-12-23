import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import babelPlugin from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    solidPlugin(),
    babelPlugin()
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      ['@components']: './src/components'
    }
  }
});
