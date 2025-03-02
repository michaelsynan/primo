<script setup lang="ts"></script>

<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto px-4 py-40">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl fancy mb-4">Sewer Drain Cleaning & Repair</h1>
      <NuxtImg src="/clean.webp" alt="Sewer Drain Cleaning and Repair" placeholder
        class="h-80 object-cover object-middle rounded w-full mb-6 border" />
      <p class="roboto text-xl leading-loose">
        At Primo Sewer Cleaning, we specialize in sewer drain cleaning and repair services to ensure your plumbing
        system is running smoothly.
        Whether it's a stubborn clog or a broken pipe, our skilled technicians use advanced tools to quickly clear
        blockages and provide long-lasting repairs.
        We are committed to restoring the health of your sewer system with minimal disruption to your property.
      </p>
      <h2 class="text-2xl font-bold mt-6 mb-2.5">Common Sewer Drain Problems</h2>
      <ul class="list-disc pl-5 space-y-2 text-lg">
        <li><strong>Clogs:</strong> Blockages caused by debris, grease, or foreign objects can cause slow draining or
          backups.</li>
        <li><strong>Pipe Breakage:</strong> Cracked or broken pipes can lead to leaks and water damage, requiring
          immediate repair.</li>
        <li><strong>Tree Root Intrusions:</strong> Roots invading the pipes can create severe blockages and damage,
          needing professional attention.</li>
        <li><strong>Corrosion:</strong> Over time, pipes can corrode, causing them to leak or collapse, which requires
          repair or replacement.</li>
      </ul>
    </div>

    <SharedCTA />

    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold mt-6 mb-2.5">How We Handle Sewer Drain Cleaning & Repair</h2>
      <ul class="list-disc pl-5 space-y-2 text-lg">
        <li><strong>Rooter and Drain Cleaning:</strong> We use state-of-the-art tools to clear clogs and restore your
          sewer lines to full functionality.</li>
        <li><strong>Hydrojetting:</strong> High-pressure water jets clean out stubborn debris, grease, and tree roots,
          preventing future problems.</li>
        <li><strong>Pipe Repair and Replacement:</strong> If pipes are broken or severely damaged, we offer repair or
          trenchless replacement options to restore your system.</li>
        <li><strong>Video Camera Inspection:</strong> We use video cameras to identify the exact cause and location of
          issues for more accurate repairs.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-2.5">Why Choose Sewer Drain Cleaning & Repair Services?</h2>
      <ul class="list-disc pl-5 space-y-2 text-lg">
        <li><strong>Prevents Future Issues:</strong> Regular cleaning and prompt repairs prevent future blockages and
          costly damage.</li>
        <li><strong>Long-Lasting Results:</strong> Our repairs are designed to ensure the longevity and durability of
          your sewer system.</li>
        <li><strong>Minimized Disruption:</strong> We work efficiently to complete repairs with minimal disruption to
          your home or business.</li>
        <li><strong>Expert Technicians:</strong> Our team is highly trained and equipped with the latest tools to tackle
          any sewer problem.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-2.5">Preventative Maintenance</h2>
      <p class="text-lg">
        Regular sewer drain cleaning can help prevent costly repairs by keeping your pipes free from clogs, tree roots,
        and other damaging debris. Our maintenance services help you avoid unexpected sewer issues and maintain a
        healthy plumbing system.
      </p>
      <div class="mt-6 md:w-max">
        <SharedButton to="/contact-a-plumber" text="Contact Us" class="max-w-content" />
      </div>
    </div>
  </div>
</template>
