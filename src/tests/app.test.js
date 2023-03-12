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
    router.push('/add');
    await router.isReady();
    expect(wrapper.findComponent(ToDoWriteView).exists()).toBe(true);
    await wrapper.vm.$nextTick();
  });

  test('ToDoModifyView 화면 이동 ', async () => {
    router.push('/modify');
    await router.isReady();

    expect(wrapper.findComponent(ToDoModifyView).exists()).toBe(true);
  });
});
