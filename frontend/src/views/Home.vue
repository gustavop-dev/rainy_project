<!--
  Home Page View
  Main landing page that orchestrates all home section components
  
  @component HomeView
  @author Rainy Filters Team
  @since 1.0.0
-->

<template>
    <!-- Navigation bar - fixed at top -->
    <Navbar />
    
    <!-- Contact banner/CTA section -->
    <ContactBanner />
    
    <!-- Site footer -->
    <Footer />
</template>

<script setup>
/**
 * Home View Component Script
 * Imports and orchestrates all home page section components
 */

// Layout components
import Navbar from '@/components/layouts/Navbar.vue'
import Footer from '@/components/layouts/Footer.vue'
import ContactForm from '@/components/layouts/ContactForm.vue'
import ContactBanner from '@/components/layouts/ContactBanner.vue'

// Home-specific section components
import Hero from '@/components/home/Hero.vue'
import Characteristics from '@/components/home/Characteristics.vue'
import Functionality from '@/components/home/Functionality.vue'

// Product-related components
import Products from '@/components/products/Products.vue'
</script>