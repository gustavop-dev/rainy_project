import { createApp } from 'vue'
import './styles/tailwind.css'
import App from './App.vue'
import { createPinia } from 'pinia'; // Import createPinia - this must be loaded synchronously
import router from './router';
import axios from 'axios';

// Create the application
const app = createApp(App);

// Apply Pinia first
const pinia = createPinia();
app.use(pinia);

// Apply the router
app.use(router);


// Mount the application
app.mount('#app')
