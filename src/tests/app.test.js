import App from '@/App.vue';
import { mount, flushPromises } from '@vue/test-utils';
import ToDoWriteView from '../views/ToDoWriteView.vue';
import ToDoListView from '../views/ToDoListView.vue';
import ToDoModifyView from '../views/ToDoModifyView.vue';
import router from '@/router/index';
let wrapper = null;

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
});
