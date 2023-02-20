<template>
  <search-component @searchClick="val => onSearchClick(val)"></search-component>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue';
export default {
  components: { SearchComponent },
  setup() {
    const onSearchClick = search => {
      console.log('search : ', search);
    };

    return {
      onSearchClick,
    };
  },
};
</script>

<style></style>
