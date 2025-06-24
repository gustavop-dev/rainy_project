/**
 * Vite configuration file
 * Configures build tool, development server, plugins, and path aliases
 * 
 * @fileoverview Vite build configuration for Vue 3 application
 * @author Rainy Filters Team
 * @since 1.0.0
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'url'

// Vite configuration object
// https://vite.dev/config/
export default defineConfig({
  // Esto hace que tus assets se referencien con /static/frontend/ al inicio
  base: '/static/frontend/',
  
  // Build configuration for production
  build: {
    // Coloca los archivos generados físicamente en ../backend/static/frontend
    // (ojo: es una ruta relativa a donde está tu vite.config.js)
    outDir: '../backend/static/frontend',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpg|jpeg|gif|svg)$/.test(assetInfo.name)) {
            return 'img/[name][extname]';
          }
          if (/\.css$/.test(assetInfo.name)) {
            return 'css/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
      },
    },
  },
  
  // Build plugins
  plugins: [
    vue(), // Vue 3 single file component support
    tailwindcss(), // Tailwind CSS integration
  ],
  
  // Path resolution aliases
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // '@' alias points to src directory
    },
  },
})
