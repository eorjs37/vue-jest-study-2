import ToDoListView from '@/views/ToDoListView.vue';
import { shallowMount } from '@vue/test-utils';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(ToDoListView);
});

describe('todo list 페이지', () => {
  test('test1', async () => {
    expect(1).toBe(1);
  });
});
