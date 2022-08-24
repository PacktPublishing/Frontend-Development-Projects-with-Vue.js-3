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
    props: true,
  },
  {
    path: '/messagesFeed',
    name: 'messageFeed',
    component: () => import('../views/MessageFeed.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/Message.vue'),
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
