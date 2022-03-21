<template>
  <div id="app" class="p-10">
    <div class="flex flex-col">
      <h2
        class="uppercase leading-loose pb-4 flex justify-center m-auto md:w-1/3 text-xl mb-8 font-bold text-gray-800 border-b"
      >
        Commentator Pro
      </h2>
      <div class="flex flex-col mx-auto mb-4">
        <label
          class="flex text-gray-700 text-sm font-bold mb-2"
          for="email"
        >
          Enter your email:
        </label>
        <input
          v-model="email"
          id="email"
          type="email"
          data-test-id="email-input"
          class="flex shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        @click="showEditor = !showEditor"
        class="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        data-test-id="new-comment-button"
        :disabled="!email"
        :class="{ 'opacity-50 cursor-not-allowed' : !email }"
      >
        Add a New Comment
      </button>
      <div v-if="showEditor">
        <textarea
          data-test-id="new-comment-editor"
          class="flex mx-auto my-6 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="newComment"
        >
        </textarea>
        <button
          data-test-id="new-comment-submit"
          class="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          :disabled="!newComment || isSubmitting"
          :class="{
            'opacity-50 cursor-not-allowed' : !newComment,
            spinner: isSubmitting
          }"
          @click="submitNewComment()"
        >
        Submit
        </button>
      </div>
      <ul
        v-if="comments.length > 0"
        class="flex flex-col items-center my-4 mx-auto md:w-2/3 lg:w-1/2"
        data-test-id="comments-list"
      >
        <li
          class="flex flex-col w-full px-6 py-4 rounded overflow-hidden shadow-lg mb-6"
          v-for="(comment, index) in comments"
          :key="comment.id + index"
          data-test-id="comment-card"
        >
          <p class="flex text-gray-700 text-lg mb-4">{{ comment.body }}</p>
          <p class="flex text-gray-600 font-semibold text-sm">
            <a :href="'mailto:' + comment.email">{{ comment.email }}</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import fetch from 'unfetch'

export default {
  data() {
    return {
      email: '',
      showEditor: false,
      newComment: '',
      isSubmitting: false,
      comments: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(comments => {
        this.comments = comments
      })
  },
  methods: {
    submitNewComment() {
      this.isSubmitting = true

      fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          body: this.newComment
        })
      }).then(res => res.json())
      .then(data => {
        this.comments = [
          data,
          ...this.comments,
        ]
        this.isSubmitting = false
        this.newComment = ''
        this.showEditor = false
      }).catch(() => {
        this.isSubmitting = false
      })
    }
  }
}
</script>
