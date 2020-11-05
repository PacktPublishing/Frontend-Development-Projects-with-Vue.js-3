<template>
  <div>
    <h2>Cart</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, idx) in cart" :key="idx">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity  }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Cart',
  computed: mapState(['cart'])
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