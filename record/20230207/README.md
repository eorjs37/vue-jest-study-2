## 2023-02-07

## axios-mock 하는법2

> api를 호출하는 부분에서 mock을 하는방법

```javascript
import axios from 'axios';
import { todoList } from '@/api';

jest.mock('@/api');

beforeEach(() => {
  todoList.mockClear();
});

describe('axios api call', () => {
  test('호출여부 확인 ', async () => {
    expect(todoList).toBeCalledTimes(1);
  });
});
```
