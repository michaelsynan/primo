<script
  setup
  lang="ts"
>
import { computed } from 'vue'

type CtaVariant = 'call' | 'email' | 'whatsapp' | 'link'

declare global {
  interface Window {
    gtag: (command: string, eventName: string, parameters?: Record<string, unknown>) => void
  }
}

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string

    primaryText?: string
    primaryVariant?: CtaVariant
    primaryTo?: string

    secondaryText?: string
    secondaryTo?: string
  }>(),
  {
    title: 'Need help with a clogged drain?',
    description:
      'Call Primo Sewer Cleaning for fast, professional drain and sewer service in Northeastern PA.',
    primaryText: 'Call now',
    primaryVariant: 'call',
    primaryTo: '',
    secondaryText: 'Contact us',
    secondaryTo: '/contact-a-plumber',
  },
)

const primaryHref = computed(() => {
  switch (props.primaryVariant) {
    case 'email':
      return `mailto:${props.primaryTo || 'primosewercleaning@gmail.com'}`
    case 'whatsapp':
      return 'https://wa.me/15709058441?text=Hi%2C%20I%27m%20interested%20in%20your%20services'
    case 'call':
      return 'tel:+15709058441'
    default:
      return ''
  }
})

const primaryIsNuxtLink = computed(
  () => props.primaryVariant === 'link' && !!props.primaryTo,
)

const handlePrimaryClick = () => {
  if (props.primaryVariant !== 'call' && props.primaryVariant !== 'whatsapp') return
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return

  window.gtag('event', 'conversion', {
    send_to: 'AW-10963798701/UPK5CP640Y8YEK2V-eso',
  })
}
</script>

<template>
  <section class="my-8 rounded-none border border-stone-800 bg-stone-900/20 p-5 md:p-6">
    <div class="flex flex-col gap-4">

      <h2 class="text-lg font-semibold tracking-tight md:text-xl !mt-0">
        {{ title }}
      </h2>

      <p class="text-lg pb-4 leading-relaxed opacity-80">
        {{ description }}
      </p>

      <!-- BUTTON ROW FIX -->
      <div class="flex flex-col md:flex-row gap-3 md:gap-4 md:items-center">

        <!-- PRIMARY -->
        <NuxtLink
          v-if="primaryIsNuxtLink"
          :to="primaryTo"
          class="roboto inline-flex w-full md:w-auto flex-1 items-center justify-center rounded-none border border-primoGreen bg-primoGreen px-4 py-2 text-sm font-medium text-white no-underline transition hover:bg-primoGreen/80 hover:border-primoGreen/80 hover:no-underline"
          @click="handlePrimaryClick"
        >
          <UIcon
            name="i-mdi-phone"
            class="mr-2 h-4 w-4"
          />
          {{ primaryText }}
        </NuxtLink>

        <a
          v-else
          :href="primaryHref"
          class="roboto inline-flex w-full md:w-auto flex-1 items-center justify-center rounded-none border border-primoGreen bg-primoGreen px-4 py-2 text-sm font-medium text-white no-underline transition hover:bg-primoGreen/80 hover:border-primoGreen/80 hover:no-underline"
          @click="handlePrimaryClick"
        >
          <UIcon
            v-if="primaryVariant === 'email'"
            name="i-mdi-email"
            class="mr-2 h-4 w-4"
          />
          <UIcon
            v-else-if="primaryVariant === 'whatsapp'"
            name="i-mdi-whatsapp"
            class="mr-2 h-4 w-4"
          />
          <UIcon
            v-else
            name="i-mdi-phone"
            class="mr-2 h-4 w-4"
          />
          {{ primaryText }}
        </a>

        <!-- SECONDARY -->
        <NuxtLink
          v-if="secondaryText && secondaryTo"
          :to="secondaryTo"
          class="roboto inline-flex w-full md:w-auto flex-1 items-center justify-center rounded-none border border-white/25 px-4 py-2 text-sm font-medium no-underline transition hover:bg-stone-900/40 hover:no-underline"
        >
          {{ secondaryText }}
        </NuxtLink>

      </div>
    </div>
  </section>
</template>