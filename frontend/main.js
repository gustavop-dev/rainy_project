/**
 * Main application entry point
 * Sets up Vue app with Pinia state management and Vue Router
 * 
 * @fileoverview Application bootstrap and configuration
 * @author Rainy Filters Team
 * @since 1.0.0
 */

import { createApp } from 'vue'
import './styles/tailwind.css'
import App from './App.vue'
import { createPinia } from 'pinia' // Import createPinia - this must be loaded synchronously
import router from './router'
import axios from 'axios'

// Create the Vue application instance
const app = createApp(App)

// Apply Pinia state management first (order matters)
const pinia = createPinia()
app.use(pinia)

// Apply Vue Router for navigation
app.use(router)

// Mount the application to the DOM element with id 'app'
app.mount('#app') 