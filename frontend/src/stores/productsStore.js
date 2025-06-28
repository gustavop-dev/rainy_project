/**
 * Products Store
 * Pinia composable store for managing products data, comparison images, and related operations
 * 
 * @fileoverview Products state management with API integration and computed getters
 * @author Rainy Filters Team
 * @since 1.0.0
 */

import { ref, computed } from 'vue'
import { get_request } from '@/stores/services/request_http'

// -------------------------------------------------
// Estado global (singleton) del store
// -------------------------------------------------

const products = ref([]) // Array de productos desde la API
const comparisonImages = ref([]) // Imágenes de comparación
const isLoading = ref(false) // Estado de carga
const error = ref(null) // Almacena errores
const isInitialized = ref(false) // Evita doble init

/**
 * Products Store Composable (singleton)
 * Todas las instancias comparten este estado gracias a que los refs se declaran fuera.
 * @returns {Object} API del store
 */
export const useProductsStore = () => {
  /**
   * Initializes the store by loading products if not already loaded
   * 
   * @async
   * @function init
   * @returns {Promise<boolean>} True if data was loaded, false if already loaded
   */
  const init = async () => {
    // Skip if already initialized and has data
    if (isInitialized.value && products.value.length > 0) {
      console.log('Products already loaded')
      return false
    }

    isLoading.value = true
    error.value = null

    try {
      console.log('Loading products from backend...')
      const response = await get_request('products/')
      
      // Assign response data
      products.value = response.data.products || []
      comparisonImages.value = response.data.comparison_images || []
      isInitialized.value = true

      console.log('Products loaded successfully:', products.value.length)
      return true
    } catch (err) {
      error.value = err.response?.data?.message || 'Error loading products'
      console.error('Error loading products:', error.value)
      return false
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Forces reload of products from backend
   * Resets initialization state and clears existing data
   * 
   * @async
   * @function refreshProducts
   * @returns {Promise<boolean>} Result from init() function
   */
  const refreshProducts = async () => {
    isInitialized.value = false
    products.value = []
    comparisonImages.value = []
    return await init()
  }

  // Computed getters
  
  /**
   * Returns all products without filtering
   * @type {ComputedRef<Array>}
   */
  const allProducts = computed(() => products.value)
  
  /**
   * Returns only active products (is_active = true)
   * @type {ComputedRef<Array>}
   */
  const activeProducts = computed(() => 
    products.value.filter(product => product.is_active)
  )

  /**
   * Returns products sorted by order field
   * @type {ComputedRef<Array>}
   */
  const productsSortedByOrder = computed(() => 
    [...products.value].sort((a, b) => a.order - b.order)
  )

  /**
   * Gets a specific product by ID
   * 
   * @function getProductById
   * @param {number} id - Product ID
   * @returns {Object|null} Found product or null
   */
  const getProductById = computed(() => {
    return (id) => {
      const product = products.value.find(p => p.id === parseInt(id))
      console.log(product)
      return product || null
    }
  })

  /**
   * Gets a specific product by slug
   * 
   * @function getProductBySlug
   * @param {string} slug - Product slug
   * @returns {Object|null} Found product or null
   */
  const getProductBySlug = computed(() => {
    return (slug) => {
      const product = products.value.find(p => p.slug === slug)
      return product || null
    }
  })

  /**
   * Gets formatted product specifications for modal display
   * 
   * @function getProductSpecifications
   * @param {number} id - Product ID
   * @returns {Array} Array of formatted specifications {label, value}
   */
  const getProductSpecifications = computed(() => {
    return (id) => {
      const product = getProductById.value(id)
      if (!product || !product.specifications) return []

      return product.specifications.map(spec => ({
        label: spec.name,
        value: spec.unit ? `${spec.value}` : spec.value
      }))
    }
  })

  /**
   * Gets the dimensions image URL for a product
   * 
   * @function getProductDimensionsImage
   * @param {number} id - Product ID
   * @returns {string|null} Dimensions image URL or null
   */
  const getProductDimensionsImage = computed(() => {
    return (id) => {
      const product = getProductById.value(id)
      if (!product) return null

      // Posibles nombres de la propiedad según backend
      const candidates = [
        'dimensions_image_url',
        'dimension_image_url',
        'dimensionsImageUrl',
        'dimensionImageUrl',
        'dimensions_image',
        'dimension_image'
      ]

      for (const key of candidates) {
        if (product[key]) return product[key]
      }

      // Si no se encuentra, log de advertencia para debug
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Producto id=${id} no contiene campo de imagen de dimensiones (candidatos: ${candidates.join(', ')})`, product)
      }

      return null
    }
  })

  /**
   * Returns only active comparison images
   * @type {ComputedRef<Array>}
   */
  const activeComparisonImages = computed(() =>
    comparisonImages.value.filter(image => image.is_active)
  )

  /**
   * Searches products by text in title, description, or initial text
   * 
   * @function searchProducts
   * @param {string} searchTerm - Search term
   * @returns {Array} Products matching the search criteria
   */
  const searchProducts = computed(() => {
    return (searchTerm) => {
      if (!searchTerm) return products.value
      
      const term = searchTerm.toLowerCase()
      return products.value.filter(product => 
        product.title.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.initial_text.toLowerCase().includes(term)
      )
    }
  })

  /**
   * Gets products within a price range
   * 
   * @function getProductsByPriceRange
   * @param {number} minPrice - Minimum price
   * @param {number} maxPrice - Maximum price
   * @returns {Array} Products within the price range
   */
  const getProductsByPriceRange = computed(() => {
    return (minPrice, maxPrice) => {
      return products.value.filter(product => {
        const price = parseFloat(product.price)
        return price >= minPrice && price <= maxPrice
      })
    }
  })

  // Return store interface
  return {
    // State
    products,
    comparisonImages,
    isLoading,
    error,
    isInitialized,
    
    // Actions
    init,
    refreshProducts,
    
    // Getters
    allProducts,
    activeProducts,
    productsSortedByOrder,
    getProductById,
    getProductBySlug,
    getProductSpecifications,
    getProductDimensionsImage,
    activeComparisonImages,
    searchProducts,
    getProductsByPriceRange
  }
} 