<script setup lang="ts"></script>

<template>
  <div
    class="relative max-w-4xl mx-auto w-full rounded-sm border border-stone-700 hover:border-stone-200 bg-gradient-to-b from-stone-800/40 to-stone-900/40 hover:from-stone-800/60 hover:to-stone-900/60 text-primoWhite text-center py-10 md:py-12 my-10 flex flex-col gap-5 md:gap-6 px-8 transition-all ease duration-300 group">

    <div class="hidden md:block">
      <h2 class="text-2xl md:text-3xl font-bold roboto leading-tight">
        Need Immediate Help? Call Now.
      </h2>
    </div>

    <div class="block md:hidden">
      <h2 class="text-2xl md:text-3xl font-bold leading-tight">
        Need Immediate Help?<div class="block pt-4"> Call Now. </div>
      </h2>
    </div>

    <p class="text-lg md:text-xl roboto mt-2 md:mt-4">
      Our team is ready to solve your sewer problems efficiently and effectively.
    </p>

    <SharedButton :icon="true" text="Get Help Now" class="mx-auto mt-8 md:mt-10 w-full md:w-max" variant="call" />
  </div>
</template>
