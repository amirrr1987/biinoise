// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-lodash',
    'nuxt-icon',
    '@unocss/nuxt',
    'nuxt-lodash',
    '@ant-design-vue/nuxt',
    'vue3-carousel-nuxt',
  ],
  antd: {
    // Options
  },
  css: ['assets/styles/main.css'],
  devtools: { enabled: true },
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
})
