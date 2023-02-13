import ToDoList2 from '@/components/ToDoList2.vue';
import { shallowMount } from '@vue/test-utils';
import * as api from '@/api';
let mockFn = null;
let wrapper = null;
beforeEach(() => {
  mockFn = jest.fn();
  wrapper = shallowMount(ToDoList2);
});

describe('todolist2 테스트', () => {
  test('should ', async () => {
    mockFn.mockReturnValue('I am a mock!');
    expect(1).toBe(1);
  });

  test('todo list api call', () => {
    const todo = jest.spyOn(api, 'todoList');
    todo.mockResolvedValue('I will be a mock!');
  });
});
