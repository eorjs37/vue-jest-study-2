<template>
  <search-component @searchClick="onSearchClick"></search-component>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue';
export default {
  components: { SearchComponent },
  setup() {
    const onSearchClick = search => {
      console.log('ddd', search);
    };

    return {
      onSearchClick,
    };
  },
};
</script>

<style></style>
