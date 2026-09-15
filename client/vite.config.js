import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'chunk-react': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          'chunk-three': ['three'],
          'chunk-animation': ['gsap', 'framer-motion', 'canvas-confetti'],
          'chunk-charts': ['recharts'],
          'chunk-icons': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
});
