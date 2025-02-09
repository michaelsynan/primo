<script setup lang="ts"></script>

<template>
  <div class="border-t py-2">
    <div class="flex justify-between max-w-5xl mx-auto  py-3">
      <div class="flex flex-row gap-12">
        <div><Nuxt-img src="/primo-logo-white.png" width="100" /></div>
        <div class="flex flex-col text-sm font-bold pb-1 gap-2 roboto">
          <div>Important Links</div>
          <div class="flex flex-col gap-1">
            <NuxtLink to="/link1" class="hover:underline">Link 1</NuxtLink>
            <NuxtLink to="/link2" class="hover:underline">Link 2</NuxtLink>
            <NuxtLink to="/link3" class="hover:underline">Link 3</NuxtLink>
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
