## 2023-02-24

## mock

> 실제 객체인척 하는 가짜 객체를 제공해주는 것. 외부 라이브러리나 실제 api를 사용하는 경우 성능에 이슈가 있을 수 있음.

## fn

> 가짜 함수를 생성해주는것.

```javascript
const mockFn = jest.fn();

//인자를 넘기는게 가능
mockFn(1);
mockFn({ x: 1 });

//retrun을 받기 위해서는 mockReturnValue를 사용
const result = mockFn.mockReturnValue('I am maxgun');
expect(result()).toBe('I am maxgun');

// 비동기 통신으로 사용할려면 mockResolvedValue 사용
const mockFn = jest.fn();
const result = mockFn.mockResolvedValue('I am maxgun');
expect(await result()).toBe('I am maxgun');

//즉석 재구현 하기 위해서는 mockImplementation
const mockFn = jest.fn();
const result = mockFn.mockImplementation(name => `I am ${name}!`);

expect(result('maxgun')).toBe('I am maxgun!');
```

## spyOn

> 함수를 가짜라고 만들지 않고, 단순히 몇번 호출되었는지 감시하고자 할때 사용되고는 한다.

```javascript
test('spyOn 실습', () => {
  const calculator = {
    add: (a, b) => a + b,
  };

  //함수를 감시하고자 한다.
  const spyFn = jest.spyOn(calculator, 'add');
  const result = calculator.add(2, 3);

  expect(spyFn).toBeCalledTimes(1);
  expect(spyFn).toBeCalledWith(2, 3);
  expect(result).toBe(5);
});
```

## api error 발생

```javascript
//api 폴더 import
import * as api from '@/api';

//todolist mock
jest.mock('@/api', () => {
  return {
    todoList: jest.fn().mockResolvedValue({
      data: [
        {
          Idx: 1,
          ToDoItem: 'css 공부',
          createdAt: '2023-02-01T15:00:00.000Z',
          updatedAt: '2023-02-01T15:00:00.000Z',
        },
        {
          Idx: 2,
          ToDoItem: 'Java 공부',
          createdAt: '2023-02-01T15:00:00.000Z',
          updatedAt: '2023-02-01T15:00:00.000Z',
        },
      ],
    }),
  };
});

//beforeEach
let wrapper = null;

beforeEach(() => {
  wrapper = mount(ToDoListView);
});

//todolist api error 발생
test('todolist api 호출 후 에러 발생', async () => {
  jest.spyOn(api, 'todoList').mockRejectedValue(new Error(`에러가 발생하였습니다.`));
  api.todoList().catch(async error => {
    //에러 진행중
    expect(error.message).toBe(`에러가 발생하였습니다.`);
    wrapper.vm.todolist = [];
    expect(wrapper.find('.no-list').text()).toBe('리스트가 존재하지 않습니다.');
  });
});
```

## 부모 컴퍼넌트에서 자식에게 보낸 데이터 확인

```javascript

```

## 부모 컴퍼넌트에서 자식에게 보냈을때 자식 컴퍼넌트 확인

```javascript

```
