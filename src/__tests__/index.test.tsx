const add = jest.fn((a, b) => a + b);

describe.skip('testing', () => {
  it('fake Test', () => {
    expect.assertions(3);

    expect(add(2, 2)).toBe(4);
    // expect(add()).toBe(4);

    expect(add).toHaveBeenCalledTimes(1);
    expect(add).toHaveBeenCalledWith(1, 2);
  });
});
