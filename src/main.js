import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { createPinia } from "pinia";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";


const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia);
app.component("EasyDataTable", Vue3EasyDataTable);
app.mount('#app')
