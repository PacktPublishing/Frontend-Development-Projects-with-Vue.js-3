<template>
  <div id="app">
    Layout: <select v-model="layout">
      <option 
        v-for="(option, index) in layoutOptions"
        :key="index"
        :value="option.component"
      >{{option.name}}</option>
    </select>
    <div class="grid" :class="{ 'grid-column': layout === List }">
      <component
        v-for="item in items"
        :key="item.id"
        :is="layout"
        :title="item.title"
        :description="item.description"
        :url="item.url"
      />
    </div>
  </div>
</template>
<script setup>
import Rich from './components/Rich.vue'
import Compressed from './components/Compressed.vue'
import List from './components/List.vue'
import { shallowRef } from 'vue'

const layout = shallowRef(Rich)
const layoutOptions = [ {
  name: 'Rich',
  component: Rich
}, {
  name: 'List',
  component: List
}, {
  name: 'Compressed',
  component: Compressed
}]
const items = [
  {
    id: '10',
    title: 'Forest Shot',
    description: 'Recent shot of a forest overlooking a lake',
    url: 'https://picsum.photos/id/10/1000/750.jpg',
  },
  {
    id: '1000',
    title: 'Cold cross',
    description: 'Mountaintop cross with snowfall from Jan 2018',
    url: 'https://picsum.photos/id/1000/1000/750.jpg',
  },
]
</script>
<style scoped>
.grid {
  display: flex;
}
.grid-column {
  flex-direction: column;
}
</style>
