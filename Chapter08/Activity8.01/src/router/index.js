import { createRouter, createWebHistory } from "vue-router";

const messages = ["hello how are you", "test me"];

export const routes = [
  {
    path: "/",
    name: "messages",
    component: () => import("../views/Messages.vue"), 
    beforeEnter(to, from, next) {
      to.meta.messages = messages;
      next();
    },
    children: [
      {
        path: "list",
        name: "list",
        component: () => import("../views/MessageList.vue"),
      },
      {
        path: "editor",
        name: "editor",
        component: () => import("../views/MessageEditor.vue"),
        props: true,
      },
    ],
  },
  {
    path: "/message/:id",
    name: "message",
    component: () => import("../views/Message.vue"),
    props: true,
    beforeEnter(to, from, next) {
      if (to.params && to.params.id) {
        const id = to.params.id;

        if (messages && messages.length > 0 && id < messages.length) {
          to.params.content = messages[id];
        }
      }

      to.params.from = from;
      next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
