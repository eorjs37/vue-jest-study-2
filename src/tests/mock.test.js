describe('mock 테스트를 진행합니다.', () => {
  test('jest.fn 을 생성하고 값을 비교합니다.', () => {
    const mockFn = jest.fn();
    //인자를 넘기는게 가능
    mockFn(1);
    mockFn({ x: 1 });

    //retrun을 받기 위해서는 mockReturnValue를 사용
    const result = mockFn.mockReturnValue('I am maxgun');
    expect(result()).toBe('I am maxgun');
  });

  test('비동기 통신', async () => {
    // 비동기 통신으로 사용할려면 mockResolvedValue 사용
    const mockFn = jest.fn();
    const result = mockFn.mockResolvedValue('I am maxgun');
    expect(await result()).toBe('I am maxgun');
  });

  test('즉석에서 함수 재구현', () => {
    //즉석 재구현 하기 위해서는 mockImplementation
    const mockFn = jest.fn();
    const result = mockFn.mockImplementation(name => `I am ${name}!`);

    expect(result('maxgun')).toBe('I am maxgun!');
  });

  test('spyOn 실습', () => {
    const calculator = {
      add: (a, b) => a + b,
    };

    const spyFn = jest.spyOn(calculator, 'add');
    const result = calculator.add(2, 3);

    expect(spyFn).toBeCalledTimes(1);
    expect(spyFn).toBeCalledWith(2, 3);
    expect(result).toBe(5);
  });
});
