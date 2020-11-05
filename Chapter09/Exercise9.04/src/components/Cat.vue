<template>
  <div>
    <button @click="addCat">More Cats!</button>
    <button @click="removeCat">Less Cats :(</button>
  </div>
</template>

<script>
export default {
  name: 'Cat',
  methods: {
    addCat() {
      this.$store.commit('adoptCat');
    },
   removeCat() {
      this.$store.commit('placeCat');
    }
  }
}
</script>

