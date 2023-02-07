import AxiosComponent from '@/components/AxiosCompnent.vue';
import { shallowMount } from '@vue/test-utils';
import { todoList } from '@/api';
let wrapper = null;

jest.mock('@/api');

beforeEach(() => {
  todoList.mockClear();
  wrapper = shallowMount(AxiosComponent);
});

describe('axios api call', () => {
  test('호출여부 확인 ', async () => {
    const resultValue = {
      data: {
        id: 1,
        name: 'Dale Seo',
      },
    };
    const result = await todoList.mockResolvedValue({
      resultValue,
    });

    expect(todoList).toBeCalledTimes(1);
  });
});
