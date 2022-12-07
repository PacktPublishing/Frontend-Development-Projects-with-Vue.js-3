<template>
  <section class="md:w-1/3 flex flex-col p-12">
  <!-- Profile Card -->
  <h3 class="font-bold font-lg">{{ store.name }}</h3>
  <p class="mt-2">{{ store.occupation }}</p>
  </section>
</template>

<script setup>
import { store } from '@/store.js';
</script>
