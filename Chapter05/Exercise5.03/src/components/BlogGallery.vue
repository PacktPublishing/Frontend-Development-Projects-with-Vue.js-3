<template>
    <label>
        What are you searching for?
        <input type="text" v-model="searchTerm" placeholder="Search by blog's title" />
    </label>
    <ul>
        <li v-for="(blog, index) in getFilteredBlogs()" :key="index">
            <article>
                <h3>{{ blog.title }}</h3>
                <h4>{{ blog.author }}</h4>
                <p>{{ blog.description }}</p>
                <button @click="toggleFavorite(index)">
                    {{ 
                        blog.isFavorite 
                        ? 'Remove from favorites' 
                        : 'Add to favorites' 
                    }}
                </button>
            </article>
        </li>
    </ul>
</template>
<script setup>
import { ref, reactive } from 'vue';

const searchTerm = ref('');
const blogs = reactive([{
    title: 'Vue 3',
    description: 'Vue 3 is awesome',
    author: 'John Doe',
    isFavorite: false
}, {
    title: 'Vue 2',
    description: 'Vue 2 is awesome',
    author: 'John Doe',
    isFavorite: false
}, {
    title: 'Pinia state management',
    description: 'Pinia is awesome',
    author: 'Jane Smith',
    isFavorite: false
}, {
    title: 'Vue Router',
    description: 'Vue Router is awesome',
    author: 'Jane Smith',
    isFavorite: false
}, {
    title: 'Testing with Playwright',
    description: 'Playwright is awesome',
    author: 'Minnie Mouse',
    isFavorite: false
}, {
    title: 'Testing with Cypress',
    description: 'Cypress is awesome',
    author: 'Mickey Mouse',
    isFavorite: false
}]);

const toggleFavorite = (index) => {
    blogs[index].isFavorite = !blogs[index].isFavorite;
}

const getFilteredBlogs = () => {
    return blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.value.toLowerCase()));
};
</script>
<style scoped>
label {
    display: flex;
    flex-direction: column;
}

li {
    list-style: none;
    gap: 10px;
    width: 200px;
}

ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-inline-start: 0px;
}
</style>
