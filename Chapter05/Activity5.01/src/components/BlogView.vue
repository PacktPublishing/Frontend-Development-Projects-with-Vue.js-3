<template>
    <div>
        <button @click="showEditor = !showEditor" v-if="!showEditor">Add new blog</button>
        <BlogEditor v-else @addNewItem="addItem"/>
        <Blogs :blogs="blogs" :is-loading="isLoading" :error="error" @deleteBlog="deleteItem"/>
    </div>
</template>
<script setup>
import BlogEditor from './BlogEditor.vue';
import Blogs from './Blogs.vue';
import { useBlogs } from '../composables/useBlogs';
import { ref } from 'vue';

const { blogs, isLoading, error, addItem, deleteItem } = useBlogs();
const showEditor = ref(false);
</script>