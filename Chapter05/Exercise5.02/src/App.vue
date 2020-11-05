<template>
  <div id="app">
    <div v-for="todo in todos" :key="todo.id">
      <ul>
        <li>Title: {{ todo.title }}</li>
        <li>Status: {{ todo.completed ? "Completed" : "Not Completed" }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  async mounted() {
    const { data: todos } = await Vue.axios('https://jsonplaceholder.typicode.com/todos')
    this.todos = todos
  },
  data() {
    return { todos: [] }
  }
}
</script>
