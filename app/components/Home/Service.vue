<script setup lang="ts">
defineProps({
  icon: String,
  header: String,
  description: String,
  link: String
});
</script>

<template>
  <div class="flex flex-col justify-between gap-4">
    <img class="w-12" :src="icon" :alt="header" />
    <div>
      <h3 class="caslon text-2xl py-2">{{ header }}</h3>
      <p class="roboto leading-loose">{{ description }}</p>
    </div>
    <div class="text-right">
      <NuxtLink :to="link" class="text-sm">Learn More →</NuxtLink>
    </div>
  </div>
</template>
