<script setup>
import PostListItem from './PostListItem.vue';

defineProps({
  posts: {
    type: Array,
	default: () => []
  }
})
</script>

<template>
	<div>
		<PostListItem v-for="post in posts"
		:key="post.slug"
		:title="post.title"
		:description="post.description"
		:tags="post.tags"
		:slug="post.slug"
		/>
	</div>
</template>
