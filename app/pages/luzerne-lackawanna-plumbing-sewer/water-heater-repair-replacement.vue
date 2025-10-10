<script setup lang="ts">
import { computed } from 'vue'

useSeoMeta({
  title: 'BEST Expert Water Heater Repair & Replacement in Northeastern PA',
  description: 'Primo Sewer Cleaning offers reliable water heater repair, replacement, and maintenance services in Northeastern PA, including Luzerne and Lackawanna County. Our expert technicians ensure hot water reliability with fast, affordable solutions. Call today for service!'
})

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('plumber-heater-fixing.webp')
  return {
    backgroundImage: `url('${imgUrl}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right center'
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
        Water Heater Repair & Replacement
      </h1>
    </div>

    <!-- Content wrapper with padding on mobile -->
    <div class="px-4 md:px-0">
      <div class="max-w-4xl mx-auto">
        <p class="roboto text-xl leading-loose mt-6">
          At Primo Sewer Cleaning, we provide expert water heater repair and replacement services to ensure you always
          have reliable hot water. Whether you're dealing with a malfunctioning unit or need a brand-new installation,
          our
          skilled technicians offer fast, affordable, and efficient solutions to restore your hot water supply.
        </p>

        <h2 class="text-2xl font-bold mt-6 mb-2.5">Common Water Heater Issues</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Inconsistent Water Temperature:</strong> Fluctuations in water temperature can indicate a faulty
            heating element or thermostat.</li>
          <li><strong>Strange Noises:</strong> Banging or rumbling sounds may suggest sediment buildup at the bottom of
            the tank, reducing efficiency.</li>
          <li><strong>Leaks:</strong> Water pooling around your heater could mean a cracked tank or failing pressure
            relief valve.</li>
          <li><strong>Rusty or Discolored Water:</strong> This may be a sign of internal corrosion, requiring repair or
            replacement.</li>
          <li><strong>Reduced Hot Water Supply:</strong> If your water runs cold too quickly, your heater may have a
            broken dip tube or heating element.</li>
        </ul>
      </div>

      <SharedCTA />

      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mt-6 mb-2.5">Our Water Heater Repair & Replacement Process</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Diagnosis:</strong> We conduct a thorough inspection to identify the exact cause of your water
            heater problem.</li>
          <li><strong>Repair:</strong> From replacing heating elements to fixing leaks, our technicians perform
            efficient
            repairs to restore functionality.</li>
          <li><strong>Replacement:</strong> If repair isn't viable, we provide expert installation of energy-efficient
            water heaters tailored to your home's needs.</li>
          <li><strong>Maintenance:</strong> Regular maintenance extends your heater's lifespan and ensures optimal
            performance year-round.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-6 mb-2.5">Types of Water Heaters We Service</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Traditional Tank Water Heaters:</strong> We repair and replace standard tank models, ensuring a
            reliable supply of hot water.</li>
          <li><strong>Gas & Electric Water Heaters:</strong> Whether your heater is gas-powered or electric, we have the
            expertise to handle both types efficiently.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-6 mb-2.5">Why Choose Primo Sewer Cleaning?</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Fast Response:</strong> We understand the urgency of hot water issues and provide prompt, same-day
            service when possible.</li>
          <li><strong>Expert Technicians:</strong> Our experienced professionals are equipped to handle all water heater
            makes and models.</li>
          <li><strong>Quality Service:</strong> We guarantee high-quality workmanship and use only the best parts for
            repairs and replacements.</li>
          <li><strong>Transparent Pricing:</strong> No hidden fees—just honest, upfront pricing for all our services.
          </li>
        </ul>

        <h2 class="text-2xl font-bold mt-6 mb-2.5">Preventative Maintenance</h2>
        <p class="text-lg">
          Regular maintenance can prevent costly breakdowns and extend the life of your water heater. Our preventative
          services include flushing the tank, inspecting components, and ensuring optimal efficiency to keep your water
          heater running smoothly year-round.
        </p>

        <div class="mt-6 md:w-max">
          <SharedButton to="/contact-a-plumber" text="Contact Us" class="max-w-content" />
        </div>
      </div>
    </div>
  </div>
</template>
