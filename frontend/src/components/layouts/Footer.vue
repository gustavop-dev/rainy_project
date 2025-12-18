<template>
  <footer class="relative min-h-96">
    <!-- Imagen de fondo -->
    <div class="absolute inset-0 overflow-hidden">
      <img 
        src="@/assets/layouts/images/water.avif" 
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
            <h1 class="text-3xl lg:text-4xl font-light text-white mb-6">
              FILTROS <span class="text-blue-600">AGUA LLUVIA</span> CO.
            </h1>
            <p class="text-xl lg:text-2xl font-regular text-white max-w-2xl">
              Soluciones para filtrar y aprovechar el agua lluvia <br>de forma eficiente.
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
                href="https://www.instagram.com/rainy_colombia/" 
                target="_blank"
                class="flex items-center lg:justify-end space-x-2 hover:text-gray-200 transition-colors duration-200"
              >
                <span class="font-regular text-lg">Síguenos en Instagram</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/ValueInvestmentColombia/" 
                target="_blank"
                class="flex items-center lg:justify-end space-x-2 hover:text-gray-200 transition-colors duration-200"
              >
                <span class="font-regular text-lg">Síguenos en Facebook</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
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
            <span class="font-regular"></span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal de Política de Privacidad -->
    <PrivacyPolicyModal 
      :is-visible="showPrivacyModal" 
      @close="showPrivacyModal = false" 
    />
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import PrivacyPolicyModal from '@/components/layouts/modal/PrivacyPolicyModal.vue'

const showPrivacyModal = ref(false)
</script>
