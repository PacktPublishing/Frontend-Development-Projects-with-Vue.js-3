<template>
  <div class="about">
    <h1>About {{user}}</h1>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

const { user } = defineProps({
  user: {
    default: '',
    type: String
  }
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
