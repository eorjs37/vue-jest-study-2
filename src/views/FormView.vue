<template>
  <div>
    <input type="email" v-model="email" />
    <button @click="submit()">Submit</button>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const email = ref('');

    const submit = () => {};

    return {
      email,
      submit,
    };
  },
};
</script>
<style></style>
