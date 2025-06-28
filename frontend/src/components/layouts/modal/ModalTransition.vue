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
 * Además gestiona el bloqueo/desbloqueo del scroll del documento
 */

import { fadeInModal, fadeOutModal } from "@/animations/modalInOut"

// Contador global de modales activos
let activeModals = 0

const disableBodyScroll = () => {
  document.documentElement.style.overflow = "hidden"
}

const enableBodyScroll = () => {
  document.documentElement.style.overflow = ""
}

/**
 * Handles the fade-in animation for modal entrance
 * 
 * @function fadeIn
 * @param {HTMLElement} el - The element being animated
 * @param {Function} done - Callback to signal animation completion
 */
function fadeIn(el, done) {
  // Incrementar contador y deshabilitar scroll si este es el primer modal
  if (++activeModals === 1) {
    disableBodyScroll()
  }

  fadeInModal(el) // Apply GSAP fade-in animation
  done() // Signal Vue that animation is complete
}

/**
 * Handles the fade-out animation for modal exit
 * 
 * @function fadeOut
 * @param {HTMLElement} el - The element being animated
 * @param {Function} done - Callback to signal animation completion
 */
function fadeOut(el, done) {
  // Ejecutar animación y cuando finalice, actualizar contador y restaurar scroll si corresponde
  fadeOutModal(el, () => {
    activeModals = Math.max(0, activeModals - 1)
    if (activeModals === 0) {
      enableBodyScroll()
    }
    done()
  })
}
</script> 