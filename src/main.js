import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/";
import App from "./App.vue";
import AuthHandler from "./components/AuthHandler";
import Gallery from "./components/Gallery";
import UploadForm from "./components/UploadForm";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/login", component: AuthHandler },
    { path: "/", component: Gallery },
    { path: "/upload", component: UploadForm },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
