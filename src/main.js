import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadingAnimation from '@/components/LoadingAnimation'

createApp(App).use(store).use(router).component("LoadingAnimation", LoadingAnimation).mount('#app')
