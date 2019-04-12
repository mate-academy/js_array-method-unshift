'use strict';

const applyCustomUnshift = require('./arrayMethodUnshift');

applyCustomUnshift();

test('unshift2 is added to [].__proto__', () => {
  expect([].unshift2)
    .toBeInstanceOf(Function);
});

test(`unshift2 doesn't call default unshift`, () => {
  expect([].unshift2.toString().includes('.unshift('))
    .toBe(false);
});

test('unshift single item', () => {
  const source = [0, 1, 2, 3];
  const result = source.unshift2(4);
  expect(source)
    .toEqual([4, 0, 1, 2, 3]);
  expect(result)
    .toBe(5);
});

test('unshift multiple items', () => {
  const source = [0, 1, 2, 3];
  const result = source.unshift2(4, 5, 6);
  expect(source)
    .toEqual([4, 5, 6, 0, 1, 2, 3]);
  expect(result)
    .toBe(7);
});

test('unshift no items', () => {
  const source = [0, 1, 2, 3];
  const result = source.unshift2();
  expect(source)
    .toEqual([0, 1, 2, 3]);
  expect(result)
    .toBe(4);
});

test('unshift an array', () => {
  const source = [0, 1, 2, 3];
  const result = source.unshift2([4, 5, 6]);
  expect(source)
    .toEqual([[4, 5, 6], 0, 1, 2, 3]);
  expect(result)
    .toBe(5);
});
