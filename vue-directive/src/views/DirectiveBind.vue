<!--views/DirectiveBinde.vue-->
<script setup>
// Directive(디렉티브) : HTML Tag를 제어하는 명령어
// v-bind : HTML Tag의 속성에 데이터를 바인드(연결)하는 디렉티브
//          단방향 바인딩만 가능(변수 => HTML)

import { ref, reactive, computed } from "vue";
const url = ref("http://vuejs.org");
const isDisabled = ref(true); // boolean type은 is~로 시작하는 경우가 많음.
const imgAttributes = reactive({
  // 필드명 => 속성이름
  src: "./src/assets/logo.svg",
  alt: "vue 기본 로고",
  width: "150px",
});
// style 속성 : css 기반 항목도 값도 이미 정해져있음.
const txtColor = ref("pink");
const backColor = ref("green");
const styleAttributes = reactive({
  color: "pink",
  backgroundColor: "green", // background-color으로 자동변환해줌.(p.96)
});

// class 속성
const msg = ref("Hello, world!");
const istxtColorRed = ref(true);
const isbgcolorBlue = ref(true);
const classStyles = reactive({
  txtColorRed: true,
  bgColorBlue: false,
  txtSize24: true,
});
const classInfo = ref("txtColorRed txtSize24");
</script>
<template>
  <h2>특정 속성의 경우</h2>
  <p v-html="url"></p>
  <!-- v-html => innerHTML / <p v-html="url">초기값</p> => override 오류 발생-->
  <p v-text="url"></p>
  <p>vuejs 공식사이트 : {{ url }}</p>
  <hr />
  <h2>일반속성</h2>
  <p><a href="https://vue.js.org">Vue.js 사이트</a></p>
  <p>
    <a
      v-bind:href="url"
      v-bind:style="{ color: txtColor, backgroundColor: backColor }"
      >Vue.js 사이트</a
    >
  </p>
  <!-- 단방향 디렉티브-->
  <p>
    <a
      v-bind:href="url + '/guide/introduction.html'"
      v-bind:style="styleAttributes"
      >Vue.js 가이드 페이지</a
    >
  </p>
  <p><button v-bind:disabled="isDisabled">동의합니다</button></p>
  <!--속성값이 없는 것들은 boolean으로 제어-->
  <p><img alt="vue 로고" v-bind="imgAttributes" /></p>
  <h2>Class 속성</h2>
  <!-- 다중으로 제어가능 -->
  <p id="cp" v-bind:class="classInfo">{{ msg }}</p>
</template>
<style scoped>
.txtColorRed {
  color: red;
}
.txt-color-pink {
  color: pink;
}
.bgColorBlue {
  background-color: blue;
}
.txtSize24 {
  font-size: 24px;
}
</style>
