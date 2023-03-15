## 2023-03-15

### 실제 vue-router 사용 단점

> app.test.js에서 실제 router를 사용할 경우 router-view를 통해 보여진 화면들이  
> ajax,axios 화면을 호출하는 경우가 있다. 그걸 방지하기위해서는 shallMount를 사용할 수도 있지만,
> shallMount는 자식 컴퍼넌트를 렌더링 하지 못한다는 단점이 있다.  
> 그리하여 jest.mock을 이용하여 component를 렌더링 하는 방법을 이용하자.

### mock없이 작성

> 먼저 아래같이 작성할 경우 ToDoListView를 렌더링 하면서 라이프사이클까지 작동하게 되면서 라이플사이클 안에 외부함수를 호출하는 경우가 존재한다.
> 그리하여 외부함수에 의존적이기기 때문이다.

```javascript
import App from '@/App.vue';
import { mount } from '@vue/test-utils';
import ToDoListView from '../views/ToDoListView.vue';
import router from '@/router/index';
let wrapper = null;

beforeEach(() => {
  wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
});

describe('app.vue', () => {
  test('ToDoListView 화면 이동', async () => {
    await router.push({ name: 'todolist' });
    expect(wrapper.findComponent(ToDoListView).exists()).toBe(true);
  });
});
```

### mock 사용하여 작성

> 단순히 렌더링 하면 자식 컴퍼넌트의 외부함수를 호출하면서 , 네트워크 에러가 발생하는 경우가 있다.  
> 그리하여 jest.mock을 통해 가짜 컴퍼넌트를 구현하자

```javascript
import App from '@/App.vue';
import { mount } from '@vue/test-utils';
import ToDoListView from '../views/ToDoListView.vue';
import router from '@/router/index';
let wrapper = null;

jest.mock('../views/ToDoListView.vue', () => ({
  name: 'ToDoListView',
  template: `<div></div>`,
}));

beforeEach(() => {
  wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
});

describe('app.vue', () => {
  test('ToDoListView 화면 이동', async () => {
    await router.push({ name: 'todolist' });
    expect(wrapper.findComponent(ToDoListView).exists()).toBe(true);
  });
});
```
