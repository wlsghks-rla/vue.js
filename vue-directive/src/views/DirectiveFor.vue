<!-- views/DirectiveFor.vue -->
<!-- 반복문 => 배열사용. -->
<script setup>
import { ref } from "vue";

const aray = ["마우스", "키보드", "USB", "마우스패드"];
const itemList = ref(aray);
const friends = ref(["홍길동", "김명선"]);
let newFriend = ref("박우석");
// 함수
const addNewFriend = () => {
  friends.value.push(newFriend.value.trim());
  newFriend.value = "";
};
</script>
<template>
  <h2>전자기기 목록</h2>
  <ul>
    <li v-for="item in itemList">{{ item }}</li>
    <!-- for of 반복문과 비슷한 형태 -> 배열의 크기만큼 반복. -->
    <!-- item: ul 안에서만 사용가능한 변수-->
    <br />
    <li v-for="item in itemList" v-bind:key="item">{{ item }}</li>
  </ul>
  <h2>친구 목록</h2>
  새로운 친구 :
  <input type="text" v-model="newFriend" v-on:change="addNewFriend" />
  <ul>
    <li v-for="(name, idx) in friends" v-bind:key="name">
      {{ `${idx} : ${name}` }}
    </li>
  </ul>
  <!-- 배열의 요소를 건드릴 때는 idx가아닌 메서드를 활용하는게 좋음-인식불가할 경우 생김. -->
</template>
