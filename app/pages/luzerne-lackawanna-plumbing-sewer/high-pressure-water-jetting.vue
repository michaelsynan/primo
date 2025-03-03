<script setup lang="ts"></script>

<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto px-4 py-30 md:py-40">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl fancy mb-4">High Pressure Water Jetting</h1>
      <NuxtImg src="/jetting.webp" alt="High Pressure Water Jetting" placeholder
        class="h-80 object-cover object-middle rounded w-full mb-6 border" />
      <p class="roboto text-xl leading-loose">
        At Primo Sewer Cleaning, we offer high pressure water jetting services as a powerful, non-invasive solution for
        clearing clogs and blockages from your sewer lines. Using high-pressure water, we can remove grease, debris,
        tree roots, and mineral buildup from pipes, restoring optimal flow and preventing future issues. Our team is
        equipped with the latest technology to ensure fast and effective results.
      </p>
      <h2 class="text-2xl font-bold mt-6 mb-2.5">Common Problems Cleared with High Pressure Water Jetting</h2>
      <ul class="list-disc pl-5 space-y-2 text-lg">
        <li><strong>Grease Buildup:</strong> Over time, grease and oil can accumulate in your pipes, causing slow
          drainage and blockages.</li>
        <li><strong>Tree Roots:</strong> Roots that infiltrate sewer lines can obstruct water flow and lead to serious
          damage if left untreated.</li>
        <li><strong>Debris and Sediment:</strong> Dirt, rocks, and other debris can obstruct pipes, leading to poor
          drainage and potential backups.</li>
        <li><strong>Mineral Buildup:</strong> Hard water minerals can cause scaling inside your pipes, narrowing the
          flow and reducing drainage efficiency.</li>
      </ul>
    </div>

    <SharedCTA />

    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold mt-6 mb-2.5">How High Pressure Water Jetting Works</h2>
      <ul class="list-disc pl-5 space-y-2 text-lg">
        <li><strong>Inspection:</strong> We begin by inspecting your sewer lines using video cameras to identify the
          location and cause of the blockage.</li>
        <li><strong>Water Jetting:</strong> Our technicians use specialized high-pressure water jets to clear clogs,
          remove debris, and clean the inside of your pipes.</li>
        <li><strong>Cleaning:</strong> The high-pressure water effectively removes grease, tree roots, and sediment
          buildup, restoring full pipe capacity.</li>
        <li><strong>Post-Inspection:</strong> After cleaning, we conduct a second inspection to ensure all blockages
          have been cleared and your pipes are functioning properly.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-2.5">Benefits of High Pressure Water Jetting</h2>
      <ul class="list-disc pl-5 space-y-2 text-lg">
        <li><strong>Non-Invasive:</strong> Unlike traditional methods, water jetting is a trenchless solution that
          doesn’t require digging or pipe replacement.</li>
        <li><strong>Effective Cleaning:</strong> High pressure water removes even the toughest blockages, including tree
          roots and grease buildup.</li>
        <li><strong>Environmentally Friendly:</strong> Water jetting is a chemical-free cleaning solution, safe for your
          pipes and the environment.</li>
        <li><strong>Cost-Effective:</strong> By clearing the blockage quickly and efficiently, water jetting can save
          you from costly repairs or replacements down the line.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-2.5">Why Choose High Pressure Water Jetting?</h2>
      <ul class="list-disc pl-5 space-y-2 text-lg">
        <li><strong>Preventative Maintenance:</strong> Regular water jetting can prevent future blockages and maintain
          the health of your sewer lines.</li>
        <li><strong>Long-Term Results:</strong> High pressure water jetting provides a thorough cleaning, ensuring that
          your pipes stay clear for longer periods.</li>
        <li><strong>Fast and Efficient:</strong> Water jetting is a quick and efficient method that minimizes disruption
          to your home or business.</li>
        <li><strong>Expert Technicians:</strong> Our team of professionals is trained to perform high pressure water
          jetting with precision and care to avoid any damage to your pipes.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-2.5">Preventative Maintenance</h2>
      <p class="text-lg">
        Regular high pressure water jetting can help maintain the health of your sewer lines, preventing buildup and
        blockages before they become major issues. By scheduling routine cleanings, you can avoid costly repairs and
        extend the life of your plumbing system.
      </p>
      <div class="mt-6 md:w-max">
        <SharedButton to="/contact-a-plumber" text="Contact Us" class="max-w-content" />
      </div>
    </div>
  </div>
</template>
