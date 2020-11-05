<template>
  <div>
    <p>{{content}}</p>
    <router-view/>
  </div>
</template>
<script>
import MessageLayout from '../layouts/messageLayout.vue';

export default {
  props: {
    content: {
      type: String,
      default: ''
    },
  },
  created() {
    this.$emit('update:layout', MessageLayout);
  }
}
</script>