<script setup>
const title = ref('Loading...')

useHead({
  // computed getter syntax
  title: () => `${title.value} - Plumber and Sewer Services in NE Pennsylvania`
})

useSeoMeta({
  title: 'Primo Sewer Cleaning',
  description: 'Plumbing and Sewer Cleaning in NE Pennsylvania, Lakawana and Luzerne County',
})

</script>
<template>
  <main class="flex flex-col items-center justify-center">
    <HomeHero />
    <LazyHomeServices />
    <SharedTestimonials />
    <HomeContact />
  </main>
</template>
