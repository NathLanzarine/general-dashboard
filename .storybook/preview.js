import { app } from '@storybook/vue3';
import iconSet from 'quasar/icon-set/mdi-v4.js'
import Vue3EasyDataTable from "vue3-easy-data-table";
import { Quasar } from 'quasar';
import { createPinia } from 'pinia';

// import '@quasar/extras/roboto-font/roboto-font.css';
// // These are optional
// import '@quasar/extras/material-icons/material-icons.css';
// import '@quasar/extras/animate/fadeInUp.css';
// import '@quasar/extras/animate/fadeOutDown.css';
// import '@quasar/extras/animate/fadeInRight.css';
// import '@quasar/extras/animate/fadeOutRight.css';

import 'quasar/dist/quasar.css';
import '@quasar/extras/mdi-v4/mdi-v4.css'
import "vue3-easy-data-table/dist/style.css";

const pinia = createPinia()

app.use(Quasar, {iconSet});
app.use(pinia)
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