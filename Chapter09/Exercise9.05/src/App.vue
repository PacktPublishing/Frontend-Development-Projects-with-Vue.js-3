<template>
  <div id="app">
    Books
    <ul>
      <li v-for="book in $store.state.books" :key="book.title">{{ book.title }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  created() {
    this.$store.dispatch('loadBooks');
  }
}
</script>
