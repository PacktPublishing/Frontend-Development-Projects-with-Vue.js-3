<template>
  <div id="app">
    <h2>Fiction Books</h2>
    <ul>
      <li v-for="book in $store.getters.fiction" :key="book.title">
        {{ book.title }}
      </li>
    </ul>

    <h2>Non-Fiction Books</h2>
    <ul>
      <li v-for="book in $store.getters.nonfiction" :key="book.title">
        {{ book.title }}
      </li>
    </ul>

    <h2>Short Books</h2>
    <ul>
      <li v-for="book in $store.getters.booksByMaxPages(150)" :key="book.title">
        {{ book.title }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
