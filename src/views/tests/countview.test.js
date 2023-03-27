import { shallowMount } from '@vue/test-utils';
import CountView from '../CountView.vue';
import { store } from '@/store';
import { key } from '@/store/store';
let wrapper = null;

beforeEach(async () => {
  wrapper = await shallowMount(CountView, {
    global: {
      provide: {
        [key]: store,
      },
    },
  });
});

describe('Count view testing', () => {
  test('store의 count를 1 증가시킨다', async () => {
    await wrapper.find('button').trigger('click');
    expect(Number(wrapper.find('.count-result').text())).toBe(1);
  });
});
