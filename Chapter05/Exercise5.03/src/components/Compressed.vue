<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'description']
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
  padding-bottom: 0;
}
p {
  margin: 0;
}
</style>
