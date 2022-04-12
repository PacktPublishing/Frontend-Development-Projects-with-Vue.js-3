<template>
  <div>
    <textarea
      ref="textArea"
      @change="onChange($event)"
    >
    </textarea>
    <button @click="onSendClick()">Submit</button>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    onChange(event) {
      this.message = event.target.value
    },
    onSendClick() {
      if (!this.message) return;
      this.list.push(this.message);
      this.$emit('list:update', this.list);
      this.message = ''
      this.$refs.textArea.value = ''
    }
  },
  beforeRouteLeave(to, from, next) {
      if (this.$refs.textArea.value !== '') {
        const ans = window.confirm('You have unsaved message. Are you sure to navigate away?');

        next(ans);
      }
      else {
        next();
      }
  }
}
</script>
