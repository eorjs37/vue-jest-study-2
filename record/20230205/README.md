## 2023-02-05

## axios-mock 하는법

### 1. npm install jest-mock-axios --save-dev 설치

### 2. root < **mocks** < axios.js 를 만든다.

```javascript
import mockAxios from 'jest-mock-axios';
export default mockAxios;
```

### 3. 사용하고자 하는 모듈 import and test code 작성

```javascript
import mockAxios from 'jest-mock-axios';
import { todoList } from '@/api';

test('api call', async () => {
  let catchFn = jest.fn(),
    thenFn = jest.fn();
  todoList().then(thenFn).catch(catchFn);

  expect(mockAxios.get).toHaveBeenCalledWith('/api/todo');
  expect(1).toBe(1);
});
```
