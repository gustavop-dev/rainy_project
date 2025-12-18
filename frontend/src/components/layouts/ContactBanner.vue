<template>
  <section class="bg-gray-50 pt-16 pb-32 px-8">
    <div class="mx-auto">
      <!-- Título centrado -->
      <div class="text-center mb-16">
        <p class="text-4xl lg:text-5xl font-normal tracking-wide text-gray-500 uppercase mb-4">
          FILTROS DE <span class="text-blue-600">AGUA LLUVIA</span> PARA COLOMBIA
        </p>
        <h2 class="text-2xl lg:text-3xl font-light text-black leading-tight">
          ¿Listo para mejorar tu sistema de agua?
        </h2>
      </div>

      <!-- Grid de 4 bloques -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Bloque 1: Expertos en filtración -->
        <div class="bg-white p-6 border-l-2 border-gray-300">
          <h3 class="text-xl font-medium text-black mb-4">
            1. Habla con nuestros expertos en filtración
          </h3>
          <p class="text-gray-600 font-regular mb-4 leading-relaxed">
            Cuéntanos qué necesitas y te ayudaremos a elegir el filtro adecuado para tu propiedad.
          </p>
        </div>

        <!-- Bloque 2: Asesoría personalizada -->
        <div class="bg-white p-6 border-l-2 border-gray-300">
          <h3 class="text-xl font-medium text-black mb-4">
            2. Asesoría personalizada y sin costo
          </h3>
          <p class="text-gray-600 font-regular mb-4 leading-relaxed">
            Te guiamos en todo el proceso: desde la elección del modelo hasta la instalación.
          </p>
          <p class="text-gray-600 font-regular">
            Ideal para casas, fincas, edificios y proyectos institucionales.
          </p>
        </div>

        <!-- Bloque 3: Asistencia WhatsApp -->
        <div class="bg-white p-6 border-l-2 border-gray-300">
          <h3 class="text-xl font-medium text-black mb-4">
            3. Asistencia rápida por WhatsApp
          </h3>
          <p class="text-gray-600 font-regular mb-4 leading-relaxed">
            ¿Tienes dudas? Escríbenos y recibe respuesta inmediata de nuestro equipo.
          </p>
          <a href="https://wa.me/573103036539" target="_blank" class="text-black font-regular hover:text-green-600 transition-colors duration-200 flex items-center space-x-2">
            <ChatBubbleLeftRightIcon class="w-5 h-5 text-black" />
            <span>Chatear ahora</span>
          </a>
        </div>

        <!-- Bloque 4: Agua potable -->
        <div class="bg-white p-6 border-l-2 border-gray-300">
          <h3 class="text-xl font-medium text-black mb-4">
            4. ¿Necesitas agua potable?
          </h3>
          <p class="text-gray-600 font-regular mb-4 leading-relaxed">
            Además del sistema para el filtrado de agua lluvia, también ofrecemos soluciones para potabilizarla y hacerla segura para el consumo humano.
          </p>
          <p class="text-gray-600 font-regular">
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
