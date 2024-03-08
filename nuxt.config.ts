export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Montserret: true,
        },
      },
    ],
    'nuxt-bootstrap-icons',
  ],
});
