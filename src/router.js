import Vue from "vue"
import Router from "vue-router"





Vue.use(Router)
// Vue.use(AmplifyPlugin, AmplifyModules);


export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [{
    path: "/",
    component: () => import("@/views/dashboard/Index"),
    children: [
      // Dashboard
      {
        name: "Dashboard",
        path: "",
        component: () => import("@/views/dashboard/Dashboard"),
      },
      // Pages
      {
        name: "User Profile",
        path: "pages/user",
        component: () => import("@/views/dashboard/pages/UserProfile"),
      },
      {
        name: "Notifications",
        path: "components/notifications",
        component: () => import("@/views/dashboard/component/Notifications"),
      },
      {
        name: 'LexHealthCheck',
        path: '/pages/health',
        component: () => import('@/views/dashboard/pages/HealthCheck'),
      },
      {
        name: 'LexProviderSearch',
        path: '/pages/provsearch',
        component: () => import('@/views/dashboard/pages/ProviderSearch'),
      },
      {
        name: "ML Predictions",
        path: "pages/mlpredict",
        component: () => import("@/views/dashboard/pages/MLPredict"),
      },
      {
        name: "Typography",
        path: "components/typography",
        component: () => import("@/views/dashboard/component/Typography"),
      },
      // Tables
      {
        name: "Regular Tables",
        path: "tables/regular-tables",
        component: () => import("@/views/dashboard/tables/RegularTables"),
      },
      // Maps
      {
        name: "Google Maps",
        path: "maps/google-maps",
        component: () => import("@/views/dashboard/maps/GoogleMaps"),
      },
      // Upgrade
      {
        name: "Upgrade",
        path: "upgrade",
        component: () => import("@/views/dashboard/Upgrade"),
      },
    ],
  }, ],
})
