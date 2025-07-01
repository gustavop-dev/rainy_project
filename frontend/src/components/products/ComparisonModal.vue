<template>
  <ModalTransition v-show="isVisible">
    <div class="bg-white rounded-lg shadow-xl max-w-7xl mx-2 sm:mx-4 max-h-[90vh] overflow-y-auto">
      <!-- Header del modal - Responsive -->
      <div class="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-lg">
        <div>
          <h3 class="text-lg sm:text-xl md:text-2xl font-regular text-gray-900">Comparación Completa de Productos</h3>
          <p class="text-xs sm:text-sm text-gray-500 mt-1">Compara las especificaciones de todos nuestros filtros de agua de lluvia</p>
        </div>
        <button 
          @click="closeModal"
          class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <!-- Contenido del modal - Tabla de comparación responsive -->
      <div class="p-3 sm:p-4 md:p-6">
        <div class="overflow-x-auto max-h-[60vh] overflow-y-auto border border-gray-200 rounded-lg relative">
          <table class="min-w-full divide-y divide-gray-200 relative">
            <!-- Header de la tabla -->
            <thead class="bg-gray-50 sticky top-0 z-20">
              <tr>
                <!-- Primera columna - Sticky solo en tablets+ -->
                <th scope="col" class="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:sticky md:left-0 md:bg-gray-50 md:z-30">
                  Característica
                </th>
                <th 
                  v-for="product in sortedProducts" 
                  :key="product.id"
                  scope="col" 
                  class="px-2 sm:px-3 md:px-4 py-3 sm:py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[130px] sm:min-w-[150px] md:min-w-[170px]"
                >
                  <div class="flex flex-col items-center space-y-2">
                    <!-- Imagen del producto - Responsive -->
                    <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img 
                        v-if="product.main_image_url"
                        :src="product.main_image_url" 
                        :alt="product.title"
                        class="w-full h-full object-contain rounded-lg"
                        @error="$event.target.style.display='none'"
                      />
                      <div 
                        v-else
                        class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-300 rounded-lg flex items-center justify-center"
                      >
                        <span class="text-gray-600 text-xs font-medium">{{ product.title.split(' ')[0] }}</span>
                      </div>
                    </div>
                    <!-- Nombre del producto - Responsive -->
                    <span class="text-gray-900 font-medium text-xs sm:text-sm text-center leading-tight">{{ product.title }}</span>
                  </div>
                </th>
              </tr>
            </thead>
            
            <!-- Cuerpo de la tabla -->
            <tbody class="bg-white divide-y divide-gray-200">
              <!-- Filas de especificaciones -->
              <tr 
                v-for="(specName, index) in allSpecificationNames" 
                :key="specName"
                :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                class="hover:bg-blue-50 transition-colors duration-200"
              >
                <td class="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 md:sticky md:left-0 md:bg-inherit md:z-10">
                  {{ specName }}
                </td>
                <td 
                  v-for="product in sortedProducts" 
                  :key="`${specName}-${product.id}`"
                  class="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-700"
                >
                  <div class="leading-tight">
                    {{ getSpecificationValue(product, specName) }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Indicador de scroll en móviles -->
        <div class="mt-3 sm:mt-4 md:hidden text-center">
          <p class="text-xs text-gray-500 flex items-center justify-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            Desliza horizontalmente para ver más
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </p>
        </div>
      </div>
      
      <!-- Footer del modal - Responsive -->
      <div class="flex justify-end gap-3 p-4 sm:p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
        <button 
          @click="closeModal"
          class="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Cerrar
        </button>
      </div>
    </div>
  </ModalTransition>
</template>

<script setup>
import { defineProps, defineEmits, computed, onMounted } from 'vue'
import ModalTransition from '@/components/layouts/modal/ModalTransition.vue'
import { useProductsStore } from '@/stores/productsStore'

// Props del componente
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

// Eventos que emite el componente
const emit = defineEmits(['close'])

// Store de productos
const { init, activeProducts } = useProductsStore()

// Datos computados
const sortedProducts = computed(() => {
  return [...activeProducts.value].sort((a, b) => a.order - b.order)
})

// Obtener todos los nombres de especificaciones únicos
const allSpecificationNames = computed(() => {
  const specNames = new Set()
  
  sortedProducts.value.forEach(product => {
    if (product.specifications && Array.isArray(product.specifications)) {
      product.specifications.forEach(spec => {
        specNames.add(spec.name)
      })
    }
  })
  
  return Array.from(specNames).sort()
})

// Función para obtener el valor de una especificación para un producto específico
const getSpecificationValue = (product, specName) => {
  if (!product.specifications || !Array.isArray(product.specifications)) {
    return '-'
  }
  
  const spec = product.specifications.find(s => s.name === specName)
  if (!spec) return '-'
  
  return spec.unit ? `${spec.value}` : spec.value
}

// Inicializar store al montar el componente
onMounted(async () => {
  await init()
})

// Funciones del componente
const closeModal = () => {
  emit('close')
}
</script> 