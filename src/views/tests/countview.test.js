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
    await wrapper.find('button#addbtn').trigger('click');
    expect(Number(wrapper.find('.count-result').text())).toBe(1);
  });

  test('getAsnyc 함수를 호출한다.', async () => {
    //비동기 호출
    const spyDispatch = jest.spyOn(store, 'dispatch').mockImplementation(() => {
      return new Promise(resolve => {
        resolve({
          success: true,
          list: [
            {
              id: 1,
              text: '자바',
            },
            {
              id: 2,
              text: '자바스크립트',
            },
          ],
        });
      });
    });
    //버튼 클릭
    await wrapper.find('button#asyncbtn').trigger('click');
    //횟수 확인
    expect(spyDispatch).toHaveBeenCalledTimes(1);
  });
});
