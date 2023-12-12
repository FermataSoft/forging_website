import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "../layouts/main.vue";
import PageLayout from "../layouts/page.vue";
import BlankLayout from "../layouts/blank.vue";

const isAuthenticated = true

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: MainLayout },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/works",
      name: "works",
      meta: { layout: PageLayout },
      component: () => import("../views/WorksView.vue"),
    },
    {
      path: "/articles",
      name: "articles",
      meta: { layout: PageLayout },
      component: () => import("../views/ArticlesView.vue"),
    },
    {
      path: "/articles/:id",
      name: "article",
      meta: { layout: PageLayout },
      component: () => import('../views/Article.vue')
    },
    {
      path: "/contacts",
      name: "contacts",
      meta: { layout: PageLayout },
      component: () => import("../views/ContactsView.vue"),
    },
    {
      path: "/about",
      name: "about",
      meta: { layout: PageLayout },
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      meta: { layout: PageLayout },
      beforeEnter: (to, from, next) => {
        if (to.name !== 'login' && !isAuthenticated) next({ name: 'works' })
        else next()
      },
      component: () => import("../views/AdminView.vue")
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
