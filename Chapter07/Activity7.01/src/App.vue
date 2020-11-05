<template>
  <div id="app">
    <component :is="layout">
      <transition name="fade" mode="out-in">
        <router-view :layout.sync="layout"/>
      </transition>
    </component>
  </div>
</template>
<script>
export default {
  data() {
    return {
      layout: () => import(/* webpackChunkName: "defaultLayout" */ './layouts/default.vue')
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s, transform 3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(-20%);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
