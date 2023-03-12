import App from '@/App.vue';
import { mount } from '@vue/test-utils';
import ToDoWriteView from '../views/ToDoWriteView.vue';
import ToDoListView from '../views/ToDoListView.vue';
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
    router.push('/add');
    await router.isReady();

    expect(wrapper.findComponent(ToDoWriteView).exists()).toBe(true);
  });

  test('ToDoListView 화면 이동 ', async () => {});
});
