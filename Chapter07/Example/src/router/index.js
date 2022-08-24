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
  },{
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/User.vue'),
    props: true,
    children: [{
      path: 'info',
      name: 'userinfo',
      component: () => import('../views/UserInfo.vue')
    }, {
      path: 'extra',
      component: () => import('../views/UserExtra.vue')
    }]

  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
