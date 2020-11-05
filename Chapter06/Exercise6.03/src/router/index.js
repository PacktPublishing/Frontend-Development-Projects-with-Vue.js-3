import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/messages',
    name: 'messageFeed',
    component: () => import(/* webpackChunkName: "messages" */ '../views/MessageFeed.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
