<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppProfileDisplay from '@/components/AppProfileDisplay.vue'
import AppProfileForm from '@/components/AppProfileForm.vue'

import { reactive } from 'vue'

const formData = reactive({
  name:'', occupation:'', 
  organization:'', email:'', phonenumber:''
});

function update(e) {
  formData.name = e.name;
  formData.occupation = e.occupation;
  formData.organization = e.organization;
  formData.email = e.email;
  formData.phonenumber = e.phonenumber;
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