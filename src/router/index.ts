import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/day-1",
      name: "day1",
      component: () => import("../views/Day1.vue"),
    },
    {
      path: "/day-2",
      name: "day2",
      component: () => import("../views/Day2.vue"),
    },
  ],
});

export default router;
