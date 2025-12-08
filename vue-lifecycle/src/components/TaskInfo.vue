<!--components/TaskInfo.vue-->
<!-- 컴포넌트 분리 기준: 독립성, 반복기준 -->
<script setup>
import { defineProps, defineEmits } from "vue";
// todo가 필요.
const props = defineProps({
  /*todo: {
    type: Object,
  },*/
  todo: Object,
});

const emit = defineEmits(["taskChecked", "delTask"]);

const todoCompleted = () => {
  emit("taskChecked", props.todo.no);
};

const delTodo = () => {
  emit("delTask", props.todo.no);
};
</script>
<template>
  <li v-bind:class="{ checked: todo.complete }" v-on:click="todoCompleted">
    {{ todo.task }}<span v-on:click.stop="delTodo" class="close">X</span>
  </li>
</template>
<style></style>
