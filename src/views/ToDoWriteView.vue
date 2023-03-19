<template>
  <h1 id="todowrite">todowrite11</h1>
  <input type="text" class="title" v-model="titleValue" />

  <button type="button" class="add">추가</button>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  setup() {
    const titleValue = ref('');

    const callApi = () => {};

    watch(
      () => titleValue.value,
      cur => {
        if (cur) {
          callApi();
        }
      }
    );

    return {
      titleValue,
    };
  },
};
</script>

<style></style>
