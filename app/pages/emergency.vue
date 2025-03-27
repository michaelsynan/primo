<script setup lang="ts">
useSeoMeta({
  title: 'Emergency Sewer & Drain Services | Primo Sewer Cleaning',
  description: 'Available 24/7 for emergency sewer and drain cleaning in Northeastern PA. Fast response for backed up sewers, overflowing toilets, and flooding. Call now for immediate assistance!',
})
</script>

<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto px-4 py-40 bg-stone-900">
    <section class="max-w-2xl mx-auto p-6 space-y-6 text-center font-sans">
      <h1 class="text-3xl md:text-4xl fancy font-bold text-[var(--color-primoWhite)]">Emergency Sewer Cleaning</h1>

      <div class="bg-primoRed/20 border border-primoRed rounded-md p-4 mb-6">
        <p class="text-stone-100 text-lg font-bold">Available 24/7 for urgent sewer & drain emergencies</p>
      </div>

      <p class="text-stone-300 text-lg leading-relaxed">
        Don't wait when you have a sewer emergency. Backed up drains, overflowing toilets, and flooding can cause
        significant damage to your property. Our experienced technicians are on standby to respond quickly to your
        emergency situation.
      </p>

      <div class="flex flex-col gap-4 w-full mt-8">
        <SharedButton icon="true" text="Call Now for Emergency Service" class="w-full" variant="call" />

        <SharedButton to="mailto:primosewercleaning@gmail.com" variant="email" icon="true" text="Email Us"
          class="w-full" />

        <SharedButton variant="whatsapp" icon="true" text="Message on WhatsApp" class="w-full" />
      </div>

      <div class="border-t border-stone-700 pt-6 mt-8">
        <h2 class="text-xl font-bold mb-4 text-[var(--color-primoWhite)]">Common Sewer Emergencies We Handle</h2>
        <ul class="text-left text-stone-300 space-y-2">
          <li>• Severe drain or sewer backups</li>
          <li>• Overflowing toilets</li>
          <li>• Sewage backup in basement</li>
          <li>• Water flooding from drains</li>
          <li>• Main sewer line clogs</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
