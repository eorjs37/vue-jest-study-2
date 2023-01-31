<template>
  <template v-if="list.length > 0">
    <ul class="list">
      <li v-for="(listItem, listIndex) in list" :key="'list' + listIndex">
        {{ listItem.text }}
      </li>
    </ul>
  </template>
  <div class="no-list">리스트가 존재하지 않습니다.</div>
</template>

<script>
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
  setup() {},
};
</script>

<style></style>
