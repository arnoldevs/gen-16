import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store); // Usamos la store de Vuex para manejar los datos del estado

app.mount("#app");