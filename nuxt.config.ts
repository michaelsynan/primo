// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "@nuxtjs/leaflet"],

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  tailwindcss: {
    theme: {
      extend: {
        colors: {
          primoGreen: "#008C45", // Custom primary color
        },
      },
    },
  },

  compatibilityDate: "2024-11-27",
});
