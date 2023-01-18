<template>
    <h1>Movies</h1>
    <div v-if="isLoading">
        <p>Loading...</p>
    </div>
    <div v-else-if="error">
        <p>{{ error }}</p>
    </div>
    <div v-else>
        <div>
            <label for="search">Search:</label>
            <input type="text" id="search" v-model="searchTerm" />
        </div>
        <ul>
            <li v-for="movie in filteredMovies" :key="movie.id">
                <article>
                    <h3>{{ movie.title }}</h3>
                    <h4>Released on: {{ movie.release_date }}</h4>
                    <h5>Directed by: {{ movie.director }}</h5>
                    <p>{{ movie.opening_crawl }}</p>
                </article>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { useMovies } from '../composables/useMovies.js'
import { useSearch } from '../composables/useSearch.js'

const { movies, error, isLoading } = useMovies();
const { searchTerm, filteredItems: filteredMovies } = useSearch(movies);
</script>