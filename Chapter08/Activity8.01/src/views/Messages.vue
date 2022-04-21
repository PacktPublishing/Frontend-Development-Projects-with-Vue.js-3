<template>
  <div>
    <router-link :to="{ name: 'list', params: { list }}">List</router-link> |
    <router-link :to="{ name: 'editor', params: { list }}">Editor</router-link>
    <transition name="fade" enter-active-class="zoom-in">
      <router-view :list.sync="list"/>
    </transition>
  </div>
</template>
<script>
import DefaultLayout from '../layouts/default';

export default {
  props: {
    list: Array
  },
  created() {
    this.$emit('update:layout', DefaultLayout);
  }
}
</script>
<style>
.zoom-in {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.fade-enter-active {
  transition: opacity 2s, transform 3s;
}
.fade-enter {
  opacity: 0;
  transform: translateX(-20%);
}
</style>