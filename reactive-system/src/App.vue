<script setup>
// composition API : 적절한 함수를 활용
import { ref, reactive, computed, watch } from "vue";
// ref : CRUD가 가능한 반응형 객체를 만드는 함수 중 하나 p.66
//     1) 데이터의 타입과 무관
//     2) 재할당이 가능
// reactive : CRUD가 가능한 반응형 객체를 만드는 함수 중 하나
//     1) 데이터 중 객체, 배열만 가능
//     2) 재할당이 불가능
// computed : ReadOnly만 가능한 반응형 객체를 만드는 함수
let msg = "Hello world";

const now = new Date(); // 현재일시
const nowStr = now.toLocaleTimeString(); // 시간만 문자열

let timeStr = nowStr; // 일반 변수
const timeStrRef = ref(nowStr); // 반응형 객체: 값을 감싸는 형태

function changeTime() {
  const newTime = new Date(); // 실행시점 일시
  const newTimeStr = newTime.toLocaleTimeString();
  // 각 변수에 변경된 일시를 업데이트
  timeStr = newTimeStr;
  timeStrRef.value = newTimeStr; // 값 지정 필수(.value)
}

setInterval(changeTime, 1000);
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>현재 시간 : {{ timeStr }}</p>
  <p>현재 시간(Ref) : {{ timeStrRef }}</p>
</template>

<style scoped></style>
