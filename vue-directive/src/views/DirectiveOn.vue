<!-- DirectiveOn.vue -->
<script setup>
import { ref, computed } from "vue";
// Data
const randValue = ref("시작 전");

// 이벤트 핸들러
const onClickFnc = () => {
  const rand = Math.random(Math.random() * 100);
  randValue.value = rand;
};

/*const selectTag = (event) => {
  let selectedTag = event.currentTarget.tagName;
  if (selectedTag == "A") event.preventDefault();
  alert(`Tag : ${selectedTag}`);
};*/
const selectTag = (selectedTag) => {
  alert(`Tag : ${selectedTag}`);
};
</script>
<template>
  <div>
    <!-- 한 태그의 멀티 이벤트 처리-->
    <button v-on:click="onClickFnc" v-on:mouseover="randValue = '멀티이벤트'">
      클릭
    </button>
    <p>결과 : {{ randValue }}</p>
  </div>
  <br />
  <!-- 이벤트 버블링 -->
  <div v-on:click="selectTag('div')">
    div
    <form v-on:click.stop.self="selectTag('form')">
      form
      <a href="https://www.naver.com" v-on:click.prevent="selectTag()">
        <!--#은 현재페이지 리로드-->
        <p v-on:click.once="selectTag('p')">네이버</p>
      </a>
    </form>
  </div>
  <br />
  <!-- p.120 -->
  <input v-on:keyup.ctrl.enter="selectTag('input')" />
</template>
