<template>
  <div class="w-full space-y-4 text-stone-200 text-base">
    <p class="flex items-center gap-2">
      <UIcon name="i-mdi-phone" class="w-5 h-5" aria-hidden="true" />
      <a href="tel:15709058441" class="hover:underline" @click="trackConversion">
        (570) 905-8441
      </a>
    </p>
    <p class="flex items-center gap-2">
      <UIcon name="i-mdi-email" class="w-5 h-5" aria-hidden="true" />
      <a href="mailto:primosewercleaning@gmail.com" class="hover:underline">
        primosewercleaning@gmail.com
      </a>
    </p>
    <p class="flex items-center gap-2">
      <UIcon name="i-mdi-whatsapp" class="w-5 h-5" aria-hidden="true" />
      <a href="https://wa.me/15709058441?text=Hi%2C%20I'm%20interested%20in%20your%20services" class="hover:underline"
        @click="trackConversion">
        Message Us on WhatsApp
      </a>
    </p>
  </div>
</template>

<script setup lang="ts">
// Declare gtag function type
declare global {
  interface Window {
    gtag: (command: string, eventName: string, parameters?: Record<string, unknown>) => void;
  }
}

const trackConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-10963798701/UPK5CP640Y8YEK2V-eso'
    });
  }
};
</script>
