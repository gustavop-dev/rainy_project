/**
 * Modal Animation Functions
 * GSAP-based animations for modal fade-in and fade-out transitions
 * 
 * @fileoverview Modal animation utilities using GSAP for smooth transitions
 * @author Rainy Filters Team
 * @since 1.0.0
 */

import { gsap } from 'gsap';

/**
 * Handles fade-in animation for modal elements
 * Animates from transparent to fully visible with smooth easing
 * 
 * @function fadeInModal
 * @param {HTMLElement} el - The HTML element to animate
 * @example
 * // Animate modal entrance
 * const modalElement = document.querySelector('.modal')
 * fadeInModal(modalElement)
 */
export function fadeInModal(el) {
  gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' });
}

/**
 * Handles fade-out animation for modal elements
 * Animates from fully visible to transparent with completion callback
 * 
 * @function fadeOutModal
 * @param {HTMLElement} el - The HTML element to animate
 * @param {Function} onComplete - Callback function executed when animation completes
 * @example
 * // Animate modal exit with cleanup
 * const modalElement = document.querySelector('.modal')
 * fadeOutModal(modalElement, () => {
 *   console.log('Modal animation completed')
 *   // Perform cleanup or state updates
 * })
 */
export function fadeOutModal(el, onComplete) {
  gsap.to(el, { opacity: 0, duration: 0.4, ease: 'power2.in', onComplete });
} 