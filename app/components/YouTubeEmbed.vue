<script
  setup
  lang="ts"
>
const props = withDefaults(
  defineProps<{
    id: string
    title?: string
  }>(),
  {
    title: 'YouTube video',
  },
)

const src = computed(
  () => `https://www.youtube-nocookie.com/embed/${props.id}?rel=0&modestbranding=1`,
)
</script>

<template>
  <div class="my-10">
    <div class="mx-auto w-full max-w-[420px] overflow-hidden rounded-sm border border-stone-800 bg-black/20">
      <div class="aspect-[9/16] w-full">
        <iframe
          class="block h-full w-full"
          :src="src"
          :title="title"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  </div>
</template>
