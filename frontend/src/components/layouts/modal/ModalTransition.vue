<!--
  Modal Transition Component
  Provides smooth fade-in/fade-out animations for modal dialogs
  
  @component ModalTransition
  @author Rainy Filters Team
  @since 1.0.0
-->

<template>
  <!-- Vue transition wrapper with custom animation hooks -->
  <transition @enter="fadeIn" @leave="fadeOut">
    <!-- Modal backdrop with blur effect -->
    <div
      v-if="$slots.default"
      class="fixed inset-0 z-50 bg-gray-400/40 backdrop-blur-md flex items-center justify-center"
    >
      <!-- Slot for modal content -->
      <slot />
    </div>
  </transition>
</template>

<script setup>
/**
 * Modal Transition Component Script
 * Handles GSAP-based modal animations with Vue transition hooks
 */

import { fadeInModal, fadeOutModal } from "@/animations/modalInOut"

/**
 * Handles the fade-in animation for modal entrance
 * Called by Vue's transition system when element enters
 * 
 * @function fadeIn
 * @param {HTMLElement} el - The element being animated
 * @param {Function} done - Callback to signal animation completion
 */
function fadeIn(el, done) {
  fadeInModal(el) // Apply GSAP fade-in animation
  done() // Signal Vue that animation is complete
}

/**
 * Handles the fade-out animation for modal exit
 * Called by Vue's transition system when element leaves
 * 
 * @function fadeOut
 * @param {HTMLElement} el - The element being animated
 * @param {Function} done - Callback to signal animation completion
 */
function fadeOut(el, done) {
  fadeOutModal(el, done) // Apply GSAP fade-out animation with completion callback
}
</script> 