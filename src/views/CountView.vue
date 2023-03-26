<template>
  <h1>countview</h1>
  <button @click="addCount"></button>
  <p class="count-result">
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

    const addCount = () => {
      store.commit('increment');
    };

    return {
      compCont,
      addCount,
    };
  },
};
</script>

<style></style>
