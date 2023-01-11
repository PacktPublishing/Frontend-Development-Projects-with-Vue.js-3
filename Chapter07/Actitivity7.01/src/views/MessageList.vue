<template>
  <div>
    <h2> Message Feed </h2>
    <div v-for="(m, i) in list" :key="i" >
      <router-link :to="`/message/${i}`">
        {{ i }}
      </router-link>
    </div>
</div>
</template>
<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>