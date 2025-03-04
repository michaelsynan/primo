<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto px-4 py-40">

    <section class="max-w-2xl mx-auto p-6 space-y-6 text-center font-sans">
      <h1 class="text-3xl md:text-4xl fancy font-bold text-[var(--color-primoWhite)]">Contact a Plumber</h1>
      <p class="text-stone-300 text-lg">Get in touch with us for plumbing services near you.</p>

      <div class="flex flex-col gap-4 w-full">
        <!-- Call Button -->
        <SharedButton icon="true" text="Call Now" class="w-full" />


        <!-- Email Button -->
        <SharedButton to="'mailto:primosewercleaning@gmail.com'" variant="email" icon="false" text="Email Us"
          class="w-full" />


        <!-- WhatsApp Button -->
        <SharedButton variant="whatsapp" icon="false" text="WhatsApp" class="w-full" />

        <!-- Address (if needed) -->
        <div class="bg-[var(--color-primoBrown)] p-4 rounded-lg">
          <p class="text-[var(--color-primoWhite)] font-semibold">📍 Our Service Area:</p>
          <p class="text-[var(--color-primoWhite)]">Lurz</p>
        </div>
      </div>
    </section>
  </div>
</template>
