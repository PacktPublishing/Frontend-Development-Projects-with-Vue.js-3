<template>
  <div>
  <h2> Message Feed </h2>
  <div v-for="(m, i) in messages" :key="i" >
    <router-link :to="`/message/${i}`">
      {{ m }}
    </router-link>
  </div>
</div>
</template>
<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  }
}
</script>