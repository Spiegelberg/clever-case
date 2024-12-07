// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
  vite: {
    css: {
      // Enable CSS modules with custom class name hashing
      modules: {
        generateScopedName: '[local]__[hash:base64:8]', // Customize class name format
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['nuxt-svgo', '@nuxt/fonts', '@nuxtjs/device'],
});
