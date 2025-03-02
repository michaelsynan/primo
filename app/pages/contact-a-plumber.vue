<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto px-4 py-40">

    <section class="max-w-2xl mx-auto p-6 space-y-6 text-center font-sans">
      <h1 class="text-3xl font-bold text-[var(--color-primoBlack)]">Contact a Plumber</h1>
      <p class="text-[var(--color-primoGrey)]">Get in touch with us for plumbing services.</p>

      <div class="space-y-4">
        <!-- Call Button -->
        <a href="tel:+1234567890"
          class="block bg-[var(--color-primoGreen)] text-[var(--color-primoWhite)] py-3 rounded-lg text-lg font-medium hover:bg-opacity-90">
          📞 Call Us: (123) 456-7890
        </a>

        <!-- Email Button -->
        <a href="mailto:info@example.com"
          class="block bg-[var(--color-primoRed)] text-[var(--color-primoWhite)] py-3 rounded-lg text-lg font-medium hover:bg-opacity-90">
          ✉️ Email: info@example.com
        </a>

        <!-- WhatsApp Button -->
        <a href="https://wa.me/1234567890" target="_blank"
          class="block bg-[var(--color-primoYellow)] text-[var(--color-primoBlack)] py-3 rounded-lg text-lg font-medium hover:bg-opacity-90">
          💬 Chat on WhatsApp
        </a>

        <!-- Address (if needed) -->
        <div class="bg-[var(--color-primoBrown)] p-4 rounded-lg">
          <p class="text-[var(--color-primoWhite)] font-semibold">📍 Our Location:</p>
          <p class="text-[var(--color-primoWhite)]">123 Main Street, Your City, ZIP</p>
        </div>
      </div>
    </section>
  </div>
</template>
