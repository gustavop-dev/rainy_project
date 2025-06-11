/**
 * Success Alert Composable
 * Vue composable for managing success and confirmation alerts using SweetAlert2
 * 
 * @fileoverview Success notification management with customizable alert dialogs
 * @author Rainy Filters Team
 * @since 1.0.0
 */

import Swal from 'sweetalert2'

/**
 * Success Alert Composable Hook
 * Provides functions to display various types of success and confirmation alerts
 * 
 * @function useSuccessAlert
 * @returns {Object} Success alert management functions
 */
export const useSuccessAlert = () => {
  
  /**
   * Shows a success alert with customizable options
   * Displays a success message with optional auto-close functionality
   * 
   * @function showSuccessAlert
   * @param {Object} [options={}] - Configuration options for the success alert
   * @param {string} [options.title='Success!'] - Alert title text
   * @param {string} [options.text='Operation completed successfully'] - Descriptive text
   * @param {string} [options.icon='success'] - SweetAlert2 icon type
   * @param {string} [options.confirmButtonText='Got it'] - Confirmation button text
   * @param {string} [options.confirmButtonColor='#10B981'] - Button color (green)
   * @param {number} [options.timer] - Auto-close timer in milliseconds (optional)
   * @param {boolean} [options.showConfirmButton=true] - Show confirmation button
   * @returns {Promise} SweetAlert2 promise with user interaction result
   * @example
   * // Basic success alert
   * await showSuccessAlert()
   * 
   * // Custom success alert with auto-close
   * await showSuccessAlert({
   *   title: 'Form Submitted!',
   *   text: 'Your message has been sent successfully',
   *   timer: 3000
   * })
   */
  const showSuccessAlert = (options = {}) => {
    const {
      title = 'Success!',
      text = 'Operation completed successfully',
      icon = 'success',
      confirmButtonText = 'Got it',
      confirmButtonColor = '#10B981',
      timer,
      showConfirmButton = true
    } = options

    return Swal.fire({
      title,
      text,
      icon,
      confirmButtonText,
      confirmButtonColor,
      timer,
      showConfirmButton,
      customClass: {
        popup: 'rounded-lg shadow-xl',
        confirmButton: 'px-6 py-2 rounded-lg font-medium'
      }
    })
  }

  /**
   * Shows a confirmation alert with check mark
   * Used for confirming that an action has been processed
   * 
   * @function showConfirmAlert
   * @param {Object} [options={}] - Configuration options for the confirmation alert
   * @param {string} [options.title='Confirmed'] - Alert title text
   * @param {string} [options.text='Your request has been processed'] - Descriptive text
   * @param {string} [options.confirmButtonText='Continue'] - Confirmation button text
   * @param {string} [options.confirmButtonColor='#3B82F6'] - Button color (blue)
   * @returns {Promise} SweetAlert2 promise with user interaction result
   * @example
   * // Basic confirmation alert
   * await showConfirmAlert()
   * 
   * // Custom confirmation for specific action
   * await showConfirmAlert({
   *   title: 'Payment Processed',
   *   text: 'Your payment has been successfully processed',
   *   confirmButtonText: 'View Receipt'
   * })
   */
  const showConfirmAlert = (options = {}) => {
    const {
      title = 'Confirmed',
      text = 'Your request has been processed',
      confirmButtonText = 'Continue',
      confirmButtonColor = '#3B82F6'
    } = options

    return Swal.fire({
      title,
      text,
      icon: 'success',
      confirmButtonText,
      confirmButtonColor,
      customClass: {
        popup: 'rounded-lg shadow-xl',
        confirmButton: 'px-6 py-2 rounded-lg font-medium'
      }
    })
  }

  /**
   * Shows a success alert with auto-close functionality
   * Automatically closes after specified time with progress bar
   * 
   * @function showAutoCloseSuccessAlert
   * @param {Object} [options={}] - Configuration options for the auto-close alert
   * @param {string} [options.title='Done!'] - Alert title text
   * @param {string} [options.text='Process completed'] - Descriptive text
   * @param {number} [options.timer=2000] - Auto-close timer in milliseconds
   * @param {boolean} [options.showConfirmButton=false] - Show confirmation button
   * @returns {Promise} SweetAlert2 promise that resolves after timer
   * @example
   * // Quick success notification
   * await showAutoCloseSuccessAlert()
   * 
   * // Custom auto-close with longer duration
   * await showAutoCloseSuccessAlert({
   *   title: 'Saved!',
   *   text: 'Your changes have been saved',
   *   timer: 3000
   * })
   */
  const showAutoCloseSuccessAlert = (options = {}) => {
    const {
      title = 'Done!',
      text = 'Process completed',
      timer = 2000,
      showConfirmButton = false
    } = options

    return Swal.fire({
      title,
      text,
      icon: 'success',
      timer,
      showConfirmButton,
      timerProgressBar: true, // Show countdown progress bar
      customClass: {
        popup: 'rounded-lg shadow-xl'
      }
    })
  }

  /**
   * Shows a custom success alert with HTML content
   * Allows for rich HTML content within the alert dialog
   * 
   * @function showCustomSuccessAlert
   * @param {Object} [options={}] - Configuration options for the custom alert
   * @param {string} options.title - Alert title text
   * @param {string} options.html - Custom HTML content for the alert body
   * @param {string} [options.confirmButtonText='Close'] - Confirmation button text
   * @param {string} [options.confirmButtonColor='#10B981'] - Button color (green)
   * @returns {Promise} SweetAlert2 promise with user interaction result
   * @example
   * // Custom HTML success alert
   * await showCustomSuccessAlert({
   *   title: 'Welcome!',
   *   html: '<p>Thank you for joining us!</p><ul><li>Feature 1</li><li>Feature 2</li></ul>',
   *   confirmButtonText: 'Get Started'
   * })
   */
  const showCustomSuccessAlert = (options = {}) => {
    const {
      title,
      html,
      confirmButtonText = 'Close',
      confirmButtonColor = '#10B981'
    } = options

    return Swal.fire({
      title,
      html,
      icon: 'success',
      confirmButtonText,
      confirmButtonColor,
      customClass: {
        popup: 'rounded-lg shadow-xl',
        confirmButton: 'px-6 py-2 rounded-lg font-medium'
      }
    })
  }

  // Return composable interface
  return {
    showSuccessAlert,
    showConfirmAlert,
    showAutoCloseSuccessAlert,
    showCustomSuccessAlert
  }
} 