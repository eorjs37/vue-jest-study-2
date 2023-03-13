## 2023-03-14

### stubs

> 단위테스트 실시할때 부모에서 하위 컴퍼넌트의 렌더링에만 초점을 맞추고 싶을때 사용된다.  
> 하위의 외부함수호출을 전혀 신경쓰고 싶지않을때 사용된다.

```javascript
import ParentView from '@/views/ParentView.vue';
import RenderComponent from '@/components/RenderComponent.vue';
import { mount } from '@vue/test-utils';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(ParentView, {
    global: {
      stubs: {
        RenderComponent: true,
      },
    },
  });
});

describe('ParetnView render', () => {
  test('parente view rendering', async () => {
    //RenderComponent이 렌더링 되는지 확인
    expect(wrapper.findComponent(RenderComponent).exists()).toBe(true);
  });

  test('stubs을 이용한 렌더링', async () => {
    expect(wrapper.findComponent(RenderComponent).exists()).toBe(true);
  });
});
```
