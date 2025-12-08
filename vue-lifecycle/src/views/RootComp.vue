<!-- views/RootComp.vue -->
 <script setup>
import {ref, provide } from "vue";
import MiddleComp from "@/components/MiddleComp.vue";
const content = ref('여기에 입력하세요');
//      key     value
provide('message', content); // component에 대한 정보x., 반응형 객체 그 자체를 전달.(.value하면 변경되는 값 반영 불가.)
</script>
<template>
  <label>자식에게 전달할 값 : <input v-model="content">{{ content }}</input></label>
  <MiddleComp/>
</template>