<script setup>
import PostList from './PostList.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  posts: {
    type: Array,
	default: () => []
  }
})

const route = useRoute();

const tagName = computed(() => {
	return route.params.tagName;
})

const tagPosts = computed(() => {
	return props.posts.filter(p => p.tags.includes(route.params.tagName));
})

</script>

<template>
	<h3># {{ tagName }}</h3>
	<PostList :posts="tagPosts" />
</template>
