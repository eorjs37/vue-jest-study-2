## 2023-03-13

## router testing

> 라우터를 테스트 하는방법은 실제 라우터를 가져오는 방법이 있다. 아래 코드는 router를 실제 component에 가져오는 방법이다.

```javascript
import App from '@/App.vue';
import { mount } from '@vue/test-utils';
import router from '@/router/index';
import ToDoWriteView from '../views/ToDoWriteView.vue';

let wrapper = null;

//router import
beforeEach(() => {
  wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
});

describe('app.vue', () => {
  test('ToDoWriteView 화면 이동', async () => {
    //router를 통해 이동
    await router.push({ name: 'addTodo' });
    //findComponent를 통해 컴퍼넌트가 존재하는지 확인
    expect(wrapper.findComponent(ToDoWriteView).exists()).toBe(true);
  });
});
```
