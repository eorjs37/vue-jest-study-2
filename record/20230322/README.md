## 2023-03-22

### 컴퍼넌트 안에 함수 호출 여부 확인

> 현재 input이 변경될때마다 watch를 통해 callApi라는 함수를 호출하고자 한다. 컴퍼넌트 내의 함수를 호출할려고 했지만, 방법을 찾지못해 wrapper.vm.callApi = jest.fn() 방식으로 가짜 함수를 만들었다.

```javascript
import { shallowMount } from '@vue/test-utils';
import ToDoWriteView from '../ToDoWriteView.vue';

let wrapper = null;
let callApi = null;

beforeEach(async () => {
  wrapper = await shallowMount(ToDoWriteView);
  callApi = wrapper.vm.callApi = jest.fn();
});

describe('todowrite testing', () => {
  test('.title 값이 변경될때마다, callApi 함수를 호출한다', async () => {
    const input = wrapper.find('.title');
    await input.setValue('오늘의 할일2');
    callApi();
    expect(callApi).toBeCalledTimes(1);
  });
});
```
