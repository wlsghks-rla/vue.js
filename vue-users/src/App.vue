<script setup>
import { RouterLink, RouterView } from "vue-router"; // RouterLink, RouterView : 표준html이 아닌 vue가 제공하는 것들이여서 import
</script>

<template>
  <h1>vue 라우터 샘플</h1>
  <br />
  <main>
    <RouterView />
  </main>
</template>
<style>
main {
  border: 2px black solid;
  display: block;
}
</style>
