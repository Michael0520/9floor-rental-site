import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import HomePage02 from "../views/HomePage02.vue";

const routes = [
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/home01",
    name: "HomePage02",
    component: HomePage02,
  },
  {
    path: "/src/views/Room-detailPage.vue",
    name: "Room-detailPage",
    component: () => import("../views/Room-detailPage.vue"),
  },

  {
    path: "/filter",
    name: "FilterPage",
    component: () => import("../views/Filter.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
