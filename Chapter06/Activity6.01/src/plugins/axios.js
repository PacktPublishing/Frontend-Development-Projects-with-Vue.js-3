import axios from 'axios'
export default {
  install(app) {
    app.provide('axios', axios)
  }
}
