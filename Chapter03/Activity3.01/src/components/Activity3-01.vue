<template>
  <div class="container">
    <h1>Activity 3.01</h1>
    <div>
      <input 
        type="text" 
        placeholder="First name" 
        id="fname"
        v-model= "fname" />
      <input 
        type="text" 
        id="lname"
        placeholder="Last name" 
        v-model= "lname" />
    </div>
    <div>
      <p>Full name: {{ fullName }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Activity3-01',
  data() {
    return {
      fname: '',
      lname: '',
    }
  },
  computed: {
    fullName() {
      return `${this.fname} ${this.lname}`
    },
  },
}
</script>
<style>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}

</style>
