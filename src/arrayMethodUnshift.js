'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const arr = [...elements, ...this];

    for (let i = 0; i < arr.length; i++) {
      this[i] = arr[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
