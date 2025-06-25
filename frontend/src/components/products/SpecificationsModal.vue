<template>
  <ModalTransition v-show="isVisible">
    <div class="bg-white rounded-lg shadow-xl max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
      <!-- Header del modal -->
      <div class="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-lg">
        <div>
          <h3 class="text-2xl font-regular text-gray-900">{{ productName }}</h3>
          <p class="text-sm text-gray-500 mt-1">Especificaciones técnicas completas</p>
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
      
      <!-- Contenido del modal - Tabla de especificaciones -->
      <div class="p-6">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Especificación
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Detalle
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr 
                v-for="(specification, index) in specifications" 
                :key="index"
                :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                class="hover:bg-blue-50 transition-colors duration-200"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ specification.label }}
                </td>
                <td class="px-6 py-4 text-sm text-gray-700 break-words">
                  {{ specification.value }}
                </td>
              </tr>
            </tbody>
          </table>
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
  },
  productId: {
    type: [Number, String],
    required: true
  }
})

// Eventos que emite el componente
const emit = defineEmits(['close'])

// Store de productos
const { init, getProductById, getProductSpecifications } = useProductsStore()

// Datos computados del producto
const product = computed(() => getProductById.value(props.productId))
const productName = computed(() => product.value?.title || 'Producto')
const specifications = computed(() => getProductSpecifications.value(props.productId))
const additionalInfo = computed(() => product.value?.description || '')

// Inicializar store al montar el componente
onMounted(async () => {
  await init()
})

// Funciones del componente
const closeModal = () => {
  emit('close')
}
</script> 