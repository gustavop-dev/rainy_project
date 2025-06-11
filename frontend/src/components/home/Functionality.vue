<!--
  Filter Functionality Section Component
  Explains how Rainy FL water filters work with visual and textual descriptions
  
  @component FunctionalitySection
  @author Rainy Filters Team
  @since 1.0.0
-->

<template>
  <section class="py-16 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Main section title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-light text-black">
          ¿Cómo funcionan nuestros filtros de agua de lluvia?
        </h2>
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
          <!-- Rainwater inlet explanation -->
          <div>
            <h3 class="text-2xl font-medium text-black mb-3">
              Entrada de agua de lluvia (Rainwater inlet) —
            </h3>
            <p class="text-lg font-regular text-gray-700 leading-relaxed">
              El agua de lluvia es recolectada desde los techos y canalizada a través del sistema. 
              En este punto aún contiene hojas, tierra y otras impurezas.
            </p>
          </div>

          <!-- Filtered water outlet explanation -->
          <div>
            <h3 class="text-2xl font-medium text-black mb-3">
              Salida de agua filtrada (Filtered water outlet) —
            </h3>
            <p class="text-lg font-regular text-gray-700 leading-relaxed">
              Dentro del filtro, el agua pasa por un sistema de separación y filtración que retiene residuos. 
              El agua limpia se dirige a su destino: almacenamiento o recarga de acuíferos.
            </p>
          </div>

          <!-- Waste outlet explanation -->
          <div>
            <h3 class="text-2xl font-medium text-black mb-3">
              Salida de residuos (Open drain outlet) —
            </h3>
            <p class="text-lg font-regular text-gray-700 leading-relaxed">
              Los residuos sólidos son expulsados automáticamente por la salida inferior del sistema, 
              lo que evita obstrucciones y reduce el mantenimiento.
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
