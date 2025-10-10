<script setup>

useSeoMeta({
  title: 'Northeastern PA’s #1 Plumbing & Sewer Experts',
  description: 'Primo Sewer Cleaning offers trusted plumbing and sewer services in Northeastern PA, including Luzerne & Lackawanna County. Drain cleaning, water heater repair, and more!',
})
defineOgImage({ url: '/primo-og.png' })
</script>
<template>
  <main id="main-content" class="flex flex-col items-center justify-center">
    <HomeHero />
    <LazyHomeServices />
    <SharedTestimonials />
    <HomeContact />
  </main>
</template>
