<template>
<h2>Commentator Pro</h2>

<button @click="showEditor = !showEditor" 
		data-test-id="new-comment-button">
Add a New Comment
</button>

<div v-if="showEditor">
	<p>
	<textarea data-test-id="new-comment-editor" 
	v-model="newComment"></textarea>
	</p>
	<p>
	<button data-test-id="new-comment-submit" 
	:disabled="!newComment || isSubmitting"
	:class="{submitting:isSubmitting}"
	@click="submitNewComment()">
	Submit
	</button>
	</p>
</div>
</template>

<style scoped>
.submitting {
	font-style: italic;
}
</style>

<script>
export default {

	data() {
		return {
			showEditor: false,
			newComment: '',
			isSubmitting: false
		}
	},
	methods: {
		submitNewComment() {
			this.isSubmitting = true;
			setTimeout(() => {
				this.isSubmitting = false;
				this.newComment = '';
			}, 2500);
			
		}
	}

}
</script>