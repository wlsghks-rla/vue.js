<!-- layouts/ModalLayout.vue -->
<!-- layouts -> 실제 페이지가 아닌 규격을 정하는 것을 담는 폴더. -->
<!-- template과 style이 전부일 때가 많음 -->
<!-- 1. 효율(동일한 크기로 적용), 2.강제(정해진 형태로 적용) -->
<template>
  <div class="container">
    <header>
      <slot name="header">
        <span style="float: right">X</span>
        <!--callback콘텐츠: 부모가 정해주지 않을 경우 대체할 태그(default값과 비슷). -> 부모가 주면 덮어씀.-->
      </slot>
      <!--부모가 전달하는 기준으로 교체됨.-->
    </header>
    <main>
      <slot></slot>
      <!-- name 없는 경우 default값. -->
      <!--변하지 않음.-->
    </main>
    <footer>
      <slot name="footer"></slot>
      <!-- name: slot이 여러개 일 경우 위치를 정하기 위한 역할 -->
    </footer>
  </div>
</template>
<script scoped></script>
