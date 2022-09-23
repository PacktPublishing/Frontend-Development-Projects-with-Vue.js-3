<script setup>
import PostList from './components/PostList.vue'
</script>

<template>
  <header>
  <h1>The Vue.js Workshop Blog</h1>
  </header>

  <PostList :posts="posts" />
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      posts: [
        {
          title: 'Vue.js for React developers',
          description: 'React has massive popularity here are the key benefits of Vue.js over it.',
          tags: ['vue', 'react'],
        },
        {
          title: 'Migrating an AngularJS app to Vue.js',
          description: 'With many breaking changes, AngularJS developers have found it easier to retrain to Vue.js than Angular 2',
          tags: ['vue', 'angularjs']
        }
      ]
    }
  }

}
</script>

