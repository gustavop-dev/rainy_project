/**
 * Contact Store
 * Pinia composable store for managing contact form submissions
 * 
 * @fileoverview Contact form state management with API integration
 * @author Rainy Filters Team
 * @since 1.0.0
 */

import { ref } from 'vue'
import { create_request } from '@/stores/services/request_http'

/**
 * Contact Store Composable
 * Manages contact form submissions and provides loading states
 * 
 * @returns {Object} Store state and actions for contact form handling
 */
export const useContactStore = () => {
  // Reactive state
  const isLoading = ref(false) // Loading state for form submission
  const error = ref(null) // Error message storage

  /**
   * Submits contact form data to the backend API
   * 
   * @async
   * @function submitContactForm
   * @param {Object} formData - Contact form data object
   * @param {string} formData.name - User's full name
   * @param {string} formData.phone - User's phone number
   * @param {string} formData.email - User's email address
   * @param {string} formData.message - User's message/inquiry
   * @param {boolean} formData.acceptPrivacy - Privacy policy acceptance flag
   * @returns {Promise<Object>} API response object with success/error status
   * @returns {boolean} returns.success - Whether the submission was successful
   * @returns {Object} [returns.data] - Response data if successful
   * @returns {string} [returns.error] - Error message if failed
   * @returns {number} returns.status - HTTP status code
   */
  const submitContactForm = async (formData) => {
    isLoading.value = true
    error.value = null

    try {
      // Send POST request to contact endpoint
      const response = await create_request('contact/', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        accept_privacy: formData.acceptPrivacy
      })

      // Return success response
      return {
        success: true,
        data: response.data,
        status: response.status
      }
    } catch (err) {
      // Handle and store error
      error.value = err.response?.data?.message || 'Error submitting form'
      
      // Return error response
      return {
        success: false,
        error: error.value,
        status: err.response?.status || 500
      }
    } finally {
      // Reset loading state regardless of outcome
      isLoading.value = false
    }
  }

  // Return store interface
  return {
    // State
    isLoading,
    error,
    
    // Actions
    submitContactForm
  }
} 