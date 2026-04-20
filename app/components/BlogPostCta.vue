<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    topic: string
    description?: string
  }>(),
  {
    description:
      'Call Primo Sewer Cleaning for fast, professional drain and sewer service in Northeastern PA.',
  },
)

const title = computed(() => {
  const topic = (props.topic || '').trim()
  if (!topic) return 'Need help with a clogged drain?'
  return `Do you need ${topic}?`
})
</script>

<template>
  <ContentCta
    :title="title"
    :description="description"
    primary-text="Call now"
    primary-variant="call"
  />
</template>
