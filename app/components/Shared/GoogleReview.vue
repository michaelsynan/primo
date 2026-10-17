<script setup>
const reviewCount = ref(5)
// const result = await useGoogleReviews();
// const message = ref(result.value);
// watchEffect(() => {
//   message.value = result.value;
// });
</script>

<template>
  <div class="flex gap-1 items-center">
    <a
      href="https://share.google/E13L3PL3lCCtuW4i4"
      target="_blank"
      class="flex flex-col items-center gap-1  px-2 py-1 bg-opacity-50 rounded-lg"
    >
      <!-- Google Icon -->
      <UIcon
        name="i-logos-google-icon"
        class="w-6 h-6 flex-shrink-0 mt-0.5"
      />
      <!-- Rating Section -->
      <div class="flex flex-col gap-0 text-sm ml-1 items-center">
        <div class="text-white flex items-center">
          <div class="mr-1 mt-0.5 text-sm font-bold">4.9</div>
          <UIcon
            v-for="(star, index) in reviewCount"
            :key="index"
            name="i-mdi-star"
            class="w-4 h-4 text-yellow-300 -ml-0.5"
          />
        </div>
        <div class="text-stone-300 text-xs -mt-0.5">Out of 135 reviews</div>
      </div>
    </a>
  </div>
</template>

<style scoped></style>
