<script setup>
import { useCartStore } from '@/stores/cart';
const store = useCartStore()
</script>

<template>
<h2>Products</h2>
<table>
	<thead>
	<tr>
		<th>Name</th>
		<th>Price</th>
		<th>&nbsp;</th>
	</tr>
	</thead>
	<tbody>
	<tr v-for="(product, idx) in store.products" :key="idx">
		<td>{{ product.name }}</td>
		<td>{{ product.price  }}</td>
		<td>
		<button @click="store.addToCart(product)">Add to Cart</button> 
		<button @click="store.removeFromCart(product)">Remove from Cart</button>
		</td>
	</tr>
	</tbody>
</table>
</template>

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