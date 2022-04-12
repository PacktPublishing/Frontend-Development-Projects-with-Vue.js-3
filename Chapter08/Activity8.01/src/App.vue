<template>
  <div>
    <div id="nav">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/messages">Messages</RouterLink>
      </nav>
    </div>
    <router-view v-slot="{ Component, route }">
      <component :is="layout">
        <transition :name="route.meta.transition || transition" :mode="mode">
          <component :is="Component" />
        </transition>
      </component>
    </router-view>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";

const layout = () => import("./layouts/default.vue");
const transition = "fade";
const mode = "out-in";
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s, transform 3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-20%);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
