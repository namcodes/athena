/** @type {import('tailwindcss').Config} */

const { colors, fontFamily, borderRadius, fontSize, lineHeight, borderTransform, fontWeight, backgroundImage, dropShadow} = require('./src/theme/pitg-config.cjs')

export default {
  content: ['src/**/*.{html,js,css}'],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '200px',
      'md': '700px',
      'lg': '1440px',
      'xl': '1920px'
    },
    extend: {
      fontFamily,
      colors,
      borderRadius,
      fontSize,
      lineHeight,
      borderTransform,
      fontWeight,
      backgroundImage,
      dropShadow,
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
