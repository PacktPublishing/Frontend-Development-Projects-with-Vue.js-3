<template>
  <div id="app" class="p-10">
    <NewsletterBanner />
    <div class="flex flex-col">
      <h2
        class="leading-loose pb-4 flex justify-center m-auto md:w-1/3 text-xl mb-8 font-bold text-gray-800 border-b"
      >
      The Vue.js Workshop Blog
      </h2>
      <router-view
        :posts="posts"
      />
      <CookieBanner />
    </div>
  </div>
</template>

<script>
import NewsletterBanner from './components/NewsletterBanner.vue'
import CookieBanner from './components/CookieBanner.vue'

export default {
  components: {
    NewsletterBanner,
    CookieBanner
  },
  data() {
    return {
      posts: [
        {
          slug: 'vue-react',
          title: 'Vue.js for React developers',
          description: 'React has massive popularity here are the key benefits of Vue.js over it.',
          content:
            `React has massive popularity here are the key benefits of Vue.js over it.
            See the following table, we'll also look at how the is the content of the post.

            There's more, we can map React concepts to Vue and vice-versa.`,
          tags: ['vue', 'react'],
        },
        {
          slug: 'vue-angularjs',
          title: 'Migrating an AngularJS app to Vue.js',
          description: 'With many breaking changes, AngularJS developers have found it easier to retrain to Vue.js than Angular 2',
          content:
            `With many breaking changes, AngularJS developers have found it easier to retrain to Vue.js than Angular 2

            Vue.js keeps the directive-driven templating style while adding a component model.

            It's performant thanks to a great reactivity engine.`,
          tags: ['vue', 'angularjs']
        }
      ]
    }
  }
}
</script>
