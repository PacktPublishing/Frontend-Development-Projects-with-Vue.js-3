<template>
  <div>
    <h2> Message Feed </h2>
    <div v-for="(m, i) in messages" :key="i" >
      <RouterLink :to="{ name: 'message', params: { content: m }}">
        {{ m }}
      </RouterLink>
    </div>
</div>
</template>
<script setup>
const messages = [
    'Hello, how are you?',
    'The weather is nice',
    'This is the message feed',
    'And I am the fourth message'
  ]
</script>