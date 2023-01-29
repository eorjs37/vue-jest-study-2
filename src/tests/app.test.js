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
  test('test 1', () => {
    expect(1).toBe(1);
  });
});
