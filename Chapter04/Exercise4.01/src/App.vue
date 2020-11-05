<template>
  <div id="app">
    <Greeting greeting="Hi" who="Everyone"/>
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue'

export default {
  components: {
    Greeting
  }
}
</script>