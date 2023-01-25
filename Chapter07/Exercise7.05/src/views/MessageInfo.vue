<template>
  <div>
    <h3>Message info: </h3>
    <p>{{message.sent}}</p>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

const { message } = defineProps({
  id: {
    default: '',
    type: String
  },
  message: {
    default: () => ({ sent: '' }),
    type: Object
  }
})
</script>