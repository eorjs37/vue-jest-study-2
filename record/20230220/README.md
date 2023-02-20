## 2023-02-20

## 부모 컴퍼넌트 emit testing

```javascript
import ToDoListView from '@/views/ToDoListView.vue';
import { mount } from '@vue/test-utils';
import SearchComponent from '@/components/SearchComponent.vue';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(ToDoListView);
});

describe('todo list 페이지', () => {
  test('SearchComponent emit["searchClick"] 호출', async () => {
    // 부모 컴퍼넌트의 spyOn을 통해 onSearchClick 감시
    const spy = jest.spyOn(wrapper.vm, 'onSearchClick');
    // 자식 컴퍼넌트(SearchComponent)의 emit['searchClick']를 호출
    await wrapper.findComponent(SearchComponent).vm.$emit('searchClick', 2);
    // emit을 통해 함수 호출 여부 확인
    expect(spy).toHaveBeenCalled();
  });
});
```
