import { createApp } from "vue";
import { Quasar } from "quasar";
import App from "./App.vue";
import router from "./router";
import "./styles/app.scss";
import "tabulator-tables/dist/css/tabulator_semanticui.min.css";
import "tabulator-tables/dist/css/tabulator_materialize.min.css";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
// import "quasar/src/css/index.sass";
// import "https://fonts.cdnfonts.com/css/work-sans";

const app = createApp(App);

app.use(router);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.mount("#app");
