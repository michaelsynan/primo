<template>
  <div class="flex flex-col justify-center gap-4 min-h-screen mx-auto px-4 py-40">
    <section class="max-w-2xl mx-auto p-6 space-y-6 text-center font-sans">
      <h1 class="text-3xl md:text-4xl fancy font-bold text-[var(--color-primoWhite)]">Contact a Plumber in NEPA</h1>
      <p class="text-stone-300 text-lg">Get in touch with us for plumbing services near you.</p>

      <div class="flex flex-col gap-4 w-full">
        <SharedButton
          :icon="true"
          text="Call Now"
          class="w-full"
          variant="call"
        />

        <SharedButton
          to="mailto:primosewercleaning@gmail.com"
          variant="email"
          :icon="false"
          text="Email Us"
          class="w-full"
        />

        <SharedButton
          variant="whatsapp"
          :icon="false"
          text="WhatsApp"
          class="w-full"
        />
      </div>
      <!-- Contact + consent form -->
      <div class="mt-8 w-full bg-stone-900/40 border border-stone-800 rounded-lg p-6 text-left">
        <h2 class="text-2xl font-semibold text-stone-100 mb-3">Request Service</h2>
        <p class="text-stone-300 mb-4">Send us your details and we will follow up to schedule service.
        </p>

        <form
          @submit.prevent="onSubmit"
          class="grid grid-cols-1 gap-4"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                for="sms-name"
                class="text-stone-200 block mb-1"
              >Name</label>
              <UInput
                id="sms-name"
                v-model="name"
                placeholder="Your full name"
                class="w-full"
              />
              <p
                v-if="errors.name"
                class="text-rose-400 text-sm mt-1"
              >{{ errors.name }}</p>
            </div>

            <div>
              <label
                for="sms-email"
                class="text-stone-200 block mb-1"
              >Email</label>
              <UInput
                id="sms-email"
                v-model="email"
                type="email"
                placeholder="you@example.com"
                class="w-full"
                autocomplete="email"
              />
              <p
                v-if="errors.email"
                class="text-rose-400 text-sm mt-1"
              >{{ errors.email }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                for="sms-phone"
                class="text-stone-200 block mb-1"
              >Mobile phone number</label>
              <UInput
                id="sms-phone"
                v-model="phone"
                placeholder="(570) 123-4567"
                inputmode="tel"
                class="w-full"
                autocomplete="tel"
              />
              <p
                v-if="errors.phone"
                class="text-rose-400 text-sm mt-1"
              >{{ errors.phone }}</p>
            </div>

            <div>
              <label
                for="sms-service"
                class="text-stone-200 block mb-1"
              >Service Needed</label>
              <UInput
                id="sms-service"
                v-model="service"
                placeholder="Drain cleaning, sewer backup, water heater, etc."
                class="w-full"
              />
              <p
                v-if="errors.service"
                class="text-rose-400 text-sm mt-1"
              >{{ errors.service }}</p>
            </div>
          </div>

          <div>
            <label
              for="sms-message"
              class="text-stone-200 block mb-1"
            >Message</label>
            <UTextarea
              id="sms-message"
              v-model="message"
              :rows="5"
              placeholder="Briefly describe what is going on and your preferred timing."
              class="w-full"
            />
            <p
              v-if="errors.message"
              class="text-rose-400 text-sm mt-1"
            >{{ errors.message }}</p>
          </div>

          <div class="flex items-start gap-3">
            <UCheckbox
              v-model="consentService"
              id="sms-consent"
            />
            <label
              for="sms-consent"
              class="text-stone-300"
            >
              Optional: I agree to receive service-related communications from Primo Sewer Cleaning, including calls, emails, and
              text messages about appointment confirmations, reminders, scheduling updates, and customer service. Message
              frequency varies (typically 1-5 messages per service request). Message and data rates may apply. Text STOP to (570)
              630-7469 to opt out or HELP for assistance. Consent is not required to purchase services. See our <NuxtLink
                to="/privacy"
                class="underline text-primoGreen"
              >Privacy Policy</NuxtLink> and <NuxtLink
                to="/terms-and-conditions"
                class="underline text-primoGreen"
              >Terms &amp; Conditions</NuxtLink>.
            </label>
          </div>

          <div class="flex items-start gap-3">
            <UCheckbox
              v-model="consentMarketing"
              id="marketing-consent"
            />
            <label
              for="marketing-consent"
              class="text-stone-300"
            >
              Optional: I agree to receive occasional follow-up and promotional communications from Primo Sewer
              Cleaning. I can opt out at any time.
            </label>
          </div>

          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <UButton
                type="submit"
                color="primary"
                :loading="submitting"
              >Send Request</UButton>
            </div>
            <div aria-live="polite">
              <p
                v-if="successMessage"
                class="text-green-400"
              >{{ successMessage }}</p>
              <p
                v-if="errors.submit"
                class="text-rose-400"
              >{{ errors.submit }}</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref, reactive } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const service = ref('')
const message = ref('')
const consentService = ref(false)
const consentMarketing = ref(false)
const successMessage = ref('')
const submitting = ref(false)
const errors = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  submit: ''
})

const normalizePhone = (p: string) => p.replace(/[^0-9]/g, '')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  errors.name = ''
  errors.email = ''
  errors.phone = ''
  errors.service = ''
  errors.message = ''
  errors.submit = ''

  if (!name.value || name.value.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }
  if (!email.value || !emailRegex.test(email.value)) {
    errors.email = 'Please enter a valid email address.'
  }
  const digits = normalizePhone(phone.value)
  if (!digits || digits.length < 10) {
    errors.phone = 'Please enter a valid US phone number.'
  }
  if (!service.value || service.value.trim().length < 3) {
    errors.service = 'Please tell us what service you need.'
  }
  if (!message.value || message.value.trim().length < 10) {
    errors.message = 'Please include a short message (at least 10 characters).'
  }

  return !errors.name && !errors.email && !errors.phone && !errors.service && !errors.message
}

async function onSubmit() {
  successMessage.value = ''
  if (!validate()) return

  submitting.value = true

  const payload = {
    name: name.value.trim(),
    email: email.value.trim(),
    phone: normalizePhone(phone.value),
    service: service.value.trim(),
    message: message.value.trim(),
    consentService: consentService.value,
    consentMarketing: consentMarketing.value,
    source: 'contact-a-plumber',
    submittedAt: new Date().toISOString()
  }

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: payload
    })

    console.log('Success response:', response)
    successMessage.value = 'Thanks! Your request has been sent. We will contact you shortly.'
    name.value = ''
    email.value = ''
    phone.value = ''
    service.value = ''
    message.value = ''
    consentService.value = false
    consentMarketing.value = false
  } catch (error) {
    console.error('Form submission error:', error)
    errors.submit = 'We could not send your request right now. Please call (570) 905-8441.'
  } finally {
    submitting.value = false
  }
}
</script>
