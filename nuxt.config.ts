// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@ant-design-vue/nuxt',
    '@unocss/nuxt',
    "nuxt-lodash",
    'nuxt-icon',
    'vue3-carousel-nuxt',
    '@nuxtjs/i18n',
  ],
  css: ['assets/styles/main.css'],
  antd: {
    // Options
  },
  devtools: { enabled: true }
})
