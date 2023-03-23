import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
});

export { store };
