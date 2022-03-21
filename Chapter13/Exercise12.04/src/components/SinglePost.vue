<template>
  <div class="flex flex-col w-full md:w-1/2 m-auto">
    <h2
      class="font-semibold text-sm mb-4"
    >
      Post: {{ title }}
    </h2>
    <p>{{ content }}</p>
  </div>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => {}
    }
  },
  computed: {
    post() {
      const { postId } = this.$route.params
      return this.posts.find(p => p.slug === postId)
    },
    title() {
      return this.post && this.post.title
    },
    content() {
      return this.post && this.post.content
    }
  }
}
</script>
