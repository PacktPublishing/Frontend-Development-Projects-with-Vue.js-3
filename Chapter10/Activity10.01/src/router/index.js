import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cats',
    name: 'cats',
    component: () => import(/* webpackChunkName: "cats" */ '../views/Cats.vue'),
    beforeEnter: (to, from, next) => {
      if(!store.state.token) {
        next('/');
      }
      next();
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
