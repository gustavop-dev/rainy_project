<template>
  <ModalTransition v-show="isVisible">
    <div class="bg-white rounded-lg shadow-xl max-w-2xl mx-3 sm:mx-4 max-h-[80vh] overflow-y-auto">
      <!-- Header del modal -->
      <div class="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
        <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Política de Privacidad</h3>
        <button 
          @click="$emit('close')"
          class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <!-- Contenido del modal -->
      <div class="p-4 sm:p-6">
        <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
          Los datos personales aquí recolectados serán tratados por <strong>HASTILE S.A.S.</strong>, en calidad de responsable del tratamiento, con el fin de contactarlo, brindarle asesoría relacionada con nuestros servicios, y enviarle información comercial sobre nuestros productos. Usted puede ejercer sus derechos a conocer, actualizar, rectificar y suprimir sus datos, y revocar la autorización otorgada, mediante los canales dispuestos por la empresa. Consulte nuestra 
          <a 
            :href="pdfUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            Política de Tratamiento de Datos Personales
          </a> 
          para más información.
        </p>
      </div>
      
      <!-- Footer del modal -->
      <div class="flex justify-end p-4 sm:p-6 border-t border-gray-200">
        <button 
          @click="$emit('close')"
          class="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Entendido
        </button>
      </div>
    </div>
  </ModalTransition>
</template>

<script setup>
import ModalTransition from '@/components/layouts/modal/ModalTransition.vue'

// Props
defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

// Emits
defineEmits(['close'])

// URL del PDF desde assets - se resolverá correctamente al compilar
const pdfUrl = new URL('@/assets/documents/privacy_policy/Politica_de_Tratamiento_HASTILE_SAS - mayo 2025.pdf', import.meta.url).href
</script> 