'use strict';

const applyCustomPop = require('./arrayMethodPop');

applyCustomPop();

test('`pop2` is added to [].__proto__', () => {
    expect(typeof [].pop2).toBe('function');
});

test('pop single item', () => {
  const source = [0, 1, 2, 3];
  const result = source.pop2();
  expect(source).toEqual([0, 1, 2]);
  expect(result).toBe(3);
});

test('pop from empty array', () => {
  const source = [];
  const result = source.pop2();
  expect(source).toEqual([]);
  expect(result).toBe(undefined);
});

test('pop ignores arguments', () => {
  const source = [0, 1, 2, 3];
  const result = source.pop2(2);
  expect(source).toEqual([0, 1, 2]);
  expect(result).toBe(3);
});
