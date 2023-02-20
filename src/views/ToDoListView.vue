<template>
  <search-component @searchClick="val => onSearchClick(val)"></search-component>
  <to-do-list-component></to-do-list-component>
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
    const onSearchClick = search => {
      //console.log('search : ', search);
    };

    onMounted(() => {
      todoList().then(res => {
        // console.log(res.data);
      });
      // .catch(error => {
      //   console.error('error : ', error);
      // });
    });

    return {
      onSearchClick,
      todolist,
    };
  },
};
</script>

<style></style>
