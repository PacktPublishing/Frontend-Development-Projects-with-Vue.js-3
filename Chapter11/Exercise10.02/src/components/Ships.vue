<template>
  <div>
    <h2>Ships</h2>
    <div v-if="ships.length"> 
      <ul>
        <li v-for="ship in ships" :key="ship.url">
          {{ ship.name }} is a {{ ship.starship_class }} 
        </li>
      </ul>
    </div>
    <button v-else @click="loadShips" :disabled="loading">Load Ships</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Ships',
  data() {
    return {
      loading:false
    }
  },
  computed: {
    ...mapState(["ships"])
  },
  methods:{
    loadShips() {
      this.loading = true;
      this.$store.dispatch('loadShips');
    }
  }
}
</script>

