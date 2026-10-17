<template>

  <div id="contact" class="grid md:grid-cols-2 grid-cols-1 gap-10 my-40 max-w-5xl">
    <div class="flex justify-center items-center p-4 md:p-0">
      <LazyHomeContactMap v-if="mapVisible" class="!z-10" />
      <div
        v-else
        class="map-placeholder flex min-h-[500px] w-full items-center justify-center rounded border bg-stone-900/50 text-center text-sm text-stone-300 md:w-[500px]"
        aria-label="Service area map"
      >
        Service area map loads as you scroll
      </div>
    </div>
    <div class="flex justify-start items-start flex-col p-4 md:p-0 align-top">
      <h3 class="fancy text-4xl pb-4">Get In Touch</h3>
      <div class="roboto text-lg pb-4 leading-loose text-stone-200">Serving Dickson City, Lackawanna County, and the
        greater
        Northeastern
        Pennsylvania Region.
      </div>
      <HomeContactForm />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const mapVisible = ref(false)
const showMapAfterScroll = () => {
  if (window.scrollY >= window.innerHeight) {
    mapVisible.value = true
    window.removeEventListener('scroll', showMapAfterScroll)
  }
}

onMounted(() => {
  window.addEventListener('scroll', showMapAfterScroll, { passive: true })
  showMapAfterScroll()
})

onUnmounted(() => window.removeEventListener('scroll', showMapAfterScroll))
</script>
