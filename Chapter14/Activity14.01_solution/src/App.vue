<template>
  <div id="app">
    <BookSearch />
  </div>
</template>

<script>
import BookSearch from './components/BookSearch.vue'

export default {
  name: 'app',
  components: {
    BookSearch
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
