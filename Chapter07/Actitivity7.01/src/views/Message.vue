<template>
  <div>
    <p>{{content}}</p>
    <router-view/>
  </div>
</template>
<script>
import MessageLayout from '../layouts/messageLayout.vue';

export default {
  props: ['currentLayout', 'content'],
  emits: ['update:currentLayout'],
  created() {
    this.$emit('update:currentLayout', MessageLayout);
  }
}
</script>