<template>
  <div class="message">
    <h2>Message content:</h2>
    <main>
      <slot/>
    </main>
    <button @click="goBack">Back</button>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      if (this.$route.params.from) {
        this.$router.go(-1)
      }
      else {
        this.$router.push({
          name: 'messages'
        })
      }
    }
  }
}
</script>
    