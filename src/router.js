import Vue from "vue";
import Router from "vue-router";

import CountriesList from "./components/CountriesList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: __dirname,
  routes: [{ path: "/contries", component: CountriesList }]
});
