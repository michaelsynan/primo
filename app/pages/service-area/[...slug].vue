<script
  setup
  lang="ts"
>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { serviceAreas } from '../../data/locations';
import { services } from '../../data/services';

const route = useRoute();
const [locationSlug, serviceSlug] = route.params.slug as string[];

const location = computed(() => serviceAreas.find(l => l.slug === locationSlug));
const service = computed(() => services.find(s => s.slug === serviceSlug));

const otherServices = computed(() => {
  if (!service.value) return []
  return services.filter(s => s.slug !== service.value!.slug)
})

useSeoMeta({
  title: computed(() => `${service.value?.name} in ${location.value?.name}, PA`),
  description: computed(() => `Get expert ${service.value?.name.toLowerCase()} in ${location.value?.name}, PA. We offer fast, reliable plumbing and sewer services to keep your home or business running smoothly.`),
  ogTitle: computed(() => `${service.value?.name} in ${location.value?.name}, PA`),
  ogDescription: computed(() => `Get expert ${service.value?.name.toLowerCase()} in ${location.value?.name}, PA. We offer fast, reliable plumbing and sewer services to keep your home or business running smoothly.`),
  twitterTitle: computed(() => `${service.value?.name} in ${location.value?.name}, PA`),
  twitterDescription: computed(() => `Get expert ${service.value?.name.toLowerCase()} in ${location.value?.name}, PA. We offer fast, reliable plumbing and sewer services to keep your home or business running smoothly.`),
});

const longDescription = computed(() => {
  if (!location.value || !service.value) return '';
  return `At Primo Sewer Cleaning, we are proud to offer specialized ${service.value.name.toLowerCase()} services to the residents and businesses of ${location.value.name}, a community known for its ${location.value.character.toLowerCase()} With a population of approximately ${location.value.population}, we understand the unique plumbing needs of this area. Whether you're near ${location.value.landmarks} or in a quiet residential neighborhood, our expert technicians are here to provide reliable, efficient, and affordable solutions. We are committed to keeping the homes and businesses of ${location.value.name} running smoothly.`
});

const backgroundStyles = computed(() => {
  const img = useImage();
  const imgUrl = img(service.value?.image || '');
  return {
    backgroundImage: `url('${imgUrl}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
});
</script>

<template>
  <div
    v-if="location && service"
    class="flex flex-col justify-center gap-4 min-h-screen mx-auto pb-20 bg-stone-950"
  >
    <div
      id="header-div"
      class="relative w-full h-80 md:h-96 rounded overflow-hidden flex items-center justify-center text-white text-center px-4 mt-[74px] border-b border-stone-600"
      :style="backgroundStyles"
    >
      <div class="absolute inset-0 bg-black/60 bg-opacity-50 z-[1]"></div>
      <h1 class="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl text-stone-50 fancy z-[2]">
        {{ service.name }} in {{ location.name }}
      </h1>
    </div>

    <div class="px-4 md:px-0">
      <div class="max-w-4xl mx-auto">
        <p class="roboto text-xl md:text-3xl leading-loose mt-6 mb-10 border-b border-stone-700 pb-6 text-stone-300">
          {{ location.seoDescription }}
        </p>

        <div class="mt-6">
          <h2 class="text-2xl font-bold mb-2.5">{{ service.name }} Services in {{ location.name }}</h2>
          <p class="text-lg">{{ service.description }}</p>
        </div>

        <div v-if="service.details">
          <div
            v-for="(value, key) in service.details"
            :key="key"
          >
            <h3 class="text-xl font-bold mt-4 mb-2 capitalize">{{ key.replace('_', ' ') }}</h3>
            <ul class="list-disc list-outside pl-7 space-y-2 text-lg marker:text-stone-500">
              <li
                v-for="item in value"
                :key="item"
              >{{ item }}</li>
            </ul>
          </div>
        </div>
        <!-- Second CTA after services -->
        <div class="mt-16 mb-16">
          <SharedLocationCTA :location="location.name" />
        </div>


        <div class="mt-12">
          <h2 class="text-2xl font-bold mb-8 text-center">Other Services in {{ location.name }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="otherService in otherServices"
              :key="otherService.slug"
              class="bg-stone-900/50 p-6 rounded-md border border-stone-700 hover:border-stone-200 transition-all ease duration-300 group"
            >
              <NuxtLink
                v-if="otherService.slug"
                :to="`/service-area/${location.slug}/${otherService.slug}`"
                class="block"
              >
                <div class="flex flex-col h-full">
                  <h3 class="text-xl font-bold text-stone-50 mb-3 group-hover:text-primoGreen transition-colors">
                    {{ otherService.name }}</h3>
                  <p
                    class="text-stone-400 group-hover:text-stone-100 transition-colors text-sm leading-relaxed flex-grow">
                    {{ otherService.description }}</p>
                  <div
                    class="text-right mt-4 flex items-center justify-end gap-1 text-primoGreen group-hover:translate-x-1 transition-transform"
                  >
                    <span class="text-sm">Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z"
                      />
                    </svg>
                  </div>
                </div>
              </NuxtLink>

              <div
                v-else
                class="block"
              >
                <div class="flex flex-col h-full">
                  <h3 class="text-xl font-bold text-stone-50 mb-3">
                    {{ otherService.name }}</h3>
                  <p class="text-stone-400 transition-colors text-sm leading-relaxed flex-grow">
                    {{ otherService.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="mt-12">
          <h2 class="text-2xl font-bold mb-2.5">About {{ location.name }}</h2>
          <p class="text-lg">{{ longDescription }}</p>
        </div>
        <SharedCTA />

      </div>
    </div>
  </div>
</template>
