import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  // history 모드 설정 (javascript의 history와 비슷). / path모드 존재.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // 경로(중복x) - 필수값
      name: "home", // 라우트의 이름(중복x) - 선택값 : 경로의 이름이 길때 이름으로 호출.
      component: HomeView, // 라우트의 컴포넌트 - 필수값 : 메인에만 적용(시작할 때 바로 호출.)
    },
    {
      path: "/user/list",
      name: "userList",
      // 동적컴포넌트 호출(필요할 때마다 호출.) - 처음에 느린 뷰의 단점 해결(모든 컴포넌트 읽기 때문.)
      component: () => import("../views/UserListView.vue"),
    },
    {
      path: "/user/detail/:id", // 해당 값(id)가 필수
      name: "userInfo",
      // 동적컴포넌트 호출(필요할 때마다 호출.) - 처음에 느린 뷰의 단점 해결(모든 컴포넌트 읽기 때문.)
      component: () => import("../views/UserInfoView.vue"),
    },
    {
      path: "/user/add",
      name: "userForm",
      // 동적컴포넌트 호출(필요할 때마다 호출.) - 처음에 느린 뷰의 단점 해결(모든 컴포넌트 읽기 때문.)
      component: () => import("../views/UserFormView.vue"),
    },
  ],
});

// export default router;
