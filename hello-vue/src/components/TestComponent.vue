<script setup>
import { ref } from "vue"; // ref 함수

const message = ref("메세지를 입력해주세요!");
</script>
<template>
  <div>
    <h1>{{ message }}</h1>
    <!-- {{}} 머스태시(출력관련)p.63 -->
    <input type="text" v-model="message" />
    <!-- v-model(vue directive문법, 데이터바인딩관련) -->
  </div>
</template>
<style></style>

<!-- template는 필수. -->
