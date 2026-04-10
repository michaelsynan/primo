<script
  setup
  lang="ts"
>
type CtaVariant = 'call' | 'email' | 'whatsapp' | 'link'

const props = defineProps<{
  title?: string
  description?: string

  primaryText?: string
  primaryVariant?: CtaVariant
  primaryTo?: string

  secondaryText?: string
  secondaryTo?: string
}>()

const mergedProps = computed(() => ({
  ...props,
  secondaryText: '',
  secondaryTo: '',
}))
</script>

<template>
  <div class="mdc-cta">
    <ContentCta
      v-bind="mergedProps"
      class="!border-primoYellow !bg-primoYellow !text-primoBlack"
    />
  </div>
</template>
