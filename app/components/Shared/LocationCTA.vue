<script
  setup
  lang="ts"
>
defineProps<{
  location: string;
}>();
</script>

<template>
  <div
    class="relative max-w-4xl mx-auto w-full rounded-sm border border-stone-700 hover:border-stone-200 bg-gradient-to-b from-stone-800/40 to-stone-900/40 hover:from-stone-800/60 hover:to-stone-900/60 text-primoWhite my-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 p-6 md:p-8 transition-all ease duration-300 group"
  >
    <!-- Left side - Logo -->
    <div class="flex-shrink-0 flex items-center justify-center w-full md:w-2/5">
      <NuxtImg
        src="/primo-logo-gold-2.png"
        alt="Primo Sewer Cleaning Logo"
        class="w-full max-w-[200px] md:max-w-[200px] h-auto object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.12)] "
      />
    </div>

    <!-- Right side - CTA Content -->
    <div class="flex-1 text-center md:text-left">
      <h2 class="text-2xl md:text-3xl font-bold roboto leading-tight mb-4">
        Need Plumbing Services in {{ location }}?
      </h2>

      <p class="text-lg md:text-xl roboto mb-6 text-stone-200/90">
        Our expert team is ready to solve your plumbing and sewer problems quickly and effectively with
        professional-grade equipment and 24/7 service.
      </p>

      <SharedButton
        :icon="true"
        text="Call Now for Service"
        class="mx-auto md:mx-0"
        variant="call"
      />
    </div>
  </div>
</template>