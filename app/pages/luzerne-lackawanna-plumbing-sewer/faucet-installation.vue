<script setup lang="ts">
import { computed } from 'vue'

useSeoMeta({
  title: 'Expert Faucet Installation',
  description: 'Upgrade your kitchen or bathroom with professional faucet installation in NE Pennsylvania. We handle all styles for homes and businesses. Call today!',
})

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('faucet-installation-plumber.webp')
  return { backgroundImage: `url('${imgUrl}')` }
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
        Faucet Installation
      </h1>
    </div>

    <!-- Content wrapper with padding on mobile -->
    <div class="px-4 md:px-0">
      <div class="max-w-4xl mx-auto">
        <p class="roboto text-xl leading-loose mt-6">
          Upgrade your kitchen or bathroom with professional faucet installation from Primo Sewer Cleaning. Whether
          you're
          replacing an old, leaky faucet or installing a brand-new fixture, our expert plumbers ensure a precise and
          efficient installation. We handle all styles, including single-handle, double-handle, pull-down, touchless,
          and
          commercial-grade faucets.
        </p>

        <h2 class="text-2xl font-bold mt-6 mb-2.5">Signs You Need a New Faucet</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Leaks & Drips:</strong> Constant dripping increases water bills and may indicate internal wear.
          </li>
          <li><strong>Rust or Corrosion:</strong> Visible damage on the faucet can affect water quality and performance.
          </li>
          <li><strong>Poor Water Pressure:</strong> A failing faucet or mineral buildup can restrict water flow.</li>
          <li><strong>Outdated Design:</strong> Modern faucets offer better functionality, efficiency, and aesthetics.
          </li>
        </ul>
      </div>

      <SharedCTA />

      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mt-6 mb-2.5">Our Faucet Installation Services</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Kitchen Faucet Installation:</strong> Upgrade to a modern or high-efficiency kitchen faucet.</li>
          <li><strong>Bathroom Faucet Replacement:</strong> Install a sleek and functional sink faucet for your
            bathroom.
          </li>
          <li><strong>Outdoor Faucet Installation:</strong> Ensure reliable outdoor water access with frost-proof
            spigots.
          </li>
          <li><strong>Commercial Faucet Services:</strong> We install durable, high-performance faucets for businesses.
          </li>
        </ul>

        <h2 class="text-2xl font-bold mt-6 mb-2.5">Why Choose Primo Sewer Cleaning?</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Professional Installation:</strong> Our licensed plumbers ensure a secure and leak-free
            installation.</li>
          <li><strong>Fast & Reliable Service:</strong> We work efficiently to minimize disruption to your home.</li>
          <li><strong>Wide Selection:</strong> We install all major faucet brands and styles to match your preferences.
          </li>
          <li><strong>Upfront Pricing:</strong> No hidden fees—just honest, competitive pricing.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-6 mb-2.5">Schedule Your Faucet Installation Today</h2>
        <p class="text-lg">
          Don't let a leaky or outdated faucet cause unnecessary water waste. Whether it's for your kitchen, bathroom,
          or
          outdoor space, our team is ready to install a new faucet quickly and efficiently. Contact us today for expert
          service!
        </p>

        <div class="mt-6 md:w-max">
          <SharedButton link="/contact-a-plumber" text="Contact Us" class="max-w-content" />
        </div>
      </div>
    </div>
  </div>
</template>
