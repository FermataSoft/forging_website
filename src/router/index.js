import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue"
import MainLayout from "../layouts/main.vue";
import PageLayout from "../layouts/page.vue";
import BlankLayout from "../layouts/blank.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: MainLayout },
      component: HomeView,
    },
    {
      path: "/works",
      name: "works",
      meta: { layout: PageLayout },
      component: () => import("../views/WorksView.vue"),
    },
    {
      path: "/image/",
      name: "image",
      meta: { layout: BlankLayout, transition: "slide" },
      component: () => import("../views/ImageView.vue")
    },
    {
      path: "/articles",
      name: "articles",
      meta: { layout: PageLayout, transition: "slide" },
      component: () => import("../views/ArticlesView.vue"),
    },
    {
      path: "/articles/:id",
      name: "article",
      meta: { layout: PageLayout },
      component: () => import("../views/Article.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      meta: { layout: PageLayout, transition: "slide" },
      component: () => import("../views/ContactsView.vue"),
    },
    {
      path: "/about",
      name: "about",
      meta: { layout: PageLayout, transition: "slide" },
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      meta: { layout: PageLayout, transition: "fade" },
      component: () => import("../views/PrivacyView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      meta: { layout: BlankLayout },
      component: () => import("../404.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
