import '@quasar/extras/roboto-font/roboto-font.css';
// These are optional
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/animate/fadeInUp.css';
import '@quasar/extras/animate/fadeOutDown.css';
import '@quasar/extras/animate/fadeInRight.css';
import '@quasar/extras/animate/fadeOutRight.css';
import "tabulator-tables/dist/css/tabulator_semanticui.min.css";
import Vue3EasyDataTable from "vue3-easy-data-table";


// Loads the quasar styles and registers quasar functionality with storybook
import 'quasar/dist/quasar.css';
import { app } from '@storybook/vue3';
import iconSet from 'quasar/icon-set/mdi-v4.js'
import '@quasar/extras/mdi-v4/mdi-v4.css'
import { Quasar } from 'quasar';

import "vue3-easy-data-table/dist/style.css";


// This is also where you would setup things such as pinia for storybook

app.use(Quasar, {iconSet});
app.component("EasyDataTable", Vue3EasyDataTable);



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}