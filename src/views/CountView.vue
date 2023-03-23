<template>
  <h1>countview</h1>
  <p>
    {{ compCont }}
  </p>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    const compCont = computed(() => {
      return store.getters.getCount;
    });

    return {
      compCont,
    };
  },
};
</script>

<style></style>
