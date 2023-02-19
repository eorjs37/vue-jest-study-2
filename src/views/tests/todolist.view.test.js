import ToDoListView from '@/views/ToDoListView.vue';
import { shallowMount, mount } from '@vue/test-utils';
import SearchComponent from '@/components/SearchComponent.vue';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(ToDoListView);
});

describe('todo list 페이지', () => {
  test('test1', async () => {
    const spy = jest.spyOn(wrapper.vm, 'onSearchClick');
    await wrapper.findComponent(SearchComponent).vm.$emit('searchClick', 2);
  });
});
