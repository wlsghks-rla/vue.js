<template>
  <div>
    <h3 v-if="isNew">게시글 등록</h3>
    <h3 v-else-if="isEditMode">게시글 수정</h3>
    <h3 v-else>글상세</h3>
    <PostForm
      v-if="isNew || isEditMode"
      v-bind:initial-data="isNew ? {} : store.currentPost"
      v-bind:is-new="isNew"
      @submitted="handleSave"
    ></PostForm>
    <div v-else>
      <!-- 조회한 결과 -->
      <h3><span style="font-size: small">제목</span>{{ store.currentPost.title }}</h3>
      <p>작성자 : {{ store.currentPost.author }}</p>
      <p>작성일 : {{ store.currentPost.create_date }}</p>
      <p>{{ store.currentPost.content }}</p>

      <div class="actions">
        <button @click="isEditMode = true">수정</button>
        <button @click="handleDelete">삭제</button>
      </div>
    </div>

    <button @click="router.push({ name: 'List' })">목록으로</button>
  </div>
  <!-- <table>
    <tr>
      <th>제목</th>
      <td><input type="text" v-model="post.title" /></td>
    </tr>
    <tr>
      <th>작성자</th>
      <td><input type="text" v-model="post.author" /></td>
    </tr>
    <tr>
      <th>내용</th>
      <td><textarea v-model="post.content"></textarea></td>
    </tr>
    <tr>
      <th>작성일시</th>
      <td>{{ post.create_date }}</td>
    </tr>
  </table> -->
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, computed } from "vue";
// import axios from "axios";
import PostForm from "../components/PostForm.vue";
import { useBoardStore } from "@/stores/board";

const route = useRoute(); // useRoute(): param 정보 읽기 위한 함수. / param 정보
const router = useRouter();
const store = useBoardStore();

// 글등록, 수정
const isEditMode = ref(false);
const isNew = computed(() => route.name == "New");

onMounted(() => {
  store.fetchPostDetail(route.params.id);
});

// 이벤트 핸들러
const handleSave = async (postData) => {
  const board_id = route.params.id;
  await store.savePost(postData, board_id);
  // 수정 / 등록
  if (isNew.value) {
    alert("등록되었습니다!");
    router.push({ name: "List" });
  } else {
    alert("수정되었습니다.");
    isEditMode.value = false;
    store.fetchPostDetail(route.params.id);
  }
};

// 이벤트 핸들러(삭제.)
const handleDelete = async () => {
  const board_id = route.params.id;
  await store.deletePost(board_id);
  alert("삭제 완료했습니다.");
  router.push({ name: "List" });
};
// let post = reactive({ title: "", content: "", author: "", create_date: "" });
// axios //
//   .get("/api/boards/" + route.params.id)
//   .then((response) => {
//     // post = response.data;
//     Object.assign(post, response.data); // post 반응형유지하면서 데이터만 변경.
//     console.log(post);
//   });

// console.log(route.params.id);
</script>
