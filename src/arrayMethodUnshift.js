'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const mainArr = [...elements, ...this];

    for (let i = 0; i < mainArr.length; i++) {
      this[i] = mainArr[i];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
