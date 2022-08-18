<template>
  <div>
    <button @click="showList">Show list</button>
    <transition-group name="fade" tag="div">
      <p v-for="message in messages" :key="message" v-show="show">
        {{ message }}
      </p>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        "Hello, how are you?",
        "The weather is nice",
        "This is the message feed",
        "And I am the fourth message",
        "Chapter 8 is fun",
        "Animation is super awesome",
        "Sorry, I didn't know you called",
        "Be patient, animation comes right up",
      ],
      show: false,
    };
  },
  methods: {
    showList() {
      this.show = true;
    },
  },
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 5s;
}
.fade-enter-from, .fade-leave-active {
  opacity: 0;
  transform: translateX(30px);
}
</style>
