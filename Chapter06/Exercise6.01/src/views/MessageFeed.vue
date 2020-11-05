<template>
  <div>
    <h2> Message Feed </h2>
    <p v-for="(m, i) in messages" :key="i">
    {{ m }}
    </p>
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