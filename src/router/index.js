import { createRouter, createWebHashHistory } from "vue-router";
import AboutPage from "../views/About.vue";
import Coliving from "../views/Coliving.vue";
import FilterPage from "../views/Filter.vue";
import HomePage from "../views/HomePage.vue";
import RoomDetailPage from "../views/Room-detailPage.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/roomDetailPage",
    name: "RoomDetailPage",
    component: RoomDetailPage,
  },
  {
    path: "/filter",
    name: "FilterPage",
    component: FilterPage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/coliving",
    name: "ColivingPage",
    component: Coliving,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
