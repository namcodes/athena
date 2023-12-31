const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  fontFamily: {
    'eurostile-bold': 'var(--pitg-font-family-header)',
    'eurostile-regular': 'var(--pitg-font-family-header-copy)',
    'sourcesans': ['var(--pitg-font-family-copy)',...defaultTheme.fontFamily.sans]
  },
  colors: {
    'pitg-primary-purple': 'var(--pitg-primary-purple)',
    'pitg-primary-grey': 'var(--pitg-primary-grey)',
    'pitg-secondary-grey': 'var(--pitg-secondary-grey)',
    'pitg-background-primary': 'var(--pitg-background-primary)',
    'pitg-background-secondary': 'var(--pitg-background-secondary)',
    'pitg-primary-black': 'var(--pitg-primary-black)',
    'pitg-green-900':'var(--pitg-green-900)',
    'pitg-green-700':'var(--pitg-green-700)',
    'pitg-pink-700':'var(--pitg-pink-700)',
    'pitg-pink-500':'var(--pitg-pink-500)',
    'pitg-yellow-300': 'var(--pitg-yellow-300)',
  },
  borderRadius: {
    'pitg-rounded-xs': 'var(--pitg-rounded-xs)',
    'pitg-rounded-sm': 'var(--pitg-rounded-sm)',
    'pitg-rounded-md': 'var(--pitg-rounded-md)',
    'pitg-card-rounded-md': 'var(--pitg-card-rounded-md)',
    'pitg-rounded-lg': 'var(--pitg-rounded-lg)',
    'rounded-test': 'var(--rounded-test)',
  },
  fontSize: {
    'pitg-hero-header': 'var(--pitg-hero-header)',
    'pitg-hero-subtext': 'var(--pitg-hero-subtext)',
    'pitg-card-header': 'var(--pitg-card-header)',
    'pitg-card-subtext': 'var(--pitg-card-subtext)',
    'pitg-card-subtext-md': 'var(--pitg-card-subtext-md)',
    'pitg-title-header': 'var(--pitg-title-header)',
    'pitg-font-text-xs': 'var(--pitg-font-text-xs)',
    'pitg-font-text-sm': 'var(--pitg-font-text-sm)',
    'pitg-font-text-md': 'var(--pitg-font-text-md)',
    'pitg-button-text-md': 'var(--pitg-button-text-md)',
  },
  lineHeight: {
    'pitg-line-hero': 'var(--pitg-line-hero)',
    'pitg-line-hero-subtext': 'var(--pitg-line-hero-subtext)',
    'pitg-line-header': 'var(--pitg-line-header)',
    'pitg-line-header-subtext': 'var(--pitg-line-header-subtext)',
    'pitg-line-subtext': 'var(--pitg-line-subtext)'
  },
  borderTransform: {
    'pitg-transform-sm': 'var(--pitg-transform-sm)',
  },
  fontWeight: {
    'pitg-copy-regular': 'var(--pitg-copy-regular)',
    'pitg-copy-black': 'var(--pitg-copy-black)'
  },
  backgroundImage: {
    //gradients
    'pitg-purple-gradient': 'var(--pitg-purple-gradient)',
    'pitg-green-gradient': 'var(--pitg-green-gradient)',

    //image gradients
    'pitg-hero-image-compliments': 'var(--pitg-hero-image-compliments)',
    'pitg-hero-image-booking': 'var(--pitg-hero-image-booking)',
    'pitg-hero-blogroll-gradient': 'var(--pitg-hero-blogroll-gradient)',
    'pitg-testimonial-gradient-purple': 'var(--pitg-testimonial-gradient-purple)',
    'pitg-testimonial-gradient-green-left': 'var(--pitg-testimonial-gradient-green-left)',
    'pitg-testimonial-gradient-green-right': 'var(--pitg-testimonial-gradient-green-right)',
    'pitg-faq-gradient-light': 'var(--pitg-faq-gradient-light)',
    'pitg-story-gradient-green': 'var(--pitg-story-gradient-green)',
    'pitg-coco-location-gradient': 'var(--pitg-coco-location-gradient)',
    'pitg-miami-location-gradient': 'var(--pitg-miami-location-gradient)',
    'pitg-newsletter-gradient': 'var(--pitg-newsletter-gradient)',
    'pitg-about-purple-gradient': 'var(--pitg-about-purple-gradient)',
    'pitg-coco-location': 'var(--pitg-coco-location)',
    'pitg-miami-location': 'var(--pitg-miami-location)',
    
  },
  dropShadow: {
    'pitg-purple-shadow': 'var(--pitg-purple-shadow)',
    'pitg-white-shadow': 'var(--pitg-white-shadow)',
    'pitg-green-shadow': 'var(--pitg-green-shadow)',
  }
 

}