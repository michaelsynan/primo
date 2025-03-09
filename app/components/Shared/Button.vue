<template>
  <NuxtLink :to="variant === 'email' ? `mailto:${link}`
    : variant === 'whatsapp' ? `https://wa.me/${link}`
      : variant === 'call' ? `tel:570-905-8441 `
        : link"
    class="roboto flex items-center justify-center w-full min-w-max text-base border hover:border-primoGreen/80 hover:bg-primoGreen/80 rounded cursor-pointer"
    :class="buttonClass" role="button">
    <UIcon v-if="icon && variant === 'email'" name="i-mdi-email" class="w-4 h-4 mr-2" />
    <UIcon v-else-if="icon && variant === 'whatsapp'" name="i-mdi-whatsapp" class="w-4 h-4 mr-2" />
    <UIcon v-else-if="icon" name="i-mdi-phone" class="w-4 h-4 mr-2" />
    {{ props.text }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  text: String,
  link: String,
  icon: Boolean,
  variant: {
    type: String,
    default: 'primary'
  }
});

const buttonClass = computed(() => {
  switch (props.variant) {
    case 'ghost':
      return 'hover:bg-primoGreen/80 text-white transition-all py-2 px-4 text-base border border-white hover:border-primoGreen/80 rounded cursor-pointer';
    case 'email':
      return 'bg-primoGreen hover:bg-primoGreen/80 transition-all py-2 px-4 text-base text-white rounded cursor-pointer border-primoGreen border';
    case 'whatsapp':
      return 'bg-primoGreen hover:bg-primoGreen/80 transition-all py-2 px-4 text-base text-white rounded cursor-pointer border-primoGreen border';
    case 'primary':
    default:
      return 'bg-primoGreen hover:bg-primoGreen/80 transition-all py-2 px-4 text-base text-white rounded cursor-pointer border-primoGreen border';
  }
});
</script>
