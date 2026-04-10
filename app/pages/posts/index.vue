<script
  setup
  lang="ts"
>
import { computed } from 'vue'

const formatPostDate = (date: string) => {
  const d = new Date(`${date}T00:00:00Z`)
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('best-sewer-cleaning-primo.webp')
  return {
    backgroundImage: `url('${imgUrl}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
})

const { data: posts } = await useAsyncData('posts:index', () =>
  queryCollection('posts')
    .order('date', 'DESC')
    .select('path', 'title', 'description', 'date', 'image')
    .all(),
)

useSeoMeta({
  title: 'Pennsylvania Plumbing Blog',
  description:
    'Drain cleaning tips, clog prevention advice, and updates for homeowners in Northeastern PA.',
  ogTitle: 'Pennsylvania Plumbing Blog',
  ogDescription:
    'Drain cleaning tips, clog prevention advice, and updates for homeowners in Northeastern PA.',
  twitterTitle: 'Pennsylvania Plumbing Blog',
  twitterDescription:
    'Drain cleaning tips, clog prevention advice, and updates for homeowners in Northeastern PA.',
})
</script>

<template>
  <div
    id="main-content"
    class="flex flex-col justify-center gap-4 min-h-screen mx-auto pb-20 bg-stone-950"
  >
    <div
      id="header-div"
      class="relative w-full h-80 md:h-96 rounded overflow-hidden flex items-center justify-center text-white text-center px-4 mt-[74px] border-b border-stone-600"
      :style="backgroundStyles"
    >
      <div class="absolute inset-0 bg-black/60 bg-opacity-50 z-[1]" />
      <div class="relative z-[2] flex flex-col items-center justify-center gap-3 max-w-3xl">
        <h1 class="text-4xl md:text-6xl text-stone-50 fancy">
          Pennsylvania Plumbing Blog
        </h1>
        <p class="opacity-85 text-base md:text-lg leading-loose">
          Drain cleaning tips, clog prevention advice, and updates for homeowners in Northeastern PA.
        </p>
      </div>
    </div>

    <div class="px-4 md:px-0">
      <section class="max-w-4xl mx-auto mt-10">
        <div
          v-if="posts?.length"
          class="grid gap-5"
        >
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="post.path"
            class="group block rounded-sm border border-stone-800 bg-stone-900/40 p-6 transition hover:bg-stone-900/60"
          >
            <div
              v-if="post.image"
              class="mb-5 overflow-hidden rounded-sm"
            >
              <img
                :src="post.image"
                :alt="post.title"
                class="block w-full aspect-[16/9] object-cover"
                loading="lazy"
                decoding="async"
              >
            </div>

            <h2 class="text-xl font-bold tracking-tight group-hover:underline group-hover:underline-offset-4">
              {{ post.title }}
            </h2>

            <p
              v-if="post.date"
              class="mt-2 text-sm opacity-70"
            >
              {{ formatPostDate(post.date) }}
            </p>

            <p class="mt-3 opacity-85">
              {{ post.description }}
            </p>

            <p class="mt-4 inline-flex items-center gap-2 text-sm opacity-80 group-hover:opacity-100">
              Read post
              <UIcon
                name="i-mdi-arrow-right"
                class="h-4 w-4"
              />
            </p>
          </NuxtLink>
        </div>

        <div
          v-else
          class="rounded-sm border border-stone-800 bg-stone-900/40 p-6 opacity-80"
        >
          No posts yet.
        </div>
      </section>
    </div>
  </div>
</template>
