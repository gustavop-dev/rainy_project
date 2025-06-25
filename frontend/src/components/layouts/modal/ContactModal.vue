<template>
  <ModalTransition v-show="isVisible">
    <div class="bg-white rounded-2xl shadow-xl max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
      <!-- Header del modal -->
      <div class="flex justify-between items-center p-6 border-b border-gray-200">
        <div>
          <h2 class="text-2xl font-light text-gray-800">Contáctanos</h2>
          <p class="text-gray-600 mt-1">¿Tienes dudas o quieres más información?</p>
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

      <!-- Formulario -->
      <div class="p-6">
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Fila de Nombre y Teléfono -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-800 font-regular text-sm mb-2">
                Nombre *
              </label>
              <input 
                type="text" 
                v-model="form.name"
                required
                class="w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none px-3 py-2 text-gray-800 placeholder-gray-400 transition-colors duration-200"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label class="block text-gray-800 font-regular text-sm mb-2">
                Teléfono o celular *
              </label>
              <input 
                type="tel" 
                v-model="form.phone"
                required
                class="w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none px-3 py-2 text-gray-800 placeholder-gray-400 transition-colors duration-200"
                placeholder="Tu número de teléfono"
              />
            </div>
          </div>

          <!-- Correo electrónico -->
          <div>
            <label class="block text-gray-800 font-regular text-sm mb-2">
              Correo electrónico *
            </label>
            <input 
              type="email" 
              v-model="form.email"
              required
              class="w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none px-3 py-2 text-gray-800 placeholder-gray-400 transition-colors duration-200"
              placeholder="tu@email.com"
            />
          </div>

          <!-- Mensaje -->
          <div>
            <label class="block text-gray-800 font-regular text-sm mb-2">
              Cuéntanos qué necesitas, cuántos filtros estás buscando o cualquier inquietud que tengas.
            </label>
            <textarea 
              v-model="form.message"
              rows="4"
              class="w-full border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none px-3 py-2 text-gray-800 placeholder-gray-400 transition-colors duration-200 resize-none"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <!-- Checkbox de autorización -->
          <div class="flex items-start space-x-3">
            <input 
              type="checkbox" 
              id="privacy-modal" 
              v-model="form.acceptPrivacy"
              required
              class="w-4 h-4 mt-1 rounded border-2 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label for="privacy-modal" class="text-gray-700 font-regular text-sm leading-relaxed">
              Autorizo el tratamiento de mis datos personales conforme a la 
              <button type="button" @click="showPrivacyModal = true" class="text-blue-600 underline hover:text-blue-800 transition-colors duration-200 cursor-pointer">política de privacidad</button>.
            </label>
          </div>

          <!-- Botones -->
          <div class="flex justify-end space-x-3 pt-4">
            <button 
              type="button"
              @click="$emit('close')"
              class="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-regular"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal de Política de Privacidad anidado -->
    <PrivacyPolicyModal 
      :is-visible="showPrivacyModal" 
      @close="showPrivacyModal = false" 
    />
  </ModalTransition>
</template>

<script setup>
import { ref } from 'vue'
import ModalTransition from '@/components/layouts/modal/ModalTransition.vue'
import PrivacyPolicyModal from '@/components/layouts/modal/PrivacyPolicyModal.vue'
import { useContactStore } from '@/stores/contactStore'
import { useLoadingAlert } from '@/composables/useLoadingAlert'
import { useSuccessAlert } from '@/composables/useSuccessAlert'

// Props
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

// Emits
defineEmits(['close'])

// Estado del formulario
const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
  acceptPrivacy: false
})

const showPrivacyModal = ref(false)

// Composables
const { submitContactForm } = useContactStore()
const { showLoadingAlert, closeLoadingAlert } = useLoadingAlert()
const { showSuccessAlert, showConfirmAlert } = useSuccessAlert()

const submitForm = async () => {
  // Mostrar alerta de carga
  showLoadingAlert({
    title: 'Enviando mensaje...',
    text: 'Estamos procesando tu solicitud de contacto'
  })

  try {
    // Enviar formulario
    const result = await submitContactForm(form.value)
    
    // Cerrar alerta de carga
    closeLoadingAlert()

    if (result.success) {
      // Mostrar alerta de éxito
      await showSuccessAlert({
        title: '¡Mensaje enviado!',
        text: 'Hemos recibido tu mensaje. Te contactaremos pronto.',
        confirmButtonText: 'Perfecto'
      })

      // Limpiar formulario
      form.value = {
        name: '',
        phone: '',
        email: '',
        message: '',
        acceptPrivacy: false
      }
    } else {
      // Mostrar alerta de error
      await showConfirmAlert({
        title: 'Error al enviar',
        text: result.error || 'Hubo un problema al enviar tu mensaje. Inténtalo nuevamente.',
        confirmButtonText: 'Reintentar',
        confirmButtonColor: '#EF4444'
      })
    }
  } catch (error) {
    closeLoadingAlert()
    console.error('Error en submitForm:', error)
    
    await showConfirmAlert({
      title: 'Error de conexión',
      text: 'No se pudo conectar con el servidor. Verifica tu conexión a internet.',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#EF4444'
    })
  }
}
</script> 