import AxiosComponent from '@/components/AxiosCompnent.vue';
import { shallowMount } from '@vue/test-utils';
import * as api from '@/api';
let wrapper = null;

jest.mock('@/api');

beforeEach(() => {
  wrapper = shallowMount(AxiosComponent);
});

describe('axios api call', () => {
  test('호출여부 확인 ', async () => {
    jest.spyOn(api, 'todoList').mockReturnValue('expected result');

    expect(api.todoList).toBeCalledTimes(1);
    expect(api.todoList()).toEqual('expected result');
  });
});
