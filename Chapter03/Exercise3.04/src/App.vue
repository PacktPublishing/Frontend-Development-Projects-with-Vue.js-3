<template>
  <div id="app" class="container">
    <h1>Vue devtools debugging</h1>

    <input type="text" placeholder="Filter list" v-model="input" />

    <ul>
      <li v-for="(item, i) in computedList" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frameworkList: [
        'Vue',
        'React',
        'Backbone',
        'Ember',
        'Knockout',
        'jQuery',
        'Angular',
      ],

      input: '',
    }
  },
  computed: {
    computedList() {
      return this.frameworkList.filter(item => {
        return item.toLowerCase().includes(this.input.toLowerCase())
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  max-width: 200px;
  margin: 0 auto;
  list-style: none;
  padding: 0;

  > li {
    background: #42b983;
    color: white;
    padding: 6px;
    border-radius: 6px;
    margin-bottom: 2px;
    max-width: 200px;
  }
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 10px;
}
</style>
