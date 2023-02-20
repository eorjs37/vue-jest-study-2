import ToDoList from '@/components/ToDoListComponent.vue';
import { shallowMount } from '@vue/test-utils';

/**
 * 1. list가 0 개 인경우 검색결과가 없습니다.
 * 2. list가 1개 이상인 경우 list 보여줄것
 * 3. 리스트를 클릭할 경우 상세로 이동한다.
 */
let wrapper = null;

let mockData = [
  {
    Idx: 1,
    ToDoItem: 'css 공부',
    createdAt: '2023-02-01T15:00:00.000Z',
    updatedAt: '2023-02-01T15:00:00.000Z',
  },
  {
    Idx: 2,
    ToDoItem: 'Java 공부',
    createdAt: '2023-02-01T15:00:00.000Z',
    updatedAt: '2023-02-01T15:00:00.000Z',
  },
];

beforeEach(() => {
  //mount
  const arr = [];
  wrapper = shallowMount(ToDoList, {
    props: {
      list: arr,
    },
  });
});

describe('todo list component', () => {
  test('첫 로드 시  list는 0개입니다.', () => {
    expect(wrapper.find('.no-list').text()).toBe('리스트가 존재하지 않습니다.');
  });

  test('list가 한개 이상일 경우 ', async () => {
    await wrapper.setProps({
      list: mockData,
    });
    expect(wrapper.find('.list').exists()).toBeTruthy();
  });
});
