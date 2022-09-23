<script setup>
import { computed } from 'vue';

import { userPreferencesStore } from '@/store.js';

const store = userPreferencesStore();

const acceptedCookie = computed(() => { 
	return store.acceptedCookie;
})
</script>


<template>
	<div v-if="!acceptedCookie">
		<strong>Cookies Disclaimer</strong> 
		We use cookies to improve our experience.
		<button @click="store.acceptCookie">I agree</button>
	</div>
</template>

<style scoped>
div {
	background-color: green;
	size: 100%;
	padding: 10px;
	margin-top: 50px;
}

div button {
	float: right;
}
</style>