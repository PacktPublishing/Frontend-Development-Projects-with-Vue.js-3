<template>
  <form
    @submit="onSubmit()"
    class="flex flex-row m-auto mb-10"
  >
    <input
      v-model="searchTerm"
      placeholder="Search"
      class="bg-white focus:outline-none focus:shadow-outline border
      border-gray-300 rounded py-2 px-4 flex
      appearance-none leading-normal"
      type="text"
    />
    <button
      type="submit"
      class="flex bg-blue-500 hover:bg-blue-700
      text-white font-semibold font-sm hover:text-white py-2 px-4 border
      border-blue-500 hover:border-transparent rounded"
    >
      Search
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      searchTerm: this.$route.query.q || ''
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({
        path: '/',
        query: {
          q: this.searchTerm
        }
      })
    }
  }
}
</script>
