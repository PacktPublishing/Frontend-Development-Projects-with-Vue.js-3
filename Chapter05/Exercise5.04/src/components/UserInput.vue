<template>
  <div class="container">
    <input v-model="firstName" placeholder="First name" />
    <input v-model="lastName" placeholder="Last name" />
    <input placeholder="Add a language" @keyup.enter="addToLanguageList" />
    <h3 class="output">{{ fullName }}</h3>
    <p>Languages({{ numberOfLanguages }}): {{ languages.toString() }}</p>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

const firstName = ref('')
const lastName = ref('')
const languages = reactive([]);
const fullName = computed(() => `${firstName.value} ${lastName.value}`);
const numberOfLanguages = computed(() => languages.length);
const addToLanguageList = (event) => {
  if (!event.target.value) return;
  
  languages.push(event.target.value);
  event.target.value = '';
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
.output {
  font-size: 16px;
}
</style>
