<script setup>
const information = {
  title: "My list component information",
  subtitle: "Vue JS basics",
  items: ["Looping", "Data", "Methods"],
};
</script>
<template>
  <div>
    <div v-for="(value, key) in information" :key="key">
      {{ key }}: {{ value.toString() }}
    </div>
  </div>
</template>
