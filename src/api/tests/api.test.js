import axios from 'axios';
import { todoList } from '../index';
describe('api 테스트 실시', () => {
  test('todolist 호출 ', async () => {
    const spyGet = jest.spyOn(axios, 'get');
  });
});
