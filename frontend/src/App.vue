<!--
  Main App Component
  Root component that handles global UI elements like WhatsApp floating button
  
  @component App
  @author Rainy Filters Team
  @since 1.0.0
-->

<template>
  <!-- Main router view where page components are rendered -->
  <RouterView />
  
  <!-- WhatsApp Contact Menu -->
  <div 
    v-if="!loading && !showPreloader"
    class="fixed z-50 bottom-12 right-4 flex flex-col items-end"
  >
    <!-- Contact Cards - Shown when menu is open -->
    <Transition
      enter-active-class="transition transform duration-300"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition transform duration-200"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div 
        v-if="isWhatsAppMenuOpen"
        class="mb-4 flex flex-col gap-3"
      >
        <!-- Bogotá Contact -->
        <a
          href="https://wa.me/573103036539"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 bg-white rounded-xl p-3 pr-4 shadow-lg hover:shadow-xl transition-all duration-200 group"
        >
          <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157"/>
            </svg>
          </div>
          <div class="text-left">
            <p class="font-medium text-gray-900">📍 Comercial 1 – Bogotá D.C.</p>
          </div>
        </a>

        <!-- Nacional Contact -->
        <a
          href="https://wa.me/573133375288"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 bg-white rounded-xl p-3 pr-4 shadow-lg hover:shadow-xl transition-all duration-200 group"
        >
          <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157"/>
            </svg>
          </div>
          <div class="text-left">
            <p class="font-medium text-gray-900">🌎 Comercial 2 – Nacional</p>
          </div>
        </a>
      </div>
    </Transition>

    <!-- Toggle Button -->
    <button
      @click="toggleWhatsAppMenu"
      class="w-14 h-14 rounded-full bg-green-500 
            flex items-center justify-center 
            shadow-[0_0_15px_4px_rgba(34,197,94,0.6)]
            cursor-pointer transition-transform duration-300 
            hover:scale-110"
      aria-label="Toggle WhatsApp contact menu"
    >
      <svg v-if="!isWhatsAppMenuOpen"
        class="w-6 h-6 text-white"
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
      >
        <title>WhatsApp</title>
        <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6" />
      </svg>
      <svg v-else
        class="w-7 h-7 text-white"
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</template>

<script setup>
/**
 * App Component Script
 * Manages global application state and floating UI elements
 */

import { ref } from "vue"
import { RouterView } from "vue-router"

// State variables
const loading = ref(false)
const showPreloader = ref(false)
const isWhatsAppMenuOpen = ref(false)

// Toggle WhatsApp menu
const toggleWhatsAppMenu = () => {
  isWhatsAppMenuOpen.value = !isWhatsAppMenuOpen.value
}
</script>