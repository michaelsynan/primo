<script setup lang="ts"></script>

<template>
  <div class="border-t py-2">
    <div class="flex justify-between max-w-5xl mx-auto  py-3 px-4 md:px-0">
      <div class="flex flex-row gap-12">
        <div><Nuxt-img src="/primo-logo-white.png" width="100" /></div>
        <div class="flex flex-col text-sm font-bold pb-1 gap-2 roboto">
          <div>Important Links</div>
          <div class="flex flex-col gap-1 font-normal">
            <NuxtLink to="/privacy" class="hover:underline">Privacy</NuxtLink>
            <NuxtLink to="/legal" class="hover:underline">Legal</NuxtLink>
            <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
          </div>
        </div>
      </div>
      <div>
        <SharedButton text="Call Now" />
      </div>
    </div>
    <SharedFooterCopyright />
  </div>
</template>

<style scoped></style>
