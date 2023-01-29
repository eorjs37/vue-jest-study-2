<template>
  <h1>{{ msg }}</h1>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const msg = ref('hello world');

    return {
      msg,
    };
  },
};
</script>

<style></style>
