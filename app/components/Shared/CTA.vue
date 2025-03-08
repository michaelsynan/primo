<script setup lang="ts"></script>

<template>
  <div
    class="max-w-4xl mx-auto w-full rounded-sm border bg-stone-800/80 text-primoWhite text-center py-10 md:py-12 my-10 flex flex-col gap-5 md:gap-6 px-8">

    <div class="hidden md:block">
      <h2 class="text-2xl md:text-3xl font-bold roboto leading-tight">
        Need Immediate Help? Call Now.
      </h2>
    </div>

    <div class="block md:hidden">
      <h2 class="text-2xl md:text-3xl font-bold leading-tight">
        Need Immediate Help?<div class="block pt-4"> Call Now.
        </div>
      </h2>
    </div>

    <p class="text-lg md:text-xl roboto mt-2 md:mt-4">
      Our team is ready to solve your sewer problems efficiently and effectively.
    </p>

    <SharedButton icon="true" text="Get Help Now" class="mx-auto mt-8 md:mt-10 w-full md:w-max" variant="call" />
  </div>
</template>

<style scoped>
.underline-thick {
  position: relative;
}

.underline-thick::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
}
</style>
