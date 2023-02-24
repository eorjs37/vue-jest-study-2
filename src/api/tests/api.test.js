import { _axios } from '@/utils/axios';
import { todoList } from '../index';
describe('todoList api 실시', () => {
  test('todolist 호출 및 결과 비교하기', async () => {
    _axios.get = jest.fn().mockResolvedValue([
      { Idx: 1, ToDoItem: 'css 공부', createdAt: '2023-02-01T15:00:00.000Z', updatedAt: '2023-02-01T15:00:00.000Z' },
      { Idx: 2, ToDoItem: 'Java 공부', createdAt: '2023-02-01T15:00:00.000Z', updatedAt: '2023-02-01T15:00:00.000Z' },
      { Idx: 3, ToDoItem: 'Javascript 공부', createdAt: '2023-02-01T15:00:00.000Z', updatedAt: '2023-02-01T15:00:00.000Z' },
      { Idx: 4, ToDoItem: 'Spring 공부', createdAt: '2023-02-01T15:00:00.000Z', updatedAt: '2023-02-01T15:00:00.000Z' },
      { Idx: 5, ToDoItem: 'TypeScript 공부', createdAt: '2023-02-01T15:00:00.000Z', updatedAt: '2023-02-01T15:00:00.000Z' },
    ]);
    const result = await todoList();

    expect(result).toEqual([
      { Idx: 1, ToDoItem: 'css 공부', createdAt: '2023-02-01T15:00:00.000Z', updatedAt: '2023-02-01T15:00:00.000Z' },
      { Idx: 2, ToDoItem: 'Java 공부', createdAt: '2023-02-01T15:00:00.000Z', updatedAt: '2023-02-01T15:00:00.000Z' },
      { Idx: 3, ToDoItem: 'Javascript 공부', createdAt: '2023-02-01T15:00:00.000Z', updatedAt: '2023-02-01T15:00:00.000Z' },
      { Idx: 4, ToDoItem: 'Spring 공부', createdAt: '2023-02-01T15:00:00.000Z', updatedAt: '2023-02-01T15:00:00.000Z' },
      { Idx: 5, ToDoItem: 'TypeScript 공부', createdAt: '2023-02-01T15:00:00.000Z', updatedAt: '2023-02-01T15:00:00.000Z' },
    ]);
  });
});
