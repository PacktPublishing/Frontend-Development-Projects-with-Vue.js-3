<template>
  <transition name="fade-in">
    <h1>{{ msg }}</h1>
  </transition>
</template>
<script setup>
const msg = "I should be fade in"
</script>
<style>
.fade-in-enter-from, .fade-in-leave-to {
  opacity: 0;
}

.fade-in-enter-active, .fade-in-leave-active {
  transition: opacity 3s easein;
}
</style>