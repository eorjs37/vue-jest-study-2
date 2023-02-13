let mockFn = null;
beforeEach(() => {
  mockFn = jest.fn();
});

describe('todolist2 테스트', () => {
  test('should ', async () => {
    mockFn.mockReturnValue('I am a mock!');

    expect(1).toBe(1);
  });

  test('비동기 통신', async () => {
    mockFn.mockResolvedValue('I will be a mock!');
    mockFn().then(result => {
      console.log(result);
    });
  });
});
