<template>
  <button @click="show = !show">Toggle</button>
  <transition name="fade-in">
    <h1 v-show="show">{{ msg }}</h1>
  </transition>
</template>
<script setup>
import { ref } from 'vue'

const show = ref(false);
const msg = "I should be fade in";

</script>
<style>
.fade-in-enter-from, .fade-in-leave-to {
  opacity: 0;
}

.fade-in-enter-active, .fade-in-leave-active {
  transition: opacity 3s ease-in;
}
</style>