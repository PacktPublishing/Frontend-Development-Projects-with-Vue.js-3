<template lang="pug">
  div
    h1(class='title') {{ title }}
</template>

<script>
export default {
  data() {
    return {
      title: 'PUG component!',
    }
  },
}
</script>

<style lang="scss">
.title {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
