<template>
  <form action="" @submit.prevent="submitForm">
    <!--prevent: action으로 인한 페이지 이동 차단 -->
    <div>
      <label for="title">제목</label>
      <input id="title" type="text" v-model="form.title" />
      <!-- 수정을 위해 양방향 바인딩 v-model 사용. -->
    </div>
    <div>
      <label for="author">작성자</label>
      <input id="author" type="text" v-model="form.author" />
    </div>
    <div>
      <label for="content">내용</label>
      <textarea id="content" v-model="form.content"></textarea>
    </div>
    <div>
      <button type="submit">{{ isNew ? "등록" : "수정" }}</button>
    </div>
  </form>
</template>

<script setup>
import { defineProps, reactive, watch, defineEmits } from "vue";

const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({ title: "", content: "", author: "" }),
  },
  isNew: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["submitted", "canceled"]);

const form = reactive({
  title: "",
  content: "",
  author: "",
});

watch(
  () => props.initialData,
  (newVal) => {
    // console.log(newVal);
    // console.log(oldValue);
    if (newVal) {
      form.title = newVal.title || "";
      form.content = newVal.content || "";
      form.author = newVal.author || "";
    }
  },
  { immediate: true }, // 값이 변경될 때 시행하는 함수 옵션.
);

// form 이벤트.
const submitForm = () => {
  if (!form.title || !form.content || !form.author) {
    alert("값을 입력해주세요.");
    return;
  }
  emit("submitted", { title: form.title, content: form.content, author: form.author });
};
</script>
