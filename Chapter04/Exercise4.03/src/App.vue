<template>
  <div id="app">
    <Repeat :config="{ times: 3, content: 'Repeat me.' }" />
  </div>
</template>

<script>
import Repeat from './components/Repeat.vue'

export default {
  components: {
    Repeat 
  }
}
</script>
