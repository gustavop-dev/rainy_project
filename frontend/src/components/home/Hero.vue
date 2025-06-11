<!--
  Hero Section Component
  Main banner section with background video and headline text
  
  @component HeroSection
  @author Rainy Filters Team
  @since 1.0.0
-->

<template>
    <!-- Hero container with full viewport height -->
    <div class="h-screen p-3">
        <!-- Rounded video container with overlay -->
        <div class="bg-black rounded-xl w-full h-full relative overflow-hidden">
            <!-- Background presentation video -->
            <video
                class="absolute top-0 left-0 w-full h-full object-cover opacity-60"
                src="@/assets/home/video/presentation_video.mp4"
                autoplay
                muted
                loop
                playsinline
            ></video>
            
            <!-- Hero text overlay positioned at bottom -->
            <div class="absolute w-full bottom-0 left-0 py-10 px-10 z-10">
                <h1 class="text-white text-6xl font-light w-1/2">
                    Agua Pura, Vida Pura – Filtra, Bebe, Disfruta
                </h1>
            </div>
        </div>
    </div>
</template>

<script setup>
/**
 * Hero Section Component Script
 * Currently no reactive functionality - purely presentational component
 * 
 * Features:
 * - Full-screen video background
 * - Auto-playing, looping video
 * - Overlay text with brand message
 * - Responsive design with mobile optimization (playsinline)
 */
</script>