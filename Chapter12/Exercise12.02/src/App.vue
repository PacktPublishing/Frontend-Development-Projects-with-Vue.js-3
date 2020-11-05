<template>
  <div id="app" class="p-10">
    <div class="flex flex-col">
      <h2
        class="leading-loose pb-4 flex justify-center m-auto md:w-1/3 text-xl mb-8 font-bold text-gray-800 border-b"
      >
      The Vue.js Workshop Blog
      </h2>
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostList from './components/PostList.vue'

export default {
  components: {
    PostList
  },
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
