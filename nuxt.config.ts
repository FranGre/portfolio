// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/google-fonts'
  ],
  
  googleFonts: {
    families: {
      Roboto: true, // ejemplo
      'Open+Sans': [300, 400, 600],
    },
    display: 'swap',
  },
})