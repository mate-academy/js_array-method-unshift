'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const newArr = [...elements, ...this];

    for (let i = 0; i < newArr.length; i++) {
      this[i] = newArr[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
