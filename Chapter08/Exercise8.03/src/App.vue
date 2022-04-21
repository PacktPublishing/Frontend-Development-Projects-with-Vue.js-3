<template>
  <div>
    <div id="nav">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/messages">Messages</RouterLink>
      </nav>
    </div>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || transition" :mode="mode">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";

const transition = "fade";
const mode = "out-in";
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease-in;
}

/**Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 5.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.4, 0.4, 0.4);
  }

  100% {
    opacity: 1;
  }
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
