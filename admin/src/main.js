import { createApp } from 'vue'
import App from './App.vue'
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import router from './router.js'
import store from './store/index.js';

const app = createApp(App)
app.use(useToast)
app.use(store)
app.use(router)
app.mount('#app')
