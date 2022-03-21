<template>
  <div id="app">
    <Products />
    <Cart />
    <Checkout />
  </div>
</template>

<script>
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
import Checkout from './components/Checkout.vue'

export default {
  name: 'app',
  components: {
    Products, Cart, Checkout
  }
}
</script>

<style>
</style>
