<template>
    <div>
        <p>{{content}}</p>
    </div>
</template>
<script>
export default {
    props: {
        content: {
            default: '',
            type: String
        }
    }
}
</script>