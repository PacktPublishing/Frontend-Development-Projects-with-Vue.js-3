<script setup>
import { useColorStore } from '@/stores/color';
const store = useColorStore()
</script>

<template>
<div>
	<h2>Edit RGB</h2>
	<label for="red">Red</label> <input type="range" min="0" max="255" id="red" v-model="store.red"><br/>
	<label for="green">Green</label> <input type="range" min="0" max="255" id="green" v-model="store.green"><br/>
	<label for="blue">Blue</label> <input type="range" min="0" max="255" id="blue" v-model="store.blue"><br/>

	<p>
	<button @click="store.darken()">Darken</button>
	<button @click="store.lighten()">Lighten</button>
	</p>
	
</div>


</template>

<style>
label {
	display: inline-block;
	width: 50px;
}
</style>