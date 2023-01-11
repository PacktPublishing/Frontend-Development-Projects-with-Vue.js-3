<template>
  <div>
    <h2> Message Feed </h2>
    <transition-group @appear="enter" tag="div" appear move-class="flip" :css="false">
      <div v-for="(m, i) in list" :key="m">
        <router-link :to="`/message/${i}`">
          {{ i }}
        </router-link>
      </div>
    </transition-group>
  </div>
</template>
<script setup>
import gsap from 'gsap';

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const enter = (el, done) => {
  console.log('reacting to appear', el);
  const tl = gsap.timeline({
    onComplete: done,
    stagger: 1.2,
    duration: 2,
  });

  console.log('reacting to appear', el);
  tl.fromTo(el, { opacity: 0 }, { opacity: 1 })
    .to(el, { rotation: -270, duration: 1, ease: 'bounce' })
    .to(el, { rotation: -360 })
    .to(el, { rotation: -180, opacity: 0 })
    .to(el, { rotation: 0, opacity: 1 });
};
</script>
<style>
.flip-move {
  transition: transform 1s;
}
</style>