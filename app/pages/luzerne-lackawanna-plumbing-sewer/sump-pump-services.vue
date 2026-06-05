<script
  setup
  lang="ts"
>
import { computed } from 'vue'

useSeoMeta({
  title: 'BEST Sump Pump Services in Northeastern PA',
  description:
    'Protect your basement from flooding with Primo Sewer Cleaning sump pump services in Northeastern PA. Installation, repair, replacement, and backup systems across Luzerne & Lackawanna County.',
})

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('sump-pump-services.webp')
  return {
    backgroundImage: `url('${imgUrl}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})
</script>

<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto pb-20 bg-stone-950 service-page">
    <div
      id="header-div"
      class="relative w-full h-80 md:h-96 rounded overflow-hidden flex items-center justify-center text-white text-center px-4 mt-[74px] border-b border-stone-600"
      :style="backgroundStyles"
    >
      <div class="absolute inset-0 bg-black/60 bg-opacity-50 z-[1]"></div>

      <h1 class="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl text-stone-50 fancy z-[2]">
        Sump Pump Services
      </h1>
    </div>

    <div class="px-4 md:px-0">
      <div class="max-w-4xl mx-auto">
        <p class="roboto text-xl leading-loose mt-6">
          A working sump pump is one of the best defenses against basement flooding. If your pump is running constantly,
          not turning on, or your pit is filling with water, our technicians can troubleshoot the issue quickly and
          recommend the most reliable fix.
        </p>

        <h2 class="text-2xl font-bold mt-6 mb-2.5">Common Sump Pump Problems</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg">
          <li><strong>No power / no operation:</strong> Tripped breaker, failed switch, or worn pump motor.</li>
          <li><strong>Short cycling:</strong> A stuck float, incorrect settings, or discharge issues.</li>
          <li><strong>Water not leaving the pit:</strong> Clogged discharge line or failed check valve.</li>
          <li><strong>Alarm sounding:</strong> Water rising above normal operating level.</li>
          <li><strong>Backup not working:</strong> Battery, charger, or backup pump failure.</li>
        </ul>

        <SharedCTA />

        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold mt-6 mb-2.5">Our Sump Pump Services</h2>
          <ul class="list-disc pl-5 space-y-2 text-lg">
            <li><strong>Repair:</strong> Diagnose electrical issues, floats, switches, check valves, and discharge
              lines.</li>
            <li><strong>Replacement:</strong> Swap failing pumps and verify proper sizing and setup.</li>
            <li><strong>Installation:</strong> Install new pumps and confirm safe discharge routing and performance.
            </li>
            <li><strong>Backup systems:</strong> Service or install backup sump pumps and test battery/charging.</li>
            <li><strong>Maintenance:</strong> Performance checks, cleaning, and basic preventative service.</li>
          </ul>

          <h2 class="text-2xl font-bold mt-6 mb-2.5">Schedule Sump Pump Service</h2>
          <p class="text-lg">
            If youre dealing with water in the basement or a sump pump that cant keep up, contact us today. Well help
            you get a dependable setup in place before the next storm.
          </p>

          <div class="mt-6 md:w-max">
            <SharedButton
              to="/contact-a-plumber"
              text="Contact Us"
              class="max-w-content"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
