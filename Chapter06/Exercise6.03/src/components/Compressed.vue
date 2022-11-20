<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const { title, description } = defineProps(['title', 'description'])
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  min-width: 200px;
}
h3 {
  font-weight: normal;
  padding-bottom: 0;
}
p {
  margin: 0;
}
</style>
