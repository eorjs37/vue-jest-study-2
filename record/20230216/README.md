## 2023-02-16

### setValue

> v-model을 testing을 하기 위해서는 setValue를 통해서 테스트가 가능하다.

```javascript
describe('search component', () => {
  const title = '테스트제목';
  test('입력값과 비교한다.', async () => {
    const titleInput = wrapper.find('#title');
    await titleInput.setValue(title);
    expect(titleInput.element.value).toBe(title);
  });
});
```

### emits testing

> emits를 테스트 하기

```javascript
test('검색버튼 클릭 후 emit("searchClick")을 호출한다', async () => {
  //검색조건에 값을 세팅해준다.
  const titleInput = wrapper.find('#title');
  await titleInput.setValue(title);
  const contentsInput = wrapper.find('#contents');
  await contentsInput.setValue(contents);
  //버튼을 클릭하여 emit을 호출한다.
  wrapper.find('#search').trigger('click');
  //버튼을 클릭하여 emit을 호출하여 emits에 searchClick이 존재하는지 확인한다.
  expect(wrapper.emitted()).toHaveProperty('searchClick');

  const event = wrapper.emitted('searchClick');
  //emits을 호출하여 객체를 비교한다
  expect(...event[0]).toEqual({ title, contents });
});
```
