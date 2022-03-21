<template>
  <div id="app">
    <p>
    My name is {{ $store.getters.name }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>