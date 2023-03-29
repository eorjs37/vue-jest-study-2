import { shallowMount } from '@vue/test-utils';
import FormView2Vue from '../FormView2.vue';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(FormView2Vue);
});
describe('form view testing', () => {
  test('submit', async () => {
    const email = 'name@mail.com';
    const description = 'Lorem ipsum dolor sit amet';
    const city = 'moscow';

    await wrapper.find('input[type=email]').setValue(email);
    await wrapper.find('textarea').setValue(description);
    await wrapper.find('select').setValue(city);
    await wrapper.find('input[type=checkbox]').setValue();
    await wrapper.find('input[type=radio][value=monthly]').setValue();

    //
    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.emitted('submit')[0][0]).toStrictEqual({
      email,
      description,
      city,
      subscribe: true,
      interval: 'monthly',
    });
  });
});
