import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../views/MainLayout.vue";
import GeneralView from "../views/GeneralView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainLayout,
      children: [
        {
          path: "/api-docs",
          name: "route_api_docs",
          meta: { breadcrumb: [{ label: "API" }] },
          component: () => import("../views/ApiList.vue"),
        },
        {
          path: "/changeLog",
          name: "changeLog",
          meta: { breadcrumb: [{ label: "Changelog" }] },
          component: () => import("../views/ChangeLog.vue"),
        },
        {
          path: "/general-dashboard",
          name: "general_dashboard",
          component: GeneralView,
          meta: {
            name: "Dashboard Geral",
            description: "Visão geral",
            showQueues: true,
            breadcrumb: [{ label: "Dashboards" }, { label: "Geral" }],
          },
        },
        {
          path: "/home",
          name: "home",
          component: () => import("../components/MainPage.vue"),
        },
      ],
    },
  ],
});

export default router;
