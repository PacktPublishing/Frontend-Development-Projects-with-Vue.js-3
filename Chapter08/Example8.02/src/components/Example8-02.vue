<template>
  <div>
    <button @click="toggle">Toggle Hello World msg</button>
    <transition 
      name="slide"
      enter-active-class="swing"
      leave-active-class="tada"
    >
      <h1 v-if="show">{{ msg }}</h1>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Welcome to your Vue.js App",
      show: true,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
}
</script>
<style>
@keyframes slide {
  0% { transform: translateX(-100px)}
  100% { transform: translateX(0px)}
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100px);
}

.slide-enter-active {
  animation: slide 5s;
}

.slide-leave-active {
  animation: slide 5s reverse;
}

@keyframes tada {
  0% {
    transform: scale3d(1, 1, 1);
 }

  10%, 20% {
    transform: scale3d(.8, .9, .8) rotate3d(0, 0, 1, -5deg);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 5deg);
  }

  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -5deg);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes swing {
  20% { transform: rotate(5deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
}


.tada {
  animation-fill-mode: both;
  animation-name: tada;
  animation-duration: 3s;
}

.swing {
  animation-fill-mode: both;
  transform-origin: top center;
  animation-duration: 2s;
  animation-name: swing;
}
</style>



