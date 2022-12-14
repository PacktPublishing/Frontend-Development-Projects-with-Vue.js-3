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
	<button data-test-id="new-comment-submit" :disabled="!newComment">
	Submit
	</button>
	</p>
</div>
</template>

<script>
export default {

	data() {
		return {
			showEditor: false,
			newComment: ''
		}
	}

}
</script>