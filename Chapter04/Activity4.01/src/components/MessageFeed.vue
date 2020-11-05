<template>
    <div>
    <p v-for="(m, i) in messages" :key="i">
      {{ m }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
}
</script>