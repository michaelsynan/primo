// https://nuxt.com/docs/api/configuration/nuxt-config
import { serviceAreas } from "./app/data/locations";
import { services } from "./app/data/services";

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
      htmlAttrs: {
        lang: "en",
      },
      titleTemplate: "%s | Primo Sewer Cleaning",
    },
  },

  // seo: {
  //   redirectToCanonicalSiteUrl: true,
  // },

  // Sitemap configuration with dynamic URLs
  sitemap: {
    urls: () => {
      const dynamicUrls: any[] = [];

      // Generate all service area + service combinations
      serviceAreas.forEach((location) => {
        services.forEach((service) => {
          dynamicUrls.push({
            loc: `/service-area/${location.slug}/${service.slug}`,
            lastmod: new Date().toISOString().split("T")[0],
            changefreq: "monthly",
            priority: 0.8,
          });
        });
      });

      // Add other static pages
      const staticPages = [
        { loc: "/", priority: 1.0 },
        { loc: "/service-area", priority: 0.9 },
        { loc: "/contact-a-plumber", priority: 0.9 },
        { loc: "/emergency", priority: 0.9 },
        { loc: "/24-7-emergency-plumbing-sewer-services", priority: 0.9 },
        { loc: "/plumbing-sewer-services", priority: 0.8 },
        { loc: "/privacy", priority: 0.3 },
        { loc: "/legal", priority: 0.3 },
        // Add individual service pages
        {
          loc: "/luzerne-lackawanna-plumbing-sewer/sewer-diagnosis-inspection",
          priority: 0.8,
        },
        {
          loc: "/luzerne-lackawanna-plumbing-sewer/plumbing-video-camera-pipe-inspection",
          priority: 0.8,
        },
        {
          loc: "/luzerne-lackawanna-plumbing-sewer/sewer-drain-cleaning-repair",
          priority: 0.8,
        },
        {
          loc: "/luzerne-lackawanna-plumbing-sewer/high-pressure-water-jetting",
          priority: 0.8,
        },
        {
          loc: "/luzerne-lackawanna-plumbing-sewer/water-heater-repair-replacement",
          priority: 0.8,
        },
        {
          loc: "/luzerne-lackawanna-plumbing-sewer/faucet-installation",
          priority: 0.8,
        },
      ];

      staticPages.forEach((page) => {
        dynamicUrls.push({
          loc: page.loc,
          lastmod: new Date().toISOString().split("T")[0],
          changefreq: "monthly",
          priority: page.priority,
        });
      });

      return dynamicUrls;
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

  scripts: {
    registry: {
      googleAnalytics: {
        id: "G-5SYL9K88YTnp",
      },
      metaPixel: {
        id: "1409386597655675",
      },
    },
  },

  compatibilityDate: "2024-11-27",

  schemaOrg: {
    identity: {
      "@type": "Plumber",
      name: "Primo Plumbing & Sewer Cleaning",
      url: "https://primosewercleaning.com",
      description:
        "Expert plumbing and sewer services in Northeastern PA, including Luzerne & Lackawanna County. Drain cleaning, water heater repair, and more!",
      telephone: "+1-570-905-8441",
      logo: "https://primosewercleaning.com/primo-sewer-cleaning.png",
      image: ["https://primosewercleaning.com/primo-sewer-cleaning.png"],
      sameAs: [
        "https://www.facebook.com/primosewercleaning",
        "https://www.instagram.com/primosewercleaning/",
      ],
      // List broad areas served
      areaServed: [
        "Pennsylvania",
        "Luzerne County, Pennsylvania",
        "Lackawanna County, Pennsylvania",
        // Cities from serviceAreas data
        ...serviceAreas.map((l) => l.name),
      ],
      // Structured serviceArea entries for richer semantics
      serviceArea: [
        { "@type": "AdministrativeArea", name: "Pennsylvania" },
        { "@type": "AdministrativeArea", name: "Luzerne County" },
        { "@type": "AdministrativeArea", name: "Lackawanna County" },
        ...serviceAreas.map((l) => ({ "@type": "City", name: l.name })),
      ],
      // Services offered, derived from services data + core topics
      knowsAbout: [
        "Plumbing",
        "Sewer Cleaning",
        "Drain Cleaning",
        "Hydrojetting",
        "Video Camera Inspection",
        ...services.map((s) => s.name),
      ],
      // Offers catalog with links to individual service pages
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Plumbing & Sewer Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.description,
            url: `https://primosewercleaning.com/luzerne-lackawanna-plumbing-sewer/${s.slug}`,
          },
        })),
      },
      // 24/7 opening hours
      openingHoursSpecification: [
        {
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+1-570-905-8441",
          areaServed: ["Luzerne County", "Lackawanna County", "Pennsylvania"],
          availableLanguage: ["English"],
        },
      ],
    },
  },
});
