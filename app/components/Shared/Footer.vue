<script setup lang="ts"></script>

<template>
  <div class="border-t py-2 bg-stone-900/80">
    <div class="flex flex-col md:flex-row gap-4 justify-between max-w-5xl mx-auto py-8 pb-10 px-4 md:px-0">
      <div class="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          <div>
            <NuxtImg src="/primo-logo-white.png" width="100" alt="Primo Sewer Cleaning Logo" />
          </div>

          <div class="flex flex-col text-sm font-bold pb-1 gap-2 roboto">
            <div class="text-center md:text-left">Menu</div>
            <div class="flex flex-col gap-1 font-normal text-center md:text-left">
              <NuxtLink to="/privacy" class="hover:underline" aria-label="Read our Privacy Policy">Privacy</NuxtLink>
              <NuxtLink to="/legal" class="hover:underline" aria-label="View Legal Information">Legal</NuxtLink>
              <NuxtLink to="/#contact" class="hover:underline" aria-label="Contact Us">Contact</NuxtLink>
            </div>

          </div>
        </div>
      </div>
      <div class="flex flex-col items-end text-right">
        <div class="flex flex-row gap-4 w-full mx-auto justify-center md:justify-end mt-6 md:mt-0">
          <Nuxt-link to="https://www.yelp.com/biz/primo-sewer-cleaning-dickson-city" target="_blank"
            aria-label="Read Primo Sewer Cleaning reviews on Yelp">
            <UIcon name="i-mdi-yelp" class="w-8 h-8" aria-hidden="true" />
          </Nuxt-link>
        </div>

      </div>
    </div>
    <SharedFooterCopyright />
  </div>
</template>
