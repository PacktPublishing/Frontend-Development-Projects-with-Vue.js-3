import axios from 'axios'
export default {
  install(Vue) {
    Vue.axios = axios
    Vue.prototype.axios = axios
  }
}
