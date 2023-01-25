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
    props: route => ({
      messages: route.query.messages?.length > 0 ? route.query.messages : []
    }),
    beforeEnter: async (to, from, next) => {
      if (!to.query || !to.query.messages) {
        const module = await import ('../assets/messages.js');
        const messages = module.default;
        if (messages && messages.length > 0) {
          to.query.messages = messages;
        }
      }

      next()
    }
  },{
    path: '/message/:id',
    name: 'message',
    component: () => import('../views/Message.vue'),
    props: route => ({ id: route.params.id, content: route.query.content }),
    async beforeEnter(to, from, next) {
      if (to.params && to.params.id) {
        const id = to.params.id;
        const module = await import ('../assets/messages.js');
        const messages = module.default;
        if (messages && messages.length > 0 && id < messages.length) {
          to.query.content = messages[id];
        }
      }
      next()
    }, 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
