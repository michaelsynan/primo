<template>
  <a href="#main-content"
    class="sr-only z-10 focus:not-sr-only focus:block focus:bg-white focus:text-black focus:p-2 focus:z-50 focus:fixed focus:top-2 focus:left-2">
    Skip to main content
  </a>


  <UApp>
    <SharedNav class="fixed w-full shared-nav" :class="{ 'nav-hidden': !showNavbar }" />
    <Transition name="page" mode="out-in">
      <NuxtPage />
    </Transition>
    <SharedFooter />
  </UApp>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Google Analytics setup
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
  ]
});

const showNavbar = ref(true);
let lastScrollTop = 0;

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
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
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

.page-enter-active,
.page-leave-active {
  transition: opacity 0.20s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
