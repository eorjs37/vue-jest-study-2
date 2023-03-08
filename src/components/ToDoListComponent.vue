<template>
  <ul class="list" v-if="list.length > 0">
    <li v-for="(listItem, listIndex) in list" :key="'list' + listIndex">
      {{ listItem.ToDoItem }}
    </li>
  </ul>
  <div v-else class="no-list">리스트가 존재하지 않습니다.</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
export default {
  props: {
    list: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
  },
  setup() {
    onMounted(() => {});
  },
};
</script>

<style scoped>
.list {
  padding-left: 0;
  list-style: none;
}
</style>
