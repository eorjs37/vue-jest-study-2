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
  test('store의 count를 1 증가시킨다', async () => {
    await wrapper.find('button').trigger('click');
    console.log(wrapper.find('.count-result'));
    expect(Number(wrapper.find('.count-result').text())).toBe(1);
  });
});
