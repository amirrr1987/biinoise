// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-lodash',
    '@nuxtjs/i18n',
    '@element-plus/nuxt',
    'nuxt-icon',
    'vue3-carousel-nuxt'
  ],
  css: ['assets/styles/main.scss'],
  i18n: {
    /* module options */
  },
  elementPlus: { /** Options */ },
  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore',],
  },
})
