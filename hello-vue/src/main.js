// Vue 객체(component) 중 Root 객체를 실행하는 파일
import "./assets/main.css";

import { createApp } from "vue"; // createApp vue 생성담당.
import App from "./App.vue"; // 컴포넌트 // 설정관련.

createApp(App).mount("#app");
