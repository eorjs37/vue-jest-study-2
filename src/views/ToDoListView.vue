<template>
  <search-component @searchClick="val => onSearchClick(val)"></search-component>
  <to-do-list-component></to-do-list-component>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue';
import ToDoListComponent from '@/components/ToDoListComponent.vue';
export default {
  components: { SearchComponent, ToDoListComponent },
  setup() {
    const onSearchClick = search => {
      //console.log('search : ', search);
    };

    return {
      onSearchClick,
    };
  },
};
</script>

<style></style>
