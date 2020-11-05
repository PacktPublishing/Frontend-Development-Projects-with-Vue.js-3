<template>
  <div class="container">
    <h1>Shop Watcher</h1>

    <div>
      Black Friday sale
      <strike>Was {{ oldDiscount }}%</strike>
      <strong> Now {{ discount }}% OFF</strong>
    </div>

    <br />
    <a href="#" @click="updateDiscount">Increase Discount!</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldDiscount: 0,
      discount: 5,
    }
  },
  methods: {
    updateDiscount() {
      this.discount = this.discount + 5
    },
  },
  watch: {
    discount(newValue, oldValue) {
      this.oldDiscount = oldValue
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
}
a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
