<template>
  <section class="py-12 sm:py-14 md:py-16 px-3 sm:px-4">
    <div>
      <!-- Título principal - Responsive -->
      <div class="text-left grid grid-cols-1 lg:grid-cols-2 items-start lg:items-end gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-3 sm:mb-4 lg:mb-4">
          ¿Tienes dudas o quieres más información?
        </h2>
        <p class="text-base sm:text-lg font-regular text-black leading-relaxed">
          Déjanos tus datos y cuéntanos en qué tipo de espacio deseas instalar tu filtro Rainy®.
          Te contactaremos para darte una asesoría personalizada, sin costo.
        </p>
      </div>

      <!-- Contenedor principal del formulario e imagen - Responsive -->
      <div class="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <!-- Formulario - Bordes responsive -->
        <div class="bg-[#BFE8FF] rounded-xl lg:rounded-s-xl lg:rounded-e-none p-6 sm:p-7 md:p-8">
          <form @submit.prevent="submitForm" class="space-y-5 sm:space-y-6">
            <!-- Fila de Nombre y Teléfono - Responsive -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div>
                <label class="block text-black font-regular text-base sm:text-lg mb-2">
                  Nombre *
                </label>
                <input 
                  type="text" 
                  v-model="form.name"
                  required
                  class="w-full bg-transparent border-b-2 border-white focus:border-blue-500 outline-none py-2 text-black placeholder-gray-600 transition-colors duration-200 text-sm sm:text-base"
                  placeholder=""
                />
              </div>
              <div>
                <label class="block text-black font-regular text-base sm:text-lg mb-2">
                  Teléfono o celular *
                </label>
                <input 
                  type="tel" 
                  v-model="form.phone"
                  required
                  class="w-full bg-transparent border-b-2 border-white focus:border-blue-500 outline-none py-2 text-black placeholder-gray-600 transition-colors duration-200 text-sm sm:text-base"
                  placeholder=""
                />
              </div>
            </div>

            <!-- Correo electrónico - Responsive -->
            <div>
              <label class="block text-black font-regular text-base sm:text-lg mb-2">
                Correo electrónico *
              </label>
              <input 
                type="email" 
                v-model="form.email"
                required
                class="w-full bg-transparent border-b-2 border-white focus:border-blue-500 outline-none py-2 text-black placeholder-gray-600 transition-colors duration-200 text-sm sm:text-base"
                placeholder=""
              />
            </div>

            <!-- Mensaje - Responsive -->
            <div>
              <label class="block text-black font-regular text-base sm:text-lg mb-2">
                Cuéntanos qué necesitas, cuántos filtros estás buscando o cualquier inquietud que tengas.
              </label>
              <textarea 
                v-model="form.message"
                rows="5"
                class="w-full bg-transparent border-2 border-white rounded-2xl focus:border-blue-500 outline-none p-3 sm:p-4 text-black placeholder-gray-600 transition-colors duration-200 resize-none text-sm sm:text-base"
                placeholder=""
              ></textarea>
            </div>

            <!-- Checkbox de autorización - Responsive -->
            <div class="flex items-start space-x-3">
              <input 
                type="checkbox" 
                id="privacy" 
                v-model="form.acceptPrivacy"
                required
                class="w-4 h-4 sm:w-5 sm:h-5 mt-1 rounded border-2 border-white bg-transparent focus:ring-blue-500"
              />
              <label for="privacy" class="text-black font-regular text-xs sm:text-sm leading-relaxed">
                Autorizo el tratamiento de mis datos personales conforme a la 
                <button type="button" @click="showPrivacyModal = true" class="underline hover:text-blue-600 transition-colors duration-200 cursor-pointer">política de privacidad</button>.
              </label>
            </div>

            <!-- Botones de envío y WhatsApp - Responsive -->
            <div class="pt-3 sm:pt-4 space-y-3 sm:space-y-4">
              <!-- Botón de envío -->
              <button 
                type="submit"
                class="text-black font-regular text-base sm:text-lg hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2 group"
              >
                <span>Enviar</span>
                <svg class="w-4 h-4 sm:w-5 sm:h-5 -mb-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
              
              <!-- Botón de WhatsApp -->
              <div class="border-t border-white pt-3 sm:pt-4">
                <p class="text-black font-regular text-base sm:text-lg mb-2">¿Prefieres escribirnos por WhatsApp?</p>
                <a 
                  href="https://wa.me/573103036539" 
                  target="_blank"
                  class="text-black font-regular text-base sm:text-lg hover:text-green-600 transition-colors duration-200 flex items-center space-x-2 group"
                >
                  <span>Habla con un asesor ahora</span>
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 -mb-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          </form>
        </div>

        <!-- Imagen - Solo visible en tablets+ -->
        <div class="hidden lg:block relative rounded-se-xl overflow-hidden">
          <img 
            src="@/assets/layouts/images/Rainy_installation_Banner.png" 
            alt="Instalación de filtros Rainy - Rain Water, Clean Water, Debris"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Modal de Política de Privacidad - Responsive -->
    <ModalTransition v-show="showPrivacyModal">
      <div class="bg-white rounded-lg shadow-xl max-w-2xl mx-3 sm:mx-4 max-h-[80vh] overflow-y-auto">
        <!-- Header del modal -->
        <div class="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Política de Privacidad</h3>
          <button 
            @click="showPrivacyModal = false"
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
            <a href="#" class="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">Política de Tratamiento de Datos Personales</a> 
            para más información.
          </p>
        </div>
        
        <!-- Footer del modal -->
        <div class="flex justify-end p-4 sm:p-6 border-t border-gray-200">
          <button 
            @click="showPrivacyModal = false"
            class="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Entendido
          </button>
        </div>
      </div>
    </ModalTransition>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ModalTransition from '@/components/layouts/modal/ModalTransition.vue'
import { useContactStore } from '@/stores/contactStore'
import { useLoadingAlert } from '@/composables/useLoadingAlert'
import { useSuccessAlert } from '@/composables/useSuccessAlert'

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
