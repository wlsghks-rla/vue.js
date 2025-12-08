<!-- components/MiddleComp.vue -->
<!-- 손주 컴포넌트를 감싸는 부모 컴포넌트 -->
<script setup>
import ChildComp from "./ChildComp.vue";
</script>
<template>
  <h2>중간 컴포넌트</h2>
  <ChildComp />
  <ChildComp />
</template>
