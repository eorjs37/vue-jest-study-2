## 2023-03-19

### alert 가짜 함수 만들기

> 기본적으로 브라우저에는 window에는 alert 함수가 존재한다.  
> 하지만 jest를 이용할때는 브라우저에서 테스트를 할 수 없기때문에, window를 spyOn을 한 후  
> mockImplementation를 통해 가짜 함수를 구현한다.

```javascript
jest.spyOn(window, 'alert').mockImplementation(() => {});
describe('todowrite testing', () => {
  test('추가하기 버튼을 누리고 빈 값일 경우 alert을 띄운다', async () => {
    const submit = wrapper.find('.add');
    const input = wrapper.find('.title');
    await submit.trigger('click');
    if (!input.element.value) window.alert('값을 입력해주세요');

    expect(window.alert).toBeCalled();
  });
});
```
