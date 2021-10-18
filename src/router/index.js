import { createRouter, createWebHashHistory } from "vue-router";
import Filter01 from "../views/Filter01.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
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
  {
    path: "/filter01",
    name: "Filter01",
    component: Filter01,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
