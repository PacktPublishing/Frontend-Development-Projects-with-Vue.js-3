<template>
  <div id="app">
    <img ref="logo" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import gsap from 'gsap'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    const { logo } = this.$refs;
    gsap.to(logo, {duration: 30, rotation: 3600});
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
