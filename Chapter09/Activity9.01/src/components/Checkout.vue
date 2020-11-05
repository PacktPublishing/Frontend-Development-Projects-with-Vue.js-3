<template>
  <div>
    <h2>Checkout</h2>
	Your total is ${{ cartTotal }}.
	<button v-show="cartTotal > 0" @click="checkout">Checkout</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
	checkout() {
		alert('Checkout process!');
	}
  }
}
</script>

<style scoped>
table {
  width: 400px;
  border-collapse: collapse;
  border: 1px solid;
}

td {
  border: 1px solid;
  padding: 5px;
}
</style>