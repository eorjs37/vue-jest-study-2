## 2023-03-24

### store를 컴퍼넌트에 적용시키기

> 실제 store를 컴퍼넌트에서 test 해보는 방법

```javascript
//store > index.js
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
```

```javascript
//countview.test.js
import { shallowMount } from '@vue/test-utils';
import CountView from '../CountView.vue';
import { store } from '@/store';
let wrapper = null;

beforeEach(async () => {
  wrapper = await shallowMount(CountView, {
    global: {
      //실제 store를 사용할 수 있도록 plugins에 추가
      plugins: [store],
    },
  });
});

describe('Count view testing', () => {
  test('should ', async () => {
    console.log(wrapper.html());
  });
});
```

### store 자체 testing
