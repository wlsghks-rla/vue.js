<!-- views/ComputedRef.vue -->
<script setup>
import { ref, computed } from "vue";
// computed : ReadOnly만 가능한 반응형 객체를 만드는 함수 // crud가 가능한 것이 필요.
//           => 결과값
// 영수증
//  노트   10,000원(소비자가) => 공급가액 / 부가세
const price = ref(0); // 변경가능한 값.
const supply = computed(() => {
  return price.value * 0.9;
});
const tax = computed(() => {
  return price.value - supply.value;
});

const radiusInit = Math.round(Math.random() * 10);
const radius = ref(radiusInit); // 반지름
const PI = ref(3.14); // 원주율 -> Math.PI

// 원의 면적 = 반지름 * 반지름 * PI
const area = computed(() => {
  return radius.value * radius.value * PI.value;
});
</script>
<template>
  <h2>영수증</h2>
  <span>제품가격</span><input type="number" v-model="price" />
  <p>공급가액 : {{ supply }}</p>
  <p>부가세 : {{ tax }}</p>
  <p>소비자가 : {{ price }}</p>
  <hr />
  <h2>원의 면적계산</h2>
  <p>반지름이 {{ radius }} 이고</p>
  <p>원주율 {{ PI }} 인 원의 면적은 {{ area }}</p>
</template>
