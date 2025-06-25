<template>
  <div class="bg-blue-500/10 py-8 sm:py-10 md:py-12 px-3 sm:px-4">
    <div class="px-4 sm:px-6 md:px-8 lg:px-10 mx-auto">
      <!-- Encabezado de la sección - Responsive -->
      <div class="text-left grid grid-cols-1 lg:grid-cols-2 items-start lg:items-end gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 lg:mb-4">
          Filtros para agua lluvia Rainy: <span class="underline decoration-2 md:decoration-3 underline-offset-4">eficientes, duraderos y sin complicaciones</span>
        </h1>
        <p class="text-base sm:text-lg font-regular leading-relaxed">
          Sin consumibles. Sin mantenimientos. Sin atascamientos.
          Rainy® es un sistema autolavable, diseñado para funcionar con la fuerza de la gravedad y filtrar eficientemente el agua lluvia desde cualquier bajante.
          Instalación rápida, cero repuestos y máxima durabilidad.
        </p>
      </div>

      <!--Products-->
      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span class="ml-3 text-gray-600">Cargando productos...</span>
      </div>

      <div v-else-if="error" class="text-center py-12">
        <div class="text-red-600 mb-4">
          <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-lg font-medium">Error al cargar productos</p>
          <p class="text-sm">{{ error }}</p>
        </div>
      </div>

      <!-- Grid de productos - Responsive -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
        <div 
          v-for="product in displayProducts" 
          :key="product.id"
          class="max-w-sm mx-auto sm:mx-0 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <!-- Imagen del producto -->
            <div class="bg-gray-50 p-6 sm:p-8 flex items-center justify-center h-48 sm:h-56 md:h-64">
              <img 
                v-if="product.main_image_url"
                :src="product.main_image_url" 
                :alt="product.title"
                class="w-full h-full object-contain"
                @error="$event.target.style.display='none'"
              />
              <div 
                v-else
                class="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gray-800 rounded-lg flex items-center justify-center"
              >
                <div class="text-white font-regular text-xs sm:text-sm">{{ product.title.split(' ')[0] }}</div>
              </div>
            </div>

            <!-- Contenido de la tarjeta -->
            <div class="p-4 sm:p-5 md:p-6">
              <!-- Nombre del producto -->
              <h2 class="text-2xl sm:text-3xl font-regular text-gray-800 mb-3">
                {{ product.title }}
              </h2>

              <!-- Especificación técnica principal -->
              <div v-if="product.specifications && product.specifications.length > 0" class="flex items-center mb-4">
                <div class="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-2"></div>
                <span class="text-gray-700 font-regular text-xs sm:text-sm">
                  {{ product.specifications[14].name }}: {{ product.specifications[14].value }}{{ product.specifications[14].unit ? ` ${product.specifications[14].unit}` : '' }}
                </span>
              </div>

              <!-- Especificación técnica principal -->
              <div v-if="product.specifications && product.specifications.length > 0" class="flex items-center mb-4">
                <div class="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-2"></div>
                <span class="text-gray-700 font-regular text-xs sm:text-sm">
                  {{ product.specifications[0].name }}: {{ product.specifications[0].value }}{{ product.specifications[0].unit ? ` ${product.specifications[0].unit}` : '' }}
                </span>
              </div>

              <!-- Precio -->
              <div class="flex items-center justify-between mb-4">
                <span class="text-xl sm:text-2xl font-regular text-gray-800">
                  $ {{ parseFloat(product.price).toLocaleString('es-CO') }} COP
                </span>
                <div class="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <CheckBadgeIcon class="text-black size-6 sm:size-8"></CheckBadgeIcon>
                </div>
              </div>

              <!-- Botón de especificaciones -->
              <button 
                @click="openSpecificationsModal(product.id)"
                class="w-full text-left text-gray-700 font-regular text-xs sm:text-sm hover:text-gray-900 transition-colors duration-200 flex items-center justify-between group mb-2"
              >
                <span>Ver todas las especificaciones</span>
                <svg class="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>

              <!-- Botón de medidas -->
              <button 
                @click="openDimensionsModal(product.id)"
                class="w-full text-left text-gray-700 font-regular text-xs sm:text-sm hover:text-gray-900 transition-colors duration-200 flex items-center justify-between group"
              >
                <span>Ver medidas</span>
                <svg class="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
        </div>
      </div>
      
      <!-- Botones de comparación - Responsive -->
      <div class="mt-8 sm:mt-10 md:mt-12 text-left flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
        <button 
          @click="openComparisonModal"
          class="text-gray-700 font-regular text-base sm:text-lg hover:text-gray-900 transition-colors duration-200 flex items-center group"
        >
          <span>Ver todos los modelos y sus diferencias</span>
          <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <button 
          @click="openDimensionsComparisonModal"
          class="text-gray-700 font-regular text-base sm:text-lg hover:text-gray-900 transition-colors duration-200 flex items-center group"
        >
          <span>Ver comparación de medidas</span>
          <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
      
      <!-- Texto informativo - Responsive -->
      <div class="mt-6 sm:mt-8 text-left">
        <p class="text-xs sm:text-sm font-regular text-gray-500 leading-relaxed">
          *Precios de venta al público 2025. No incluyen IVA (19%).
        </p>
      </div>
    </div>
  </div>

  <!-- Modal de especificaciones -->
  <SpecificationsModal 
    :isVisible="showSpecificationsModal"
    :productId="selectedProductId"
    @close="closeSpecificationsModal"
  />

  <!-- Modal de comparación completa -->
  <ComparisonModal 
    :isVisible="showComparisonModal"
    @close="closeComparisonModal"
  />

  <!-- Modal de medidas -->
  <DimensionsModal 
    :isVisible="showDimensionsModal"
    :productId="selectedDimensionsProductId"
    @close="closeDimensionsModal"
  />

  <!-- Modal de comparación de medidas -->
  <ModalTransition v-show="showDimensionsComparisonModal">
    <div class="bg-white rounded-2xl shadow-xl max-w-6xl mx-4 max-h-[90vh] overflow-hidden">
      <!-- Header del modal -->
      <div class="flex justify-between items-center p-6 border-b border-gray-200">
        <div>
          <h2 class="text-2xl font-light text-gray-800">Comparación de Medidas</h2>
          <p class="text-gray-600 mt-1">Dimensiones comparativas de todos los productos</p>
        </div>
        <button 
          @click="closeDimensionsComparisonModal"
          class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Contenido del modal -->
      <div class="p-6">
        <div v-if="!comparisonImage" class="text-center py-12">
          <div class="text-gray-500 mb-4">
            <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <p class="text-lg font-medium">Imagen no disponible</p>
            <p class="text-sm">No hay imagen de comparación de medidas disponible.</p>
          </div>
        </div>

        <div v-else class="flex justify-center">
          <img 
            :src="comparisonImage.image_url" 
            :alt="comparisonImage.name"
            class="max-w-full max-h-[70vh] object-contain rounded-lg shadow-sm"
            @error="handleComparisonImageError"
          />
        </div>
      </div>
    </div>
  </ModalTransition>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { CheckBadgeIcon } from '@heroicons/vue/24/solid'
import SpecificationsModal from '@/components/products/SpecificationsModal.vue'
import ComparisonModal from '@/components/products/ComparisonModal.vue'
import DimensionsModal from '@/components/products/DimensionsModal.vue'
import ModalTransition from '@/components/layouts/modal/ModalTransition.vue'
import { useProductsStore } from '@/stores/productsStore'

// Store de productos
const { init, activeProducts, activeComparisonImages, isLoading, error } = useProductsStore()

// Estado del modal
const showSpecificationsModal = ref(false)
const selectedProductId = ref(null)

// Estado del modal de comparación
const showComparisonModal = ref(false)

// Estado del modal de medidas
const showDimensionsModal = ref(false)
const selectedDimensionsProductId = ref(null)

// Estado del modal de comparación de medidas
const showDimensionsComparisonModal = ref(false)
const comparisonImage = ref(null)

// Datos computados
const displayProducts = computed(() => activeProducts.value)

const firstComparisonImage = computed(() => {
  const images = activeComparisonImages.value
  return images.length > 0 ? images[0] : null
})

// Inicializar datos al montar componente
onMounted(async () => {
  await init()
})

// Funciones del modal
const openSpecificationsModal = (productId = 1) => {
  selectedProductId.value = productId
  showSpecificationsModal.value = true
}

const closeSpecificationsModal = () => {
  showSpecificationsModal.value = false
  selectedProductId.value = null
}

// Funciones del modal de comparación
const openComparisonModal = () => {
  showComparisonModal.value = true
}

const closeComparisonModal = () => {
  showComparisonModal.value = false
}

// Funciones del modal de medidas
const openDimensionsModal = (productId = 1) => {
  selectedDimensionsProductId.value = productId
  showDimensionsModal.value = true
}

const closeDimensionsModal = () => {
  showDimensionsModal.value = false
  selectedDimensionsProductId.value = null
}

// Funciones del modal de comparación de medidas
const openDimensionsComparisonModal = () => {
  comparisonImage.value = firstComparisonImage.value
  showDimensionsComparisonModal.value = true
}

const closeDimensionsComparisonModal = () => {
  showDimensionsComparisonModal.value = false
  comparisonImage.value = null
}

const handleComparisonImageError = () => {
  comparisonImage.value = null
}
</script>