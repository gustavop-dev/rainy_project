/**
 * HTTP Request Service
 * Provides centralized HTTP request functionality with CSRF protection and error handling
 * 
 * @fileoverview Axios-based HTTP service for API communication with Django backend
 * @author Rainy Filters Team
 * @since 1.0.0
 */

import axios from "axios";

/**
 * Retrieves CSRF token from browser cookies
 * Required for Django CSRF protection on POST, PUT, DELETE requests
 * 
 * @function getCookie
 * @param {string} name - Name of the cookie to retrieve
 * @returns {string|null} Cookie value or null if not found
 */
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

/**
 * Core HTTP request function with CSRF protection
 * Handles all HTTP methods and includes comprehensive error handling
 * 
 * @async
 * @function makeRequest
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {string} url - API endpoint path (without /api/ prefix)
 * @param {Object} [params={}] - Request parameters/body data
 * @param {Object} [config={}] - Additional Axios configuration options
 * @returns {Promise<Object>} Axios response object with data and status
 * @throws {Error} Throws error for unsupported methods or request failures
 */
async function makeRequest(method, url, params = {}, config = {}) {
  // Get CSRF token for Django protection
  const csrfToken = getCookie("csrftoken");
  const headers = {
    "X-CSRFToken": csrfToken,
  };

  try {
    let response;

    // Execute request based on HTTP method
    switch (method) {
      case "GET":
        response = await axios.get(`/api/${url}`, { headers, ...config });
        break;
      case "POST":
        response = await axios.post(`/api/${url}`, params, { headers, ...config });
        break;
      case "PUT":
        response = await axios.put(`/api/${url}`, params, { headers, ...config });
        break;
      case "DELETE":
        response = await axios.delete(`/api/${url}`, { headers, ...config });
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return response;
  } catch (error) {
    // Comprehensive error logging
    console.error("HTTP request failed:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Status code:", error.response.status);
    } else {
      console.error("Request failed without response (network error)");
    }
    throw error;
  }
}

/**
 * Performs GET request with optional response type configuration
 * 
 * @async
 * @function get_request
 * @param {string} url - API endpoint path
 * @param {string} [responseType="json"] - Axios response type (json, blob, text, etc.)
 * @returns {Promise<Object>} Response data and status from endpoint
 * @example
 * // Get products data
 * const response = await get_request('products/')
 * 
 * // Download file as blob
 * const fileResponse = await get_request('download/file.pdf', 'blob')
 */
export async function get_request(url, responseType = "json") {
  return await makeRequest("GET", url, {}, { responseType });
}

/**
 * Performs POST request for creating new resources
 * 
 * @async
 * @function create_request
 * @param {string} url - API endpoint path
 * @param {Object} params - Request body data
 * @returns {Promise<Object>} Response data and status from endpoint
 * @example
 * // Submit contact form
 * const response = await create_request('contact/', {
 *   name: 'John Doe',
 *   email: 'john@example.com',
 *   message: 'Hello'
 * })
 */
export async function create_request(url, params) {
  return await makeRequest("POST", url, params);
}

/**
 * Update request.
 * @param {string} url - Endpoint.
 * @param {object} params - Params.
 * @returns {object} - Data and status from endpoint.
 */
export async function update_request(url, params) {
  return await makeRequest("PUT", url, params);
}

/**
 * Delete request.
 * @param {string} url - Endpoint.
 * @returns {object} - Data and status from endpoint.
 */
export async function delete_request(url) {
  return await makeRequest("DELETE", url);
}

/**
 * Upload file with FormData.
 * Specifically designed for uploading files using FormData.
 * 
 * @param {string} url - Endpoint.
 * @param {FormData} formData - FormData object containing files and other form fields.
 * @returns {object} - Data and status from endpoint.
 */
export async function upload_file_request(url, formData) {
  const csrfToken = getCookie("csrftoken");
  const token = localStorage.getItem("token");
  
  const headers = {
    "X-CSRFToken": csrfToken,
    "Authorization": token ? `Bearer ${token}` : ""
    // Do not set Content-Type header, it will be automatically set with boundary by the browser
  };
  
  try {
    console.log("Uploading file to:", url);
    
    const response = await axios.post(`/api/${url}`, formData, {
      headers,
      // Important for properly handling files in FormData
      transformRequest: [function (data) {
        // Return FormData as is - don't let axios transform it
        return data;
      }]
    });
    
    return response;
  } catch (error) {
    console.error("Error during file upload:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Status code:", error.response.status);
    } else {
      console.error("Upload request failed without response.");
    }
    throw error;
  }
}