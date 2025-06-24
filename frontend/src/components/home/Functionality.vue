<!--
  Filter Functionality Section Component
  Explains how Rainy FL water filters work with visual and textual descriptions
  
  @component FunctionalitySection
  @author Rainy Filters Team
  @since 1.0.0
-->

<template>
  <section class="py-16 px-4 bg-white">
    <div class=" mx-auto">
      <!-- Main section title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-light text-black">
          ¿Cómo funcionan nuestro filtros de agua lluvia?
        </h2>
        <p class="text-xl font-regular text-gray-600 mt-4 italic">
          Filtra hojas, tierra y residuos en segundos. Sin electricidad, sin complicaciones.
        </p>
      </div>

      <!-- Main container with image and explanations -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Filter cross-section image -->
        <div class="order-2 lg:order-1">
          <img 
            src="@/assets/layouts/images/filterCrossSectionImage.jpg" 
            alt="Corte transversal del filtro de agua de lluvia mostrando el proceso de filtración"
            class="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        <!-- Process explanations -->
        <div class="order-1 lg:order-2 space-y-8">
          <!-- Step 01: Rainwater inlet -->
          <div>
            <h3 class="text-2xl font-medium text-black mb-3">
              01. Entrada de agua lluvia
            </h3>
            <p class="text-lg font-regular text-gray-700 leading-relaxed">
              El agua de lluvia baja por la tubería principal y entra al filtro Rainy®, arrastrando hojas, tierra y otros residuos.
            </p>
          </div>

          <!-- Step 02: Clean water outlet -->
          <div>
            <h3 class="text-2xl font-medium text-black mb-3">
              02. Salida de agua limpia
            </h3>
            <p class="text-lg font-regular text-gray-700 leading-relaxed">
              El filtro retiene sólidos mayores a 250 micras (¼ de milímetro) y permite que el agua limpia continúe hacia el tanque o sistema de almacenamiento.
            </p>
          </div>

          <!-- Step 03: Waste drainage -->
          <div>
            <h3 class="text-2xl font-medium text-black mb-3">
              03. Drenaje de residuos
            </h3>
            <p class="text-lg font-regular text-gray-700 leading-relaxed">
              La suciedad es expulsada automáticamente por la salida inferior, sin intervención manual.
            </p>
          </div>

          <!-- Additional explanation -->
          <div class="pt-6 border-t border-gray-200">
            <p class="text-lg font-regular text-gray-700 leading-relaxed mb-4">
              Todo el sistema funciona por gravedad, sin necesidad de electricidad, y evita que la carga orgánica llegue al agua almacenada.
            </p>
            <p class="text-lg font-regular text-gray-700 leading-relaxed mb-4">
              Esto previene malos olores, descomposición y cambios de color.
            </p>
            <p class="text-lg font-regular text-gray-700 leading-relaxed">
              El resultado es agua limpia, lista para <strong>usos no potables</strong> como riego, lavado, almacenamiento o sanitarios.
            </p>
          </div>

        </div>
      </div>

      <!-- Potabilization note - Below the entire section -->
      <div class="mt-16 max-w-4xl mx-auto">
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h4 class="text-lg font-semibold text-black mb-3">
            NOTA SOBRE POTABILIZACIÓN:
          </h4>
          <div class="flex items-start space-x-3">
            <span class="text-yellow-600 text-xl mt-1">⚠️</span>
            <p class="text-base font-regular text-gray-700 leading-relaxed">
              El agua lluvia filtrada no es apta para consumo humano directo. Si deseas potabilizar el agua lluvia, también contamos con sistemas complementarios para ese fin.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Functionality Section Component Script
 * Currently no reactive functionality - purely presentational component
 * 
 * Features:
 * - Educational content about filter operation
 * - Responsive grid layout
 * - Cross-section image with detailed explanations
 * - Three-step filtration process breakdown
 */
</script>
