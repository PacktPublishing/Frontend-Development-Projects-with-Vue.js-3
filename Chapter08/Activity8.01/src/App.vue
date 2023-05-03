<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <transition :name="route.meta.transition || transition" :mode="mode">
        <component
          :is="Component"
          :list="messages"
          @update:currentLayout="(newLayout) => (layout = newLayout)"
        />
      </transition>
    </router-view>
  </component>
</template>
<script setup>
import { RouterView } from "vue-router";
import Default from "./layouts/default.vue";
import { shallowRef } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const layout = shallowRef(Default);
const transition = "fade";
const mode = "out-in";

const messages = route.meta.messages;
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
