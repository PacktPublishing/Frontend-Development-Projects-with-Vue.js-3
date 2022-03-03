<template>
  <div class="book-search">
    <form @submit.prevent="fetchBooks()">
      <label for="title">Find a book</label>
      <div class="search-bar">
        <input type="text" id="title" v-model="title" />
        <button :disabled="!title || isLoading" type="submit">Search</button>
      </div>
      <div v-if="books.length > 0">
        <ul>{{ resultsCount }} books found.
          <li v-for="book in books" :key="book.id">
            <a :href="book.canonicalVolumeLink">{{ book.title }}</a> - {{ book.authors.join(', ') }}
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BookSearch',
  data() {
    return {
      title: '',
      isLoading: false,
      books: [],
    }
  },
  methods: {
    fetchBooks() {
      this.isLoading = true;
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.title}`)
        .then(res => res.json())
        .then(response => {
          this.resultsCount = response.totalItems;
          this.books = response.items.map(b => ({id: b.id, ...b.volumeInfo }));
          this.isLoading = false;
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  margin: 40px 0 0;
}
ul {
  /* list-style-type: none; */
  padding: 0;
  text-align: left;
  width: 500px;
  margin: auto;
}
.book-search {
  width: 500px;
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
}
.search-bar {
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;
  align-items: center;
}
input {
  display: flex;
  flex: 1;
}
li {
  /* display: inline-block; */
  margin: 5px 10px;
}
a {
  color: #42b983;
}
</style>
