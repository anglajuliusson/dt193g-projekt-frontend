import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/main.css"; // Inkludera CSS-fil
import 'bulma/css/bulma.css'; // Importera Bulma

const app = createApp(App)

app.use(router)

app.mount('#app')