<template>
    <div>
        <p>{{content}}</p>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const { content } = defineProps({
    content: {
        default: '',
        type: String
    }
})
</script>