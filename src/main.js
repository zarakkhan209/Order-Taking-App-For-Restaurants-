import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css';
import router from './routes';
import store from './store'; // Import the Vuex store

createApp(App)
  .use(store) // Use the Vuex store
  .use(router)
  .mount('#app');
