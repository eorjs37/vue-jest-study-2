import AxiosComponent from '@/components/AxiosCompnent.vue';
import { shallowMount } from '@vue/test-utils';
import * as api from '@/api';
let wrapper = null;

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

jest.mock('@/api');

beforeEach(() => {
  wrapper = shallowMount(AxiosComponent);
});

describe('axios api call', () => {
  test('호출여부 확인 ', async () => {
    jest.spyOn(api, 'todoList').mockReturnValue(mockData);

    expect(api.todoList).toBeCalledTimes(1);
    expect(api.todoList()).toEqual(mockData);
  });
});
