import "./assets/main.css";

import { createApp } from "vue"; // virtual DOM(화면 출력 x) 생성.
import { createPinia } from "pinia"; // 저장은 store폴더
import piniaPlugin from "pinia-plugin-persistedstate"; // 스토어 별로 별도 설정해야함.
const pinia = createPinia();
pinia.use(piniaPlugin);

import App from "./App.vue";
import router from "./router/routes.js"; // 폴더형식(하부 파일을 전체적으로 읽음)

const app = createApp(App);

// 보조기능 등록(app.use) - 추가등록할 때
app.use(pinia);
app.use(router);

app.mount("#app"); // id가 app인 것에 렌더링.
