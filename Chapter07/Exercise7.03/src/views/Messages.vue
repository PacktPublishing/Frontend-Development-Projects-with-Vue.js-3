<template>
  <div>
    <button @click="sorting()">Sort A-Z</button>
    <button @click="sorting(true)">Sort Z-A</button>
    <button @click="shuffle()">Sort Z-A</button>
    <transition-group
      appear
      name="flip"
      tag="div"
    >
      <p v-for="message in messages" :key="message" class="message--item">{{message}}</p>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'Hello, how are you?',
        'The weather is nice',
        'This is message feed',
        'And I am the fourth message',
        'Chapter 7 is fun',
        'Animation is super awesome',
        `Sorry, I didn't know you called`,
        'Be patient, animation comes right up'
      ],
      show: false
    }
  },
  methods: {
    sorting(isDescending) {
      this.messages.sort();

      if (isDescending) { this.messages.reverse(); }
    },
    shuffle() {
      this.messages.sort(() => Math.random() - 0.5);
    }
  },
}
</script>
<style scoped>
.message--item {
  transition: all 2s;
}

.flip-enter, .flip-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.flip-leave-active {
  position: absolute;
}

.flip-move {
  transition: transform 1s;
}
</style>