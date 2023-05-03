<template>
  <div>
    <h1>Vue Lifecycle hooks</h1>
    <ul>
      <li v-for="(item, n) in list" :key="n">
        {{ item }}
        <button @click="deleteItem(item)">Delete</button>
      </li>
    </ul>

    <strong
      >Add a new item in the list array and save while running localhost to
      preview the destroy hooks</strong
    >
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onBeforeMount,
  onUpdated,
  onBeforeUpdate,
  onUnmounted,
  onBeforeUnmount,
} from "vue";

const list = ref([
  "Apex Legends",
  "A Plague Tale: Innocence",
  "ART SQOOL",
  "Baba Is You",
  "Devil May Cry 5",
  "The Division 2",
  "Hypnospace Outlaw",
  "Katana ZERO",
]);

const deleteItem = (value) => {
  list.value = list.value.filter((item) => item !== value);
};

onMounted(() => {
  alert("mounted: DOM ready to use");
});

onBeforeMount(() => {
  alert("beforeMount: DOM not ready to use");
});

onUpdated(() => {
  alert("updated: virtual DOM will update after you click OK");
});

onBeforeUpdate(() => {
  alert(
    "beforeUpdate: we know an update is about to happen, and have the data"
  );
});

onUnmounted(() => {
  alert("unmouted: this component has been destroyed");
});

onBeforeUnmount(() => {
  alert("beforeUnmount: about to blow up this component");
});
</script>

<style scoped>
ul {
  padding-left: 0;
}
li {
  display: block;
  list-style: none;
  margin-top: 10px;
}

button {
  display: inline-block;
  background: rgb(235, 50, 50);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 10px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
