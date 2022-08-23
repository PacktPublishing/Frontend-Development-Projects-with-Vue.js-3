<template>
    <div>
        <p>Message content: {{message.content}}</p>
        <RouterLink :to="{ name: 'messageAuthor', params: { id: $route.params.id }}">Author</RouterLink> |
        <RouterLink :to="{ name: 'messageInfo', params: { id: $route.params.id }}">Info</RouterLink>
        <RouterView/>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const { message } = defineProps({
    message: {
        default: () => ({ content: '' }),
        type: Object
    },
    id: {
        default: '',
        type: String
    }
})

</script>
