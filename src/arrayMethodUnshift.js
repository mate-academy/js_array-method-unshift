'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const unsortedArr = [...elements, ...this];

    for (let i = 0; i < unsortedArr.length; i++) {
      this[i] = unsortedArr[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
