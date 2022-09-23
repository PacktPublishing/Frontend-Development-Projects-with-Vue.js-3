<template>
	<div>
		<form @submit.prevent="onSubmit()">
			<input v-model="searchTerm" placeholder="Search" type="text"> 
			<button type="submit" id="search">Search</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchTerm: this.$route.query.q || ''
		}
	},
	methods: {
		onSubmit() {
			if(this.searchTerm === '') return;
			this.$router.push({ 
				path:'/',
				query: {
					q: this.searchTerm
				}
			});
		}
	}
}
</script>

<style scoped>
div {
	margin-top: 10px;
	margin-bottom: 10px;
}
</style>