import App from '@/App.vue';
import { mount, flushPromises } from '@vue/test-utils';
import ToDoWriteView from '../views/ToDoWriteView.vue';
import ToDoModifyView from '../views/ToDoModifyView.vue';
import ToDoListView from '../views/ToDoListView.vue';
import router from '@/router/index';
let wrapper = null;

beforeEach(() => {
  wrapper = mount(App, {
    global: {
      plugins: [router],
      stubs: { ToDoListView: true },
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

    console.log(wrapper.html());
    //expect(wrapper.findComponent(ToDoListView).exists()).toBe(true);
  });
});
