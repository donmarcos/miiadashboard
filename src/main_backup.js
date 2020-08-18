import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./plugins/base"
import "./plugins/chartist"
import "./plugins/vee-validate"
import vuetify from "./plugins/vuetify"
import i18n from "./i18n"


/*
import '@aws-amplify/ui-vue';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
*/

import "@aws-amplify/ui-vue"
import Amplify from "aws-amplify"
import awsconfig from "./aws-exports"
Amplify.configure(awsconfig);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  Amplify,
  render: (h) => h(App),
}).$mount("#app")
