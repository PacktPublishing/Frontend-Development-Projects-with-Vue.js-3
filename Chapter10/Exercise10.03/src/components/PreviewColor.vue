<script setup>
import { computed } from 'vue'
import { useColorStore } from '@/stores/color';
const store = useColorStore()

const previewRGB = computed(() => {
	
	return { 
		backgroundColor: store.hex
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