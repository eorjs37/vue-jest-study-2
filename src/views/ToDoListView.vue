<template>
  <search-component @searchClick="val => onSearchClick(val)"></search-component>
  <to-do-list-component></to-do-list-component>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue';
import ToDoListComponent from '@/components/ToDoListComponent.vue';
import { todoList } from '@/api';
import { onMounted } from 'vue';
export default {
  components: { SearchComponent, ToDoListComponent },
  setup() {
    const onSearchClick = search => {
      //console.log('search : ', search);
    };

    onMounted(() => {
      todoList();
    });

    return {
      onSearchClick,
    };
  },
};
</script>

<style></style>
