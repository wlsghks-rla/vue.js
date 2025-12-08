<!-- components/ChildComp.vue -->
<script setup>
import { inject } from "vue";

const message = inject("message"); // provide를 통해 제공한 key 호출.
</script>
<template>
  <p>{{ message }}</p>
</template>
