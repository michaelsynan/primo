<script setup lang="ts"></script>

<template>
  <div
    class="max-w-4xl mx-auto w-full rounded border-2 bg-primoBrown/20 text-primoWhite text-center py-12 md:py-18 my-10 flex flex-col gap-8 px-8">
    <div class="hidden md:block">
      <h2 class="text-3xl font-bold roboto">

        Need Immediate Help?
        <span class="underline-thick">Give Us a Call.</span>
      </h2>
    </div>
    <div class="block md:hidden">
      <h2 class="text-3xl font-bold leading-relaxed">

        Need Immediate Help?<div class="mt-2">
          <span class="underline-thick mt-10">Give Us a Call.</span>
        </div>
      </h2>
    </div>
    <p class="text-xl roboto">Our team is ready to solve your sewer problems efficiently and effectively.</p>
    <SharedButton icon="true" text="Get Help Now" class="mx-auto mt-6 w-full" />
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
