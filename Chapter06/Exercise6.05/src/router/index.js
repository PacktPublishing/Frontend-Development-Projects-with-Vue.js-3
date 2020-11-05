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
    component: () => import(/* webpackChunkName: "messages" */ '../views/MessageFeed.vue'),
    props: true,
    async beforeEnter(to, from, next) {
      if (!to.params || !to.params.messages) {
        const module = await import (/* webpackChunkName: "messagesFeed" */ '../assets/messages.js');

        const messages = module.default;
        if (messages && messages.length > 0) {
          to.params.messages = messages;
        }
      }

      next()
    }
  },
  {
    path: '/message/:id',
    name: 'message',
    component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue'),
    async beforeEnter(to, from, next) {
      if (to.params && to.params.id) {
        const id = to.params.id;
        const module  = await import (/* webpackChunkName: "messagesFeed" */ '../assets/messages.js');
        const messages = module.default;
        if (messages && messages.length > 0 && id < messages.length) {
          to.params.content = messages[id];
        }
      }

      next()
    },
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
