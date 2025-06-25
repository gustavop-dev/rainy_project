<!--
  Product Characteristics Section Component
  Displays key features of Rainy FL filters in a marquee carousel
  
  @component CharacteristicsSection
  @author Rainy Filters Team
  @since 1.0.0
-->

<template>
  <section class="p-3">
    <!-- Main container with white background -->
    <div class="pt-16 pb-8 bg-white rounded-lg">
      <!-- Section title -->
      <h2 class="max-w-7xl mx-auto mb-12 px-3 text-center font-light text-4xl text-black lg:text-6xl lg:px-0">
        Características generales de los filtros <span class="whitespace-nowrap">RAINY FL</span>
      </h2>
      <p class="text-lg font-regular mb-4 px-10">
        Todos los modelos Rainy FL comparten un diseño eficiente, duradero y libre de mantenimiento. Están pensados para facilitar la recolección de agua lluvia sin complicaciones técnicas, repuestos ni energía eléctrica.
      </p>
      <p class="text-lg font-regular mb-12 px-10">
        Instala, filtra y reutiliza, así de simple.
      </p>
      
      <!-- Marquee carousel for features -->
      <Vue3Marquee :pause-on-hover="true">
        <!-- Feature card for each characteristic -->
        <div class="w-72 h-full mx-auto px-4" v-for="(feature, index) in features" :key="index">
          <div class="bg-[#BFE8FF] rounded-xl relative h-full p-6">
            <!-- Feature icon -->
            <component :is="feature.icon" class="w-8 h-8 text-black mb-6"></component>
            
            <!-- Feature content -->
            <div class="space-y-2">
              <h3 class="text-black font-medium text-lg leading-tight">{{ feature.title }}</h3>
              <p class="text-black font-regular text-sm leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </Vue3Marquee>
    </div>
  </section>
</template>

<script setup>
/**
 * Characteristics Section Component Script
 * Manages the display of product features in a horizontal scrolling marquee
 */

import { Vue3Marquee } from 'vue3-marquee'
import { 
  CheckCircleIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  LightBulbIcon,
  CogIcon,
  LockClosedIcon,
  ArrowTrendingUpIcon
} from '@heroicons/vue/24/solid'

/**
 * Product features data array
 * Each feature contains an icon, title, and description
 * 
 * @type {Array<Object>} Array of feature objects
 * @property {Component} icon - Heroicons component for visual representation
 * @property {string} title - Feature headline text
 * @property {string} description - Detailed feature description
 */
const features = [
  { 
    icon: CogIcon, 
    title: 'Fácil instalación', 
    description: 'Compatible con cualquier bajante existente o nueva. Gracias a su unión giratoria de 360°, se adapta fácilmente a cualquier espacio.' 
  },
  { 
    icon: CheckCircleIcon, 
    title: 'Sistema de autolimpieza', 
    description: 'Evita taponamientos y acumulación de residuos. El agua circula libremente sin retorno ni obstrucciones.' 
  },
  { 
    icon: CogIcon, 
    title: 'Sistema mecánico', 
    description: 'Opera por gravedad. No tiene partes móviles ni requiere energía externa.' 
  },
  { 
    icon: UserCircleIcon, 
    title: 'Múltiples aplicaciones', 
    description: 'Ideal para colegios, casas, industrias, edificios, fincas y campamentos de obra.' 
  },
  { 
    icon: LockClosedIcon, 
    title: 'Cero costos de mantenimiento', 
    description: 'No requiere combustibles ni repuestos. Una solución de largo plazo, sin gastos recurrentes.' 
  },
  { 
    icon: LightBulbIcon, 
    title: 'Impacto sostenible', 
    description: 'Reduce el consumo de agua potable. Aprovecha un recurso natural sin contaminar.' 
  },
  { 
    icon: ArrowTrendingUpIcon, 
    title: 'Alta eficiencia', 
    description: 'Filtra grandes volúmenes de agua lluvia en segundos. Optimiza la recolección incluso en lluvias intensas.' 
  },
  { 
    icon: ShieldCheckIcon, 
    title: 'Materiales resistentes', 
    description: 'Filtro en acero inoxidable y cuerpo en HDPE estabilizado UV. Resiste corrosión, sol e intemperie por más de 20 años.' 
  }
]
</script>
