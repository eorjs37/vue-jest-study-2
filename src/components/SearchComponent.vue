<template>
  <div class="search-wrapper">
    <div class="search-form">
      <label for="title">제목</label>
      <input type="text" name="제목" id="title" v-model="title" />
    </div>
    <div class="search-form">
      <label for="contents">내용</label>
      <input type="text" name="내용" id="contents" v-model="contents" />
    </div>
  </div>
  <div class="search-button">
    <button type="button">검색</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  emits: ['searchClick'],
  setup() {
    const title = ref('');
    const contents = ref('');

    return {
      title,
      contents,
    };
  },
};
</script>

<style scoped></style>
