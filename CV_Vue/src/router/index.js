import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/404View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/what-i-do",
      name: "whatIdo",
      component: () => import("../views/WhatView.vue"),
    },
    {
      path: "/hobbies",
      name: "hobbies",
      component: () => import("../views/HobbiesView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
});

export default router;
