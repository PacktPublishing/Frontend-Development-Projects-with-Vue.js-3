<template>
  <div class="container">
    <h1>Async fetch</h1>

    <button @click="getApi()">{{
      loading ? 'Loading...' : 'Learn something profound'
    }}</button>

    <blockquote v-if="quote">{{ quote }}</blockquote>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      axiosResponse: {},
    }
  },
  computed: {
    quote() {
      return this.axiosResponse && this.axiosResponse.slip
        ? this.axiosResponse.slip.advice
        : null
    },
  },
  methods: {
    async getApi() {
      this.loading = true
      return axios.get('https://api.adviceslip.com/advice').then(response => {
        this.axiosResponse = response.data
        setTimeout(() => {
          this.loading = false
        }, 4000);
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
blockquote {
  position: relative;
  width: 100%;
  margin: 50px auto;
  padding: 1.2em 30px 1.2em 30px;
  background: #ededed;
  border-left: 8px solid #78c0a8;
  font-size: 24px;
  color: #555555;
  line-height: 1.6;
}
</style>
