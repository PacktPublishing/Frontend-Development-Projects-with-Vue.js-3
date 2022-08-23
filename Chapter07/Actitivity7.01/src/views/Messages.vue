<template>
  <div>
    <router-link :to="{ name: 'list', params: { list }}">List</router-link> |
    <router-link :to="{ name: 'editor', params: { list }}">Editor</router-link>
    <router-view :list.sync="list"/>
  </div>
</template>
<script>
import DefaultLayout from '../layouts/default.vue';

export default {
  props: {
    list: Array,
    currentLayout: Object,
  },
  emits: ['update:currentLayout'],
  created() {
    this.$emit('update:currentLayout', DefaultLayout);
  }
}
</script>