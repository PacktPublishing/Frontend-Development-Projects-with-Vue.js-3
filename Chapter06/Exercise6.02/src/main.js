import { createApp } from 'vue'
import App from './App.vue'
import axiosPlugin from './plugins/axios.js'

import './assets/main.css'

const app = createApp(App)
app.use(axiosPlugin)
app.mount('#app')