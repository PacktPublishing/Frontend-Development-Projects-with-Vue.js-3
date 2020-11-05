<template>
  <div>
    <h2>Cats</h2>
    <ul>
      <li v-for="(cat,idx) in cats" :key="idx">
        {{cat.name}} is {{cat.gender}}
      </li>
    </ul>
  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  created() {
    this.$store.dispatch('loadCats');
  },
  computed: {
    ...mapState(["cats"])
  }
}
</script>