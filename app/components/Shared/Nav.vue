<template>
  <div class="border-b bg-stone-950 fixed" ref="dropdownContainer">
    <div class="bg-primoRed text-center py-0.5 roboto-condensed cursor-pointer">
      Call Now • (570) 905-8441
    </div>
    <div class="relative py-2">
      <div class="text-left md:text-center caslon text-xl tracking-wide px-2">
        <Nuxt-link to="/">PRIMO SEWER CLEANING</Nuxt-link>
      </div>
      <div>
        <div @click="toggleDropdown" @click.stop
          class="absolute right-0 top-0 h-full flex items-center justify-center px-8 border-l caslon text-xl tracking-wide cursor-pointer">
          <div class="flex flex-row gap-3"><span>Services</span>

            <img class="transition-all" :class="{ 'rotate-180': showDropdown }" src="/chevron-thin.svg" />

          </div>
        </div>
      </div>
    </div>
    <!-- Position the dropdown at the bottom of the nav bar container -->
    <SharedNavDropdown v-if="showDropdown" class="absolute w-[400px] top-full right-0 border p-10 bg-stone-950" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const showDropdown = ref(false)
const dropdownContainer = ref(null)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const handleClickOutside = event => {
  if (!dropdownContainer.value.contains(event.target)) {
    showDropdown.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>
