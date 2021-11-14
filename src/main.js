import axios from "axios";
import "bootstrap";
import { createApp } from "vue";
import VueAxios from "vue-axios";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .use(VueLoading)
  .mount("#app");
