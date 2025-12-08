<!-- views/ComputedTest.vue -->
<!-- computed: 값, watch: 작업으로 인식. -->
<script setup>
import { ref, computed } from "vue";

// 칵테일 리스트.
const cocktailList = [
  { id: 1, name: "화이트레이디", price: 1200 },
  { id: 2, name: "블루하와이", price: 1500 },
  { id: 3, name: "뉴욕", price: 1100 },
  { id: 4, name: "마티니", price: 1500 },
];

// 칵테일 번호 템플릿 변수.
const cocktailNo = ref(0);

// computed: 특정 데이터가 변경될 경우 자동으로 계산하는 결과값
// 칵테일 정보의 계산형 속성
const priceMsg = computed(() => {
  if (cocktailNo.value >= cocktailList.length) {
    return "해당 칵테일은 없습니다";
  } else {
    const cocktail = cocktailList[cocktailNo.value]; // cocktailNo가 ref여서 value 사용
    return `해당 칵테일은 ${cocktail.name}이며 가격은 ${cocktail.price}입니다.`;
  }
});

setInterval(() => {
  cocktailNo.value = Math.round(Math.random() * 3) + 1;
}, 1000);
</script>
<template>
  <p>현재 칵테일 번호 : {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>
