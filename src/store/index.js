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
  actions: {
    getAsnyc() {
      return new Promise(resolve => {
        resolve({
          success: true,
          list: [
            {
              id: 1,
              text: '자바',
            },
            {
              id: 2,
              text: '자바스크립트',
            },
          ],
        });
      });
    },
  },
});

export { store };
