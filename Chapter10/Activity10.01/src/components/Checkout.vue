<script setup>
import { useCartStore } from '@/stores/cart';
const store = useCartStore()
</script>

<template>
<h2>Checkout</h2>
Your total is ${{ store.cartTotal }}.
<button v-show="store.cartTotal > 0" @click="checkout">Checkout</button>
</template>

<script>

export default {
  name: 'Cart',
  methods: {
	checkout() {
		alert('Checkout process!');
	}
  }
}
</script>

