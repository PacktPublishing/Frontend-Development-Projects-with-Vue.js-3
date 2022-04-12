<template>
  <div>
    <h2> Message Feed </h2>
    <transition-group
      @appear="enter"
      tag="div"
      move-class="flip"
      :css="false"
    >
      <div v-for="(m, i) in list" :key="m">
        <router-link :to="`/message/${i}`">
          {{ i }}
        </router-link>
      </div>
    </transition-group>
  </div>
</template>
<script>
import { TimelineMax } from 'gsap';

export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done,
        stagger: 1.2,
        duration: 2,
      });
      tl.fromTo(el, {opacity: 0}, {opacity: 1})
        .to(el, {rotation: -270, duration: 1, ease: "bounce"})
        .to(el, {rotation: -360})
        .to(el, {rotation: -180, opacity: 0})
        .to(el, {rotation: 0, opacity: 1});
    }
  }
}
</script>
<style>
.flip-move {
  transition: transform 1s;
}
</style>