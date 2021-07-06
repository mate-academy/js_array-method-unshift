'use strict';

/**
 * Implement method unshift
 */

function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const resultArr = [...elements, ...this];

    for (let i = 0; i < resultArr.length; i++) {
      this[i] = resultArr[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
