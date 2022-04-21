<template>
  <div>
    <button @click="toggle">Toggle Hello World msg</button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <h1 v-if="show">{{ msg }}</h1>
    </transition>
  </div>
</template>
<script>
import gsap from "gsap";

export default {
  data() {
    return {
      msg: "Welcome to your Vue.js App",
      show: true,
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 2,
        opacity: 1,
        fontSize: "20px",
        onComplete: done,
      });
    },
    leave(el, done) {
      const tl = gsap.timeline({
        onComplete: done,
      });

      tl.to(el, { rotation: -270, duration: 1, ease: "elastic" })
        .to(el, { rotation: -360 })
        .to(el, {
          rotation: -180,
          opacity: 0,
        });
    },
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>
