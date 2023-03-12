import App from '@/App.vue';
import { mount, shallowMount } from '@vue/test-utils';
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
  test('add 화면 이동', async () => {
    router.push('/add');
    await router.isReady();
    console.log(wrapper.html());
    console.log(wrapper.findComponent(ToDoListView).exists());
    console.log(wrapper.find('#todowrite').exists());
    //expect(wrapper.findC)
  });
});
