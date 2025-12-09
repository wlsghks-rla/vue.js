import axios from "axios"; // 외부 라이브러리로 인한 설치 필수.

const fakeServer = "https://jsonplaceholder.typicode.com";
// URI : /users

//get
fetch(`${fakeServer}/users`)
  .then((res) => res.json()) // content-type에 따른 parser를 결정
  .then((result) => {
    // console.log("fetch", result);
  })
  .catch((err) => console.log(err));

// json관련 부분 삭제

axios(`${fakeServer}/users`) // Default 설정 : JSON을 처리
  .then((result) => {
    // console.log("axios", result.data);
  })
  .catch((err) => console.log(err));

// post
fetch(`${fakeServer}/users`, {
  method: "post",
  headers: {
    "Content-type": "applictaion/json", // default: text
  },
  body: JSON.stringify({
    name: "hong",
    email: "hoong@google.com",
    phone: "010-1122-1234",
  }),
})
  .then((res) => res.json())
  .then((result) => {
    console.log("fetch", result);
  })
  .catch((err) => console.log(err));

// json관련 부분 삭제
axios(`${fakeServer}/users`, {
  method: "post",
  data: {
    name: "hong",
    email: "hoong@google.com",
    phone: "010-1122-1234",
  },
})
  .then((result) => {
    // console.log("fetch", result); // 통신정보 넘김
    console.log("axious", result.data);
  })
  .catch((err) => console.log(err));
