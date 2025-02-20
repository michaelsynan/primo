<script setup lang="ts">
const props = defineProps<{
  name: string
  text: string
  image: string
  profession: string
  stars: number
}>()
</script>

<template>
  <div class="px-5 max-w-sm rounded-lg  text-center flex-1 basis-1/3 bg-stone-900 p-5">
    <div class="w-full mb-6">
      <div class="w-16 h-16 flex items-center justify-center border border-stone-500 rounded-full mx-auto"
        :style="{ backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }" />
    </div>
    <p class="text-base italic leading-loose">
      "{{ props.text }}"
    </p>
    <UIcon v-for="(star, index) in stars" :key="index" name="i-mdi-star" class="w-4 h-4 text-yellow-300 -ml-0.5 mt-3" />
    <p class="text-base text-stone-100/50 mt-2">
      {{ props.name }}
    </p>
  </div>
</template>

<style scoped></style>
