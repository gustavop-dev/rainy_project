/**
 * Tailwind CSS configuration file
 * Defines custom styles, colors, fonts, and content paths for the design system
 * 
 * @fileoverview Tailwind CSS configuration for Rainy Filters application
 * @author Rainy Filters Team
 * @since 1.0.0
 */

export default {
    // Content paths for Tailwind to scan for class usage
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}", // Scan all Vue, JS, TS files in src directory
    ],
    theme: {
      extend: {
        // Custom font families
        fontFamily: {
          ubuntu: ['Ubuntu', 'sans-serif'], // Ubuntu font with fallback
          bebas: ['Bebas Neue', 'sans-serif'], // Bebas Neue font with fallback
        },
      },
      colors: {
        lemon: '#E6F6FF', // Light blue accent color
      },
    },
    plugins: [],
  }
  