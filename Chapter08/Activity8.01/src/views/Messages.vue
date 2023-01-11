<template>
  <div>
    <router-link :to="{ name: 'list' }">List</router-link> |
    <router-link :to="{ name: 'editor' }">Editor</router-link>
    <router-view v-slot="{ Component }">
      <transition name="fade" enter-active-class="zoom-in">
        <component
          :is="Component"
          :list="messages"
          @list:update="addMessage"
        />
      </transition>
    </router-view>
  </div>
</template>
<script setup>
import DefaultLayout from '../layouts/default.vue';
import { reactive } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  currentLayout: {
    type: Object,
    default: () => DefaultLayout,
  },
});

const emits = defineEmits(["update:currentLayout"]);
emits('update:currentLayout', DefaultLayout);

const messages = reactive(route.meta.messages || []);
const addMessage = (message) => {
  messages.push(message);
};
</script>
<style>
.zoom-in {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.fade-enter-active {
  transition: opacity 2s, transform 3s;
}
.fade-enter {
  opacity: 0;
  transform: translateX(-20%);
}
</style>
