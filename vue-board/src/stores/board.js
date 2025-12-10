import { defineStore } from "pinia";
import axios from "axios";

export const useBoardStore = defineStore("board", {
  state: () => ({
    // 저장공간에 해당.
    posts: [], // 전체조회
    currentPost: {}, // 단건조회
    error: "",
  }),
  // 기능.
  actions: {
    // 목록.
    async fetchPost() {
      try {
        const response = await axios.get("/api/boards");
        this.posts = response.data;
        this.err = "";
      } catch (err) {
        console.log(err);
        this.error = "게시글 목록을 가져오는데 실패했습니다.";
      }
    },
    // 상세조회.
    async fetchPostDetail(id) {
      try {
        const response = await axios.get(`/api/boards/${id}`);
        this.currentPost = response.data;
        console.log(response.data);
        this.error = "";
      } catch (err) {
        console.log(err);
        this.error = "게시글 상세정보를 가져오는데 실패했습니다.";
      }
    },
    // 저장.
    async savePost(postData, board_id = null) {
      if (board_id) {
        // 수정
        await axios.put(`/api/boards/${board_id}`, postData);
        console.log(postData);
        return true;
      } else {
        // 등록
        await axios.post(`/api/boards`, postData);
        console.log(postData);
        return true;
      }
    },
    // 삭제.
    async deletePost(id) {
      // axios 호출
      await axios.delete(`/api/boards/${id}`);

      // posts refresh
      // this.posts = "filter 메소드를 제거해주면 ";
      const response = await axios.get("/api/boards");
      this.posts = response.data;
      return true;
    },
  },
});
