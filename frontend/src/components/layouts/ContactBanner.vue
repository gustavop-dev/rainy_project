<template>
  <section class="bg-gray-50 py-16 px-8">
    <div class="w-full">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <!-- Primera columna - Pregunta principal -->
        <div class="flex items-center">
          <h2 class="text-4xl lg:text-5xl font-light text-black leading-tight">
            ¿Listo para mejorar tu sistema de agua?
          </h2>
        </div>

        <!-- Segunda columna - Expertos en Filtración -->
        <div class="bg-white rounded-xl relative">
          <!-- Barra gris izquierda -->
          <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          <div class="p-8">
            <h3 class="text-2xl font-medium text-black mb-6">
              Habla con Nuestros Expertos en Filtración
            </h3>
            <p class="text-gray-600 font-regular mb-8 leading-relaxed text-lg">
              Cuéntanos tus necesidades y encuentra el filtro perfecto para tu propiedad.
            </p>
            <a href="mailto:contacto@rainy.com.co" class="text-black font-regular hover:text-blue-600 transition-colors duration-200 text-lg">
              contacto@rainy.com.co
            </a>
          </div>
        </div>

        <!-- Tercera columna - Asistencia Rápida -->
        <div class="bg-white rounded-xl relative">
          <!-- Barra gris izquierda -->
          <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          <div class="p-8">
            <h3 class="text-2xl font-medium text-black mb-6">
              Asistencia Rápida y Directa
            </h3>
            <p class="text-gray-600 font-regular mb-8 leading-relaxed text-lg">
              ¿Tienes preguntas? Chatea con nuestro equipo para obtener respuestas inmediatas.
            </p>
            <span class="text-black font-regular text-lg cursor-pointer hover:text-blue-600 transition-colors duration-200">
              Chatear Ahora
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No necesita lógica adicional por ahora
</script>
