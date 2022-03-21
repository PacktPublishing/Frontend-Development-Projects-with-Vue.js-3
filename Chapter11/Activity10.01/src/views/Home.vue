<template>
  <div>
    <h2>Login</h2>
    <form>
      <div>
        <label for="username">Username: </label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">Password: </label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div>
        <input type="submit" @click.prevent="login" value="Log In">
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    async login() {
      let response = await this.$store.dispatch('login', 
      { username:this.username, 
       password:this.password
      });
      if(response) {
        this.$router.replace('cats');
      } else {
        // handle a bad login here..
      }
    }
  }
}
</script>
