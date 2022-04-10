<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppProfileDisplay from '@/components/AppProfileDisplay.vue'
import AppProfileForm from '@/components/AppProfileForm.vue'
</script>

<template>
  <div id="app">
    <AppHeader/>
    <div class="flex flex-col md:flex-row">
      <AppProfileForm @submit="update($event)" />
      <AppProfileDisplay :form-data="formData" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    }
  },
  methods: {
    update(formData) {
      this.formData = formData;
    }
  }
}
</script>