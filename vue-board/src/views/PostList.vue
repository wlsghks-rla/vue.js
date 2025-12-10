<template>
  <h3>게시글 목록</h3>
  <div></div>
  <table>
    <thead>
      <tr>
        <th>글번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성일</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr v-for="post in posts" v-bind:key="post.board_id"> -->
      <tr v-for="post in store.posts" v-bind:key="post.board_id">
        <td>{{ post.board_id }}</td>
        <td>
          <RouterLink :to="{ name: 'Detail', params: { id: post.board_id } }">
            {{ post.title }}</RouterLink
          >
        </td>
        <td>{{ post.author }}</td>
        <td>{{ new Date(post.create_date).toLocaleString() }}</td>
        <!-- toLocaleString: 시간까지 다나옴 / toLocaleDateString: 날짜만 -->
      </tr>
    </tbody>
  </table>
  <!-- <div>{{ store.posts }}</div> -->
  <button @click="router.push({ name: 'New' })">글등록</button>
</template>

<script setup>
// composition
import { onMounted } from "vue";
import { useBoardStore } from "@/stores/board";
import { useRouter } from "vue-router";
const store = useBoardStore();
// import axios from "axios";
const router = useRouter();

onMounted(() => {
  store.fetchPost();
});

// let posts = ref([]);

// axios
//   // .get("http://localhost:3000/api/boards")
//   // 프록시 설정으로 인해 변경(node에서 cors와 비슷한 역할)
//   .get("/api/boards")
//   .then((response) => {
//     console.log(response.data);
//     posts.value = response.data;
//   });
</script>
