<!-- views/ParentcomponentApp.vue -->
<template>
  <h1>컴포넌트 기초</h1>
  <p>{{ startName }}/ 별점: {{ startPoint }}</p>
  <button v-on:click="createStartPoint('부모')">임의값 생성</button>
  <section>
    <!-- 부모의 HTML 생성하다가 자식의 HTML CSS 작업 마지막으로 부모 CSS => scope사용시 독립성 -->
    <h2>컴포넌트 1개</h2>
    <!-- <OneSection title="홍길동" content="반갑습니다." /> -->
    <OneSection v-on:call-star-point="createStartPoint" />
    <!--callStarPoint 동일-->
    <!--단방향 통신(부모 -> 자식)-->
  </section>
  <section>
    <h2>컴포넌트 여러개</h2>
    <OneSection
      v-for="post in postList"
      v-bind:title="post.name"
      v-bind:content="post.message"
      v-on:call-star-point="createStartPoint"
    />
    <!--단방향 통신(부모 -> 자식)-->
  </section>
</template>
<script setup>
import { ref, reactive } from "vue";
// improt 시 자동으로 하위요소 등록(하나의 태그)
// 부모와 자식간에 간섭x
// 독립성: 서로다른 변수로 인식.
// 부모자식간에 스타일이중복될 경우 충돌일어남. => 부모껄로 인식됨.
import OneSection from "@/components/OneSection.vue";
const title = ref("Hello, World!");
const content = ref("No Content");

const postList = reactive([
  { name: "김민교", message: "Hello" },
  { name: "김상우", message: "Good Morning" },
  { name: "이한나", message: "Today is ..." },
]);
const startName = ref("초기값");
const point = Math.ceil(Math.random() * 5);
const startPoint = ref(point);
const createStartPoint = name => {
  // emit의 이벤트를 처리하는 핸들러: 매개변수가 자식이 전달하는 값
  startPoint.value = Math.ceil(Math.random() * 5);
  startName.value = name;
};
</script>
<style>
section {
  border: green 3px dashed;
  margin: 10px;
}
</style>
