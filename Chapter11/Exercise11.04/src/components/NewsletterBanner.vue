<script setup>
import { computed } from 'vue';

import { userPreferencesStore } from '@/store.js';

const store = userPreferencesStore();

const showBanner = computed(() => { 
	return !store.dismissedSubscriberBanner;
})
</script>

<template>
	<div v-if="showBanner">
		<strong>Subscribe to the newsletter</strong>

		<button @click="store.dismissSubscriberBanner()">Close</button>
	</div>
</template>

<style scoped>
div {
	background-color: #c0c0c0;
	size: 100%;
	padding: 10px;
}

div button {
	float: right;
}
</style>