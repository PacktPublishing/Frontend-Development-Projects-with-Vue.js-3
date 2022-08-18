<template>
  <div id="app" class="container">
    <h1>Vue devtools debugging</h1>

    <input type="text" placeholder="Filter list" v-model=
      "input" />

    <ul>
      <li v-for="(item, i) in computedList" :key="i">{{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      frameworks: [
        'Vue',
        'React',
        'Backbone',
        'Ember',
        'Knockout',
        'jQuery',
        'Angular',
      ],
      input: '',
    }
  },
  computed: {
    computedList() {
      return this.frameworks.filter(item => {
        return item.toLowerCase().includes(this.input.
          toLowerCase())
      })
    },
  },
}
</script>
<style>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
/* input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
} */
</style>
