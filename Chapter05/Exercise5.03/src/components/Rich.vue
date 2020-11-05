<template>
  <div class="card">
    <img :src="url" width="100%" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['url', 'title', 'description']
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  max-width: 200px;
}
h3 {
  font-weight: normal;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
