<template>
  <div>
    <h1>Looping through arrays</h1>
    <ul>
      <li v-for="n in 5" :key="n">
        {{ n }}
      </li>
    </ul>
    <ul>
      <li v-for="(item, n) in interests" :key="n">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interests: ['TV', 'Games', 'Sports'],
    }
  },
}
</script>

<style lang="scss" scoped>
li {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 10px;
}

h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
