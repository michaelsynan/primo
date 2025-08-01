// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/leaflet",
    "@nuxt/scripts",
    "nuxt-og-image",
    "@nuxtjs/seo",
  ],

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  site: {
    url: "https://primosewercleaning.com",
    name: "Primo Sewer Cleaning",
    description:
      "Expert plumbing and sewer services in Northeastern PA, including Luzerne & Lackawanna County. Drain cleaning, water heater repair, and more!",
  },

  app: {
    head: {
      titleTemplate: "%s | Primo Sewer Cleaning",
    },
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
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

  scripts: {
    registry: {
      googleAnalytics: {
        id: "G-5SYL9K88YTnp",
      },
    },
  },

  compatibilityDate: "2024-11-27",
});
