import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',  // Permite conexões externas (por exemplo, de um contêiner)
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',  // URL do backend Slim
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // Remove o prefixo "/api" da chamada antes de passar para o backend
      },
    },
  },
});
