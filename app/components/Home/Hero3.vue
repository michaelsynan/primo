<script
  setup
  lang="ts"
>
const scrollToSection = async () => {
  await nextTick()

  const target = document.getElementById('our-services')
  if (!target) return

  const top = target.getBoundingClientRect().top + window.scrollY
  window.scrollTo({
    top: top - 20,
    behavior: 'smooth',
  })

  target.setAttribute('tabindex', '-1')
  target.focus()
}
</script>

<template>
  <div
    :style="{ backgroundImage: 'url(/best-sewer-cleaning-primo.webp)' }"
    class="border-b bg-fixed w-full px-4 md:px-0 pt-[73px] bg-stone-950 relative overflow-hidden"
    style="background-size: cover; background-position: center;"
  >
    <div class="overlay" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 min-h-[80vh] md:min-h-[85vh] max-w-5xl mx-auto">
      <div class="flex flex-col justify-center items-start gap-5 md:gap-6 z-10 relative py-10 md:py-0">
        <NuxtImg
          src="/primo-logo-gold-2.png"
          alt="Primo Sewer Cleaning"
          width="240"
          class="w-[190px] md:w-[220px] max-w-full h-auto"
          loading="eager"
        />

        <div class="flex flex-col gap-0 text-left max-w-xl">
          <p class="roboto-condensed uppercase text-white/90 w-full text-left">
            Top-Rated Plumber in Northeastern PA
          </p>

          <h1 class="text-5xl md:text-6xl fancy leading-tight hidden md:block">
            NEPA Plumbing & Sewer Cleaning Services
          </h1>

          <h1 class="text-3xl fancy leading-snug md:hidden text-left">
            Plumbing & Sewer Services You Can Count On
          </h1>
        </div>

        <div class="flex flex-row gap-4 w-full">
          <SharedButton
            :icon="true"
            text="Call Now"
            class="w-full md:w-max"
            link="631-942-0582"
            variant="call"
          />
          <SharedButton
            @click="scrollToSection"
            class="hidden md:inline w-full md:w-max"
            text="Learn More"
            variant="ghost"
            aria-label="Scroll to Services"
          />
        </div>
      </div>

      <div class="relative z-10 overflow-hidden flex items-end justify-center min-h-[55vh] md:min-h-full">
        <NuxtImg
          src="/best-nepa-plumber-primo.webp"
          alt="Best NEPA plumber"
          class="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 -bottom-10 md:-bottom-16 h-[80vh] md:h-[85vh] w-auto max-w-none object-contain"
          :placeholder="[50, 25]"
          loading="eager"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  pointer-events: none;
  z-index: 0;
}
</style>
