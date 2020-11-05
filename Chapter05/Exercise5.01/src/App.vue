<template>
  <div id="app">
    <pre>{{ debug(myObj) }}</pre>
  </div>
</template>
<script>
import debug from './mixins/debug.js'
export default {
  mixins: [debug],
  data() {
    return {
      myObj: {
        some: 'data',
        other: 'values'
      }
    }
  },
  created() {
    console.log(this.debug(this.myObj))
  }
}
</script>
