<template>
  <div>
    <textarea v-model="message"> </textarea>
    <button @click="onSendClick()">Submit</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const emits = defineEmits(["list:update"]);

const message = ref('')

const onSendClick = () => {
  if (!message.value) return;
  emits("list:update", message.value);
  message.value = "";
};

onBeforeRouteLeave((to, from, next) => {
  if (message.value !== "") {
    const ans = window.confirm(
      "You have an unsaved message.  Are you sure you want to navigate away?"
    );

    next(!!ans);
  } else {
    next();
  }
});
</script>
