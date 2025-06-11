<!--
  Navigation Bar Component
  Fixed header with logo and contact modal trigger
  
  @component NavigationBar
  @author Rainy Filters Team
  @since 1.0.0
-->

<template>
  <!-- Fixed navigation bar with backdrop blur -->
  <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
    <!-- Logo section -->
    <div class="flex items-center">
      <img 
        src="@/assets/logo/Rainy_Filter_Logo.webp" 
        alt="Rainy Logo" 
        class="h-16 mr-2" 
      />
    </div>
    
    <!-- Contact button with modal trigger -->
    <button 
      @click="openContactModal"
      class="bg-zinc-800/40 text-white text-lg text-center backdrop-blur-md px-8 py-2 rounded-lg cursor-pointer hover:bg-zinc-800/60 transition-colors duration-200"
    >
      Contacto
    </button>
  </nav>

  <!-- Contact modal component -->
  <ContactModal 
    :isVisible="showContactModal"
    @close="closeContactModal"
  />
</template>

<script setup>
/**
 * Navigation Bar Component Script
 * Manages the contact modal state and provides navigation functionality
 */

import { ref } from 'vue'
import ContactModal from '@/components/layouts/modal/ContactModal.vue'

/**
 * Modal state management
 * Controls the visibility of the contact modal
 */
const showContactModal = ref(false) // Contact modal visibility state

/**
 * Opens the contact modal
 * Sets the modal visibility to true
 * 
 * @function openContactModal
 */
const openContactModal = () => {
  showContactModal.value = true
}

/**
 * Closes the contact modal
 * Sets the modal visibility to false and resets any form state
 * 
 * @function closeContactModal
 */
const closeContactModal = () => {
  showContactModal.value = false
}
</script>
