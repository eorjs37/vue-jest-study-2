## 2023-02-13

### mocking

> 해당 코드에서 의존하는 부분을 가짜로 만든다. 실제 네트워크와 관련된 부분이 있을경우 api를 호출 할 수 도 있기 때문에 mocking을 사용한다.

### jest.fn

```javascript
const mockFn = jest.fn();
```

### jest.fn 인자

```javascript
const mockFn = jest.fn();
mockFn('a');
```

### jest.fn returnValue

```javascript
mockFn.mockReturnValue('I am a mock!');
```

### jest.fn spyOn()

> mocking한 함수가 호출횟수 및 호출 여부를 알기위해 사용된다
