import axios from 'axios'
export default {
  install(Vue) {
    Vue.prototype.axios = axios
  }
}
