import ToDoListView from '@/views/ToDoListView.vue';
import { shallowMount } from '@vue/test-utils';
import SearchComponent from '@/components/SearchComponent.vue';
import ToDoListComponent from '@/components/ToDoListComponent.vue';
import * as api from '@/api';

jest.mock('@/api');

let mockData = [
  {
    Idx: 1,
    ToDoItem: 'css 공부',
    createdAt: '2023-02-01T15:00:00.000Z',
    updatedAt: '2023-02-01T15:00:00.000Z',
  },
  {
    Idx: 2,
    ToDoItem: 'Java 공부',
    createdAt: '2023-02-01T15:00:00.000Z',
    updatedAt: '2023-02-01T15:00:00.000Z',
  },
];

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(ToDoListView);
});

describe('todo list 페이지', () => {
  test('api 호출', async () => {
    jest.spyOn(api, 'todoList').mockReturnValue(mockData);
    expect(api.todoList).toBeCalledTimes(1);
    expect(api.todoList()).toEqual(mockData);
  });
  test('SearchComponent emit["searchClick"] 호출', async () => {
    const spy = jest.spyOn(wrapper.vm, 'onSearchClick');
    await wrapper.findComponent(SearchComponent).vm.$emit('searchClick', 2);
    expect(spy).toHaveBeenCalled();
  });

  test('ToDoList component 확인', async () => {
    const todo = wrapper.findComponent(ToDoListComponent);
    expect(todo.exists()).toBe(true);
  });
});
