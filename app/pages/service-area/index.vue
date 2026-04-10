<script
  setup
  lang="ts"
>
import { serviceAreas } from '../../data/locations';
import { services } from '../../data/services';

useSeoMeta({
  title: 'Service Areas',
  description: 'We offer plumbing and sewer services in Lackawanna and Luzerne counties, including Scranton, Wilkes-Barre, and more.',
});
</script>

<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto px-4 py-40">
    <section class="max-w-4xl mx-auto p-6 space-y-6 font-sans">
      <h1 class="text-3xl md:text-4xl fancy font-bold text-[var(--color-primoWhite)]">Service Areas</h1>
      <p class="text-stone-300 text-lg">
        We proudly serve the following locations in Northeastern Pennsylvania. Click on a service to learn more. If you
        don't see your town or neighborhood please <nuxt-link to="/contact-a-plumber">contact us</nuxt-link>.
      </p>
      <div
        v-for="area in serviceAreas"
        :key="area.slug"
        :id="area.slug"
        class="py-4 scroll-mt-24"
      >
        <h2 class="text-2xl font-bold text-[var(--color-primoWhite)]">{{ area.name }}</h2>
        <ul class="list-disc pl-5 space-y-2 text-lg mt-2">
          <li
            v-for="service in services"
            :key="service.slug"
          >
            <NuxtLink
              :to="`/service-area/${area.slug}/${service.slug}`"
              class="text-stone-300 hover:text-[var(--color-primo)]"
            >
              {{ service.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
