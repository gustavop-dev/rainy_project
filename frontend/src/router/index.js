/**
 * Vue Router Configuration
 * Defines application routes and navigation behavior
 * 
 * @fileoverview Vue Router setup with route definitions and history mode
 * @author Rainy Filters Team
 * @since 1.0.0
 */

import { createRouter, createWebHistory } from 'vue-router'

/**
 * Application route definitions
 * Each route maps a URL path to a Vue component
 * 
 * @type {Array<Object>} Route configuration objects
 */
const routes = [
  {
    path: '/', // Root path
    component: () => import('@/views/Home.vue'), // Lazy-loaded Home component
  },
]

/**
 * Router instance with HTML5 history mode
 * Uses createWebHistory for clean URLs without hash fragments
 * 
 * @type {Router} Vue Router instance
 */
const router = createRouter({
  history: createWebHistory(), // HTML5 history mode for clean URLs
  routes, // Route definitions array
})

export default router