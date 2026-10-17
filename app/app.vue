<template>
  <a
    href="#main-content"
    class="sr-only z-10 focus:not-sr-only focus:block focus:bg-white focus:text-black focus:p-2 focus:z-50 focus:fixed focus:top-2 focus:left-2"
  >
    Skip to main content
  </a>


  <UApp>
    <SharedNav
      class="fixed w-full shared-nav"
      :class="{ 'nav-hidden': !showNavbar }"
    />
    <NuxtPage />
    <SharedFooter />
  </UApp>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
// Google Analytics and Meta Pixel setup
useHead({
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=AW-10963798701'
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-10963798701');
      `
    }
  ],
  noscript: [
    {
      children: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1409386597655675&ev=PageView&noscript=1" />`
    }
  ]
});

// Organization structured data
// defineOrganization({
//   name: 'Primo Plumbing & Sewer Cleaning',
//   logo: '/primo-logo-white.png',
//   url: 'https://primosewercleaning.com',
//   sameAs: [
//     'https://www.facebook.com/primosewercleaning',
//     'https://www.instagram.com/primosewercleaning/'
//   ],
//   contactPoint: [
//     {
//       telephone: '+1-570-905-8441',
//       contactType: 'customer service',
//       areaServed: 'Luzerne County, Lackawanna County, Pennsylvania',
//       availableLanguage: ['English']
//     }
//   ]
// });

const showNavbar = ref(true);
const { $scripts } = useNuxtApp();
let lastScrollTop = 0;
let metaPixelTimer;
let metaPixelLoaded = false;

const loadMetaPixel = () => {
  if (metaPixelLoaded) return;

  metaPixelLoaded = true;
  window.clearTimeout(metaPixelTimer);
  window.removeEventListener('pointerdown', loadMetaPixel);
  window.removeEventListener('keydown', loadMetaPixel);
  window.removeEventListener('touchstart', loadMetaPixel);
  window.removeEventListener('scroll', loadMetaPixel);
  void $scripts.metaPixel.load();
};

const handleScroll = () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop && currentScroll > 50) { // Check added to avoid hiding on very small scrolls
    showNavbar.value = false;
  } else {
    showNavbar.value = true;
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('pointerdown', loadMetaPixel, { once: true, passive: true });
  window.addEventListener('keydown', loadMetaPixel, { once: true });
  window.addEventListener('touchstart', loadMetaPixel, { once: true, passive: true });
  window.addEventListener('scroll', loadMetaPixel, { once: true, passive: true });
  metaPixelTimer = window.setTimeout(loadMetaPixel, 15000);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.clearTimeout(metaPixelTimer);
  window.removeEventListener('pointerdown', loadMetaPixel);
  window.removeEventListener('keydown', loadMetaPixel);
  window.removeEventListener('touchstart', loadMetaPixel);
  window.removeEventListener('scroll', loadMetaPixel);
});
</script>

<style scoped>
.shared-nav {
  z-index: 100;
  transition: transform 0.3s, opacity 0.20s;
  transform: translateY(0%);
  opacity: 1;
}

.nav-hidden {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
