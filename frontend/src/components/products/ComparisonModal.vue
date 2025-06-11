<template>
  <ModalTransition v-show="isVisible">
    <div class="bg-white rounded-lg shadow-xl max-w-7xl mx-4 max-h-[90vh] overflow-y-auto">
      <!-- Header del modal -->
      <div class="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-lg">
        <div>
          <h3 class="text-2xl font-regular text-gray-900">Comparación Completa de Productos</h3>
          <p class="text-sm text-gray-500 mt-1">Compara las especificaciones de todos nuestros filtros de agua de lluvia</p>
        </div>
        <button 
          @click="closeModal"
          class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <!-- Contenido del modal - Tabla de comparación -->
      <div class="p-6">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <!-- Header de la tabla -->
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10">
                  Característica
                </th>
                <th 
                  v-for="product in sortedProducts" 
                  :key="product.id"
                  scope="col" 
                  class="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]"
                >
                  <div class="flex flex-col items-center space-y-2">
                    <!-- Imagen del producto -->
                    <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img 
                        v-if="product.main_image_url"
                        :src="product.main_image_url" 
                        :alt="product.title"
                        class="w-full h-full object-contain rounded-lg"
                        @error="$event.target.style.display='none'"
                      />
                      <div 
                        v-else
                        class="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center"
                      >
                        <span class="text-gray-600 text-xs font-medium">{{ product.title.split(' ')[0] }}</span>
                      </div>
                    </div>
                    <!-- Nombre del producto -->
                    <span class="text-gray-900 font-medium text-sm text-center">{{ product.title }}</span>
                  </div>
                </th>
              </tr>
            </thead>
            
            <!-- Cuerpo de la tabla -->
            <tbody class="bg-white divide-y divide-gray-200">
              <!-- Fila de precios -->
              <tr class="bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-blue-50 z-10">
                  Precio
                </td>
                <td 
                  v-for="product in sortedProducts" 
                  :key="`price-${product.id}`"
                  class="px-6 py-4 text-center text-sm font-semibold text-green-600"
                >
                  $ {{ parseFloat(product.price).toLocaleString('es-CO') }} COP
                </td>
              </tr>
              
              <!-- Fila de descripción -->
              <tr class="hover:bg-gray-50 transition-colors duration-200">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-white z-10">
                  Descripción
                </td>
                <td 
                  v-for="product in sortedProducts" 
                  :key="`description-${product.id}`"
                  class="px-6 py-4 text-sm text-gray-700 max-w-xs"
                >
                  <div class="text-left">{{ product.description }}</div>
                </td>
              </tr>
              
              <!-- Filas de especificaciones -->
              <tr 
                v-for="(specName, index) in allSpecificationNames" 
                :key="specName"
                :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                class="hover:bg-blue-50 transition-colors duration-200"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-inherit z-10">
                  {{ specName }}
                </td>
                <td 
                  v-for="product in sortedProducts" 
                  :key="`${specName}-${product.id}`"
                  class="px-6 py-4 text-center text-sm text-gray-700"
                >
                  {{ getSpecificationValue(product, specName) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Información adicional -->
        <div class="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 class="text-sm font-medium text-blue-900 mb-2">Información importante</h4>
          <p class="text-sm text-blue-800">
            *Los valores mostrados corresponden a los precios de venta al público para el año 2025. 
            Los precios no incluyen IVA (19% adicional según legislación colombiana).
          </p>
        </div>
      </div>
      
      <!-- Footer del modal -->
      <div class="flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
        <button 
          @click="closeModal"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
  
  return spec.unit ? `${spec.value} ${spec.unit}` : spec.value
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