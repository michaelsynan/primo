<script setup lang="ts">
import { computed } from 'vue'

useSeoMeta({
  title: 'BEST Sewer Diagnosis & Inspection Services',
  description: 'Primo Sewer Cleaning offers expert sewer diagnosis and inspection services in NE Pennsylvania, including Lackawanna and Luzerne County. Our services include identifying water backups, gurgling sounds, odors, and tree root intrusions. Contact us for professional and reliable sewer solutions.'
})

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('inspect.webp')
  return {
    backgroundImage: `url('${imgUrl}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})
</script>

<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto pb-20 bg-stone-950">
    <div id="header-div"
      class="relative w-full h-80 md:h-96 rounded overflow-hidden flex items-center justify-center text-white text-center px-4 mt-[74px] border-b border-stone-600"
      :style="backgroundStyles">

      <!-- Semi-dark transparency overlay -->
      <div class="absolute inset-0 bg-black/50 bg-opacity-50 z-[1]"></div>

      <h1 class="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl text-stone-50 fancy z-[2]">
        Sewer Diagnosis & Inspection
      </h1>
    </div>

    <!-- Content wrapper with padding on mobile -->
    <div class="px-4 md:px-0">
      <div class="max-w-4xl mx-auto">
        <p class="roboto text-xl leading-loose mt-6">
          At Primo Sewer Cleaning, our technicians perform thorough inspections and accurate diagnoses at competitive
          rates, ensuring your plumbing needs are met with professionalism and enthusiasm. We handle all types of sewer
          and drain
          issues including clogs, leaks, and complex repairs.
        </p>

        <h2 class="text-2xl font-bold mt-6 mb-2.5">Common Symptoms of Sewer Problems</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Water Backup:</strong> Occurs in showers, toilets, or sinks, indicating a possible main line clog.
          </li>
          <li><strong>Gurgling Noises:</strong> Sounds from drains or toilets suggest disruptions within your sewer
            lines.
          </li>
          <li><strong>Unpleasant Odors:</strong> Strong sewage smells near drains or outside your home can signal a
            breach
            in your sewer system.</li>
          <li><strong>Pools of Water:</strong> Visible around the basement floor drain, suggesting blockages or backups.
          </li>
        </ul>
      </div>

      <SharedCTA />

      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-2.5">How We Address Tree Root Intrusions</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Rooter and Drain Cleaning:</strong> We remove tree root clogs to restore functionality to your
            sewer
            system.</li>
          <li><strong>Hydrojetting:</strong> High-pressure water jets clean out debris, tree roots, and grease,
            preventing
            future issues.</li>
          <li><strong>Pipe Lining:</strong> We offer trenchless repair solutions by lining pipes with a protective
            sleeve
            to prevent leaks.</li>
          <li><strong>Pipe Bursting:</strong> Replace old, compromised sewer pipes with a new, seamless pipe using
            hydraulic techniques.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-6 mb-2.5">Preventative Maintenance</h2>
        <p class="text-lg">
          Don't wait for a complete failure. Regular inspections and maintenance can prevent major backups and damage.
          Our
          services help keep your system in optimal condition, reducing the risk of environmental and property damage.
        </p>

        <div class="mt-6 md:w-max">
          <SharedButton to="/contact-a-plumber" text="Contact Us" class="max-w-content" />
        </div>
      </div>
    </div>
  </div>
</template>
