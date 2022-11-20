import axios from 'axios'
export default {
  install(app) {
    app.config.globalProperties.$axios = axios
    app.provide('axios', axios)
  }
}
