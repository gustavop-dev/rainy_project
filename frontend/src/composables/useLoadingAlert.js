/**
 * Loading Alert Composable
 * Vue composable for managing loading alerts and spinners using SweetAlert2
 * 
 * @fileoverview Loading state management with customizable alert dialogs
 * @author Rainy Filters Team
 * @since 1.0.0
 */

import Swal from 'sweetalert2'

/**
 * Loading Alert Composable Hook
 * Provides functions to show/hide loading alerts with various customization options
 * 
 * @function useLoadingAlert
 * @returns {Object} Loading alert management functions
 */
export const useLoadingAlert = () => {
  
  /**
   * Shows a loading alert with spinner
   * Displays a non-dismissible loading dialog to prevent user interaction during async operations
   * 
   * @function showLoadingAlert
   * @param {Object} [options={}] - Configuration options for the loading alert
   * @param {string} [options.title='Loading...'] - Alert title text
   * @param {string} [options.text='Please wait a moment'] - Descriptive text below title
   * @param {string} [options.icon='info'] - SweetAlert2 icon type
   * @param {boolean} [options.allowOutsideClick=false] - Allow closing by clicking outside
   * @param {boolean} [options.allowEscapeKey=false] - Allow closing with ESC key
   * @param {boolean} [options.showConfirmButton=false] - Show confirmation button
   * @example
   * // Basic loading alert
   * showLoadingAlert()
   * 
   * // Custom loading alert
   * showLoadingAlert({
   *   title: 'Uploading...',
   *   text: 'Please wait while we upload your file'
   * })
   */
  const showLoadingAlert = (options = {}) => {
    const {
      title = 'Loading...',
      text = 'Please wait a moment',
      icon = 'info',
      allowOutsideClick = false,
      allowEscapeKey = false,
      showConfirmButton = false
    } = options

    Swal.fire({
      title,
      text,
      icon,
      allowOutsideClick,
      allowEscapeKey,
      showConfirmButton,
      didOpen: () => {
        Swal.showLoading() // Activate the loading spinner
      }
    })
  }

  /**
   * Closes the currently displayed loading alert
   * Should be called when the async operation completes
   * 
   * @function closeLoadingAlert
   * @example
   * // Close loading alert after operation completes
   * try {
   *   showLoadingAlert()
   *   await someAsyncOperation()
   * } finally {
   *   closeLoadingAlert()
   * }
   */
  const closeLoadingAlert = () => {
    Swal.close()
  }

  /**
   * Shows a custom styled loading alert with Tailwind CSS spinner
   * Provides more visual customization than the standard loading alert
   * 
   * @function showCustomLoadingAlert
   * @param {Object} [options={}] - Configuration options for the custom loading alert
   * @param {string} [options.title='Processing...'] - Alert title text
   * @param {string} [options.text='We are processing your request'] - Descriptive text
   * @param {string} [options.background='#fff'] - Background color of the alert
   * @param {string} [options.color='#333'] - Text color
   * @example
   * // Show custom loading with branded colors
   * showCustomLoadingAlert({
   *   title: 'Submitting Form...',
   *   text: 'Please wait while we process your information',
   *   background: '#f3f4f6',
   *   color: '#1f2937'
   * })
   */
  const showCustomLoadingAlert = (options = {}) => {
    const {
      title = 'Processing...',
      text = 'We are processing your request',
      background = '#fff',
      color = '#333'
    } = options

    Swal.fire({
      title,
      text,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      background,
      color,
      html: `
        <div class="flex flex-col items-center">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
          <p class="text-gray-600">${text}</p>
        </div>
      `,
      customClass: {
        popup: 'rounded-lg shadow-xl'
      }
    })
  }

  // Return composable interface
  return {
    showLoadingAlert,
    closeLoadingAlert,
    showCustomLoadingAlert
  }
} 