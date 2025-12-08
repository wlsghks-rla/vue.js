<!-- views/LifecycleHook.vue -->
<script setup>
import {
  ref,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const heightData = Math.round(Math.random() * 10);
const widthData = Math.round(Math.random() * 10);
const height = ref(heightData);
const width = ref(widthData);
const area = computed(() => {
  return height.value * width.value;
});

const change = () => {
  height.value = Math.round(Math.random() * 10);
  width.value = Math.round(Math.random() * 10);
};

// mount: 화면에 렌더링되는 시점(Real-Dom에 마운트된 단계)
onBeforeMount(() => {
  // 데이터 읽어오기 -> 못할 경우 mounted에서 진행.
  console.log(`onBeforeMount: ${height.value} * ${width.value}`);
});
onMounted(() => {
  console.log(`ononMounted: ${height.value} * ${width.value}`);
});

// update: 변경사항 감지해서 재렌더링 시작 -> 아직 사용 x(무한렌더링 방지)
onBeforeUpdate(() => {
  console.log(`onBeforeUpdate: ${height.value} * ${width.value}`);
});
onUpdated(() => {
  console.log(`onUpdated: ${height.value} * ${width.value}`);
});

// unmount: Real-DOM에서 해제된 상황
onBeforeUnmount(() => {
  // 페이지 나갈 때 현재상황을 저장하거나 임시저장등
  console.log(`onBeforeUnmount: ${height.value} * ${width.value}`);
});
onUnmounted(() => {
  console.log(`onUnmounted: ${height.value} * ${width.value}`);
});
</script>
<template>
  <p>세로 {{ height }}, 가로 {{ width }} 인 사각형 면적 {{ area }}</p>
  <button v-on:click="change">값변경</button>
</template>
