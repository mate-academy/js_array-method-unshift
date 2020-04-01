'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here
    const arr = this;

    for (let i = elements.length; i > 0; i--) {
      const item = elements[i - 1];

      for (let j = arr.length; j > 0; j--) {
        arr[j] = arr[j - 1];
      }

      arr[0] = item;
    }

    return arr.length;
  };
}

module.exports = applyCustomUnshift;
