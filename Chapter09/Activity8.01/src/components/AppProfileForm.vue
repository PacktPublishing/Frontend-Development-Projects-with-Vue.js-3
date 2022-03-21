<template>
  <section class="md:w-2/3 flex flex-col p-12 items-center">
    <!-- Inputs -->
    <div class="flex flex-col">
      <label class="flex text-gray-800 mb-2" for="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        v-model="name"
        class="border-2 border-solid border-blue-200 rounded px-2 py-1"
      />
    </div>
    <div class="flex flex-col mt-2">
      <label class="flex text-gray-800 mb-2" for="occupation">Occupation</label>
      <input
        id="occupation"
        type="text"
        name="occupation"
        v-model="occupation"
        class="border-2 border-solid border-blue-200 rounded px-2 py-1"
      />
    </div>
    <div class="flex flex-col mt-2">
      <label class="flex text-gray-800 mb-2" for="organization">Organization</label>
      <input
        id="occupation"
        type="text"
        name="organization"
        v-model="organization"
        class="border-2 border-solid border-blue-200 rounded px-2 py-1"
      />
    </div>
    <div class="flex flex-col mt-2">
      <label class="flex text-gray-800 mb-2" for="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        v-model="email"
        class="border-2 border-solid border-blue-200 rounded px-2 py-1"
      />
    </div>
    <div class="flex flex-col mt-2">
      <label class="flex text-gray-800 mb-2" for="phone">Phone Number</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        v-model="phone"
        class="border-2 border-solid border-blue-200 rounded px-2 py-1"
      />
    </div>
    <div class="flex align-center mt-12">
      <button
        type="submit"
        @click="submitForm()"
      >
        Submit
      </button>
    </div>
  </section>
</template>
<script>
export default {
  created() {
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'profileClear') {
        this.resetProfileForm()
      }
    })
  },
  data() {
    return {
      name: '',
      occupation: '',
      organization: '',
      email: '',
      phone: '',
    }
  },
  methods: {
    submitForm() {
      this.$store.commit('profileUpdate', {
        name: this.name,
        occupation: this.occupation,
        organization: this.organization,
        email: this.email,
        phone: this.phone
      })
    },
    resetProfileForm() {
      this.name = ''
      this.occupation = ''
      this.organization = ''
      this.email = ''
      this.phone = ''
    }
  }
}
</script>
