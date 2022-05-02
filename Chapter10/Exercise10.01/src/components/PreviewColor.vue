<script setup>
import { computed } from 'vue'
import { useColorStore } from '@/stores/color';
const store = useColorStore()

const previewRGB = computed(() => {
	
	return { 
		backgroundColor: "#" + Number(store.red).toString(16).padStart(2, '0') + 
		Number(store.green).toString(16).padStart(2, '0') + 
		Number(store.blue).toString(16).padStart(2, '0')
	}
});
</script>

<template>
<div>
	<h2>Preview Color</h2>
	<div class="previewColor" :style="previewRGB"></div>
	<p>
	CSS color string: {{ previewRGB.backgroundColor }}
	</p>
</div>
</template>

<style>
.previewColor {
	width: 250px;
	height: 250px;
}
</style>