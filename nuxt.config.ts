// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "@nuxtjs/leaflet", "@nuxt/scripts"],

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },
  site: { url: "https://primosewercleaning.com", name: "Primo Sewer Cleaning" },
  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
      templateParams: {
        separator: "|",
        siteName: "Primo Sewer Cleaning",
      },
    },
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else if (to.hash) {
        return {
          el: to.hash,
          behavior: "smooth",
        };
      } else {
        return { top: 0, behavior: "smooth" };
      }
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