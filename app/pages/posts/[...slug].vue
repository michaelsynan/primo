<script
  setup
  lang="ts"
>
/* import { POST_TAG_CLASSES, isPostTag } from '@/data/postTags' */

import BaseCta from '~/components/ContentCta.vue'

const formatPostDate = (date: string) => {
  const d = new Date(`${date}T00:00:00Z`)
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

const route = useRoute()
const postPath = computed(() => {
  const slugParam = route.params.slug
  const slug = Array.isArray(slugParam) ? slugParam.join('/') : slugParam
  return `/posts/${slug || ''}`.replace(/\/+$/, '')
})

const { data: page } = await useAsyncData(
  () => `post:${postPath.value}`,
  () => queryCollection('posts').path(postPath.value).first(),
  { watch: [postPath] }
)

const post = computed(() => page.value)
const postCta = computed(() => {
  const raw = (post.value as any)?.cta
  if (!raw) return null

  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw)
    } catch {
      return null
    }
  }

  if (typeof raw === 'object') return raw
  return null
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

const seoTitle = computed(() => post.value?.title || 'Blog Post')
const seoDescription = computed(
  () =>
    post.value?.description ||
    'Drain cleaning tips, clog prevention advice, and updates for homeowners in Northeastern PA.'
)
const seoImage = computed(() => post.value?.image)

const siteUrl = 'https://primosewercleaning.com'

const canonicalUrl = computed(() => new URL(postPath.value, siteUrl).toString())
const seoImageAbsolute = computed(() => {
  const img = seoImage.value
  if (!img) return undefined
  try {
    return new URL(img, siteUrl).toString()
  } catch {
    return undefined
  }
})

const publishedTime = computed(() => {
  const date = post.value?.date
  if (!date) return undefined
  const d = new Date(`${date}T00:00:00Z`)
  if (Number.isNaN(d.getTime())) return undefined
  return d.toISOString()
})

const twitterCard = computed(() => (seoImageAbsolute.value ? 'summary_large_image' : 'summary'))

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogType: 'article',
  ogUrl: canonicalUrl,
  ogImage: seoImageAbsolute,
  twitterCard,
  twitterTitle: seoTitle,
  twitterDescription: seoDescription,
  twitterImage: seoImageAbsolute,
  articlePublishedTime: publishedTime,
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
  script: [
    {
      key: 'ld-blogposting',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: seoTitle.value,
        description: seoDescription.value,
        url: canonicalUrl.value,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl.value,
        },
        ...(seoImageAbsolute.value ? { image: [seoImageAbsolute.value] } : {}),
        ...(publishedTime.value
          ? { datePublished: publishedTime.value, dateModified: publishedTime.value }
          : {}),
        author: {
          '@type': 'Organization',
          name: 'Primo Sewer Cleaning',
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Primo Sewer Cleaning',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/primo-sewer-cleaning.png`,
          },
        },
      }),
    },
  ],
}))
</script>

<template>
  <main
    id="main-content"
    class="mx-auto max-w-5xl px-4 pt-[73px] pb-16 md:px-6 md:pt-[85px]"
  >
    <div class="mx-auto w-full max-w-3xl pt-20">
      <article
        v-if="post"
        class="rounded-none border border-stone-800 bg-stone-900/40 p-6 md:p-10"
      >
        <header class="mb-10">
          <h1 class="text-3xl font-bold tracking-tight md:text-4xl">
            {{ post.title }}
          </h1>

          <p
            v-if="post.date"
            class="mt-3 text-sm opacity-70"
          >
            {{ formatPostDate(post.date) }}
          </p>

          <div
            v-if="post.image"
            class="mt-6 overflow-hidden"
          >
            <NuxtImg
              :src="post.image"
              :alt="post.title"
              class="block w-full aspect-[16/9] object-cover"
              width="1200"
              height="675"
              loading="eager"
              quality="85"
              fit="cover"
            />
          </div>
        </header>

        <div
          class="leading-relaxed [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_p]:mt-4 [&_a]:underline [&_a]:underline-offset-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-2 [&_blockquote]:mt-6 [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:opacity-90 [&_img]:my-8 [&_img]:w-full"
        >
          <ContentRenderer :value="post" />
        </div>

        <BaseCta
          v-if="postCta"
          class="mt-10"
          v-bind="postCta"
        />
      </article>

      <NuxtLink
        to="/posts"
        class="mt-6 inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100"
      >
        <UIcon
          name="i-mdi-arrow-left"
          class="h-4 w-4"
        />
        Back to posts
      </NuxtLink>
    </div>
  </main>
</template>
