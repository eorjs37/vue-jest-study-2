import { shallowMount } from '@vue/test-utils';
import FormView3 from '../FormView3.vue';
describe('formview3 vue', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(FormView3);
  });
  test('체크박스 값 세팅 및 비교', async () => {
    //1. find함수를 통해 checkbox를 가져온다.
    const chkbox1 = await wrapper.find('input[type="checkbox"][id=checkbox1]');
    const chkbox2 = await wrapper.find('input[type="checkbox"][id=checkbox2]');
    // 2.setValue 함수를 통해 값을 세팅해준다.(다만 checkbox는 인자에 아무것도 넣지 않으면, value에 세팅된 값으로 세팅된다.)
    await chkbox1.setValue();
    await chkbox2.setValue();
    //3.선택된 값이 정확하게 화면에 뿌려지고 있는지 확인한다.
    const selectLanguage = await wrapper.find('#select-language');
    expect(selectLanguage.text()).toBe('java,javascript');
  });
});
