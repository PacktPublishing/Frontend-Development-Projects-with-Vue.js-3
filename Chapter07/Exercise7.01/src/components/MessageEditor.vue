<template>
  <div>
    <div class="editor--wrapper">
      <textarea ref="textArea" class="editor">
      </textarea>
      <button @click="onSendClick()" class="editor--submit">Submit</button>
    </div>
    <transition 
      name="slide-right"
      enter-active-class="slide-right"
      leave-active-class="slide-left"
    >
      <section v-if="message" class="message--display">
        <h4>Your saved message: </h4>
        <span>{{message}}</span>
      </section>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    onSendClick() {
      const message = this.$refs.textArea.value;
      this.message = message;
      this.$refs.textArea.value = '';
    }
  }
}
</script>
<style scoped>
@keyframes slide-right {
  100% {
    transform: translateX(0)
  }
}

.slide-right-enter {
  border-top: 0;
}

.slide-right {
  animation: 1s slide-right 1s forwards;
  transform:translateX(-100%);
  transition: border-top 2s ease;
}

.slide-left {
  animation: 1s slide-right 1s reverse;
  transform:translateX(-100%);
}
</style>
<style scoped>
.editor--wrapper {
  display: flex;
  flex-direction: column;
}

.editor {
  align-self: center;
  width: 200px;
}

.editor--submit {
  margin: 0.5rem auto;
  width: 50px;
  align-self: center;
}

.message--display {
  margin-top: 1rem;
  border-top: 1px solid lightgray;
}
</style>
