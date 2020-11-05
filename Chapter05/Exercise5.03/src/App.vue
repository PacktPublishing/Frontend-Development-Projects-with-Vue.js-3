<template>
  <div id="app">
    Layout: <select v-model="layout">
      <option value="rich">Rich</option>
      <option value="compressed">Compressed</option>
      <option value="list">List</option>
    </select>
    <div class="grid" :class="{ 'grid-column': layout === 'list' }">
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
<script>
import Rich from './components/Rich.vue'
import Compressed from './components/Compressed.vue'
import List from './components/List.vue'

export default {
  components: {
    Rich,
    Compressed,
    List
  },
  data() {
    return {
      layout: 'rich',
      items: [
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
    }
  }
}
</script>
<style scoped>
.grid {
  display: flex;
}
.grid-column {
  flex-direction: column;
}
</style>
