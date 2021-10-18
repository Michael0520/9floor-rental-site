import { createRouter, createWebHashHistory } from "vue-router";
import FilterPage from "../views/Filter.vue";
import HomePage from "../views/HomePage.vue";
import RoomDetailPage from "../views/Room-detailPage.vue";
const routes = [
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/roomDetailPage.vue",
    name: "Room-detailPage",
    component: RoomDetailPage,
  },
  {
    path: "/filter",
    name: "FilterPage",
    component: FilterPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
