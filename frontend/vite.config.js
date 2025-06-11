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
  // Development server configuration
  server: {
    // Proxy API requests to Django backend during development
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000/', // Django development server URL
        changeOrigin: true, // Change origin to match target
        secure: false, // Allow insecure connections for development
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
