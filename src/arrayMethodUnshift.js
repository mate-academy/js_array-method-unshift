'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here
    const lengthElemnts = elements.length;

    if (lengthElemnts === 0) {
      return this.length;
    }

    for (let i = this.length - 1; i >= 0; i--) {
      this[i + lengthElemnts] = this[i];
    }

    for (let i = 0; i < lengthElemnts; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
