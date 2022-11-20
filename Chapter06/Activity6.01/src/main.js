import { createApp } from 'vue'
import App from './App.vue'
import axios from './plugins/axios'

import './assets/main.css'
const BASE_URL = 'https://jsonplaceholder.typicode.com'

const app = createApp(App)
app.use(axios)
app.use({
    install(_app) {
        _app.config.globalProperties.$baseUrl = BASE_URL
    }
})

app.mount('#app')
