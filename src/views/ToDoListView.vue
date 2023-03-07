<template>
  <search-component @searchClick="val => onSearchClick(val)"></search-component>
  <to-do-list-component :list="todolist"></to-do-list-component>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue';
import ToDoListComponent from '@/components/ToDoListComponent.vue';
import { todoList } from '@/api';
import { onMounted, ref } from 'vue';
export default {
  components: { SearchComponent, ToDoListComponent },
  setup() {
    const todolist = ref([]);
    const onSearchClick = search => {};

    onMounted(() => {
      todoList()
        .then(res => {
          todolist.value = res.data;
        })
        .catch(error => {
          console.error('error : ', error);
        });
    });

    return {
      onSearchClick,
      todolist,
    };
  },
};
</script>

<style></style>
