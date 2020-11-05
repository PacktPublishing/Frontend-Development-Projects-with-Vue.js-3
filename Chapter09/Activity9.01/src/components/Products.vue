<template>
  <div>
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
        <tr v-for="(product, idx) in products" :key="idx">
          <td>{{ product.name }}</td>
          <td>{{ product.price  }}</td>
          <td>
            <button @click="addToCart(product)">Add to Cart</button> 
            <button @click="removeFromCart(product)">Remove from Cart</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Products',
  computed: mapState(['products']),
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    removeFromCart(product) {
      this.$store.commit('removeFromCart', product);
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