<template>

  <div id="contact" class="grid md:grid-cols-2 grid-cols-1 gap-10 my-40 max-w-5xl">
    <div ref="mapHost" class="flex justify-center items-center p-4 md:p-0">
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

const mapHost = ref(null)
const mapVisible = ref(false)
let mapObserver

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    mapVisible.value = true
    return
  }

  mapObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      mapVisible.value = true
      mapObserver?.disconnect()
    }
  }, { rootMargin: '300px 0px' })

  if (mapHost.value) mapObserver.observe(mapHost.value)
})

onUnmounted(() => mapObserver?.disconnect())
</script>
