import { createApp } from "vue";
import { Quasar } from "quasar";
import App from "./App.vue";
import router from "./router";
import Vue3EasyDataTable from "vue3-easy-data-table";
import { createPinia } from "pinia";
import iconSet from "quasar/icon-set/mdi-v4.js";
import "@quasar/extras/mdi-v4/mdi-v4.css";
import "@quasar/extras/material-icons/material-icons.css";

// import "./styles/app.scss";
import "vue3-easy-data-table/dist/style.css";

const pinia = createPinia();
const app = createApp(App);

app.component("EasyDataTable", Vue3EasyDataTable);

app.use(router);
app.use(pinia);
app.use(Quasar, {
  iconSet: iconSet,
  plugins: {},
});
app.mount("#app");
