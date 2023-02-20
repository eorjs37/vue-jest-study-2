import ToDoListView from '@/views/ToDoListView.vue';
import { mount } from '@vue/test-utils';
import SearchComponent from '@/components/SearchComponent.vue';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(ToDoListView);
});

describe('todo list 페이지', () => {
  test('SearchComponent emit["searchClick"] 호출', async () => {
    const spy = jest.spyOn(wrapper.vm, 'onSearchClick');
    await wrapper.findComponent(SearchComponent).vm.$emit('searchClick', 2);
    expect(spy).toHaveBeenCalled();
  });
});
