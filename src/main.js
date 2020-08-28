import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./plugins/base"
import "./plugins/chartist"
import "./plugins/vee-validate"
import vuetify from "./plugins/vuetify"
import i18n from "./i18n"

import Amplify, * as AmplifyModules from "aws-amplify"
// import Amplify from "aws-amplify"
import { AmplifyPlugin } from "aws-amplify-vue"
import awsconfig from "./aws-exports"

//import {
//  AmplifyPlugin
//} from 'aws-amplify-vue';

import "@aws-amplify/ui-vue"

Amplify.configure({
  Auth: {
    identityPoolId: "us-west-2:7113c926-5b92-4390-aed2-61bb64231e8e",
    region: "us-west-2",
  },
  Interactions: {
    bots: {
      miiahealthcheck_dev: {
        name: "miiahealthcheck_dev",
        alias: "$LATEST",
        region: "us-west-2",
      },
      miiaprovsearch: {
        name: "miiaprovsearch",
        alias: "$LATEST",
        region: "us-west-2",
      },
    },
  },
})

Vue.use(AmplifyPlugin, AmplifyModules)
// Vue.use(AmplifyPlugin)
Amplify.configure(awsconfig)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  Amplify,
  render: (h) => h(App),
}).$mount("#app")

Vue.prototype.$Amplify = Amplify
