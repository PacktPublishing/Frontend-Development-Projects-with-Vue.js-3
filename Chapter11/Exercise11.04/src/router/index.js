import { createRouter, createWebHistory } from 'vue-router';
import PostList from '@/components/PostList.vue';
import SinglePost from '@/components/SinglePost.vue';
import TagPage from '@/components/TagPage.vue';

const routes = [
	{
		path: '/',
		component: PostList
	},
	{
		path: '/:postId', 
		component: SinglePost
	},
	{
		path:'/tags/:tagName',
		component: TagPage
	}
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;