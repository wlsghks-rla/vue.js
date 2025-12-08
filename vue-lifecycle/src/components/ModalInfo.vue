<!-- components/ModalInfo.vue -->
<script setup>
import ModalLayout from "../layouts/ModalLayout.vue";
</script>
<template>
  <ModalLayout>
    <template v-slot:default>
      <!-- 화면에 출력안되는 html 태그, 사이의 있는 것들을 sloat에 집어넣는다는 범위지정/ slot이 1개면 필요x -->
      <p>관리자에게문의하세요!</p>
    </template>
    <template v-slot:footer>
      <button v-on:click="">예</button>
      <button v-on:click="">문의하기로</button>
    </template>
  </ModalLayout>
</template>
