<!-- components/OneSection.vue -->
<template>
  <section class="box">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <p><button v-on:click="randomVal">임의값 생성</button></p>
  </section>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
// props: ReadOnly 값(수정 x)
// defineProps(["title", "content"]); // 정의 된것만 사용가능.

defineProps({
  // 받는 데이터 형태 설정.
  title: {
    type: string,
    required: true, // 필수값 -> 안지켜도 화면나옴. 콘솔창 경고.
  },
  content: {
    type: [String, Object], // String or Object 둘 중하나
    default: "No Content",
  },
});

// 1번방식 자식 부모에 각각 하는 방식
// const title = ref("Hello, World!");
// const content = ref("No Content");

// const createStartPoint = (name) => {
//   startPoint.value = Math.ceil(Math.random() * 5); // 부모요소에 있어 적용불가.
//   startName.value = name;
// };

const emit = defineEmits(["callStarPoint"]);
const randomVal = () => {
  emit("callStarPoint", "자식");
};
</script>
<style scoped>
section {
  border: blue 3px solid;
  margin: 10px;
}
</style>
