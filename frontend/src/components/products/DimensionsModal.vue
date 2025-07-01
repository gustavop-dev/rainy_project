<template>
  <ModalTransition v-show="isVisible">
    <div class="bg-white rounded-2xl shadow-xl max-w-4xl mx-4 max-h-[90vh] overflow-hidden">
      <!-- Header del modal -->
      <div class="flex justify-between items-center p-6 border-b border-gray-200">
        <div>
          <h2 class="text-2xl font-light text-gray-800">Medidas del Producto</h2>
          <p v-if="productTitle" class="text-gray-600 mt-1">{{ productTitle }}</p>
        </div>
        <button 
          @click="$emit('close')"
          class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Contenido del modal -->
      <div class="p-6">
        <div v-if="isLoading" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span class="ml-3 text-gray-600">Cargando imagen...</span>
        </div>

        <div v-else-if="!dimensionsImageUrl" class="text-center py-12">
          <div class="text-gray-500 mb-4">
            <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <p class="text-lg font-medium">Imagen no disponible</p>
            <p class="text-sm">Este producto no tiene imagen de medidas disponible.</p>
          </div>
        </div>

        <div v-else class="flex justify-center">
          <div class="relative overflow-hidden max-w-full max-h-[60vh]">
            <img
              ref="imageRef"
              :src="dimensionsImageUrl"
              :alt="`Medidas de ${productTitle}`"
              class="object-contain rounded-lg shadow-sm select-none max-h-[60vh]"
              :style="imageStyle"
              @error="handleImageError"
              @wheel.passive.prevent="onWheel"
              @mousedown.prevent="onMouseDown"
              @mousemove.prevent="onMouseMove"
              @mouseup.prevent="onMouseUp"
              @mouseleave.prevent="onMouseUp"
              draggable="false"
            />

            <!-- Controles de zoom -->
            <div class="absolute right-2 bottom-2 flex flex-col bg-white/80 rounded-md shadow">
              <button @click="zoomIn" class="p-2 hover:bg-gray-100 rounded-t-md">
                <PlusIcon class="w-4 h-4 text-gray-700" />
              </button>
              <button @click="zoomOut" class="p-2 hover:bg-gray-100 rounded-b-md border-t border-gray-200">
                <MinusIcon class="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ModalTransition>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import ModalTransition from '@/components/layouts/modal/ModalTransition.vue'
import { useProductsStore } from '@/stores/productsStore'
import { PlusIcon, MinusIcon } from '@heroicons/vue/24/solid'

// Props
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  productId: {
    type: Number,
    default: null
  }
})

// Emits
defineEmits(['close'])

// Store
const { getProductById, getProductDimensionsImage } = useProductsStore()

// Estado local
const isLoading = ref(false)

// Datos computados
const product = computed(() => {
  return props.productId ? getProductById.value(props.productId) : null
})

const productTitle = computed(() => {
  return product.value?.title || ''
})

const dimensionsImageUrl = computed(() => {
  return props.productId ? getProductDimensionsImage.value(props.productId) : null
})

// Funciones
const handleImageError = (event) => {
  event.target.style.display = 'none'
}

// Watcher para simular carga cuando cambia el producto
watch(() => props.productId, (newId) => {
  if (newId && props.isVisible) {
    isLoading.value = true
    // Simular tiempo de carga
    setTimeout(() => {
      isLoading.value = false
    }, 500)
  }
}, { immediate: true })

watch(() => props.isVisible, (isVisible) => {
  if (isVisible && props.productId) {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
    }, 300)
  }
})

// ------------------------------
// Funcionalidad de Zoom y Pan
// ------------------------------

const scale = ref(1)
const translateX = ref(0)
const translateY = ref(0)
const isDragging = ref(false)
const lastMouseX = ref(0)
const lastMouseY = ref(0)

const imageStyle = computed(() => ({
  transform: `translate(${translateX.value}px, ${translateY.value}px) scale(${scale.value})`,
  cursor: isDragging.value ? 'grabbing' : 'grab',
  transition: isDragging.value ? 'none' : 'transform 0.1s ease-out'
}))

const onWheel = (event) => {
  const delta = event.deltaY > 0 ? -0.1 : 0.1
  scale.value = Math.min(Math.max(scale.value + delta, 0.5), 4)
}

const onMouseDown = (event) => {
  isDragging.value = true
  lastMouseX.value = event.clientX
  lastMouseY.value = event.clientY
}

const onMouseMove = (event) => {
  if (!isDragging.value) return
  const dx = event.clientX - lastMouseX.value
  const dy = event.clientY - lastMouseY.value
  translateX.value += dx
  translateY.value += dy
  lastMouseX.value = event.clientX
  lastMouseY.value = event.clientY
}

const onMouseUp = () => {
  isDragging.value = false
}

// Funciones de botones de zoom
const zoomIn = () => {
  scale.value = Math.min(scale.value + 0.2, 4)
}

const zoomOut = () => {
  scale.value = Math.max(scale.value - 0.2, 0.5)
}

// Reiniciar zoom y posición cuando cambia el producto o se cierra el modal
const resetTransform = () => {
  scale.value = 1
  translateX.value = 0
  translateY.value = 0
}

watch(() => props.productId, resetTransform)
watch(() => props.isVisible, (visible) => {
  if (!visible) resetTransform()
})
</script> 