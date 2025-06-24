<template>
  <footer class="relative min-h-96">
    <!-- Imagen de fondo -->
    <div class="absolute inset-0 overflow-hidden">
      <img 
        src="@/assets/layouts/images/water.jpg" 
        alt="Techos - Fondo del footer"
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
    
    <!-- Capa transparente overlay -->
    <div class="absolute inset-0 bg-gray-800/30 backdrop-blur-lg"></div>

    
    <!-- Contenido del footer -->
    <div class="relative z-10 w-full min-h-96 flex flex-col">
      <!-- Contenido principal del footer -->
      <div class="flex-1 px-8 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <!-- Columna izquierda - Logo y descripción -->
          <div class="lg:col-span-2">
            <h1 class="text-6xl lg:text-7xl font-light text-white mb-6">
              Rainy
            </h1>
            <p class="text-xl lg:text-2xl font-regular text-white max-w-2xl">
              Soluciones para filtrar y aprovechar el agua lluvia de forma eficiente.
            </p>
          </div>
          
          <!-- Columna derecha - Contacto -->
          <div class="lg:text-right">
            <div class="text-white space-y-2">
              <a 
                href="https://wa.me/573103036539" 
                target="_blank"
                class="flex items-center lg:justify-end space-x-2 hover:text-gray-200 transition-colors duration-200"
              >
                <span class="font-regular text-lg">Escribenos por WhatsApp</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <a 
                href="mailto:info@rainy.com.co" 
                class="block font-regular text-lg hover:text-gray-200 transition-colors duration-200 lg:text-right"
              >
                info@rainy.com.co
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer bottom -->
      <div class="px-8 py-6">
        <div class="flex flex-col lg:flex-row justify-between items-center text-white space-y-4 lg:space-y-0">
          <div class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8">
            <span class="font-regular">Bogotá D.C. – Colombia</span>
            <button 
              type="button" 
              @click="showPrivacyModal = true" 
              class="font-regular hover:text-gray-200 transition-colors duration-200 cursor-pointer"
            >
              Política de privacidad
            </button>
          </div>
          <div>
            <span class="font-regular">© 2025 Rainy. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal de Política de Privacidad -->
    <ModalTransition v-show="showPrivacyModal">
      <div class="bg-white rounded-lg shadow-xl max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
        <!-- Header del modal -->
        <div class="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 class="text-xl font-semibold text-gray-900">Política de Privacidad</h3>
          <button 
            @click="showPrivacyModal = false"
            class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <!-- Contenido del modal -->
        <div class="p-6">
          <p class="text-gray-700 leading-relaxed">
            Los datos personales aquí recolectados serán tratados por <strong>HASTILE S.A.S.</strong>, en calidad de responsable del tratamiento, con el fin de contactarlo, brindarle asesoría relacionada con nuestros servicios, y enviarle información comercial sobre nuestros productos. Usted puede ejercer sus derechos a conocer, actualizar, rectificar y suprimir sus datos, y revocar la autorización otorgada, mediante los canales dispuestos por la empresa. Consulte nuestra 
            <a href="#" class="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">Política de Tratamiento de Datos Personales</a> 
            para más información.
          </p>
        </div>
        
        <!-- Footer del modal -->
        <div class="flex justify-end p-6 border-t border-gray-200">
          <button 
            @click="showPrivacyModal = false"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Entendido
          </button>
        </div>
      </div>
    </ModalTransition>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import ModalTransition from '@/components/layouts/modal/ModalTransition.vue'

const showPrivacyModal = ref(false)
</script>
