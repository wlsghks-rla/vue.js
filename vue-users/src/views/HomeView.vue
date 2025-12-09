<!-- TOP 화면(메인화면) -->
<script setup>
import { RouterLink } from "vue-router";
import { useCounterStore } from "@/stores/counter"; // 저장소 호출.
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();
// action을 제외하고 state, getters를 저장소에서 반환: storeToRefs
const { count, doubleCount } = storeToRefs(counterStore); // storeToRefs: 반응형을 유지하면서 필요한 것만 꺼내기 위해.
// action은 바로 구조분해 할당(단순함수여서)
const { increment } = counterStore;
</script>
<template>
  <h1>TOP</h1>
  <p>Top</p>
  <h3>총 회원수: {{ count }}명</h3>
  <!-- <h3>총 회원수: {{ counterStore.count }}명</h3> -->
  <p><RouterLink to="/user/list">회원 관리는 여기서</RouterLink></p>
  <!-- to : href와 비슷. -->
</template>
