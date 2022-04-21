<template>
  <div>
    <input v-model="name" />
    <div>
      <span>{{ error }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  computed: {
    error() {
      return this.name ? "" : "Name is required";
    },
  },
};
</script>
<style>
h1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
