import AxiosComponent from '@/components/AxiosCompnent.vue';
import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import { todoList } from '@/api';
let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(AxiosComponent);
});

describe('test 1mounted', () => {
  test('test1 ', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {
        id: 1,
        name: 'Dale Seo',
      },
    });
    const user = await todoList();
    console.log(user);
    expect(1).toBe(1);
  });
});
