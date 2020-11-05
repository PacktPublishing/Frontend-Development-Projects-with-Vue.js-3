<template>
  <div>
    <h3>Message info: </h3>
    <p>{{message.sent}}</p>
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