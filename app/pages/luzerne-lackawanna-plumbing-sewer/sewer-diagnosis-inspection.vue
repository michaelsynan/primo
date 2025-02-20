<script setup lang="ts"></script>

<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto px-4 py-40">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl fancy mb-4">Sewer Diagnosis & Inspection</h1>
      <NuxtImg src="/heater.jpg" alt="High Pressure Water Jetting"
        class="h-80 object-cover object-top rounded w-full mb-6 border" />
      <p class="roboto text-xl leading-loose">
        At Primo Sewer Cleaning, our technicians perform thorough inspections and accurate diagnoses at competitive
        rates,
        ensuring your plumbing needs are met with professionalism and enthusiasm. We handle all types of sewer and drain
        issues including clogs, leaks, and complex repairs.
      </p>
      <h2 class="text-2xl font-bold mt-6 mb-2.5">Common Symptoms of Sewer Problems</h2>
      <ul class="list-disc pl-5 space-y-2 text-lg">
        <li><strong>Water Backup:</strong> Occurs in showers, toilets, or sinks, indicating a possible main line clog.
        </li>
        <li><strong>Gurgling Noises:</strong> Sounds from drains or toilets suggest disruptions within your sewer lines.
        </li>
        <li><strong>Unpleasant Odors:</strong> Strong sewage smells near drains or outside your home can signal a breach
          in your sewer system.</li>
        <li><strong>Pools of Water:</strong> Visible around the basement floor drain, suggesting blockages or backups.
        </li>
      </ul>
    </div>

    <SharedCTA />
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold mb-2.5">How We Address Tree Root Intrusions</h2>
      <ul class="list-disc pl-5 space-y-2 text-lg">
        <li><strong>Rooter and Drain Cleaning:</strong> We remove tree root clogs to restore functionality to your sewer
          system.</li>
        <li><strong>Hydrojetting:</strong> High-pressure water jets clean out debris, tree roots, and grease, preventing
          future issues.</li>
        <li><strong>Pipe Lining:</strong> We offer trenchless repair solutions by lining pipes with a protective sleeve
          to
          prevent leaks.</li>
        <li><strong>Pipe Bursting:</strong> Replace old, compromised sewer pipes with a new, seamless pipe using
          hydraulic
          techniques.</li>
      </ul>
      <h2 class="text-2xl font-bold mt-6 mb-2.5">Preventative Maintenance</h2>
      <p class="text-lg">
        Don’t wait for a complete failure. Regular inspections and maintenance can prevent major backups and damage. Our
        services help keep your system in optimal condition, reducing the risk of environmental and property damage.
      </p>
      <div class="mt-6 md:w-max">
        <SharedButton text="Contact Us" class="max-w-content" />
      </div>
    </div>
  </div>
</template>
