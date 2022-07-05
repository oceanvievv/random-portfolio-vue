import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const projectTitle = "Portfolio";

router.afterEach(() => {
  Vue.nextTick(() => {
    document.title = projectTitle;
  });
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
