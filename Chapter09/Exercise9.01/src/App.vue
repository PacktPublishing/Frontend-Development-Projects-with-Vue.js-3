<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppProfileDisplay from '@/components/AppProfileDisplay.vue'
import AppProfileForm from '@/components/AppProfileForm.vue'

import { reactive } from 'vue'

const formData = reactive({name:'', occupation:''});

function update(e) {
  formData.name = e.name;
  formData.occupation = e.occupation;
}
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
