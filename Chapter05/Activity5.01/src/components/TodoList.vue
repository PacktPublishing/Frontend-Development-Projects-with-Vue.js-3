<template functional>
  <ul>
    <li v-for="todo in props.todos" :key="todo.id">
      <slot name="todo" :todo="todo" />
    </li>
  </ul>
</template>
