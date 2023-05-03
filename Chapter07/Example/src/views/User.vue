<template>
    <div>
    <h1>About a user: {{id}}</h1>
    <h2>Name: {{name}}</h2>
    <p>Age: {{age}}</p>
  </div>

</template>

<script setup>
import users from '../assets/users.js';
import { ref } from 'vue'

const name = ref('');
const age = ref(0);

const props = defineProps(['id'])
name.value = users[props.id - 1].name;
age.value = users[props.id - 1].age;
</script>