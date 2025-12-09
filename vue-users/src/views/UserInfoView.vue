<!-- views/UserInfoView.vue -->
<!-- 회원 상세 정보 화면 -->
<!-- ajax : 비동기 기반 통신, 주 목적이리로드 없이 페이지 변화를 일으키기 위해 데이터를 가져오는 통신
   -> 전체 리로딩이 아닌 필요 데이터만 불러와서 수정되는 부분만 수정. -->
<script setup>
import { RouterLink, useRoute } from "vue-router"; // 받은 정보를 꺼낼때는 useRoute
import { onBeforeMount, ref } from "vue"; // 나만쓰는게 아니여서 컴포넌트를 열때 무조건 새로 호출하는게 안전.
import axios from "axios";
const route = useRoute(); // 호출당한 정보
const userId = route.params.id;
const info = ref({}); // 값이 변화돼서 reactive 사용 불가.
const fakeServer = "https://jsonplaceholder.typicode.com";
const getUserInfo = async id => {
  const res = await axios
    .get(`${fakeServer}/users/${id}`)
    .catch(err => console.log(err));
  info.value = res.data;
};

onBeforeMount(() => {
  // 해당 훅에서 어떤 작업을 한 건지 정의하므로 함수 형태
  // 서버에 데이터 요청
  getUserInfo(userId); // 추가 작업이 있을 경우 await 부착.
});
</script>
<template>
  <h1>회원 관리</h1>
  <p>
    <RouterLink :to="{ name: 'home' }">TOP</RouterLink> >
    <RouterLink :to="{ path: '/user/list' }">회원 리스트</RouterLink>> 회원 상세
    정보
  </p>
  <h3>회원 상세 정보</h3>
  <div>
    <div><span>ID</span>{{ info.id }}</div>
    <div><span>이름</span>{{ info.name }}</div>
    <div><span>이메일</span>{{ info.email }}</div>
    <div><span>연락처</span>{{ info.phone }}</div>
  </div>
</template>
<style>
span {
  font-weight: bold;
}
</style>
