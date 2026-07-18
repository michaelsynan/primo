<script
  setup
  lang="ts"
>
import type { AccordionItem } from '@nuxt/ui'

const faq = [
  {
    question: 'What plumbing services does Primo Sewer Cleaning offer?',
    answer:
      'Primo Sewer Cleaning provides professional plumbing and sewer services throughout Northeastern Pennsylvania, including drain cleaning, sewer line repairs, sewer camera inspections, high-pressure hydro jetting, water heater repair and replacement, sump pump installation and repair, faucet installation, excavation services, and emergency plumbing.'
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We proudly serve Dickson City, Scranton, Dunmore, Clarks Summit, Moosic, Taylor, Old Forge, Pittston, Archbald, Olyphant, Peckville, Carbondale, and surrounding communities throughout Lackawanna County and Northeastern Pennsylvania.'
  },
  {
    question: 'Do you offer 24/7 emergency plumbing services?',
    answer:
      "Yes. We respond to emergency plumbing issues including burst pipes, sewer backups, overflowing drains, water heater failures, clogged sewer lines, and other urgent plumbing problems. If you're experiencing a plumbing emergency, contact us as soon as possible."
  },
  {
    question: 'Do you offer high-pressure hydro jetting?',
    answer:
      'Yes. Our professional hydro jetting equipment uses high-pressure water to remove grease, sludge, mineral buildup, tree roots, and stubborn blockages from sewer and drain lines. Hydro jetting is one of the safest and most effective ways to restore proper flow without the use of harsh chemicals.'
  },
  {
    question: 'When should I have my sewer line inspected with a camera?',
    answer:
      "A sewer camera inspection is recommended if you're experiencing recurring clogs, slow drains, sewer odors, frequent backups, or before purchasing a home. Camera inspections allow us to accurately locate blockages, cracks, collapsed pipes, and tree root intrusion without unnecessary digging."
  },
  {
    question: 'How do I know if my sewer line is clogged?',
    answer:
      'Common signs include multiple slow drains, gurgling toilets, sewage odors, water backing up into tubs or floor drains, and frequent clogs throughout your home. These symptoms often indicate a blockage in the main sewer line and should be inspected promptly.'
  },
  {
    question: 'How often should a sump pump be replaced?',
    answer:
      'Most sump pumps last between 7 and 10 years depending on usage, maintenance, and water conditions. If your sump pump runs constantly, makes unusual noises, cycles frequently, or fails during heavy rain, it may be time for repair or replacement.'
  },
  {
    question: 'Should I replace old cast iron pipes with PVC?',
    answer:
      'If your older pipes are experiencing frequent clogs, leaks, corrosion, tree root intrusion, or recurring sewer backups, replacing them with modern PVC piping may be the best long-term solution. PVC pipes are durable, corrosion-resistant, and designed to provide decades of reliable performance. We can inspect your plumbing system and recommend whether a repair or complete replacement is the best option.'
  },
  {
    question: 'Can tree roots damage my sewer line?',
    answer:
      'Yes. Tree roots naturally seek moisture and can enter older sewer pipes through small cracks or loose joints. As they grow, they can create severe blockages, crack pipes, and eventually cause sewer line failure. A sewer camera inspection can quickly identify root intrusion, and hydro jetting or pipe replacement may be recommended depending on the severity.'
  },
  {
    question: 'Why choose Primo Sewer Cleaning?',
    answer:
      "Primo Sewer Cleaning is a licensed and insured plumbing company proudly serving Northeastern Pennsylvania. Built on honesty, hard work, and dependable service, our team combines years of experience with some of the most advanced plumbing and sewer equipment in the area to solve problems quickly and accurately. Whether it's routine maintenance, emergency repairs, or complete system replacements, homeowners and businesses trust Primo Sewer Cleaning for quality workmanship and straightforward recommendations."
  }
]

const items = computed<AccordionItem[]>(() =>
  faq.map((item) => ({
    label: item.question,
    content: item.answer
  }))
)

const faqStructuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
}))

useHead({
  script: [
    {
      id: 'home-faq-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqStructuredData.value)
    }
  ]
})
</script>

<template>
  <section class="border-t border-b w-full py-20 md:py-28 px-4 md:px-0 bg-stone-950">
    <div class="max-w-5xl mx-auto">
      <div class="mb-8 md:mb-10 text-center">
        <h2 class="fancy text-3xl md:text-5xl">Frequently Asked Questions</h2>
        <p class="text-stone-300 mt-3 max-w-2xl mx-auto">
          Answers to common plumbing and sewer questions for homeowners and businesses across Northeastern Pennsylvania.
        </p>
      </div>

      <UAccordion
        :items="items"
        type="single"
        :collapsible="true"
        trailing-icon="i-lucide-plus"
        class="w-full"
        :ui="{
          item: 'bg-stone-900/60 border border-stone-800 rounded-lg mb-3 overflow-hidden',
          trigger: 'px-5 py-4 text-left hover:bg-stone-800/60 transition-colors cursor-pointer',
          label: 'text-lg md:text-xl font-semibold text-stone-100 leading-snug',
          content: 'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-1',
          body: 'px-5 pb-5 pt-2 text-lg text-stone-300 leading-relaxed',
          trailingIcon: 'text-[var(--color-primo)]'
        }"
      />
    </div>
  </section>
</template>

<style scoped></style>
