<script setup>
import NewsletterBanner from './components/NewsletterBanner.vue';
import CookieBanner from './components/CookieBanner.vue';
import SearchForm from './components/SearchForm.vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const posts = ref([
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
)


const relevantPosts = computed(() => {
  if(!route) return posts;
  const { q } = route.query;
  if(!q) return posts.value;
  return posts.value.filter(
    p => p.title.toLowerCase().includes(q.toLowerCase())
  )
})
</script>

<template>

  <NewsletterBanner />

  <SearchForm />

  <header>
  <h1>The Vue.js Workshop Blog</h1>
  </header>

  <router-view :posts="relevantPosts"></router-view>

  <CookieBanner />
</template>


