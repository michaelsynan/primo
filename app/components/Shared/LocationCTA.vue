<script setup lang="ts">
defineProps<{
    location: string;
}>();
</script>

<template>
    <div
        class="relative max-w-4xl mx-auto w-full rounded-sm border border-stone-700 hover:border-stone-200 bg-gradient-to-b from-stone-800/40 to-stone-900/40 hover:from-stone-800/60 hover:to-stone-900/60 text-primoWhite my-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-8 transition-all ease duration-300 group">

        <!-- Left side - Image -->
        <div class="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center md:justify-start min-h-[240px] py-4">
            <NuxtImg src="/primo-logo-gold-2.png" alt="Primo Sewer Cleaning Logo" width="180" height="195"
                class="object-contain max-w-[180px] max-h-[200px]" />
        </div>

        <!-- Right side - CTA Content -->
        <div class="flex-1 text-center md:text-left">
            <div class="hidden md:block">
                <h2 class="text-2xl md:text-3xl font-bold roboto leading-tight mb-4">
                    Need Plumbing Services in {{ location }}?
                </h2>
            </div>

            <div class="block md:hidden">
                <h2 class="text-2xl font-bold leading-tight mb-4">
                    Need Plumbing Services in {{ location }}?
                </h2>
            </div>

            <p class="text-lg md:text-xl roboto mb-6">
                Our expert team is ready to solve your plumbing and sewer problems efficiently and effectively.
            </p>

            <SharedButton :icon="true" text="Call Now for Service" class="mx-auto md:mx-0" variant="call" />
        </div>
    </div>
</template>
