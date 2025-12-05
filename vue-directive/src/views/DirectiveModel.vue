<!-- DirectiveModel.vue -->
<!--  입력태그 : input/textarea/select -->
<template>
  <input type="text" v-model.lazy="inputNameModel" />
  <p>{{ inputNameModel }}</p>
  <hr />
  <div>
    <textarea v-bind:rows="rCount" v-model="textAreaInput">{{
      textAreaInput
    }}</textarea>
    <p v-html="textAreaInput.replace(/\n/g, `<br>`)"></p>
    <br />
    <select v-model="memberType">
      <option value="일반">일반사원</option>
      <option value="우수">우수사원</option>
      <option value="특별">특별사원</option>
    </select>
    <p>{{ memberType }}</p>
    <br />
    <h2>checkbox 1개</h2>
    <label><input type="checkbox" v-model="isSelected" />동의합니다.</label>
    <p>{{ isSelected }}</p>
    <label
      ><input
        type="checkbox"
        v-model="gender"
        true-value="여"
        false-value="남"
      />성별</label
    >
    <p>{{ gender }}</p>
    <h2>checkbox n개</h2>
    <label><input type="checkbox" v-model="selectOS" value="1" />macOs</label>
    <label><input type="checkbox" v-model="selectOS" value="2" />Windows</label>
    <label><input type="checkbox" v-model="selectOS" value="3" />Linux</label>
    <p>{{ selectOS }}</p>
    <h2>radio n개</h2>
    <label><input type="radio" v-model="choiceOS" value="1" />macOs</label>
    <label><input type="radio" v-model="choiceOS" value="2" />Windows</label>
    <label><input type="radio" v-model="choiceOS" value="3" />Linux</label>
    <p>{{ choiceOS }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const inputNameModel = ref("양방향");
// v-model : 양방향 바인딩( HTML <=> Data)
//           <input>, <textarea>, <select>
//           기본적으로 value 속성에 자동연결(바인딩)
const rCount = ref(5); //  textarea의 라인크기 설정
const textAreaInput = ref("입력하세요");
const memberType = ref("우수");
const isSelected = ref(null);
const gender = ref(null);
const selectOS = ref(["1", "3"]); // 배열 - selectbox
const choiceOS = ref(1); // 단일값 - radio
</script>
