<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  posts: {
    type: Array,
	default: () => []
  }
})

const route = useRoute();

const post = computed(() => {
	const { postId } = route.params;
	return props.posts.find(p => p.slug === postId);
})

const title = computed(() => { 
	return post && post.value.title;
})


const content = computed(() => { 
	return post && post.value.content;
})

</script>

<template>
	<div>
		<h2>
		Post: {{ title }}
		</h2>
		<p>
		{{ content }}
		</p>
	</div>
</template>
