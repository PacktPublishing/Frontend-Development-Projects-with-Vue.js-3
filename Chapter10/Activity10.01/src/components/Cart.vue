<script setup>
import { useCartStore } from '@/stores/cart';
const store = useCartStore()
</script>

<template>
<h2>Cart</h2>
<table>
	<thead>
	<tr>
		<th>Name</th>
		<th>Quantity</th>
	</tr>
	</thead>
	<tbody>
	<tr v-for="(product, idx) in store.cart" :key="idx">
		<td>{{ product.name }}</td>
		<td>{{ product.quantity  }}</td>
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