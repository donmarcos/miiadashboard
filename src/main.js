import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./plugins/base"
import "./plugins/chartist"
import "./plugins/vee-validate"
import vuetify from "./plugins/vuetify"
import i18n from "./i18n"


import Amplify, * as AmplifyModules from 'aws-amplify';

import awsconfig from './aws-exports';

import {
  AmplifyPlugin
} from "aws-amplify-vue";

import '@aws-amplify/ui-vue';


Amplify.configure({
  Auth: {
    identityPoolId: 'us-west-2:5485bf7d-0c66-4dc7-a804-e48c312152fe',
    region: 'us-west-2'
  },
  Interactions: {
    bots: {
      "miiahealthcheck_dev": {
        "name": "miiahealthcheck_dev",
        "alias": "$LATEST",
        "region": "us-west-2",
      },
    }
  }
});

Vue.use(AmplifyPlugin, AmplifyModules);
Amplify.configure(awsconfig);


new Vue({
  router,
  store,
  vuetify,
  i18n,
  Amplify,
  render: (h) => h(App),
}).$mount("#app")
