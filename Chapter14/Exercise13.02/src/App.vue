<template>
  <div id="app" class="p-10">
    <div class="flex flex-col">
      <h2
        class="uppercase leading-loose pb-4 flex justify-center m-auto md:w-1/3 text-xl mb-8 font-bold text-gray-800 border-b"
      >
        Commentator Pro
      </h2>
      <button
        @click="showEditor = !showEditor"
        class="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        data-test-id="new-comment-button"
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
          :disabled="!newComment"
          :class="{ 'opacity-50 cursor-not-allowed' : !newComment }"
        >
        Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showEditor: false,
      newComment: ''
    }
  }
}
</script>
