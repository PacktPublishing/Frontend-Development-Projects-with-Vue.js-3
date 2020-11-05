<template>
  <div id="app">
    <message-editor/>    
  </div>
</template>

<script>
import MessageEditor from './components/MessageEditor.vue'

export default {
  name: 'app',
  components: {
    MessageEditor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
