import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/messagesFeed',
    name: 'messageFeed',
    component: () => import('../views/MessageFeed.vue'),
    props: true,
    async beforeEnter(to, from, next) {
      if (!to.params || !to.params.messages) {
        const module = await import ('../assets/messages.js');
        const messages = module.default;
        if (messages && messages.length > 0) {
          to.params.messages = messages;
        }
      }

      next()
    }
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/Message.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
