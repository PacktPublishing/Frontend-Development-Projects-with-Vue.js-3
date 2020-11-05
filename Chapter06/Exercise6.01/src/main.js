import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router, //specify the router configuration for use
  render: h => h(App)
}).$mount('#app')
