import App from '@/App.vue';
import { mount } from '@vue/test-utils';
import ToDoWriteView from '../views/ToDoWriteView.vue';
import ToDoModifyView from '../views/ToDoModifyView.vue';
import ToDoListView from '../views/ToDoListView.vue';
import router from '@/router/index';
let wrapper = null;

jest.mock('../views/ToDoListView.vue', () => ({
  name: 'ToDoListView',
  template: `<div></div>`,
}));

beforeEach(() => {
  wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
});

describe('app.vue', () => {
  test('ToDoWriteView 화면 이동', async () => {
    await router.push({ name: 'addTodo' });
    expect(wrapper.findComponent(ToDoWriteView).exists()).toBe(true);
  });

  test('ToDoModifyView 화면 이동 ', async () => {
    await router.push({ name: 'modifyToDo' });
    expect(wrapper.findComponent(ToDoModifyView).exists()).toBe(true);
  });

  test('ToDoListView 화면 이동', async () => {
    await router.push({ name: 'todolist' });
    expect(wrapper.findComponent(ToDoListView).exists()).toBe(true);
  });
});
