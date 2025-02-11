<template>
  <div :style="{ backgroundImage: 'url(/best-sewer-cleaning-primo.webp)' }"
    class="border-b bg-fixed w-full px-4 md:px-0 bg-stone-950"
    style="background-size: cover; background-position: center;">
    <div class="overlay"></div>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 h-screen max-w-5xl mx-auto pt-[73px]">
      <div class="flex justify-center items-center w-[200px] md:w-[240px] mx-auto">
        <Nuxt-img src="/primo-main-logo.webp" alt="Primo Sewer Cleaning" width="240" />
      </div>
      <div class="flex flex-col justify-center items-center md:items-start gap-6">
        <!-- H1 for larger screens hidden on smaller screens -->
        <h1 class="text-5xl md:text-6xl caslon leading-tight hidden md:block">Plumbing & Sewer Cleaning Services <br>
          You Can
          Trust</h1>
        <!-- H1 for smaller screens hidden on larger screens -->
        <h1 class="text-3xl caslon leading-snug md:hidden text-center">Plumbing & Sewer Services You Can Count On</h1>
        <div class="flex flex-row gap-4 w-full">
          <SharedButton text="Call Now" class="w-full md:w-max" />
          <SharedButton class="hidden md:inline" text="Learn More" variant="ghost" />
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