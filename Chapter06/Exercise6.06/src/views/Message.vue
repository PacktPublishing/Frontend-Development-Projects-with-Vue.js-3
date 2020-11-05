<template>
  <div>
    <p>Message content: {{message.content}}</p>
    <router-link :to="{ name: 'messageAuthor', params: { message }}">Author</router-link> |
    <router-link :to="{ name: 'messageInfo', params: { message }}">Info</router-link>
    <router-view/>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String
    },
    message: {
      default: () => {},
      type: Object,
    }
  }
}
</script>