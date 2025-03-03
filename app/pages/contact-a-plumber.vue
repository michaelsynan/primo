<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto px-4 py-40">

    <section class="max-w-2xl mx-auto p-6 space-y-6 text-center font-sans">
      <h1 class="text-3xl md:text-4xl fancy font-bold text-[var(--color-primoWhite)]">Contact a Plumber</h1>
      <p class="text-stone-300 text-lg">Get in touch with us for plumbing services near you.</p>

      <div class="space-y-4">
        <!-- Call Button -->
        <a href="tel:+5708058441"
          class="block bg-[var(--color-primoGreen)] text-[var(--color-primoWhite)] py-3 rounded-lg text-lg font-medium hover:bg-opacity-90">
          📞 (570) 905-8441
        </a>

        <!-- Email Button -->
        <a href="mailto:primosewercleaning@gmail.com"
          class="block bg-[var(--color-primoRed)] text-[var(--color-primoWhite)] py-3 rounded-lg text-lg font-medium hover:bg-opacity-90">
          ✉️ primosewercleaning@gmail.com
        </a>

        <!-- WhatsApp Button -->
        <a href="https://wa.me/1234567890" target="_blank"
          class="block bg-[var(--color-primoYellow)] text-[var(--color-primoBlack)] py-3 rounded-lg text-lg font-medium hover:bg-opacity-90">
          💬 Chat on WhatsApp
        </a>

        <!-- Address (if needed) -->
        <div class="bg-[var(--color-primoBrown)] p-4 rounded-lg">
          <p class="text-[var(--color-primoWhite)] font-semibold">📍 Our Service Area:</p>
          <p class="text-[var(--color-primoWhite)]">Lurz</p>
        </div>
      </div>
    </section>
  </div>
</template>
