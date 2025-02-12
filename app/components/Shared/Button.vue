<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  text: String,
  link: String,
  variant: {
    type: String,
    default: 'primary'
  }
});

const buttonClass = computed(() => {
  switch (props.variant) {
    case 'ghost':
      return 'hover:bg-primoGreen/80 text-white transition-all py-2 px-4 text-base border border-white hover:border-primoGreen/80 rounded cursor-pointer';
    case 'primary':
    default:
      return 'bg-primoGreen hover:bg-primoGreen/80 transition-all py-2 px-4 text-base text-white rounded cursor-pointer border-primoGreen border';
  }
});
</script>

<template>
  <Nuxt-link :to="link" class="w-auto"><button class="roboto w-full" :class="buttonClass">
      {{ props.text }}
    </button></Nuxt-link>
</template>
