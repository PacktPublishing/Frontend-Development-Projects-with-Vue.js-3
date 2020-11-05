<template>
  <div
    v-if="!acceptedCookie"
    class="flex flex-row bg-green-100 border text-center border-green-400
    text-green-700 mt-8 px-4 md:px-8 py-3 rounded relative"
    role="alert"
  >
    <div class="flex flex-col">
      <strong class="font-bold w-full flex">Cookies Disclaimer</strong>
      <span class="block sm:inline">We use cookies to improve your experience</span>
    </div>
    <button
      @click="acceptCookie()"
      class="ml-auto align-center bg-transparent hover:bg-green-500
      text-green-700 font-semibold font-sm hover:text-white py-2 px-4 border
      border-green-500 hover:border-transparent rounded"
    >
      I agree
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    acceptCookie() {
      this.$store.commit('acceptCookie')
    }
  },
  computed: {
    acceptedCookie() {
      return this.$store.state.acceptedCookie
    }
  }
}
</script>