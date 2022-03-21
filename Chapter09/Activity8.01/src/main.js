import Vue from 'vue'
import '@/assets/css/tailwind.css'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
