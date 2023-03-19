import { shallowMount } from '@vue/test-utils';
import ToDoWriteView from '../ToDoWriteView.vue';
/**
 * todowrite.test.js
 1. input에 글을 작성한다.
 2. input에 enter 또는 완료 버튼을 누르면 값이 비어있는지 체크 후 있으면 
 */
let wrapper = null;

jest.spyOn(window, 'alert').mockImplementation(() => {});

beforeEach(async () => {
  wrapper = await shallowMount(ToDoWriteView);
});

describe('todowrite testing', () => {
  test('input을 값을 넣는다', async () => {
    const input = wrapper.find('.title');
    await input.setValue('오늘의 할일');

    expect(input.element.value).toBe('오늘의 할일');
  });

  test('추가하기 버튼을 누리고 빈 값일 경우 alert을 띄운다', async () => {
    const submit = wrapper.find('.add');
    const input = wrapper.find('.title');
    await submit.trigger('click');
    if (!input.element.value) window.alert('값을 입력해주세요');

    expect(window.alert).toBeCalled();
  });
});
