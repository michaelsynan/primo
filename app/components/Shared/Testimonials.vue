<script setup lang="ts">
interface Testimonial {
  name: string
  text: string
  image: string
  profession: string
  stars: number
}

const testimonials: Testimonial[] = [
  { name: 'Joanne Braun', text: 'These guys were great, came out the next day, and managed to figure out what turned out to be quite the clog. Throughout it all they were very polite and cleaned up after themselves. I would definitely recommend.', image: '/pic2.png', profession: 'Operations Manager', stars: 5 },
  { name: 'Michelle Urso', text: 'They came within a few hours and we are so appreciative! They fixed our problem with our drainage pipe and they got us up and running again within a half an hour! they also put a clean out section in our drain pipe for the future!! They were very kind and professional! Highly recommend!', image: '/pic1.png', profession: 'Videographer', stars: 5 },
  { name: 'Wendy Miscavage', text: 'These plumbers that came out to Arbys restaurant was fantastic! They listened to what was going on and immediately got the job done. We will recommend them to everyone we know. Very professional and knowledgeable!', image: '/pic3.png', profession: 'Actress', stars: 5 },
]
</script>

<template>
  <div class="w-full bg-juju-950 border-b border-stone-500 py-20">
    <UContainer class="relative flex flex-col justify-center items-center w-full h-auto md:min-h-[600px] my-8 gap-4">
      <div class="text-center w-full flex flex-col justify-center items-center mb-12">
        <h2 class="text-3xl font-bold pb-6 fancy">What They're Saying</h2>
        <div class="flex justify-center w-full">
          <SharedGoogleReview class="max-w-screen-sm" />
        </div>
      </div>
      <div class="relative w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
        <SharedTestimonial class="mb-10" v-for="(testimonial, index) in testimonials" :key="index"
          :name="testimonial.name" :text="testimonial.text" :image="testimonial.image"
          :profession="testimonial.profession" :stars="testimonial.stars" />
      </div>
      <div class="flex flex-row max-w-content">
        <nuxt-link class="items-center flex flex-row hover:underline roboto"
          to="https://www.google.com/search?hl=en-US&gl=us&q=Primo+Sewer+Cleaning&ludocid=17634468255813273309&lsig=AB86z5WvcyVaNQ2I_lcMAgYKntWW#lrd=0xadfd59710b8cb173:0xf4ba37727ea706dd,1"
          target="_blank">
          Read All Testimonials
        </nuxt-link>
      </div>
    </UContainer>
  </div>
</template>
