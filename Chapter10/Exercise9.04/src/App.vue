<template>
  <div id="app">
    <h1>About Me</h1>
    <p>
      My name is {{ $store.state.name }} and 
      I have {{ $store.state.totalCats }} cats.
    </p>
    <p>
      <input v-model="newName"> 
      <button @click="setName" :disabled="!newName">Update Name</button>
    </p>
    <Cat/>
  </div>
</template>

<script>
import Cat from './components/Cat.vue'

export default {
  name: 'app',
  components: {
    Cat
  },
  data() {
    return {
      newName:''
    }
  },
  methods: {
    setName() {
      if(this.newName) {
        this.$store.commit('setName', this.newName);
        this.newName = '';
      }
    }
  }
}
</script>
