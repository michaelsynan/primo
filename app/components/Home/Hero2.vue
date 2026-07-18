<script setup>
import { nextTick } from 'vue';

const scrollToSection = async () => {
  await nextTick(); // Ensure the DOM is ready

  const target = document.getElementById("our-services");
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY; // Get precise position
    window.scrollTo({
      top: top - 20, // Adjust for any fixed headers
      behavior: "smooth",
    });

    // Focus on the target element for screen readers
    target.setAttribute("tabindex", "-1"); // Make the element focusable
    target.focus();
  }
};
</script>

<template>
  <div
    :style="{ backgroundImage: 'url(/best-sewer-cleaning-primo.webp)' }"
    class="border-b bg-fixed w-full px-4 md:px-0 bg-stone-950 relative overflow-hidden"
    style="background-size: cover; background-position: center;"
  >
    <div class="overlay"></div>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 min-h-[85vh] max-w-5xl mx-auto pt-[73px]">
      <div class="flex justify-center items-center w-[400px] md:w-[400px] mx-auto">
        <NuxtImg
          src="/primo-logo-gold-2.png"
          alt="Primo Sewer Cleaning"
          width="240"
          class="w-full max-w-[260px] h-auto"
          loading="eager"
        />

      </div>
      <div class="flex flex-col justify-center items-center md:items-start gap-6">
        <div class="flex flex-col gap-0 text-center md:text-left">
          <p class="roboto-condensed uppercase border-white text-white/90  w-full text-center md:text-left">
            Top-Rated Plumber in Northeastern PA</p>
          <!-- H1 for larger screens hidden on smaller screens -->
          <h1 class="text-5xl md:text-6xl fancy !leading-tighter hidden md:block">NEPA Plumbing & Sewer Cleaning
            Services
          </h1>

          <!-- H1 for smaller screens hidden on larger screens -->
          <h1 class="text-3xl fancy leading-snug md:hidden text-center">Plumbing & Sewer Services You Can Count On</h1>
        </div>
        <div class="flex flex-row gap-4 w-full">
          <SharedButton
            :icon="true"
            text="Call Now"
            class="w-full md:w-max"
            link="631-942-0582"
            variant="call"
          />

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  pointer-events: none;
  z-index: 0;
  height: 100%;
}

.grid {
  position: relative;
  z-index: 1;
}
</style>
