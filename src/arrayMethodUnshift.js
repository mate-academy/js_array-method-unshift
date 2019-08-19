'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const inArrSize = elements.length;
    const sizeChangedElements = inArrSize + this.length;

    for (let i = 0; i < sizeChangedElements; i++) {
      elements[i + inArrSize] = this[i];
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
