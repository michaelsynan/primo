<script
  setup
  lang="ts"
></script>

<template>
  <div class="border-b w-full py-16 md:py-24 bg-gradient-to-br from-stone-950 to-stone-900">
    <div class="flex flex-col md:flex-row items-center justify-center gap-6 px-4">


      <!-- Right Column for Content -->
      <div class="flex flex-col items-center justify-center gap-6 w-full md:w-1/2 text-center">
        <NuxtImg
          src="/licensed-insured-plumber.png"
          alt="Licensed & Insured Plumber"
          width="260"
          class="w-full max-w-[220px] h-auto pb-6"
          loading="lazy"
        />
        <h2 class="fancy !text-2xl md:!text-4xl">Best Pennsylvania Plumber Near You</h2>
        <div class="max-w-4xl !text-lg leading-loose"><b>Primo Sewer Cleaning</b> proudly serves Dickson City,
          Lackawanna County, and the
          greater
          Northeastern
          Pennsylvania region with dependable plumbing and sewer services. Whether you’re dealing with a blocked drain,
          damaged pipe, or water heater issue, our team provides expert diagnostics and reliable repairs backed by
          professional service and local experience.</div>
        <SharedButton
          :icon="true"
          text="Call Now"
          variant="call"
          class="w-full md:w-max"
          link="631-942-0582"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
