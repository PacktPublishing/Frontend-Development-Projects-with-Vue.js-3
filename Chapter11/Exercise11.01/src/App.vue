<template>
  <div id="app">
    My first name is {{ $store.state.firstName }}.<br/>
    My full name is {{ $store.getters.name }}.<br/>
    I have this many pets - {{ $store.getters.totalPets }}.<br/>
    My favorite film is {{ $store.state.favoriteFilm }}.
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$store.dispatch('updateFavoriteFilm', 'A New Hope');
  }
}
</script>
