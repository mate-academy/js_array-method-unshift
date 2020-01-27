'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (!this.length) {
      return;
    }

    const arr = [...elements, ...this];

    for (let i = 0; i < arr.length; i++) {
      this[i] = arr[i];
    }

    return arr.length;
  };
}

module.exports = applyCustomUnshift;
