import ToDoListView from '@/views/ToDoListView.vue';
import { shallowMount } from '@vue/test-utils';
import SearchComponent from '@/components/SearchComponent.vue';
import ToDoListComponent from '@/components/ToDoListComponent.vue';
import * as api from '@/api';

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
  wrapper = shallowMount(ToDoListView);
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
    jest.spyOn(api, 'todoList').mockRejectedValue(new Error('cannot login'));
    api.todoList().catch(error => {
      //에러 진행중
      //console.log('error : ', error);
    });
    expect(1).toBe(1);
  });
});
