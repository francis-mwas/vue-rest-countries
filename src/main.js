import Vue from "vue";
import App from "./App.vue";
import vueRouter from "vue-router";
import JwPagination from "jw-vue-pagination";
import Routes from "./router";

Vue.component("jw-pagination", JwPagination);
Vue.use(vueRouter);
Vue.config.productionTip = false;

const router = new vueRouter({
  routes: Routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
