<!-- views/UserFormView.vue -->
<!-- 회원 정보 추가 화면 -->
<script setup>
import { RouterLink, useRouter } from "vue-router";
// RouterLink: template태그에서 사용(script에서는 사용불가 -> useRouter함수사용.).
import axios from "axios";
const router = useRouter(); // vue-router 자체

import { reactive } from "vue";

// 서버와 통신하는 경우 필드명을 서버참조. -> 안하면 매치하는 추가작업 필요.
const info = reactive({
  id: "",
  name: "",
  email: "",
  phone: "",
});

import { useCounterStore } from "@/stores/counter"; // 저장소 호출.
const counterStore = useCounterStore();
const { increment } = counterStore;

const fakeServer = "https://jsonplaceholder.typicode.com";

const addUser = async () => {
  // 서버에 등록
  const res = await axios
    .post(`${fakeServer}/users`, info) // 자동으로 json변환 후 post
    .catch((err) => console.log(err));
  info.id = res.data.id;
  counterStore.increment(); // increment();와 동일
  // router.push({ name: "userList" });
};
</script>
<template>
  <h1>회원 관리</h1>
  <p>
    <RouterLink :to="{ name: 'home' }">TOP</RouterLink> >
    <RouterLink :to="{ path: '/user/list' }">회원 리스트</RouterLink>
    > 회원 정보 추가
  </p>
  <h3>회원 정보 추가</h3>
  <div>
    <h4>정보를 입력하고 등록 버튼을 클릭해주세요</h4>
    <div><span>ID</span><input type="text" v-model="info.id" readonly /></div>
    <div><span>이름</span><input type="text" v-model="info.name" /></div>
    <div><span>이메일</span><input type="text" v-model="info.email" /></div>
    <div><span>연락처</span><input type="text" v-model="info.phone" /></div>
    <button type="button" @click="addUser">등록</button>
    <!-- v-on:은 @(at)으로 대체가능 -->
  </div>
</template>
<style>
span {
  font-weight: bold;
}
</style>
