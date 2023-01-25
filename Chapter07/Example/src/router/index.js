import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// let user = 'Adam'

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
    // beforeEnter(to, from, next) {
    //   if (!to.params?.user) {
    //     next({ name: 'about', params: { user: to.query?.user || 'Adam' }})
    //   }
    //   else {
    //     next()
    //   }
    // },
    props: { age: 32 }
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/User.vue'),
    props: true,
    children: [{
      path: 'info',
      name: 'userinfo',
      component: () => import('../views/UserInfo.vue'),
      props: true,
    }, {
      path: 'extra',
      component: () => import('../views/UserExtra.vue')
    }]

  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404.vue'),
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/Error.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


// router.beforeEach((to, from, next) => {
//   if (to.name === 'about' && (!to.query?.user)) {
//     next({ name: 'about', query: { user }})
//   }
//   else {
//     user = to.query.user;
//     next()
//   }
// });

// router.afterEach((to) => {
//   if (to.name === 'about' && to.query && to.query.user) {
//     user = to.query.user;
//   }
// })


export default router
