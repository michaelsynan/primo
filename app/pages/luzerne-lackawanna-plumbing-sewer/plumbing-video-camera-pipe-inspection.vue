<script setup lang="ts"></script>

<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto px-4 py-40">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl fancy mb-4">Video Camera Inspection</h1>
      <NuxtImg src="/video.webp" alt="Video Camera Inspection"
        class="h-80 object-cover object-center rounded w-full mb-6 border" />
      <p class="roboto text-xl leading-loose">
        At Primo Sewer Cleaning, we use advanced video camera inspection technology to provide a detailed view of your
        plumbing system.
        This helps us accurately diagnose issues in real-time without the need for invasive digging, saving you time and
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
        <li><strong>Corrosion:</strong> Early signs of pipe corrosion can be detected, preventing sudden pipe failures.
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
        <li><strong>Cost-Effective:</strong> Prevents unnecessary repairs by giving us a clear view of the problem area.
        </li>
        <li><strong>Time-Saving:</strong> Quick and efficient inspections reduce the time spent diagnosing problems,
          getting your plumbing back to normal faster.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-2.5">Preventative Maintenance</h2>
      <p class="text-lg">
        Regular video camera inspections can help catch small issues before they turn into big problems. Stay proactive
        and keep your plumbing system in top condition by scheduling routine inspections.
      </p>
      <div class="mt-6 md:w-max">
        <SharedButton text="Contact Us" class="max-w-content" />
      </div>
    </div>
  </div>
</template>
