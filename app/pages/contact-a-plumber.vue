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
          icon="false"
          text="Email Us"
          class="w-full"
        />

        <SharedButton
          variant="whatsapp"
          icon="false"
          text="WhatsApp"
          class="w-full"
        />
      </div>
      <!-- SMS Opt-in Form -->
      <div class="mt-8 w-full bg-stone-900/40 border border-stone-800 rounded-lg p-6 text-left">
        <h2 class="text-2xl font-semibold text-stone-100 mb-3">Get Service Updates by Text</h2>
        <p class="text-stone-300 mb-4">Sign up to receive appointment confirmations, reminders, and scheduling updates.
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
                for="sms-phone"
                class="text-stone-200 block mb-1"
              >Mobile phone number</label>
              <UInput
                id="sms-phone"
                v-model="phone"
                placeholder="(570) 123-4567"
                inputmode="tel"
                class="w-full"
                aria-describedby="phone-desc"
              />
              <p
                id="phone-desc"
                class="text-stone-400 text-xs mt-1"
              >Enter a US phone number; we'll send an SMS confirmation if you opt in.</p>
              <p
                v-if="errors.phone"
                class="text-rose-400 text-sm mt-1"
              >{{ errors.phone }}</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <UCheckbox
              v-model="consent"
              id="sms-consent"
            />
            <label
              for="sms-consent"
              class="text-stone-300"
            >
              I agree to receive text messages from Primo Sewer Cleaning about service appointments, appointment
              reminders, scheduling updates, and customer care. Message frequency varies. Message and data rates may
              apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our <NuxtLink
                to="/privacy"
                class="underline text-primoGreen"
              >Privacy Policy</NuxtLink> and <NuxtLink
                to="/terms-and-conditions"
                class="underline text-primoGreen"
              >Terms &amp; Conditions</NuxtLink>.
            </label>
          </div>

          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <UButton
                type="submit"
                color="primary"
              >Sign Up for Text Updates</UButton>
            </div>
            <div aria-live="polite">
              <p
                v-if="success"
                class="text-green-400"
              >Thanks — you're signed up to receive text updates.</p>
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
const phone = ref('')
const consent = ref(false)
const success = ref(false)
const errors = reactive({ name: '', phone: '' })

const normalizePhone = (p: string) => p.replace(/[^0-9]/g, '')

function validate() {
  errors.name = ''
  errors.phone = ''
  if (!consent.value) return true // no validation needed if not opting in
  if (!name.value || name.value.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }
  const digits = normalizePhone(phone.value)
  if (!digits || digits.length < 10) {
    errors.phone = 'Please enter a valid US phone number.'
  }
  return !errors.name && !errors.phone
}

function onSubmit() {
  success.value = false
  if (!consent.value) {
    // User didn't opt in — do not submit opt-in, just show message explaining consent required
    errors.name = ''
    errors.phone = ''
    // Show a message that consent is required to sign up
    errors.phone = 'Check the consent box to receive text updates.'
    return
  }
  if (!validate()) return

  // Form is valid and consent is true — prepare payload for backend (not implemented)
  const payload = {
    name: name.value.trim(),
    phone: normalizePhone(phone.value),
    consent: true,
    optInAt: new Date().toISOString()
  }

  // Simulate successful submission
  console.log('SMS opt-in payload', payload)
  success.value = true
  name.value = ''
  phone.value = ''
  consent.value = false
}
</script>
