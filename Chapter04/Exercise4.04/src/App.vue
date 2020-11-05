<template>
  <div id="app">
    <Card>
      <template #image>
        <img src="https://picsum.photos/id/1015/300" />
      </template>
      <template #title>
        <h2>My Holiday picture</h2>
      </template>
      <template #description>
        <p>Here I can describe the contents of the picture.</p>
        <p>For example what we can see in the photo is a nice landscape.</p>
      </template>
    </Card>
  </div>
</template>
<script>
import Card from './components/Card.vue'
export default {
  components: {
    Card
  }
}
</script>
