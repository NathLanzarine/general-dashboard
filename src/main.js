import { createApp } from "vue";
import { Quasar } from "quasar";
import App from "./App.vue";
import router from "./router";
import Vue3EasyDataTable from "vue3-easy-data-table";
import iconSet from "quasar/icon-set/mdi-v4.js";
import "@quasar/extras/mdi-v4/mdi-v4.css";

import "./styles/app.scss";
import "vue3-easy-data-table/dist/style.css";
import "tabulator-tables/dist/css/tabulator_semanticui.min.css";
import "tabulator-tables/dist/css/tabulator_materialize.min.css";

import "@quasar/extras/material-icons/material-icons.css";

const app = createApp(App);

app.use(router);
app.component("EasyDataTable", Vue3EasyDataTable);
app.use(Quasar, {
  iconSet: iconSet,
  plugins: {},
});
app.mount("#app");
