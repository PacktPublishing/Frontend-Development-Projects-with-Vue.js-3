<template>
  <div class=”about”>
    <h2>Age: {{age}}</h2>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    age: Number
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
