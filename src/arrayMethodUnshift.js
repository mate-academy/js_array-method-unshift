'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const arrSize = elements.length;
    const sizeChgEl = arrSize + this.length;

    for (let j = 0; j < sizeChgEl; j++) {
      elements[j + arrSize] = this[j];
      this[j] = elements[j];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
