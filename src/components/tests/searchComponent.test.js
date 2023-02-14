import { shallowMount } from '@vue/test-utils';
import SearchComponent from '@/components/SearchComponent.vue';
/**
 * 1.검색조건은 제목과 내용으로 이루어진다.
 * 2.검색버튼을 누르면 emit을 통해 부모에게 데이터 전달한다
 */
var wrapper = null;
beforeEach(() => {
  wrapper = shallowMount(SearchComponent);
});

describe('search component', () => {
  const title = '테스트제목';
  const contents = '테스트 컨텐츠';

  console.log(wrapper);

  test('title input 입력값과 ref으로 선언된 title과 값이 맞는지 비교한다', () => {});

  test('contents input 입력값과 ref으로 선언된 contents 값이 맞는지 비교한다', () => {});

  test('검색버튼을 통해 emit를 호출한다', () => {});
});
