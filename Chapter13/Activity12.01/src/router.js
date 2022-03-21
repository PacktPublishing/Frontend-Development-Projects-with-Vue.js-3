import Vue from 'vue'
import VueRouter from 'vue-router'

import PostList from './components/PostList.vue'
import SinglePost from './components/SinglePost.vue'
import TagPage from './components/TagPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: PostList
  },
  {
    path: '/:postId',
    component: SinglePost
  },
  {
    path: '/tags/:tagName',
    component: TagPage
  }
]

export default new VueRouter({
  routes
})
