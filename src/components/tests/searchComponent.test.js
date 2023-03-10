import { shallowMount } from '@vue/test-utils';
import SearchComponent from '@/components/SearchComponent.vue';
import router from '@/router/index';
/**
 * 1.검색조건은 제목과 내용으로 이루어진다.
 * 2.검색버튼을 누르면 emit을 통해 부모에게 데이터 전달한다
 */
let wrapper = null;
beforeEach(() => {
  //mount
  wrapper = shallowMount(SearchComponent, {
    global: {
      plugins: [router],
    },
  });
});

describe('search component', () => {
  const title = '테스트제목';
  const contents = '테스트 컨텐츠';
  test('title input 입력값 세팅후 input[id="title"]의 value값과 비교한다', async () => {
    const titleInput = wrapper.find('#title');
    await titleInput.setValue(title);

    expect(titleInput.element.value).toBe(title);
  });

  test('contents input 입력값 세팅후 input[id="contents"]의 value값과 비교한다', async () => {
    const contentsInput = wrapper.find('#contents');
    await contentsInput.setValue(contents);

    expect(contentsInput.element.value).toBe(contents);
  });

  test('검색버튼 클릭 후 emit("searchClick")을 호출한다', async () => {
    const titleInput = wrapper.find('#title');
    await titleInput.setValue(title);
    const contentsInput = wrapper.find('#contents');
    await contentsInput.setValue(contents);
    wrapper.find('#search').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('searchClick');

    const event = wrapper.emitted('searchClick');

    expect(...event[0]).toEqual({ title, contents });
  });

  test('추가 버튼을 클릭하면 add으로 이동한다.', async () => {
    wrapper.find('#addtodo').trigger('click');
    router.push('/add');
  });
});
