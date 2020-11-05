<template>
  <div>
    <label>{{ title }}</label>
    <input
      type="checkbox"
      :checked="completed"
      @change="toggleCompletion()"
    />
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleCompletion() {
      const newCompleted = !this.completed 
      this.$emit('completeChange', newCompleted)
      this.axios.patch(
        `${this.baseUrl}/todos/${this.id}`,
        { completed: newCompleted }
      )
    }
  }
}
</script>
