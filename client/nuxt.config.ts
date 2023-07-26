// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-lodash',
    '@nuxtjs/i18n',
    '@element-plus/nuxt',
    'nuxt-icon',
    'vue3-carousel-nuxt'
  ],
  css: ['assets/styles/main.css'],
  i18n: {
    /* module options */
  },
  elementPlus: { /** Options */ }

})
