<script setup lang="ts">
import { computed } from 'vue'

useSeoMeta({
  title: 'Video Camera Inspection for Plumbing',
  description: 'Primo Sewer Cleaning offers advanced video camera inspections for plumbing systems in NE Pennsylvania, including Lackawanna and Luzerne County. Identify clogs, leaks, root intrusions, and more without the need for invasive digging. Contact us for accurate diagnostics and efficient plumbing solutions.',
})

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('video.webp')
  return {
    backgroundImage: `url('${imgUrl}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})
</script>

<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto pb-20 bg-stone-900">
    <div id="header-div"
      class="relative w-full h-80 md:h-96 rounded overflow-hidden flex items-center justify-center text-white text-center px-4 mt-[74px] border-b border-stone-600"
      :style="backgroundStyles">

      <!-- Semi-dark transparency overlay -->
      <div class="absolute inset-0 bg-black/50 bg-opacity-50 z-[1]"></div>

      <h1 class="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl text-stone-50 fancy z-[2]">
        Video Camera Inspection
      </h1>
    </div>

    <!-- Content wrapper with padding on mobile -->
    <div class="px-4 md:px-0">
      <div class="max-w-4xl mx-auto">
        <p class="roboto text-xl leading-loose mt-6">
          At Primo Sewer Cleaning, we use advanced video camera inspection technology to provide a detailed view of your
          plumbing system.
          This helps us accurately diagnose issues in real-time without the need for invasive digging, saving you time
          and
          money.
          Our experts identify blockages, leaks, and other issues quickly and effectively.
        </p>

        <h2 class="text-2xl font-bold mt-6 mb-2.5">Common Problems Identified by Video Camera Inspections</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Clogs:</strong> The camera helps pinpoint the location and cause of stubborn blockages.</li>
          <li><strong>Leaks:</strong> We can identify cracks, breaks, and leaks in your pipes, preventing costly water
            damage.</li>
          <li><strong>Tree Root Intrusions:</strong> Tree roots invading your pipes can be located and assessed before
            causing further damage.</li>
          <li><strong>Corrosion:</strong> Early signs of pipe corrosion can be detected, preventing sudden pipe
            failures.
          </li>
        </ul>
      </div>

      <SharedCTA />

      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mt-6 mb-2.5">Why Choose Video Camera Inspection?</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Non-Invasive:</strong> No digging required! The camera allows us to inspect pipes without causing
            damage to your yard or home.</li>
          <li><strong>Accurate Diagnostics:</strong> The video footage allows our technicians to accurately diagnose the
            issue and recommend the best solution.</li>
          <li><strong>Cost-Effective:</strong> Prevents unnecessary repairs by giving us a clear view of the problem
            area.
          </li>
          <li><strong>Time-Saving:</strong> Quick and efficient inspections reduce the time spent diagnosing problems,
            getting your plumbing back to normal faster.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-6 mb-2.5">Preventative Maintenance</h2>
        <p class="text-lg">
          Regular video camera inspections can help catch small issues before they turn into big problems. Stay
          proactive
          and keep your plumbing system in top condition by scheduling routine inspections.
        </p>

        <div class="mt-6 md:w-max">
          <SharedButton to="/contact-a-plumber" text="Contact Us" class="max-w-content" />
        </div>
      </div>
    </div>
  </div>
</template>
