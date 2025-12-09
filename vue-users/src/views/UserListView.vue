<!-- views/UserListView.vue -->
<!-- 회원 리스트 화면 -->
<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";

const router = useRouter();
const goToDetail = (selectedId) => {
  // params: 반드시 path에 :으로 선언, 필수값을 요구할 때
  // query: path에 표기안함, 선택값을 처리
  router.push({ name: "userInfo", params: { id: selectedId } }); // params 방식 - 필수값
  // router.push({ name: "userList", query: { work: "33456" } }); // query 방식 - 선택적으로 값을 넘겨야할 때(질의응답형) :포탈에서 검색기능
};
import { useCounterStore } from "@/stores/counter"; // 저장소 호출.
const counterStore = useCounterStore();
import { ref, onBeforeMount } from "vue"; // 또는 OnMounted
import axios from "axios";
const fakeServer = "https://jsonplaceholder.typicode.com";
const users = ref([]);
const getUserList = async () => {
  const res = await axios
    .get(`${fakeServer}/users`)
    .catch((err) => console.log(err));
  users.value = res.data;

  counterStore.count = users.value.length; // 업데이트.
};
onBeforeMount(() => {
  // 해당 훅에서 어떤 작업을 한 건지 정의하므로 함수 형태
  // 서버에 데이터 요청
  getUserList(); // 추가 작업이 있을 경우 await 부착.
});
</script>

<template>
  <h2>회원 관리</h2>
  <p><RouterLink :to="{ name: 'home' }"> TOP</RouterLink> > 회원 리스트</p>
  <!-- a는 정확한 경로 => RouterLink -->
  <h3>회원리스트</h3>
  <p>
    신규 등록은
    <RouterLink :to="{ path: '/user/add' }">여기</RouterLink>를 클릭
    <!-- path와 name 중 선택할 때는 필히 v-bind 사용. -->
    <!-- 속성앞에 : 붙으면 v-bind와 동일 -->
  </p>
  <ul>
    <li v-for="user in users" :key="user.id" @click="goToDetail(user.id)">
      <!-- key는 힌트역할. -->
      ID가 {{ user.id }}인 {{ user.name }}님
    </li>
    <!--vuerouter를 이용한 함수는 보통 goto~~느낌으로-->
    <!-- <li @click="goToDetail(47783)">ID가 47783인 철수님</li> -->
  </ul>
  <RouterView v-bind:key="$route.fullPath" />
</template>
