<template>
  <div>
    <router-link :to="{ name: 'list' }">List</router-link> |
    <router-link :to="{ name: 'editor' }">Editor</router-link>
    <router-view v-slot="{ Component }">
      <transition>
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
import { useRoute } from "vue-router";
import { reactive } from "vue";

const route = useRoute();
const messages = reactive(route.meta.messages || []);
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

const addMessage = (message) => {
  messages.push(message);
};
</script>