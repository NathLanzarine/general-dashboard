import { createApp } from "vue";
import { Quasar } from "quasar";
import App from "./App.vue";
import router from "./router";
import Vue3EasyDataTable from "vue3-easy-data-table";

import "./styles/app.scss";
import "vue3-easy-data-table/dist/style.css";
import "tabulator-tables/dist/css/tabulator_semanticui.min.css";
import "tabulator-tables/dist/css/tabulator_materialize.min.css";

import "@quasar/extras/material-icons/material-icons.css";

const app = createApp(App);

app.use(router);
app.component("EasyDataTable", Vue3EasyDataTable);
app.use(Quasar, {
  plugins: {},
});
app.mount("#app");
