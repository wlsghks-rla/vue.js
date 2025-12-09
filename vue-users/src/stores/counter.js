import { ref, computed } from "vue";
import { defineStore } from "pinia"; // defineStore: 저장소 등록할 때 사용함수.

// useCounterStore: use store은 고정 counter가 보통 id(구분을 위해서.)
export const useCounterStore = defineStore(
  "counter",
  () => {
    // counter: 저장소 구분 id
    // 해당 저장소가 가지는 state, getters, actions 를 정의
    // state: ref함수를 사용. -> 데이터이기 때문(crud 가능)
    const count = ref(0);
    // getters: computed 함수를 사용 -> 값을 불러낼 때 사용.
    const doubleCount = computed(() => count.value * 2);
    // actions: 일반 함수로 정의 -> 기능에 대한 정의
    function increment() {
      count.value++;
    }

    // return 안에 정의된 항목이 외부에 노출되는 항목
    return { count, doubleCount, increment }; // return 필수.(다른 component에서 사용가능)
  },
  {
    persist: true, // LocalStorage와 연동시키기 위해.
  }
);
