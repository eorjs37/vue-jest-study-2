import FormView from '../FormView.vue';
import { shallowMount } from '@vue/test-utils';

let wrapper = null;
beforeEach(() => {
  wrapper = shallowMount(FormView);
});

describe('FormView', () => {
  test('sets the value', async () => {
    const input = wrapper.find('input');
    await input.setValue('chleorjs37@gmail.com');

    expect(input.element.value).toBe('chleorjs37@gmail.com');
  });
});
