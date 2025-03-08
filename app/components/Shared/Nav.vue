<template>
  <header class="border-b bg-stone-950 fixed w-full" ref="dropdownContainer">
    <div class="bg-primoRed text-center py-0.5 roboto-condensed cursor-pointer">
      <a href="tel:+15709058441" class="text-white" aria-label="Call Primo Sewer Cleaning at (570) 905-8441">
        Call Now • (570) 905-8441
      </a>
    </div>
    <div class="relative py-1.5 md:py-2 border-t">
      <div class="text-left md:text-center fancy-bold font-bold text-lg md:text-xl tracking-wide px-2">
        <NuxtLink to="/">PRIMO SEWER CLEANING</NuxtLink>
      </div>
      <nav>
        <button @click="toggleDropdown" @click.stop
          class="absolute right-0 top-0 h-full flex items-center justify-center px-4 md:px-8 border-l fancy text-lg md:text-xl tracking-wide cursor-pointer"
          aria-haspopup="menu" :aria-expanded="showDropdown.toString()" aria-controls="services-menu">
          <div class="flex flex-row gap-3">
            <span>Services</span>
            <img class="transition-all duration-300" :class="{ 'rotate-180': showDropdown }" src="/chevron-thin.svg"
              alt="" aria-hidden="true" />
          </div>
        </button>
      </nav>
    </div>
    <transition name="fade">
      <nav v-show="showDropdown" id="services-menu" role="menu"
        class="absolute w-full md:w-[400px] top-full right-0 border p-4 md:p-5 bg-stone-950 border-l-0 md:border-l border-r-0">
        <SharedNavDropdown />
      </nav>
    </transition>
  </header>
</template>


<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const showDropdown = ref(false)
const dropdownContainer = ref(null)
const route = useRoute()

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const handleClickOutside = event => {
  if (!dropdownContainer.value.contains(event.target)) {
    showDropdown.value = false
  }
}

watch(route, () => {
  showDropdown.value = false
})

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
