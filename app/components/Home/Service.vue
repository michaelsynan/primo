<script
  setup
  lang="ts"
>
const props = defineProps({
  icon: String,
  header: String,
  description: String,
  link: String,
})

const hasLink = computed(() => Boolean(props.link && props.link.trim()))

const to = computed(() => {
  if (!hasLink.value) return ''
  const link = props.link!.startsWith('/') ? props.link! : `/${props.link!}`
  return `/luzerne-lackawanna-plumbing-sewer${link}`
})
</script>

<template>
  <NuxtLink
    v-if="hasLink"
    :to="to"
    class="flex flex-col h-full group"
    :aria-label="header ? `Learn more about ${header} services` : 'Learn more'"
  >
    <div class="pb-4">
      <div class="flex flex-row items-end gap-4">
        <img
          class="w-10 shrink-0"
          :src="icon"
          :alt="header"
        />
        <h3 class="fancy text-2xl text-stone-50 tracking-wide">{{ header }}</h3>
      </div>
    </div>

    <div class="flex-grow">
      <p
        class="roboto leading-loose text-stone-400 group-hover:text-stone-100 transition-colors ease-in-out duration-200">
        {{ description }}
      </p>
    </div>

    <div class="text-right ml-auto mt-4 relative">
      <span
        class="text-sm flex flex-row items-center gap-1"
        aria-hidden="true"
      >
        Learn More
        <div class="group-hover:translate-x-1.5 transition-transform duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z"
            />
          </svg>
        </div>
      </span>
    </div>
  </NuxtLink>

  <div
    v-else
    class="flex flex-col h-full group cursor-default"
  >
    <div class="pb-4">
      <div class="flex flex-row items-end gap-4">
        <img
          class="w-10 shrink-0"
          :src="icon"
          :alt="header"
        />
        <h3 class="fancy text-2xl text-stone-50 tracking-wide">{{ header }}</h3>
      </div>
    </div>

    <div class="flex-grow">
      <p class="roboto leading-loose text-stone-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>
