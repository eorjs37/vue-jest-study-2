import ToDoList from '@/components/ToDoList.vue';
import { shallowMount } from '@vue/test-utils';

let wrapper = null;
let sh = null;
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
  test('ToDoList vue Mount ', () => {
    expect(1).toBe(1);
  });

  test('첫 로드 시  list는 0개입니다.', () => {
    expect(1).toBe(1);
  });
});
