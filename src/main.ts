import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/main.css";
import App from "./App.vue";
import router from "./others/router";

createApp(App).use(createPinia()).use(router).mount("#app");
