import AxiosComponent from '@/components/AxiosCompnent.vue';
import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import { todoList } from '@/api';
let wrapper = null;

jest.mock('@/api');

beforeEach(() => {
  todoList.mockClear();
  wrapper = shallowMount(AxiosComponent);
});

describe('axios api call', () => {
  test('호출여부 확인 ', async () => {
    axios.get = await jest.fn().mockResolvedValue({
      data: {
        id: 1,
        name: 'Dale Seo',
      },
    });
    expect(todoList).toBeCalledTimes(1);
  });
});
