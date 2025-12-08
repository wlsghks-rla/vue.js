import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/computed",
      name: "ComputedTest",
      component: () => import("../views/ComputedTest.vue"),
    },
    {
      path: "/watch",
      name: "WatchTest",
      component: () => import("../views/WatchTest.vue"),
    },
    {
      path: "/hook",
      name: "LifecycleHook",
      component: () => import("../views/LifecycleHook.vue"),
    },
    {
      path: "/OneComp",
      name: "OnecomponentApp",
      component: () => import("../views/OnecomponentApp.vue"),
    },
    {
      path: "/ParentComp",
      name: "ParentcomponentApp",
      component: () => import("../views/ParentcomponentApp.vue"),
    },
    {
      path: "/RootComp",
      name: "RootComp",
      component: () => import("../views/RootComp.vue"),
    },
    {
      path: "/todoList",
      name: "TodoList",
      component: () => import("../views/TodoList.vue"),
    },
  ],
});

export default router;
