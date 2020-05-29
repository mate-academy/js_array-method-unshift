'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const newLength = this.length + elements.length;
    const originalLength = this.length;

    for (let i = 1; i <= newLength; i++) {
      this[newLength - i] = this[originalLength - i];
    }

    for (let j = 0; j < elements.length; j++) {
      this[j] = elements[j];
    }

    return newLength;
  };
}

module.exports = applyCustomUnshift;
