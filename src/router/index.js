import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/src/views/HomePage.vue",
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
