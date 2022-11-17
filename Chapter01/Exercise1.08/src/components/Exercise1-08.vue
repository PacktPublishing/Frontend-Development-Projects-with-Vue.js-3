<template>
  <div>
    <h1>Triggering Vue Methods</h1>
    <ul>
      <li v-for="n in 5" :key="n">
        <button @click="triggerAlert(n)">Trigger {{ n }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    triggerAlert(n) {
      alert(`${n} has been clicked`);
    },
  },
};
</script>

<style scoped>
ul {
  padding-left: 0;
}
li {
  display: block;
  list-style: none;
}

li + li {
  margin-top: 10px;
}

button {
  display: inline-block;
  background: #4fc08d;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
