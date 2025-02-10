<script setup lang="ts">
defineProps({
  icon: String,
  header: String,
  description: String,
  link: String
});
</script>

<template>
  <div class="flex flex-col justify-between gap-4 group">
    <img class="w-12" :src="icon" :alt="header" />
    <div>
      <h3 class="caslon text-2xl py-2 text-stone-50 tracking-wide">{{ header }}</h3>
      <p
        class="roboto leading-loose text-stone-400 group-hover:text-stone-100 transition-colors ease-in-out duration-200">
        {{
          description }}</p>
    </div>
    <div class="text-right ml-auto group relative">
      <NuxtLink :to="link" class="text-sm flex flex-row items-center gap-1">Learn More<div
          class="group-hover:translate-x-1.5 transition-transform duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z" />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
