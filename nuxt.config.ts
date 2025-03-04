// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "@nuxtjs/leaflet"],

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
      templateParams: {
        separator: "—",
        siteName: "Primo Sewer Cleaning",
      },
    },
  },

  tailwindcss: {
    theme: {
      extend: {
        colors: {
          primoGreen: "#008C45",
        },
      },
    },
  },
  seo: {
    meta: {
      description: "Sewer and Plumber in  Lackawanna & Luzerne County",
    },
  },

  compatibilityDate: "2024-11-27",
});
