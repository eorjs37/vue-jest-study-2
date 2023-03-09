import App from '@/App.vue';
import { mount } from '@vue/test-utils';
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
    await wrapper.vm.$nextTick();
  });
});
