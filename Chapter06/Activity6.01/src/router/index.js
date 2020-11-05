import Vue from 'vue'
import VueRouter from 'vue-router'
import Messages from '@/views/Messages.vue'

Vue.use(VueRouter)

const messages = []

export const routes = [
  {
    path: '/',
    name: 'messages',
    component: () => import(/* webpackChunkName: "messages" */ '../views/Messages.vue'),
    props: {
      list: messages
    },
    children: [{
      path: 'list',
      name: 'list',
      component: () => import(/* webpackChunkName: "list" */ '../views/MessageList.vue'),
      props: true,
    }, {
      path: 'editor',
      name: 'editor',
      component: () => import(/* webpackChunkName: "editor" */ '../views/MessageEditor.vue'),
      props: true,
    }]
  },
  {
    path: '/message/:id',
    name: 'message',
    component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue'),
    props:true,
    beforeEnter(to, from, next) {
      if (to.params && to.params.id) {
        const id = to.params.id;
        
        if (messages && messages.length > 0 && id < messages.length) {
          to.params.content = messages[id];
        }
      }

      to.params.from = from;
      next()
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
