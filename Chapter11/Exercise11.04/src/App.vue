<script setup>
import NewsletterBanner from './components/NewsletterBanner.vue';
import CookieBanner from './components/CookieBanner.vue';
</script>

<template>

  <NewsletterBanner />
  <header>
  <h1>The Vue.js Workshop Blog</h1>
  </header>

  <router-view :posts="posts"></router-view>

  <CookieBanner />
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      posts: [
        {
          slug: 'vue-react',
          title: 'Vue.js for React developers',
          description: 'React has massive popularity here are the key benefits of Vue.js over it.',
          content:'This is the content of the Vue.js for React developers post.',
          tags: ['vue', 'react'],
        },
        {
          slug: 'vue-angularjs',
          title: 'Migrating an AngularJS app to Vue.js',
          description: 'With many breaking changes, AngularJS developers have found it easier to retrain to Vue.js than Angular 2',
          content: 'This is the content of the Vue.js for AngularJS developers post.',
          tags: ['vue', 'angularjs']
        }
      ]
    }
  }

}
</script>

