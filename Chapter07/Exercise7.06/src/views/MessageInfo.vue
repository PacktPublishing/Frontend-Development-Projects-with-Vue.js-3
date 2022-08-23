<template>
  <div>
    <h3>Message info: </h3>
    <p>{{message.sent}}</p>
  </div>
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
      message: {},
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.message = messages[to.params.id];
    })
  },
  beforeRouteUpdate(to, from, next) {
    const message = messages[to.params.id];
    vm.message = message;
    next();
  }
}
</script>