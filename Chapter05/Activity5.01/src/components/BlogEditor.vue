<template>
    <div>
        <h1>Blog Editor</h1>
        <div class="field">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title" />
        </div>
        <div class="field">
            <label for="slug">Blog id</label>
            <input type="text" id="slug" v-model="id" />
        </div>
        <div class="field">
            <label for="author">Author</label>
            <input type="text" id="author" v-model="author" />
        </div>
        <div class="field">
            <label for="content">Content</label>
            <textarea id="content" v-model="content"></textarea>
        </div>
        <div class="field">
            <button @click="save">Save</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const title = ref('');
const author = ref('');
const content = ref('');
const id = ref('');

const emits = defineEmits(['addNewItem']);

const save = () => {
    emits('addNewItem', ({
        title: title.value,
        author: author.value,
        content: content.value,
        id: id.value
    }));

    title.value = '';
    author.value = '';
    content.value = '';
    id.value = '';
};
</script>
<style scoped>
.field {
    margin-bottom: 1rem;
}

.field label {
    margin-inline-end: 10px;
}
</style>