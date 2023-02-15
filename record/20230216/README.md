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
