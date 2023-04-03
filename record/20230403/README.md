# 2023-04-03

## vuex store actions 테스트

> vuex에서 store의 actios를 확인해보가자 한다. actions는 보통 api호출 하는 경우가 많은데,  
> 실제 api를 호출하면 오류가 뜰 수 있기 때문에 mocking으로 처리 한다.

1. store에서 **getAsnyc** 를 만든다. **getAsnyc**는 비동기 통신을 하고자 Promise를 return한다.

```javascript
//store/index.js
import { createStore } from 'vuex';
const store = createStore({
  state() {},
  mutations: {},
  getters: {},
  actions: {
    //Promise를 통해 비동기 통신을 실시한다.
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
```

2. 화면에서 **getAsnyc** 를 호출 할 수 있도록 한다.

```javascript
<template>
  <h1>countview</h1>
  <button id="asyncbtn" @click="callAction">action 호출</button>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store/store';
export default {
  setup() {
    const store = useStore(key);

    const callAction = () => {
      store.dispatch('getAsnyc').then(res => {
        const { success, list } = res;
      });
    };

    return {
      callAction,
    };
  },
};
</script>

<style></style>
```

3. test파일에서 store의 dispatch에서 jest.spyOn을 통해 mockImplementation으로 가짜 함수를 구현한다.

```javascript
test('getAsnyc 함수를 호출한다.', async () => {
  //비동기 호출
  const spyDispatch = jest.spyOn(store, 'dispatch').mockImplementation(() => {
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
  });
  //버튼 클릭
  await wrapper.find('button#asyncbtn').trigger('click');
  //횟수 확인
  expect(spyDispatch).toHaveBeenCalledTimes(1);
});
```
