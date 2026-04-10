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
</script>

<template>
  <YouTubeEmbed
    :id="props.id"
    :title="props.title"
  />
</template>
