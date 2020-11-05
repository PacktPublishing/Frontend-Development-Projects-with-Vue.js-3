<template>
  <div id="app">
    <p>
    My name is {{ $store.getters.name }} and I 
    <span v-if="$store.state.resume.forHire">
        am looking for work!
    </span><span v-else>
        am not looking for work.
    </span>
    </p>
    <p>
      I've had {{ $store.getters.totalJobs }} total jobs. 
    </p>
    <h2>Portfolio</h2>
    <ul>
      <li 
        v-for="(site,idx) in $store.state.portfolio.websites"
        :key="idx"><a :href="site" target="_new">{{ site }}</a></li>
    </ul>

    <p>
      <input type="url" placeholder="New site for portfolio" v-model="site">
      <button @click="addSite">Add Site</button>
    </p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      site:''
    }
  },
  methods: {
    addSite() {
      this.$store.commit('addSite', this.site);
      this.site = '';
    }
  }
}
</script>

<style>
</style>
