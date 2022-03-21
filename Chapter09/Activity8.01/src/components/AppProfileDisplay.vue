<template>
  <section class="md:w-1/3 flex flex-col p-12">
  <!-- Profile Card -->
    <h3 class="font-bold font-lg">{{ formData.name }}</h3>
    <p class="mt-2">
      {{ formData.occupation }}
      <span v-if="formData.organization">
        at {{ formData.organization }}
      </span>
    </p>
    <p class="mt-2" v-if="formData.email">
      Email: {{ formData.email }}
    </p>
    <p class="mt-2" v-if="formData.phone">
      Phone Number: {{ formData.phone }}
    </p>
  </section>
</template>

<script>
export default {
  computed: {
    formData() {
      return this.$store.state.formData
    }
  }
}
</script>
