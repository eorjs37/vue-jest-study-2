<template>
  <h1>countview</h1>
  <button id="addbtn" @click="addCount">더하기</button>
  <button id="asyncbtn" @click="callAction">action 호출</button>
  <p class="count-result">
    {{ compCont }}
  </p>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store/store';
export default {
  setup() {
    const store = useStore(key);

    const compCont = computed(() => {
      return store.getters.getCount;
    });

    const addCount = () => {
      store.commit('increment');
    };

    const callAction = () => {
      store.dispatch('getAsnyc').then(res => {
        const { success, list } = res;
      });
    };

    return {
      compCont,
      addCount,
      callAction,
    };
  },
};
</script>

<style></style>
