<script setup>
import ModalInfo from "./components/ModalInfo.vue";
</script>

<template>
  <RouterLink to="/computed">Computed</RouterLink>
  | <RouterLink to="/watch">Watch</RouterLink> |
  <RouterLink to="/hook">LifecycleHook</RouterLink>
  | <RouterLink to="/OneComp">OnecomponentApp</RouterLink> |
  <RouterLink to="/ParentComp">ParentcomponentApp</RouterLink>|
  <RouterLink to="/RootComp">RootComp</RouterLink>
  <RouterLink to="/todoList">TodoList</RouterLink>
  <RouterView />
  <ModalInfo />
</template>

<style scoped></style>
