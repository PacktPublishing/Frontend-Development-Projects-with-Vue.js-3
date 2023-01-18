<template>
  <div class="container">
    <h1>{{ pizza.name }}</h1>
    <div class="campaign-wrapper">
      Monday Special: {{ discount }}% off!
      <strike>Was ${{ pizza.price }}</strike>
      <strong> Now at ${{ newPrice }} ONLY</strong>
    </div>
    <button @click="updateDiscount" class="decrease-btn">Get a discount!</button>
    <button @click="increasePrice" class="increase-btn">Increase the price!</button>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

const discount = ref(5);
const pizza = reactive({
  name: "Pepperoni Pizza",
  price: 10,
});
const newPrice = ref(pizza.price);

watch(
  discount,
  (newValue) => {
    newPrice.value = pizza.price - (pizza.price * newValue) / 100;
  },
  { immediate: true
  }
);

const updateDiscount = () => {
  discount.value = discount.value + 5;
};

const increasePrice = () => {
  pizza.price = pizza.price + 5;
};

watch(
  () => pizza.price,
  (newValue) => {
    newPrice.value = newValue - (newValue * discount.value) / 100;
  }
);
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 0;
}
.campaign-wrapper {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
}

button {
  display: inline-block;
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  margin-inline-end: 10px;
}

.increase-btn {
  background: rgb(34, 100, 241);
}

.decrease-btn {
  background: rgb(241, 34, 34);
}
</style>
