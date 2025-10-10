<template>
  <NuxtLink :to="getButtonLink()"
    class="roboto flex items-center justify-center w-full md:w-auto text-base border hover:border-primoGreen/80 hover:bg-primoGreen/80 rounded cursor-pointer"
    :class="buttonClass" role="button" @click="handleClick">
    <UIcon v-if="icon && variant === 'email'" name="i-mdi-email" class="w-4 h-4 mr-2" />
    <UIcon v-else-if="icon && variant === 'whatsapp'" name="i-mdi-whatsapp" class="w-4 h-4 mr-2" />
    <UIcon v-else-if="icon" name="i-mdi-phone" class="w-4 h-4 mr-2" />
    {{ props.text }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Declare gtag function type
declare global {
  interface Window {
    gtag: (command: string, eventName: string, parameters?: Record<string, unknown>) => void;
  }
}

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  icon: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'primary'
  }
});

const getButtonLink = () => {
  switch (props.variant) {
    case 'email':
      return `mailto:${props.link || 'primosewercleaning@gmail.com'}`;
    case 'whatsapp':
      return `https://wa.me/15709058441?text=Hi%2C%20I'm%20interested%20in%20your%20services`;
    case 'call':
      return `tel:570-905-8441`;
    default:
      return props.link || '';
  }
};

const handleClick = () => {
  // Fire conversion event for phone and WhatsApp clicks
  if (props.variant === 'call' || props.variant === 'whatsapp') {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-10963798701/UPK5CP640Y8YEK2V-eso'
      });
    }
  }
};

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
