<script>
import Greeting from "./components/Greeting.vue";
export default {
  components: {
    Greeting,
  },
  data() {
    return {
      greeting: "Hello",
      who: "Vue.js",
    };
  },
};
</script>

<template>
  <div id="app">
    <input placeholder="What is your name" v-model="who" />
    <Greeting greeting="Hi" :who="who" />
  </div>
</template>
