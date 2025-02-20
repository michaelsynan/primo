<script setup lang="ts"></script>

<template>
  <div class="border-t py-2 bg-stone-900">
    <div class="flex flex-col md:flex-row gap-4 justify-between max-w-5xl mx-auto py-8 pb-10 px-4 md:px-0">
      <!-- Left group: Logo & Important Links -->
      <div class="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          <div><Nuxt-img src="/primo-logo-white.png" width="100" /></div>
          <div class="flex flex-col text-sm font-bold pb-1 gap-2 roboto">
            <div>Important Links</div>
            <div class="flex flex-col gap-1 font-normal text-center md:text-left">
              <NuxtLink to="/privacy" class="hover:underline">Privacy</NuxtLink>
              <NuxtLink to="/legal" class="hover:underline">Legal</NuxtLink>
              <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Right-aligned Socials -->
      <div class="flex flex-col items-end text-right">
        <div class="flex flex-row gap-4 w-full mx-auto justify-center md:justify-end mt-6 md:mt-0">
          <UIcon name="i-mdi-facebook" class="w-8 h-8" />
          <Nuxt-link to="https://www.yelp.com/biz/primo-sewer-cleaning-dickson-city" target="_blank">
            <UIcon name="i-mdi-yelp" class="w-8 h-8" />
          </Nuxt-link>
        </div>

      </div>
    </div>
    <SharedFooterCopyright />
  </div>
</template>
