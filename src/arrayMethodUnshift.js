'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const arr = this;

    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i + elements.length] = arr[i];
    };

    let counter = 0;

    for (const item of elements) {
      arr[counter] = item;
      counter++;
    }

    return arr.length;
  };
}

module.exports = applyCustomUnshift;
