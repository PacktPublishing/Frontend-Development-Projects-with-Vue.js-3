<template>
<h2>Commentator Pro</h2>

<p>
<label for="email">Enter your email:</label>
<input v-model="email" data-test-id="email-input" type="email" required>
</p>

<button @click="showEditor = !showEditor" 
		:disabled="!email"
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

<div v-if="comments.length > 0" data-test-id="comments-list">
	<div v-for="(comment, index) in comments"
       :key="comment.id + index"
       data-test-id="comment-card"
	>
          <p>{{ comment.body }}</p>
          <p>
            <a :href="'mailto:' + comment.email">
              {{ comment.email }}</a>
          </p>
    </div>
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
			isSubmitting: false,
			comments:[],
			email:''
		}
	},
	mounted() {
		fetch('https://jsonplaceholder.typicode.com/comments')
		.then(res => res.json())
		.then(comments => {
	        this.comments = comments
		})
	},
	methods: {
		submitNewComment() {
			this.isSubmitting = true;
			fetch('https://jsonplaceholder.typicode.com/comments', {
				method:'POST',
				headers: {
					'Content-Type':'application/json'
				}, 
				body: JSON.stringify({
					email: this.email, 
					body: this.newComment
				})
			})
			.then(res => res.json())
			.then(data => {
				this.comments = [ 
					data, 
					...this.comments
				];
				this.isSubmitting = false;
				this.newComment = '';
			})
			.catch(() => {
				this.isSubmitting = false;
			});
		}
	}

}
</script>