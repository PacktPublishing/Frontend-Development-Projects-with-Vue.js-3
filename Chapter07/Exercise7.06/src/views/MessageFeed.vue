<template>
  <div>
    <h2> Message Feed </h2>
    <div v-for="(m, i) in messages" :key="i" >
      <RouterLink :to="`/message/${i}`">
        {{ m.content }}
      </RouterLink>
    </div>
</div>
</template>
<script setup>
import { defineProps } from 'vue'
const { messages } = defineProps({
    messages: {
        default: [],
        type: Array
    }
})
</script>
