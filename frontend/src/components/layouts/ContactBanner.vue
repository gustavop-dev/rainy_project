<template>
  <section class="bg-gray-50 py-16 px-8">
    <div class="mx-auto">
      <!-- Título centrado -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-light text-black leading-tight">
          ¿Listo para mejorar tu sistema de agua?
        </h2>
      </div>

      <!-- Grid de 4 bloques -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Bloque 1: Expertos en filtración -->
        <div class="bg-white rounded-xl p-6">
          <h3 class="text-xl font-medium text-black mb-4">
            1. Habla con nuestros expertos en filtración
          </h3>
          <p class="text-gray-600 font-regular mb-4 leading-relaxed">
            Cuéntanos qué necesitas y te ayudaremos a elegir el filtro adecuado para tu propiedad.
          </p>
          <a href="mailto:info@rainy.com.co" class="text-black font-regular hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2">
            <EnvelopeIcon class="w-5 h-5 text-black" />
            <span>info@rainy.com.co</span>
          </a>
        </div>

        <!-- Bloque 2: Asesoría personalizada (Amarillo) -->
        <div class="bg-yellow-100 rounded-xl p-6">
          <h3 class="text-xl font-medium text-black mb-4">
            2. Asesoría personalizada y sin costo
          </h3>
          <p class="text-gray-700 font-regular mb-4 leading-relaxed">
            Te guiamos en todo el proceso: desde la elección del modelo hasta la instalación.
          </p>
          <p class="text-gray-700 font-regular">
            Ideal para casas, fincas, edificios y proyectos institucionales.
          </p>
        </div>

        <!-- Bloque 3: Asistencia WhatsApp (Naranja) -->
        <div class="bg-orange-100 rounded-xl p-6">
          <h3 class="text-xl font-medium text-black mb-4">
            3. Asistencia rápida por WhatsApp
          </h3>
          <p class="text-gray-700 font-regular mb-4 leading-relaxed">
            ¿Tienes dudas? Escríbenos y recibe respuesta inmediata de nuestro equipo.
          </p>
          <a href="https://wa.me/573103036539" target="_blank" class="text-black font-regular hover:text-green-600 transition-colors duration-200 flex items-center space-x-2">
            <ChatBubbleLeftRightIcon class="w-5 h-5 text-black" />
            <span>Chatear ahora</span>
          </a>
        </div>

        <!-- Bloque 4: Agua potable (Azul) -->
        <div class="bg-blue-100 rounded-xl p-6">
          <h3 class="text-xl font-medium text-black mb-4">
            4. ¿Necesitas agua potable?
          </h3>
          <p class="text-gray-700 font-regular mb-4 leading-relaxed">
            Además del sistema Rainy para el filtrado de agua lluvia, también ofrecemos soluciones para potabilizarla y hacerla segura para el consumo humano.
          </p>
          <p class="text-gray-700 font-regular">
            Pregúntanos por nuestros sistemas de potabilización.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  EnvelopeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/vue/24/outline'
</script>
