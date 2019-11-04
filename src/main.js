import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BaseLoading from "@/components/BaseLoading.vue";

Vue.config.productionTip = false;

Vue.component("BaseLoading", BaseLoading);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
