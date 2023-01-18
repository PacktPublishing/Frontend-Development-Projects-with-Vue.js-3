<template>
  <div>
    <p>{{content}}</p>
    <router-view/>
  </div>
</template>
<script setup>
import MessageLayout from '../layouts/messageLayout.vue';

const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  currentLayout: {
    type: Object,
    default: () => MessageLayout
  }
});

const emits = defineEmits(['update:currentLayout']);

emits('update:currentLayout', MessageLayout);
</script>