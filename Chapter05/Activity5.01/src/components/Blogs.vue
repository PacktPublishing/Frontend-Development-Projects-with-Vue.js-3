<template>
  <div>
    <h1>Blogs</h1>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else-if="error">
      <p>{{ error }}</p>
    </div>
    <section v-else>
      <div class="search">
        <label for="search">Search:</label>
        <input type="text" id="search" v-model="searchTerm" />
      </div>
      <fieldset>
        <div>Filter by: </div>
        <input type="checkbox" id="title" value="title" v-model="filters" />
        <label for="title">By Title</label>
        <input
          type="checkbox"
          id="content"
          value="description"
          v-model="filters"
        />
        <label for="content">By Content</label>
      </fieldset>
      <ul class="articles-list">
        <li>
          <article v-for="(blog, i) in filteredBlogs" :key="i">
            <div class="article-item-info">
                <img
                v-if="blog.heroImage"
                class="thumbnail"
                :src="`${blog.heroImage.fields.file.url}?fit=scale&w=350&h=196`"
                />
                <div class="article-text">
                <div class="date">
                    {{ new Date(blog.publishDate).toDateString() }}
                </div>
                <h4>{{ blog.title }}</h4>
                <p>{{ blog.description }}</p>
                </div>
            </div>            
            <button @click="emits('deleteBlog', blog.id)">Delete</button>
          </article>
        </li>
      </ul>
    </section>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import { useSearch } from "../composables/useSearch";

const props = defineProps({
  blogs: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    required: true,
  },
  error: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["deleteBlog"]);
const blogs = ref(props.blogs);

watch(
  () => props.blogs,
  (newBlogs) => {
    blogs.value = newBlogs;
  }
);

const {
  searchTerm,
  filters,
  filteredItems: filteredBlogs,
} = useSearch(blogs);
</script>

<style scoped>
.articles-list article{
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 10px;
  border: 1px solid gray;
  align-items: center;
  margin-block: 20px;
}
button {
    margin-bottom: 10px;
}

.article-item-info {
  display: flex;
  text-align: left;
  padding-bottom: 15px;
}

.article-text {
  padding: 15px 0;
}

.thumbnail {
  margin-right: 30px;
}

.date {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}
li {
    list-style: none;
}

fieldset {
    display: flex;
    gap: 10px;
    margin-block: 20px;
}
</style>