<template>
  <div class="border-b bg-stone-950 fixed">
    <div class="bg-primoRed text-center py-0.5 roboto-condensed cursor-pointer">
      Call Now • (570) 905-8441
    </div>
    <div class="relative py-2">
      <div class="text-left md:text-center caslon text-xl tracking-wide px-2">
        PRIMO SEWER CLEANING
      </div>
      <div>
        <div @click="showDropdown = !showDropdown"
          class="absolute right-0 top-0 h-full flex items-center justify-center px-8 border-l caslon text-xl tracking-wide cursor-pointer">
          <div>Services</div>
        </div>
      </div>
    </div>
    <!-- Position the dropdown at the bottom of the nav bar container -->
    <SharedNavDropdown v-if="showDropdown" class="absolute w-[400px] top-full right-0 border p-10 bg-stone-950" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showDropdown = ref(false)
</script>
