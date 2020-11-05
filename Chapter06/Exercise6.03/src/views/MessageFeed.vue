<template>
  <div>
  <h2> Message Feed </h2>
  <div v-for="(m, i) in messages" :key="i" >
    <router-link :to="{ name: 'message', params: { content: m }}">
      {{ m }}
    </router-link>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'Hello, how are you?',
        'The weather is nice',
        'This is message feed',
        'And I am the fourth message'
      ]
    }
  }
}
</script>