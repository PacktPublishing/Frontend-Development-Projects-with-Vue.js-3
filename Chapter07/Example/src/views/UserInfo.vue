<template>
  <div>
    <h2>Name: {{name}}</h2>
    <p>Age: {{age}}</p>
  </div>
</template>
<script setup>
import users from '../assets/users.js';
import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const props = defineProps(['id'])

const name = ref('')
const age = ref(0)

const user = users[props.id - 1];

name.value = user.name;
age.value = user.age;

onBeforeRouteUpdate((to, from, next) => {
  const user = users[props.id - 1];
  name.value = user.name;
  age.value = user.age;
  next();
})
</script>
