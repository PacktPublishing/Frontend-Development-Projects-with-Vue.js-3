<template>
  <h3>Author:</h3>
  <p>{{author}}</p>
</template>
<script>
import messages from '../assets/messages.js';

export default {
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      author: '',
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const message = messages[to.params.id];
      vm.author = message.author;
    })
  },
  beforeRouteUpdate(to, from, next) {
    const message = messages[to.params.id];
    vm.author = message.author;
    next();
  }
}
</script>