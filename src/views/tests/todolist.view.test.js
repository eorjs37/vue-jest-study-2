import ToDoListView from '@/views/ToDoListView.vue';
import { mount } from '@vue/test-utils';
import SearchComponent from '@/components/SearchComponent.vue';
import ToDoListComponent from '@/components/ToDoListComponent.vue';
import * as api from '@/api';
import { nextTick } from 'vue';

let wrapper = null;
var mockData = null;

jest.mock('@/api', () => {
  return {
    todoList: jest.fn().mockResolvedValue({
      data: [
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
      ],
    }),
  };
});

beforeEach(() => {
  wrapper = mount(ToDoListView);
  mockData = [
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
});

describe('todo list 페이지', () => {
  // todolist api 호출
  test('todolist api 호출 후 값을 비교', async () => {
    jest.spyOn(api, 'todoList');
    expect(api.todoList).toBeCalledTimes(1);
    api.todoList().then(res => {
      expect(res.data).toEqual(mockData);
      wrapper.vm.todolist = mockData;
      expect(wrapper.find('.list').exists()).toBeTruthy();
    });
  });

  // todolist api 호출
  test('SearchComponent emit["searchClick"] 호출', async () => {
    const spy = jest.spyOn(wrapper.vm, 'onSearchClick');
    await wrapper.findComponent(SearchComponent).vm.$emit('searchClick', 2);
    expect(spy).toHaveBeenCalled();
  });

  test('ToDoList component 존재 여부 확인', async () => {
    const todo = wrapper.findComponent(ToDoListComponent);
    expect(todo.exists()).toBe(true);
  });

  //todolist api error 발생
  test('todolist api 호출 후 에러 발생', async () => {
    jest.spyOn(api, 'todoList').mockRejectedValue(new Error(`에러가 발생하였습니다.`));
    api.todoList().catch(async error => {
      //에러 진행중
      expect(error.message).toBe(`에러가 발생하였습니다.`);
      wrapper.vm.todolist = [];
      nextTick(() => {
        expect(wrapper.find('.no-list').text()).toBe('리스트가 존재하지 않습니다.');
      });
    });
  });
});
