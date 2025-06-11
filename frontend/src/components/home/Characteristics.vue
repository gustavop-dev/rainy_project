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
    <div class="py-16 bg-white rounded-lg">
      <!-- Section title -->
      <h2 class="max-w-7xl mx-auto mb-12 px-3 text-center font-light text-4xl text-black lg:text-6xl lg:px-0">
        Características de los filtros Rainy FL
      </h2>
      
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
    icon: CheckCircleIcon, 
    title: 'Alta Capacidad y Rendimiento –', 
    description: ' Diseñados para filtrar grandes volúmenes de agua, ideales para propiedades con alta demanda.' 
  },
  { 
    icon: LightBulbIcon, 
    title: 'Eficientes y Ecológicos –', 
    description: ' Reduce tu impacto ambiental y ahorra en agua embotellada.' 
  },
  { 
    icon: ShieldCheckIcon, 
    title: 'Resistentes y Duraderos –', 
    description: ' Diseñados para filtrar grandes volúmenes de agua, ideales para propiedades con alta demanda.' 
  },
  { 
    icon: CogIcon, 
    title: 'Fácil Mantenimiento y Larga Vida Útil –', 
    description: ' Diseñados para funcionar con mínimas intervenciones técnicas.' 
  },
  { 
    icon: UserCircleIcon, 
    title: 'Agua Segura para Toda tu Propiedad –', 
    description: ' Desde agua potable en la cocina hasta agua para riego y uso doméstico.' 
  },
  { 
    icon: LockClosedIcon, 
    title: 'Filtración Personalizada para Cada Necesidad –', 
    description: ' Sistemas adaptados a diferentes fuentes de agua, desde pozos profundos hasta redes municipales.' 
  }
]
</script>
