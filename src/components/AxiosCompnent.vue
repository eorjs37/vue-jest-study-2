<template>
  <h1>axios</h1>
</template>

<script>
import { todoList } from '@/api';
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {
    onMounted(() => {
      todoList();
    });
  },
};
</script>

<style></style>
