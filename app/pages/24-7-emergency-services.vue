<script setup lang="ts">
import { computed } from 'vue'

useSeoMeta({
  title: '24/7 Emergency Services',
  description: 'Available 24/7 for emergency sewer and drain cleaning in Northeastern PA. Fast response for backed up sewers, overflowing toilets, and flooding. Call now for immediate assistance!',
})

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('/plumber.jpg')
  return {
    backgroundImage: `url('${imgUrl}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})
</script>

<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto pb-20 bg-stone-950 text-stone-300">
    <div id="header-div"
      class="relative w-full h-80 md:h-96 overflow-hidden flex items-center justify-center text-white text-center px-4 mt-[74px] border-b border-stone-600"
      :style="backgroundStyles">

      <!-- Semi-dark transparency overlay -->
      <div class="absolute inset-0 bg-black/50 bg-opacity-50 z-[1]"></div>

      <h1 class="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl text-stone-50 fancy z-[2]">
        24/7 Emergency Services
      </h1>
    </div>

    <!-- Content wrapper with padding on mobile -->
    <div class="px-4 md:px-0 mt-12">
      <section class="max-w-4xl mx-auto space-y-12 font-sans">
        
        <div class="space-y-8">
          <div class="bg-primoRed/20 border border-primoRed rounded-md p-6 text-center">
            <p class="text-stone-100 text-xl font-bold uppercase tracking-wider">Available 24/7 for urgent sewer & drain emergencies</p>
            <p class="text-stone-300 mt-2 italic">Fast Response Times Across Luzerne & Lackawanna Counties</p>
          </div>

          <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
            <SharedButton :icon="true" text="Call Now: 570-905-8441" class="w-full md:w-64" variant="call" />
            <SharedButton variant="whatsapp" :icon="true" text="Message on WhatsApp" class="w-full md:w-64" />
          </div>
        </div>

        <div class="py-12 border-y border-stone-800/50">
          <div class="max-w-3xl mx-auto text-center space-y-6">
            <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-primoWhite)] fancy">Don't Wait in an Emergency</h2>
            <p class="text-xl leading-relaxed text-stone-300">
              When you have a sewer emergency, every minute counts. Backed up drains, overflowing toilets, and flooding can cause
              significant, costly damage to your property if not addressed immediately. 
            </p>
            <p class="text-xl leading-relaxed text-stone-300">
              Our experienced technicians are on standby 24 hours a day, 7 days a week, to respond quickly to your
              emergency situation and restore your peace of mind.
            </p>
          </div>
        </div>

        <div class="pt-12 mt-12">
          <h2 class="text-2xl md:text-3xl font-bold mb-12 text-[var(--color-primoWhite)] text-center fancy">Common Sewer Emergencies We Handle</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-start gap-4 bg-stone-900/50 p-4 rounded-lg border border-stone-800">
              <span class="text-primoRed text-2xl">•</span>
              <div>
                <h4 class="font-bold text-stone-100">Severe Drain Backups</h4>
                <p class="text-sm">Multiple drains backed up at once, indicating a main line issue.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 bg-stone-900/50 p-4 rounded-lg border border-stone-800">
              <span class="text-primoRed text-2xl">•</span>
              <div>
                <h4 class="font-bold text-stone-100">Overflowing Toilets</h4>
                <p class="text-sm">Toilets that won't stop overflowing, causing water damage risks.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 bg-stone-900/50 p-4 rounded-lg border border-stone-800">
              <span class="text-primoRed text-2xl">•</span>
              <div>
                <h4 class="font-bold text-stone-100">Sewage in Basement</h4>
                <p class="text-sm">Health hazards from sewage backing up into your living space.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 bg-stone-900/50 p-4 rounded-lg border border-stone-800">
              <span class="text-primoRed text-2xl">•</span>
              <div>
                <h4 class="font-bold text-stone-100">Main Sewer Line Clogs</h4>
                <p class="text-sm">Complete blockages that stop all water flow from your home.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="py-16 border-t border-stone-800/50">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h2 class="text-3xl font-bold text-[var(--color-primoWhite)] fancy">High-Pressure Hydro Jetting</h2>
              <p class="text-lg leading-relaxed">
                For the most stubborn emergency blockages, we utilize state-of-the-art **High-Pressure Hydro Jetting**. This powerful, non-invasive solution uses specialized nozzles to blast through grease, tree roots, and heavy mineral buildup.
              </p>
              <p class="text-lg leading-relaxed">
                Unlike traditional snakes that might just poke a hole in a clog, hydro jetting scours the entire inside of the pipe, restoring it to "like-new" flow and helping prevent future emergency backups.
              </p>
              <div class="pt-4">
                <NuxtLink to="/luzerne-lackawanna-plumbing-sewer/high-pressure-water-jetting" class="text-[var(--color-primo)] font-bold hover:underline inline-flex items-center gap-2">
                  Learn more about Hydro Jetting <span>→</span>
                </NuxtLink>
              </div>
            </div>
            <div class="relative rounded-lg overflow-hidden border border-stone-800 shadow-2xl h-64 md:h-80">
               <NuxtImg src="/jetting.webp" alt="High Pressure Water Jetting" class="absolute inset-0 w-full h-full object-cover" />
               <div class="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
        
        <SharedCTA />
      </section>
    </div>
  </div>
</template>

<style scoped></style>
