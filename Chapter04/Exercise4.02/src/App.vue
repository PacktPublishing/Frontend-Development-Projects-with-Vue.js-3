<template>
  <div id="app">
    <Greeting :greeting="greeting" :who="who"/>
    <button @click="newGreeting()">New Greeting</button>
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue'

const possibleGreetings = [
    { greeting: 'Hello', who: 'Vue.js' },
    { greeting: 'Hey', who: 'Everyone' },
    { greeting: 'Hi', who: 'JavaScript' }
]

export default {
  components: {
    Greeting
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    currentGreeting() {
      return possibleGreetings[this.currentIndex]
    },
    greeting() {
      return this.currentGreeting.greeting
    },
    who() {
      return this.currentGreeting.who
    }
  },
  methods: {
    newGreeting() {
      this.currentIndex = this.currentIndex === possibleGreetings.length - 1
        ? 0
        : this.currentIndex + 1
    }
  }
}
</script>
