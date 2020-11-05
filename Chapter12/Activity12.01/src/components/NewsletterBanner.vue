<template>
  <div v-if="showBanner" class="text-center py-4 md:px-4">
    <div
      class="py-2 px-4 bg-indigo-800 items-center text-indigo-100
      leading-none md:rounded-full flex md:inline-flex"
      role="alert"
    >
      <span
        class="font-semibold ml-2 md:mr-2 text-left flex-auto"
      >
        Subscribe to the newsletter
      </span>
      <svg
        @click="closeBanner()"
        class="fill-current h-6 w-6 text-indigo-500"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>Close</title>
        <path
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651
          3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2
          1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1
          1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeBanner() {
      this.$store.commit('dismissSubscribeBanner')
    }
  },
  computed: {
    showBanner() {
      return !this.$store.state.dismissedSubscribeBanner
    }
  }
}
</script>
