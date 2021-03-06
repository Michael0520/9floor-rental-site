import { createRouter, createWebHashHistory } from "vue-router";
import AboutPage from "../views/About.vue";
import Coliving from "../views/Coliving.vue";
import Contact from "../views/Contact.vue";
import FilterPage from "../views/Filter.vue";
import HomePage from "../views/HomePage.vue";
import Media from "../views/Media.vue";
import RoomDetailPage from "../views/Room-detailPage.vue";
import Space from "../views/Space.vue";
import Team from "../views/Team.vue";
import WishList from "../views/wishList.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/rooms/:id",
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
  {
    path: "/media",
    name: "MediaPage",
    component: Media,
  },
  {
    path: "/team",
    name: "TeamPage",
    component: Team,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: Contact,
  },
  {
    path: "/space",
    name: "SpacePage",
    component: Space,
  },
  {
    path: "/wishList",
    name: "WishListPage",
    component: WishList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
