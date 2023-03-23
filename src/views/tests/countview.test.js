import { shallowMount } from '@vue/test-utils';
import CountView from '../CountView.vue';
import { store } from '@/store';
let wrapper = null;

beforeEach(async () => {
  wrapper = await shallowMount(CountView, {
    global: {
      plugins: [store],
    },
  });
});

describe('Count view testing', () => {
  test('should ', async () => {
    console.log(wrapper.html());
  });
});
