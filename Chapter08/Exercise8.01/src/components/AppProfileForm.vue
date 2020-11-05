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
    <div class="flex flex-row mt-12">
      <button type="submit" @click="submitForm()">Submit</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      occupation: '',
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit', {
        name: this.name,
        occupation: this.occupation
      })
    }
  }
}
</script>
