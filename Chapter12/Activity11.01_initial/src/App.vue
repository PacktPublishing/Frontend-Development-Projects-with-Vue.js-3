<template>
  <div id="app">
    <p>
    My name is {{ $store.state.name }} and my job 
    is being a {{ $store.state.job }}.
    </p>
    <p>
      My favorite pet would be a {{ $store.getters.desiredPet }}.
    </p>
    <p>
      My pet may be described as: {{ $store.getters.petDescription }}
    </p>

    <hr />
    <p>
      Set your name: <input type="text" v-model="name"> 
      <button @click="updateName">Update</button>
    </p>
    <p>
      Set your cat's name: <input type="text" v-model="catname"> 
      <button @click="updateCatName">Update</button>
    </p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      name:'',
      catname:''
    }
  },
  methods: {
    updateName() {
      this.$store.commit('setName', this.name);
      this.name = '';
    },
    updateCatName() {
      this.$store.commit('setCatName', this.catname);
      this.catname = '';
    }
  }
}
</script>

