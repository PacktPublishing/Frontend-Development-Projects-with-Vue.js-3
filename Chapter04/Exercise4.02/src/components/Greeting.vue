<template>
  <div>{{ greeting }} {{ who }}</div>
</template>
<script>
export default {
  props: ['greeting', 'who']
}
</script>