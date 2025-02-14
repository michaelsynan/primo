<template>
  <div class="border-b bg-stone-950 fixed" ref="dropdownContainer">
    <div class="bg-primoRed text-center py-0.5 roboto-condensed cursor-pointer">
      Call Now • (570) 905-8441
    </div>
    <div class="relative py-1.5 md:py-2 border-t">
      <div class="text-left md:text-center fancy font-bold text-lg md:text-xl tracking-wide px-2">
        <Nuxt-link to="/">PRIMO SEWER CLEANING</Nuxt-link>
      </div>
      <div>
        <div @click="toggleDropdown" @click.stop
          class="absolute right-0 top-0 h-full flex items-center justify-center px-4 md:px-8 border-l fancy text-lg md:text-xl tracking-wide cursor-pointer">
          <div class="flex flex-row gap-3"><span>Services</span>

            <img class="transition-all duration-300" :class="{ 'rotate-180': showDropdown }" src="/chevron-thin.svg" />

          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <SharedNavDropdown v-if="showDropdown"
        class="absolute w-full md:w-[400px] top-full right-0 border p-4 md:p-10 bg-stone-950 border-l-0 md:border-l border-r-0" />
    </transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>