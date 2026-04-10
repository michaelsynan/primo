<script
  setup
  lang="ts"
>
import { services } from '../../data/services'

useSeoMeta({
  title: 'Luzerne & Lackawanna Plumbing & Sewer Services',
  description:
    'Explore all Primo Sewer Cleaning plumbing and sewer services available across Luzerne and Lackawanna counties, including sewer diagnosis, drain cleaning, water jetting, and more.',
})
</script>

<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto px-4 py-40 bg-stone-950">
    <section class="max-w-5xl w-full mx-auto p-2 md:p-6 space-y-8">
      <div class="space-y-3">
        <h1 class="text-3xl md:text-5xl fancy font-bold text-[var(--color-primoWhite)]">
          Luzerne & Lackawanna Plumbing & Sewer Services
        </h1>
        <p class="text-stone-300 text-lg max-w-3xl">
          Browse all six services below to learn how we solve sewer, drain, and plumbing problems throughout
          Northeastern Pennsylvania.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <NuxtLink
          v-for="service in services"
          :key="service.slug"
          :to="`/luzerne-lackawanna-plumbing-sewer/${service.slug}`"
          class="group rounded-lg border border-stone-700 bg-stone-900 p-5 transition-all duration-200 hover:border-[var(--color-primo)] hover:-translate-y-0.5"
        >
          <h2
            class="text-xl md:text-2xl font-bold text-stone-100 group-hover:text-[var(--color-primo)] transition-colors duration-200"
          >
            {{ service.name }}
          </h2>
          <p class="text-stone-300 mt-3 leading-relaxed">
            {{ service.description }}
          </p>
          <p class="mt-4 text-sm font-semibold text-[var(--color-primo)]">
            Learn more ->
          </p>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
