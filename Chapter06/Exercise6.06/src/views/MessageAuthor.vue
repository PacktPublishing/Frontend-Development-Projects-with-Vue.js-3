<template>
  <div>
    <h3>Author:</h3>
    <p>{{message.author}}</p>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => {}
    }
  }
}
</script>