import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/main.css"; // Inkludera CSS-fil

const app = createApp(App)

app.use(router)

app.mount('#app')