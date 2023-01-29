import HelloWorld from '@/components/HelloWorld.vue';
import { mount } from '@vue/test-utils';
const hello = 'hello';

let wrapper = null;

beforeEach(() => {
  //mount
  wrapper = mount(HelloWorld);
});

describe('test 1', () => {
  test('Hello World Mount', () => {
    expect(wrapper).toBeTruthy();
  });

  test('첫 로드 msg 확인', () => {
    expect(wrapper.vm.msg).toBe('hello world');
  });

  test('renders a h1', () => {
    //  const wrapper = mount(HelloWorld);
    expect(wrapper.find('h1').text()).toEqual('hello world');
    expect(wrapper.find('h2').exists()).toBe(false);
  });
});
